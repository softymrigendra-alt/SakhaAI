# Sakhaa — सखा

**Your sacred companion for life's journey.**

> *"In the Bhagavad Gita, Krishna does not appear to Arjuna as a god demanding worship.  
> He appears as a sakhaa — a friend sitting beside him at his most broken, most confused moment.  
> Calm. Wise. Non-judgmental. Present.  
> That is what this app is."*

---

## What is Sakhaa?

Sakhaa (सखा) is an AI-powered spiritual wellness companion for modern Indians — built on the friendship of Krishna and Arjuna in the Bhagavad Gita.

It is not a meditation app. Not a religious app. Not a wellness platform.

**Sakhaa is a sacred friend.**

Every morning it asks how you're feeling. It remembers what you said yesterday. It offers Gita wisdom in plain language when you need it. It sits with you through difficult days without judgment. It never preaches, never creates fear, never exploits your vulnerability.

It speaks from beside you — never above you.

---

## The Problem

500 million Indians are caught between two worlds.

They grew up with spiritual traditions — the Gita, daily pooja, festivals, Naam Jap. They carry these roots. But they live fast, stressed, urban, digital lives. And the gap between those two worlds is filled with:

- Fake gurus monetising anxiety and fear
- Astrology apps built on predictions and dread
- Dense Sanskrit translations nobody actually reads
- Expensive pandits for guidance that should be accessible to everyone
- Western wellness apps that don't know what Ekadashi means

Nobody has built a product that combines **emotional support + Dharma wisdom + daily spiritual practice** in one intelligent, personalised, non-judgmental experience.

That is the gap Sakhaa fills.

---

## Who This Is For

**Primary users — 18 to 45 year olds:**

| Segment | Profile | What They Need |
|---|---|---|
| Stressed Professional | 24–35, corporate, metro India | Emotional relief, 5-min practices, non-preachy guidance |
| Spiritual Seeker | 25–40, wants deeper meaning | Gita wisdom, ritual guidance, honest answers |
| Diaspora Indian | 22–45, living outside India | Pooja guidance away from home, cultural grounding |
| Gen Z Wellness | 18–26, open but skeptical of religion | Non-preachy, modern framing of ancient wisdom |

---

## How It Works — The Daily Loop

Every time you open Sakhaa, one question appears first:

> **"How are you feeling right now?"**

Your answer shapes everything that follows. Happy → the app amplifies your energy. Not great → it wraps around you with support. So-so → it helps you find direction.

This is the **Happiness Gate** — the intelligence layer that makes the entire experience feel personally responsive rather than generic.

```
7:00 AM   Happiness Gate opens → answer shapes the entire day
7:05 AM   Daily Dharma → mood-matched Gita verse + morning action
11:00 AM  AI Saarthi check-in → references what you shared this morning
Anytime   Ask Anything → any spiritual question, answered warmly
Evening   Pooja Guide → ritual companion for home practice
9:00 PM   Karma Journal → closes the emotional loop from the morning
```

**7 engineered touch points per day.** Calm and Headspace have 1–2.

---

## Features

### 1. Happiness Gate
The opening screen every single session. One question. Three options. 30 seconds. The answer drives the entire experience — home screen layout, Gita verse selection, AI Saarthi tone, karma actions, and night reflection context.

### 2. AI Saarthi — Emotional Companion
A conversational AI that listens, understands, and responds with Dharma-inspired wisdom. Not a chatbot — a companion with memory. It remembers what you said last week. It notices patterns. It references your history naturally. The longer you use it, the more it knows you.

### 3. Daily Dharma — Morning Ritual
Every morning, a personalised 60-second spiritual moment — a mood-matched Gita verse, one focus principle for the day, one karma action. Takes 5 minutes. Changes the quality of the day.

### 4. Gita GPT — Bhagavad Gita in Plain Language
Ask any life situation — "I'm jealous of my colleague's promotion" — and receive Gita wisdom applied to your exact situation. Not academic. Not religious. Practical, warm, and connected to your actual life. All 18 chapters, 700 verses, semantically indexed.

