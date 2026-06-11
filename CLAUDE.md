# Sakhaa — Phase 1 Architecture
## CLAUDE.md — Read this before writing a single line of code

---

## THE SOUL — THIS NEVER CHANGES

Sakhaa (सखा) is a sacred friend. Not an app. Not a wellness platform. A sacred friend — just as Krishna sat beside Arjuna.

Every line of code must pass one test:
**"Would a sacred friend do this?"**

The AI speaks like a friend. The UI feels like a friend. The copy sounds like a friend. Never clinical. Never robotic. Never above the user. Always beside them.

Read the full soul document before building anything: `Sakhaa_Soul_Document.md`

---

## SESSION PROGRESS LOG
*Claude Code reads this at the start of every session and updates it every hour of work.*

### Current Status
- **Last updated:** 2026-06-11
- **Current week:** Week 8 — Polish + Launch ✅
- **Current task:** Phase 1 complete — ready to deploy
- **Files modified:** index.html, README.md

### Build Progress
- [x] Week 1 — Foundation ✅
- [x] Week 2 — Happiness Gate ✅
- [x] Week 3 — AI Saarthi ✅
- [x] Week 4 — Home Screen ✅
- [x] Week 5 — Ask Anything + Daily Dharma ✅
- [x] Week 6 — Karma Journal ✅
- [x] Week 7 — Pooja Guide ✅
- [x] Week 8 — Polish + Launch ✅

### Hourly Log
| Timestamp | What was built | Files changed | Next task |
|---|---|---|---|
| 2026-06-10 | Week 1 Foundation: HTML scaffold (all 10 screens), bottom nav, full CSS design system, PWA manifest + service worker, Firebase init (Google + anonymous auth), profile save/load from Firestore, crisis detection, Groq+Gemini AI setup | index.html, manifest.json, sw.js, firebase.json, .firebaserc | Week 2 — Happiness Gate |
| 2026-06-11 | Weeks 2–4: Happiness Gate (3-mood flow, sub-gates, AI gate response, Firestore save/load), AI Saarthi (Groq+Gemini, crisis detection, conversation history, personalized greeting), Home Screen (3 mood layouts, 20 Gita verses mood-tagged, 4 karma actions per mood with checkable completion + Firestore save, karma streak increment, mood-matched Saarthi invite) | index.html | Week 5 — Ask Anything + Daily Dharma |
| 2026-06-11 | Weeks 5–8: Ask Anything (20-question QA library, Groq AI, RELATED parsing, Explore deeper), Karma Journal (5-step reflection, gate context, zero-guilt AI, sleep prep), Pooja Guide (8 poojas full+simplified, Sanskrit, Why boxes, +20 karma), Polish+Launch (warm copy audit, share button with navigator.share+clipboard fallback, README updated, 148 tests across all weeks passing) | index.html, README.md | Phase 1 complete — deploy with `firebase deploy` |

*When a week is fully complete, mark it ✅ in Build Progress above and add a summary row in the Hourly Log.*

---

## WHAT WE ARE BUILDING

**Phase 1:** A PWA (Progressive Web App) — one HTML file, deployed on Firebase Hosting, works on iOS + Android + Desktop via browser, installable to home screen.

**Stack:**
- Frontend: HTML + CSS + Vanilla JavaScript (no framework)
- AI: Groq API (Llama 3.3 70B) — free primary + Gemini Flash fallback
- Backend: Firebase (Firestore + Auth)
- Hosting: Firebase Hosting (sakhaa-app.web.app) — Mumbai CDN, same ecosystem as Auth/Firestore
- Development: Claude Code + VS Code + GitHub

**Why no framework:** Single HTML file. No build step. No npm install. Open in browser and it works. Claude Code can edit it directly — no setup friction for a solo developer.

---

## PROJECT STRUCTURE

