/**
 * Sakhaa push notification sender
 * Run via GitHub Actions on a cron schedule.
 *
 * Usage: node send-notifications.js --type <morning|midday-checkin|midday-nudge|evening>
 *
 * Requires env var: FIREBASE_SERVICE_ACCOUNT (JSON string of service account key)
 */

const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const { getMessaging } = require('firebase-admin/messaging');

// ─── INIT ──────────────────────────────────────────────────────────────────

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
initializeApp({ credential: cert(serviceAccount) });

const db = getFirestore();
const fcm = getMessaging();

const type = (() => {
  const idx = process.argv.indexOf('--type');
  return idx !== -1 ? process.argv[idx + 1] : null;
})();

if (!type) {
  console.error('Missing --type argument');
  process.exit(1);
}

// ─── HELPERS ───────────────────────────────────────────────────────────────

function todayIST() {
  const now = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

async function getEligibleUsers() {
  // Flat top-level collection — no composite index needed
  const snap = await db.collection('fcm_tokens').get();
  const users = [];
  for (const doc of snap.docs) {
    const data = doc.data();
    if (!data.fcmToken || data.notifEnabled === false) continue;
    if (data.restDayUntil) {
      const until = data.restDayUntil.toDate ? data.restDayUntil.toDate() : new Date(data.restDayUntil);
      if (until > new Date()) continue;
    }
    users.push({ uid: doc.id, name: data.name || 'Friend', fcmToken: data.fcmToken });
  }
  return users;
}

async function getGateToday(uid) {
  const today = todayIST();
  const snap = await db.doc(`users/${uid}/gate_session/today`).get();
  if (!snap.exists) return null;
  const data = snap.data();
  return data.date === today ? data : null;
}

async function sendToUser(user, title, body, screen, tag) {
  try {
    await fcm.send({
      token: user.fcmToken,
      notification: { title, body },
      data: { screen: screen || 'home', tag: tag || 'sakhaa' },
      webpush: {
        headers: { Urgency: 'normal' },
        notification: {
          icon: '/icons/icon-192.png',
          badge: '/icons/icon-192.png',
          requireInteraction: false
        }
      }
    });
    console.log(`Sent [${tag}] to ${user.uid}`);
  } catch (err) {
    if (
      err.code === 'messaging/registration-token-not-registered' ||
      err.code === 'messaging/invalid-registration-token'
    ) {
      await db.doc(`users/${user.uid}/profile/data`).update({ fcmToken: '' });
      console.log(`Cleared stale token for ${user.uid}`);
    } else {
      console.warn(`Failed for ${user.uid}:`, err.message);
    }
  }
}

// ─── NOTIFICATION COPY ─────────────────────────────────────────────────────

function morningCopy(name) {
  return { title: `Good morning, ${name} 🌅`, body: 'How are you feeling today? Your sacred friend is here.', screen: 'gate' };
}

function middayCheckinCopy(name, stressSource) {
  const src = stressSource || 'what you shared';
  return {
    title: `Checking in, ${name}`,
    body: `You were carrying a lot this morning — ${src} can ease through the day. How are you now?`,
    screen: 'saarthi'
  };
}

function middayNudgeCopy(name) {
  return { title: `A gentle nudge, ${name}`, body: 'Did you get to your intention this morning? Even one small step counts.', screen: 'home' };
}

function eveningCopy(name, gate) {
  if (!gate) return { title: `Evening, ${name}`, body: 'Take 5 minutes to close the day with intention.', screen: 'journey' };
  if (gate.mood === 'happy') return { title: `You had a good day, ${name} ✨`, body: "Let's close it well — 5 minutes of reflection.", screen: 'journey' };
  if (gate.mood === 'unhappy') return { title: `${name}, I've been thinking of you`, body: 'Today was heavy. I\'m here to help you close it gently.', screen: 'journal' };
  return { title: `Steady day, ${name}`, body: "Let's see what you built today — reflection time.", screen: 'journey' };
}

// ─── HANDLERS ──────────────────────────────────────────────────────────────

async function runMorning() {
  const users = await getEligibleUsers();
  let sent = 0;
  await Promise.all(users.map(async user => {
    const gate = await getGateToday(user.uid);
    if (gate) return; // already answered today
    const copy = morningCopy(user.name);
    await sendToUser(user, copy.title, copy.body, copy.screen, 'morning-gate');
    sent++;
  }));
  console.log(`Morning gate: sent to ${sent}/${users.length} users`);
}

async function runMiddayCheckin() {
  const users = await getEligibleUsers();
  let sent = 0;
  await Promise.all(users.map(async user => {
    const gate = await getGateToday(user.uid);
    if (!gate || gate.mood !== 'unhappy') return;
    const copy = middayCheckinCopy(user.name, gate.stressSource);
    await sendToUser(user, copy.title, copy.body, copy.screen, 'midday-checkin');
    sent++;
  }));
  console.log(`Midday check-in: sent to ${sent}/${users.length} users`);
}

async function runMiddayNudge() {
  const users = await getEligibleUsers();
  let sent = 0;
  await Promise.all(users.map(async user => {
    const gate = await getGateToday(user.uid);
    if (!gate || gate.mood !== 'neutral') return;
    const copy = middayNudgeCopy(user.name);
    await sendToUser(user, copy.title, copy.body, copy.screen, 'midday-nudge');
    sent++;
  }));
  console.log(`Midday nudge: sent to ${sent}/${users.length} users`);
}

async function runEvening() {
  const users = await getEligibleUsers();
  let sent = 0;
  await Promise.all(users.map(async user => {
    const journalSnap = await db.doc(`users/${user.uid}/journal_entries/${todayIST()}`).get();
    if (journalSnap.exists) return; // already reflected today
    const gate = await getGateToday(user.uid);
    const copy = eveningCopy(user.name, gate);
    await sendToUser(user, copy.title, copy.body, copy.screen, 'evening-reflection');
    sent++;
  }));
  console.log(`Evening reflection: sent to ${sent}/${users.length} users`);
}

// ─── MAIN ──────────────────────────────────────────────────────────────────

const handlers = {
  'morning': runMorning,
  'midday-checkin': runMiddayCheckin,
  'midday-nudge': runMiddayNudge,
  'evening': runEvening
};

if (!handlers[type]) {
  console.error(`Unknown type: ${type}. Use one of: ${Object.keys(handlers).join(', ')}`);
  process.exit(1);
}

handlers[type]()
  .then(() => { console.log('Done.'); process.exit(0); })
  .catch(err => { console.error('Fatal:', err); process.exit(1); });