### 5. Ask Anything — Open Spiritual Q&A
Any spiritual question. No matter how basic, embarrassing, or unusual. "Can I do pooja during my period?" "Is eating meat bad karma?" "I haven't prayed in years — is it too late?" Warm, honest, plain-language answers. No judgment. No fear.

### 6. Pooja Guide — AI Ritual Companion
Step-by-step guidance for home poojas and Hindu rituals. User says what they want to do — Sakhaa walks them through it in plain language, using whatever items they have at home, never shaming for missing items. Covers 8+ poojas at launch.

### 7. Karma Journal — Evening Reflection
A guided 5-minute night reflection that closes the emotional loop opened by the morning gate. Not journaling into a void — a real conversation where the AI responds with wisdom, tracks your growth, and prepares you for rest.

---

## What Makes This Different

| | Sakhaa | Calm / Headspace | Indian Scripture Apps | Astrology Apps |
|---|---|---|---|---|
| Remembers you | ✅ | ❌ | ❌ | ❌ |
| Daily emotional loop | ✅ (7 touch points) | Minimal | ❌ | ❌ |
| Bhagavad Gita wisdom | ✅ Deep | ❌ | Static | ❌ |
| Non-fear based | ✅ | ✅ | ✅ | ❌ |
| Indian cultural context | ✅ Native | ❌ Western | ✅ | Partially |
| Emotional intelligence | ✅ AI | Content only | ❌ | ❌ |
| Free to use | ✅ | Paid | Mostly | Freemium |

**The moat:** Emotional memory. The longer someone uses Sakhaa, the more it knows their patterns, their language, their growth. That relationship cannot be copied.

---

## Tech Stack

### Phase 1 — PWA (Current)

| Layer | Technology | Cost |
|---|---|---|
| Frontend | HTML + CSS + Vanilla JavaScript | Free |
| App delivery | PWA — installable on iOS, Android, Desktop | Free |
| Primary AI | Groq API — Llama 3.3 70B | Free (14,400 req/day) |
| Fallback AI | Gemini 2.0 Flash | Free (1,500 req/day) |
| Database | Firebase Firestore | Free to 50,000 reads/day |
| Auth | Firebase Authentication | Free |
| Hosting | Firebase Hosting — Mumbai CDN | Free |
| Development | Claude Code | — |

**Total monthly cost to 1,000 users: ₹0**

### Phase 2 — Native Apps (After validation)

Flutter (iOS + Android + Web) — same Firebase backend, same AI stack, adds push notifications and App Store presence.

---

## Architecture

```
index.html              ← Entire app (single file, no build step)
CLAUDE.md               ← Architecture + soul for Claude Code sessions
firebase.json           ← Firebase Hosting config (SPA routing)
.firebaserc             ← Firebase project alias
docs/
  soul.md               ← The soul document (never changes)
  prd.md                ← Master product requirements
```

### Key Design Decisions

**Single HTML file:** No framework, no build step, no dependencies. Open in browser and it works. Deploy with `firebase deploy` — live in 30 seconds.

**Groq as primary AI:** 14,400 free requests/day. Llama 3.3 70B at 500+ tokens/second. Feels instant. Completely free.

**Firebase for memory:** The memory layer is what makes Sakhaa a sacred friend rather than a stateless chatbot. Gate history, conversation memory, karma tracking — all persist across sessions.

**Soul document as system prompt:** The Sakhaa soul document (the sacred friend principle) is injected into every AI call as the system prompt. This is the most important technical decision in the project.

---

## The Soul — The Foundation

Everything in this app is built on one principle:

> **"Would a sacred friend do this?"**

The AI speaks like a friend. The UI feels like a friend. The copy sounds like a friend. Every feature, every word, every notification must pass this test before it exists in the product.

Read the [Soul Document](docs/soul.md) before contributing to or modifying this codebase.

---

## Setup