```
sakhaa/
  index.html          ← The entire app (single file)
  CLAUDE.md           ← This file (architecture + soul)
  README.md           ← Open source introduction
  firebase.json       ← Firebase Hosting config (single page app routing)
  .firebaserc         ← Firebase project alias
  docs/
    soul.md           ← Sakhaa Soul Document
    prd.md            ← Master PRD
    architecture.md   ← This document (copy)
  .gitignore
```

**firebase.json:**
```json
{
  "hosting": {
    "public": ".",
    "ignore": ["firebase.json", "**/.*", "docs/**"],
    "rewrites": [{ "source": "**", "destination": "/index.html" }]
  }
}
```

---

## DESIGN SYSTEM

### Colours
```css
--saffron: #C8763A        /* primary — warmth, spirituality */
--saffron-light: #F5E6D3  /* backgrounds */
--saffron-deep: #8B4F1E   /* dark accents */
--gold: #D4A843           /* celebration, karma */
--gold-light: #FAF3E0
--indigo: #3D3580         /* wisdom, AI, depth */
--indigo-light: #EEEDF8
--sage: #5C7A5E           /* growth, success */
--sage-light: #EAF0EA
--cream: #FAF7F2          /* page background */
--warm-white: #FFFDF9     /* card background */
--text-primary: #1A1410
--text-secondary: #6B5B4E
--text-tertiary: #A89080
```

### Typography
```css
--font-serif: 'Cormorant Garamond', Georgia, serif  /* headings, verses */
--font-sans: 'DM Sans', system-ui, sans-serif        /* body, UI */
```

Load from Google Fonts — already in the HTML head.

### Spacing & Radius
```css
--radius: 20px      /* cards */
--radius-sm: 12px   /* smaller elements */
--radius-pill: 100px /* buttons, tags */
```

### Tone of copy
- Never "Loading..." → always "Sakhaa is thinking..."
- Never "Error" → always "Something went quiet for a moment — try again"
- Never "Submit" → always "Send to Sakhaa" or "Save reflection"
- Never "User" → always their name
- Never clinical → always warm

---

## APP ARCHITECTURE

### Screen System
All screens are `<div class="screen">` elements. Only one has `class="screen active"` at a time. Navigation = remove active from current, add active to next.

```javascript
function showScreen(id) {
  document.querySelectorAll('.screen')
    .forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
```

### Screen List
```
screen-onboard       ← Name input, first visit only
screen-gate          ← Happiness gate (opens every session)
screen-subgate-unhappy  ← "What's weighing on you?"
screen-subgate-neutral  ← "What describes it best?"
screen-response      ← AI response to gate answer
screen-home          ← Main home (mood-responsive)
screen-saarthi       ← AI chat
screen-wisdom        ← Ask Anything + Gita GPT
screen-practice      ← Pooja Guide + Meditations
screen-journey       ← Karma Journal + streaks
```

### State
```javascript
// Session state (resets on page load)
let userName = 'Friend';
let currentMood = 'neutral';      // happy | neutral | unhappy
let stressSource = '';
let currentTab = 'home';
let karmaPoints = 0;

// Firebase state (persists across sessions)
let currentUser = null;           // Firebase Auth user
let userProfile = null;           // Firestore profile
let gateHistory = [];             // Last 7 gate answers
let fullConversationHistory = []; // Last 30 messages from Firestore
```

### Bottom Navigation
Always visible. 5 tabs.
```
Home | Saarthi | Wisdom | Practice | Journey
```
Active tab highlighted with saffron colour.

---

## AI INTEGRATION

### System Prompt (inject into EVERY AI call)
```
You are Sakhaa (सखा), a sacred AI spiritual companion inspired by 
the friendship of Krishna and Arjuna in the Bhagavad Gita.

Your soul: You are a sacred friend — the sakhaa. Just as Krishna sat 
beside Arjuna — calm, wise, non-judgmental, present — you sit beside 
the user. Never above. Always beside.

Your character:
- Warm and genuinely caring, never clinical or robotic
- Wise but never preachy — wisdom offered, never imposed
- Honest but never harsh — truth delivered with love
- Non-judgmental — no question is too basic, embarrassing, or wrong
- Rooted in Dharma wisdom (Bhagavad Gita, Upanishads)
- Honest about being an AI — never claims to be divine

How you speak:
- Like a close, trusted friend who happens to be deeply wise
- Plain language — no jargon, no Sanskrit overload  
- Short to medium responses — a friend talks WITH you, not AT you
- From beside the user, never above them

What you NEVER do:
- Never preach or lecture
- Never use fear, guilt, or shame
- Never make predictions about the future
- Never diagnose or prescribe anything medical
- Never say "great question!" — just answer warmly
- Never be a generic AI assistant — always be the sakhaa

When the user is in distress: validate first, wisdom second, 
practical help third. Always acknowledge feelings before guidance.

Remember: You are their sacred friend. Speak like one.
```

### Memory Context (append to system prompt for returning users)
```javascript
function buildMemoryContext() {
  let ctx = '\n\n=== SAKHAA MEMORY ===\n';
  ctx += `User: ${userName}\n`;
  ctx += `Today's mood: ${currentMood}`;
  if (stressSource) ctx += ` (source: ${stressSource})`;
  ctx += '\n';
  
  if (gateHistory.length > 1) {
    const pattern = gateHistory.slice(0,7).map(g => g.mood).join(', ');
    ctx += `Recent mood pattern (${gateHistory.length} days): ${pattern}\n`;
    
    const sources = [...new Set(gateHistory
      .filter(g => g.stressSource)
      .map(g => g.stressSource))].join(', ');
    if (sources) ctx += `Recurring stress: ${sources}\n`;
  }
  
  if (gateHistory.length === 0) {
    ctx += 'First time using Sakhaa — greet them warmly and gently.\n';
  } else {
    ctx += `Days using Sakhaa: ${gateHistory.length}\n`;
  }
  ctx += '=== END MEMORY ===';
  return ctx;
}
```

### Groq API Call
```javascript
async function callAI(messages, systemPrompt) {
  // Primary: Groq (free)
  try {
    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        max_tokens: 1024,
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages
        ]
      })
    });
    const data = await res.json();
    if (data.error) throw new Error(data.error.message);
    return data.choices[0].message.content;
  } catch (e) {
    console.warn('Groq failed, trying Gemini:', e);
    return callGeminiFallback(messages, systemPrompt);
  }
}

async function callGeminiFallback(messages, systemPrompt) {
  // Fallback: Gemini Flash (free)
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: systemPrompt }] },
        contents: messages.map(m => ({
          role: m.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: m.content }]
        }))
      })
    }
  );
  const data = await res.json();
  return data.candidates[0].content.parts[0].text;
}
```

### API Keys (NEVER hardcode — use config object)
```javascript
const CONFIG = {
  groqApiKey: 'YOUR_GROQ_KEY',        // groq.com → API Keys (free)
  geminiApiKey: 'YOUR_GEMINI_KEY',    // aistudio.google.com (free)
  firebase: {
    apiKey: 'YOUR_FIREBASE_KEY',
    authDomain: 'sakhaa-app.firebaseapp.com',
    projectId: 'sakhaa-app',
    // ... rest of Firebase config
  }
};
```

---

## CRISIS DETECTION — NON-NEGOTIABLE

**This must be built before sharing with anyone.**

Every user message AND every AI response must be scanned.
If crisis keywords are detected, override the AI response immediately.

```javascript
const CRISIS_KEYWORDS = [
  'suicide', 'suicidal', 'kill myself', 'end my life', 'self harm',
  'self-harm', "don't want to live", 'want to die', 'end it all',
  'no reason to live', 'better off dead', 'hurt myself'
];