### Prerequisites
- Firebase account (free) — [console.firebase.google.com](https://console.firebase.google.com)
- Groq API key (free) — [console.groq.com](https://console.groq.com)
- Gemini API key (free) — [aistudio.google.com](https://aistudio.google.com)
- Firebase CLI: `npm install -g firebase-tools`

### 1. Clone the repository
```bash
git clone https://github.com/softymrigendra-alt/SakhaAI.git
cd SakhaAI
```

### 2. Configure API keys
Open `index.html` and find the `CONFIG` object at the top of the script:

```javascript
const CONFIG = {
  groqApiKey: 'YOUR_GROQ_KEY',
  geminiApiKey: 'YOUR_GEMINI_KEY',
  firebase: {
    apiKey: 'YOUR_FIREBASE_API_KEY',
    authDomain: 'sakhaa-app.firebaseapp.com',
    projectId: 'sakhaa-app',
    storageBucket: 'sakhaa-app.appspot.com',
    messagingSenderId: 'YOUR_SENDER_ID',
    appId: 'YOUR_APP_ID'
  }
};
```

Replace each value with your actual keys.

### 3. Firebase setup
1. Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable **Authentication** → Google + Anonymous sign-in
3. Enable **Firestore Database** → Start in test mode → Region: `asia-south1`
4. Apply the security rules from `CLAUDE.md`

### 4. Deploy to Firebase Hosting
```bash
firebase login
firebase deploy --only hosting
```

Live at: `https://sakhaa-app.web.app`

### 5. Open locally (for development)
```bash
python3 -m http.server 8080
# Open http://localhost:8080
```

---

## Development with Claude Code

This project is built with Claude Code. The `CLAUDE.md` file at the root contains the full architecture, design system, AI integration code, and weekly build prompts.

```bash
# Install Claude Code (requires Claude Pro — $20/month)
npm install -g @anthropic-ai/claude-code

# Open Claude Code in the project folder
cd SakhaAI
claude
```

When Claude Code opens, it reads `CLAUDE.md` automatically. Use the build prompts from the architecture document — one feature per week.

---

## Roadmap

### Phase 1 — PWA (Weeks 1–8) ✅ Complete
- [x] Week 1 — Foundation: scaffold, Firebase, auth, PWA manifest
- [x] Week 2 — Happiness Gate: 3-mood flow, sub-gates, AI gate response
- [x] Week 3 — AI Saarthi: chat UI, Groq + Gemini, crisis detection, memory
- [x] Week 4 — Home Screen: three mood layouts, Gita verses, karma actions
- [x] Week 5 — Ask Anything + Daily Dharma: Q&A, verse exploration
- [x] Week 6 — Karma Journal: 5-step reflection, AI responses, sleep prep
- [x] Week 7 — Pooja Guide: 8 poojas, full/simplified versions
- [x] Week 8 — Polish + Launch: warm copy audit, share button, README, deploy

### Phase 1 — Growth (Months 3–6)
- [ ] Panchang integration
- [ ] Bhajan recommendations
- [ ] Weekly Karma Report
- [ ] Advanced mood analytics
- [ ] Pro tier (₹399/month)

### Phase 2 — Native Apps (Months 6+)
- [ ] Flutter app (iOS + Android)
- [ ] Push notifications
- [ ] App Store + Play Store
- [ ] Offline support

---

## Privacy

Sakhaa handles sensitive emotional data. These principles are non-negotiable:

- All conversation data encrypted at rest
- Users can delete all their data at any time
- No selling or sharing of personal data
- No advertising, ever
- No fear-based or manipulative mechanics
- Personalisation built only from conversations within the app

---

## Safety

Sakhaa includes mandatory crisis detection. Every user message and AI response is scanned for crisis keywords. If detected, the app immediately surfaces Indian mental health helplines:

- **iCall:** 9152987821
- **AASRA:** 9820466627
- **Vandrevala Foundation:** 1860-2662-345 (24/7)

This feature is non-negotiable and ships before any public release.

---

## The Name

**Sakhaa (सखा)** means sacred friend in Sanskrit. It is the exact word Krishna uses to address Arjuna in the Bhagavad Gita — not as a god to a devotee, but as a friend to a friend. That relationship — wise, warm, honest, non-judgmental, present — is the entire product philosophy in one word.

---

## Live Demo

[sakhaa-app.web.app](https://sakhaa-app.web.app)

---

*Built by a solo developer who believes ancient wisdom and modern technology can make people's lives genuinely better — one conversation at a time.*