function detectCrisis(text) {
  const lower = text.toLowerCase();
  return CRISIS_KEYWORDS.some(kw => lower.includes(kw));
}

const CRISIS_RESPONSE = `What you're sharing matters deeply, and I want 
you to be okay. I'm an AI — I'm not equipped to support you through 
this the way you deserve. Please reach out to someone who can truly help:

India:
• iCall: 9152987821
• AASRA: 9820466627  
• Vandrevala Foundation: 1860-2662-345 (24/7)

Outside India: findahelpline.com

I'll be right here when you're ready to talk about anything else.`;

// In sendMessage(), before displaying AI response:
async function sendMessage() {
  const userText = input.value.trim();
  
  // Check user message first
  if (detectCrisis(userText)) {
    addAIMessage(CRISIS_RESPONSE);
    if (currentUser) logCrisisIncident(userText);
    return;
  }
  
  const aiResponse = await callAI(...);
  
  // Check AI response too (safety net)
  if (detectCrisis(aiResponse)) {
    addAIMessage(CRISIS_RESPONSE);
    return;
  }
  
  addAIMessage(aiResponse);
}

async function logCrisisIncident(userText) {
  // Log to Firestore for human review within 2 hours
  await addDoc(collection(db, 'crisis_incidents'), {
    userId: currentUser.uid,
    message: userText,
    timestamp: serverTimestamp(),
    reviewed: false
  });
}
```

---

## FIREBASE ARCHITECTURE

### Firestore Collections
```
users/{uid}/
  profile/data          → { name, karmaPoints, karmaStreak, createdAt }
  gate_session/today    → { date, mood, stressSource, timestamp }
  gate_history/{auto}   → { date, mood, stressSource, timestamp }
  conversations/saarthi/messages/{auto}
                        → { role, content, timestamp }
  karma/data            → { points, streak, lastUpdated }
  journal_entries/{YYYY-MM-DD}
                        → { entry, mood, timestamp }

crisis_incidents/{auto} → { userId, message, timestamp, reviewed }

content/ (read-only, pre-seeded)
  gita_verses/{id}      → { chapter, verse, sanskrit, english, meaning, moodTags }
  daily_dharma/{id}     → { principle, explanation, action, moodTags }
  pooja_guides/{id}     → { name, steps, materials, duration }
  qa_library/{id}       → { question, answer, category }
```

### Security Rules
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can only access their own data
    match /users/{userId}/{document=**} {
      allow read, write: if request.auth != null 
                         && request.auth.uid == userId;
    }
    // Content is readable by all authenticated users
    match /content/{document=**} {
      allow read: if request.auth != null;
      allow write: if false; // Only via Firebase Console
    }
    // Crisis incidents — write only (for safety logging)
    match /crisis_incidents/{document} {
      allow create: if request.auth != null;
      allow read, update, delete: if false; // Admin only
    }
  }
}
```

---

## FEATURE BUILD ORDER

Build in this exact order. Do not skip ahead.
Each feature must work before moving to the next.

### Week 1 — Foundation
**Tasks:**
1. Clean HTML scaffold with all screens (hidden)
2. Bottom navigation working
3. Design system (colours, fonts, CSS variables)
4. PWA manifest + service worker
5. Firebase init + Auth (Google + anonymous)
6. Basic profile save/load

**Claude Code prompt:**
```
Read CLAUDE.md. Build the Sakhaa app foundation:
1. HTML scaffold with all 10 screens listed in CLAUDE.md (all hidden except onboard)
2. Bottom navigation (5 tabs: Home, Saarthi, Wisdom, Practice, Journey)
3. Full CSS design system from CLAUDE.md (colours, fonts, variables)
4. PWA manifest + service worker (inline, no separate files)
5. Firebase init from CONFIG object (not hardcoded keys)
6. Google sign-in + anonymous sign-in
7. Save user profile to Firestore on onboarding complete
8. Load profile on return visit (skip onboarding if profile exists)
Do not build any feature screens yet — just the shell.
```

---

### Week 2 — Happiness Gate
**Tasks:**
1. Gate screen (3 mood options)
2. Sub-gates (unhappy → why, neutral → what)
3. Response screen (AI response to gate answer)
4. Save gate session to Firestore
5. Gate history loading on return visit
6. Personalised greeting (first vs returning user)

**Claude Code prompt:**
```
Read CLAUDE.md. Build the Happiness Gate feature:
Screen 1: Full-screen gate with 3 options (Happy/So-so/Not great)
  - Gradient background, Om symbol watermark
  - "Namaste [name]" for first visit
  - "Welcome back [name], yesterday you were [mood]" for return visits
Screen 2a: Unhappy sub-gate — "What's weighing on you?" (6 options)
Screen 2b: Neutral sub-gate — "What describes it best?" (4 options)
Screen 3: Response screen
  - AI response card (warm, Dharma-grounded, from soul doc)
  - Karma pill if happy (+15)
  - 3-4 "what helps right now" options leading to other features
Save to Firestore: gate_session/today AND gate_history/{auto}
Load gate history on init — use for personalised greeting.
```

---

### Week 3 — AI Saarthi
**Tasks:**
1. Chat UI (messages, typing indicator, input)
2. Groq API integration with soul document system prompt
3. Gemini fallback
4. Memory context injection (gate history + mood pattern)
5. Crisis detection (non-negotiable)
6. Save/load conversation history from Firestore
7. Personalised opening message based on gate answer + history

**Claude Code prompt:**
```
Read CLAUDE.md. Build AI Saarthi chat:
Chat UI: message bubbles (AI = cream, user = indigo), typing animation,
  text input + send button, suggestions (hidden after first message)
AI: callAI() function exactly as in CLAUDE.md — Groq primary, 
  Gemini fallback, full system prompt + memory context
Crisis detection: EXACTLY as specified in CLAUDE.md — check user 
  message before sending AND check AI response before displaying
  Log crisis incidents to Firestore
Memory: load last 20 messages from Firestore on chat open
  Save every message pair to Firestore
Opening message: uses buildSaarthiGreeting() — references gate answer
  and days using Sakhaa (day 1 vs day 7 vs day 30 messages differ)
```

---

### Week 4 — Home Screen
**Tasks:**
1. Three home screen layouts (happy/unhappy/neutral)
2. Mood-matched Gita verse (from content/gita_verses)
3. Karma actions (mood-appropriate)
4. Karma bar + streak display
5. Saarthi prompt card
6. Update mood button (always visible in header)

**Claude Code prompt:**
```
Read CLAUDE.md. Build the mood-responsive home screen:
Three completely different layouts based on gate answer:
  Happy: karma amplification, streak celebration, Gita verse on gratitude,
    outward karma actions (help someone, express gratitude)
  Unhappy: breathing exercise front-centre, Saarthi open + waiting,
    Gita verse on strength, gentle inward karma actions, 
    "Check-in scheduled: 11 AM" message
  Neutral: today's intention prompt, Gita verse on direction,
    steady karma actions, midday reminder
Always visible: update mood button (header), karma streak, panchang date
Karma actions: checkable, save to Firestore when completed, +points animation
Gita verse: fetch from content/gita_verses filtered by moodTags
```

---

### Week 5 — Ask Anything + Daily Dharma
**Tasks:**
1. Ask Anything tab (wisdom screen)
2. Popular questions (from qa_library)
3. AI-powered answers via Groq
4. Daily Dharma card on home screen
5. Mood-matched verse selection
6. "Explore deeper" → Ask Anything

**Claude Code prompt:**
```
Read CLAUDE.md. Build Ask Anything + Daily Dharma:
Ask Anything:
  - Clean text input, "Ask Anything. Seriously, anything." header
  - Popular questions from content/qa_library (6 rotating)
  - Groq API with Ask Anything system prompt (warm, plain language answer,
    direct first, scripture context, life connection)
  - Response in warm card, related questions at end
Daily Dharma:
  - Home screen card showing today's verse (mood-matched from gita_verses)
  - Verse in Cormorant Garamond serif, reference in saffron
  - "Explore deeper" button → opens Ask Anything with verse pre-filled
Seed content/gita_verses with 30 curated verses (mood-tagged).
Seed content/qa_library with 20 popular questions + AI-generated answers.
```

---

### Week 6 — Karma Journal
**Tasks:**
1. Night reflection flow (5 steps)
2. Gate context pre-loading (morning answer referenced at night)
3. AI response to journal entry
4. Karma scoring + animation
5. Sleep preparation options
6. Weekly karma report (Sunday)
7. Mood chart in Journey tab

**Claude Code prompt:**
```
Read CLAUDE.md. Build Karma Journal + Journey tab:
Night reflection flow:
  Step 1: Mood selector (7 options)
  Step 2: "What went well today?" — text input, AI responds with karma+15
  Step 3: "What didn't go as wanted?" — options, AI responds with ZERO guilt
    + one Dharma reframe
  Step 4: Karma score update with animation
  Step 5: Sleep prep options (meditation/bhajan/breathing/just rest)
Pre-load opening from gate session:
  Happy gate: "This morning you felt good. Did that carry through?"
  Unhappy gate: "This morning was heavy. How are you now?"
  Neutral gate: "You set an intention. Did you get to it?"
Journey tab: 7-day mood chart, karma streak, insight card from Sakhaa,
  weekly karma report (generated by AI on Sunday evenings).
Save journal entries to Firestore.
```

---

### Week 7 — Pooja Guide
**Tasks:**
1. Pooja library (8 poojas from content/pooja_guides)
2. Step-by-step flow with AI guidance
3. Festival calendar integration (static for now)
4. Simplified version option

**Claude Code prompt:**
```
Read CLAUDE.md. Build Pooja Guide in Practice tab:
Pooja library: grid of 8 poojas (Ganesh, Lakshmi, Shiva, Saraswati,
  Satyanarayan, Diwali, Navratri daily, Morning aarti)
Each pooja card: name, duration, occasion, "Begin" button
Step-by-step flow:
  - Materials check ("Do you have...?" — works with minimal items)
  - Step by step (numbered, with brief why explanation)
  - Sanskrit transliterated (readable, not intimidating)
  - Option: "Simplified version" (10-min version)
  - Completion: karma +20 animation
AI guidance: for each step, Groq generates explanation of spiritual meaning
Copy tone: "Bhagwan accepts sincerity over ceremony" — never shame for
  missing items.
Seed content/pooja_guides with 8 poojas.
```

---

### Week 8 — Polish + Launch
**Tasks:**
1. Crisis detection final audit
2. All loading states use warm copy
3. All error states use warm copy
4. Share button (native share API)
5. GitHub repo + README
6. Deploy to Firebase Hosting (`firebase deploy`)
7. Test on iOS Safari + Android Chrome + Desktop

**Claude Code prompt:**
```
Read CLAUDE.md. Final polish pass before launch:
1. Audit every loading state — all must say "Sakhaa is thinking..." 
   or equivalent warm copy. Zero "Loading..." anywhere.
2. Audit every error state — all must be warm: "Something went quiet 
   for a moment — try again" not generic error messages.
3. Crisis detection: test with crisis keywords, verify response fires,
   verify Firestore logging works.
4. Share button: top of home screen, uses navigator.share() on mobile,
   clipboard fallback on desktop.
5. PWA: verify manifest loads, service worker registers, install prompt
   appears on Android Chrome, iOS banner shows after 3 seconds.
6. Test full flow: onboard → gate (all 3 paths) → home → Saarthi → 
   Ask Anything → Karma Journal → Journey.
7. Create README.md: product description, soul document excerpt, 
   what the app does, live URL, personal motivation for building it.
```

---

## WHAT CLAUDE CODE SHOULD NEVER DO

**Never:**
- Hardcode API keys anywhere in the code
- Use `console.log` with sensitive user data
- Skip crisis detection because "it's just a prototype"
- Write generic loading/error copy
- Make the AI sound like a product instead of a friend
- Add features not in this CLAUDE.md without asking
- Use localStorage for anything sensitive
- Store full conversation content in localStorage (Firestore only)

**Always:**
- Read CLAUDE.md before starting any feature
- Build one feature at a time, test before moving on
- Use the Sakhaa design system colours and fonts
- Warm copy in every user-facing string
- Check the sacred friend test before shipping any UI
- **Update SESSION PROGRESS LOG every hour** — timestamp, what was built, files changed, next task. Mark weeks ✅ when fully complete. This is non-negotiable — it is how continuity is maintained across sessions.

---

## LAUNCH CHECKLIST

Before sharing the URL with anyone:

- [ ] Crisis detection working (test with "I want to end my life")
- [ ] Crisis incidents logging to Firestore
- [ ] All screens visible on iPhone Safari
- [ ] All screens visible on Android Chrome
- [ ] PWA installable on Android (install prompt appears)
- [ ] PWA installable on iOS (banner explains Share → Add to Home)
- [ ] Firebase Auth working (Google sign-in + anonymous)
- [ ] Firestore data saving correctly
- [ ] Groq API responding with Sakhaa personality
- [ ] Gemini fallback activates when Groq fails
- [ ] Gate session saves and loads on return visit
- [ ] Conversation history persists across sessions
- [ ] Karma points persist across sessions
- [ ] All loading states use warm copy
- [ ] All error states use warm copy
- [ ] Share button works
- [ ] README on GitHub explains the project
- [ ] Soul document accessible in repo

**Do not share until crisis detection is verified working.**

---

## GROQ SETUP (5 minutes)

1. Go to console.groq.com
2. Sign up free
3. Create API key → copy it
4. Add to CONFIG.groqApiKey in index.html

Free tier: 14,400 requests/day
Rate limit: 30 requests/minute
Model: llama-3.3-70b-versatile

---

## GEMINI SETUP (5 minutes)

1. Go to aistudio.google.com
2. Sign in with Google
3. Get API key → copy it
4. Add to CONFIG.geminiApiKey in index.html

Free tier: 1,500 requests/day
Model: gemini-2.0-flash

---

## FIREBASE SETUP (15 minutes)

1. console.firebase.google.com → Create project "sakhaa-app"
2. Add web app → copy config → paste into CONFIG.firebase
3. Enable Authentication → Google + Anonymous
4. Enable Firestore → Start in test mode → asia-south1 region
5. Paste security rules from this doc
6. Seed content/ collections (gita_verses, pooja_guides, qa_library)

---

## FIREBASE HOSTING DEPLOYMENT (10 minutes)

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Init hosting in project folder: `firebase init hosting`
   - Select existing project: `sakhaa-app`
   - Public directory: `.` (current folder)
   - Single-page app: `Yes`
   - Don't overwrite index.html: `No`
4. Deploy: `firebase deploy --only hosting`
5. URL: `sakhaa-app.web.app` (live immediately)

**Why Firebase Hosting over Vercel:**
- Same ecosystem as Auth + Firestore — one console for everything
- Mumbai CDN — lower latency for Indian users
- One deploy command: `firebase deploy`
- No separate vercel.json needed — routing config lives in firebase.json

---

*This is CLAUDE.md — the soul and architecture of Sakhaa in one file.*
*Read it before every feature. Never deviate from the sacred friend.*
*Version: Phase 1 PWA — June 2026 (hosting: Firebase Hosting, Mumbai CDN)*
