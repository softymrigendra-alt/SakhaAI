# Sakhaa — Quick Context (Paste at start of every new conversation)

---

## What We Are Building

We are building **Sakhaa (सखा)** — an AI-powered spiritual companion app for modern Indians aged 18–45. The name means "sacred friend" in Sanskrit — the same word Krishna used for Arjuna in the Bhagavad Gita. That friendship is the soul of everything.

---

## The Soul — Never Deviate From This

Sakhaa is not a wellness app. Not a meditation app. Not a religious app.

**Sakhaa is a sacred friend.**

Just as Krishna sat beside Arjuna — calm, wise, non-judgmental, present — Sakhaa sits beside the user every single day. It listens before it advises. It remembers across time. It never judges, never preaches, never creates fear, never exploits vulnerability. It speaks from beside the user, never above them. Every feature, every word, every AI response must pass one test: **"Would a sacred friend do this?"**

---

## The App — What It Does

**Opening:** Every time the user opens the app, one question appears first: *"How are you feeling right now?"* (Happy / So-so / Not great). The answer becomes the day's emotional context — every feature reads it and responds accordingly. This is the **Happiness Gate**.

**6 Core Features:**
1. **AI Saarthi** — emotional companion with memory. Listens, responds with Dharma wisdom, follows up
2. **Daily Dharma** — personalised morning moment. Gita verse + focus principle + karma action, matched to mood
3. **Gita GPT** — any life situation explained through Bhagavad Gita in plain language
4. **Pooja Guide** — step-by-step AI ritual companion for home poojas and festivals
5. **Ask Anything** — any spiritual question answered warmly, honestly, without judgment
6. **Karma Journal** — nightly reflection that closes the emotional loop opened by the morning gate

**Daily loop:** 7 touch points — morning gate → home screen → Daily Dharma → midday AI check-in → Pooja Guide → night reflection → sleep preparation. All gate-aware and connected.

---

## Key Product Decisions Made

- Name: **Sakhaa** (सखा) — sacred friend, from the Gita
- Tagline: **"Your sacred companion for life's journey."**
- App store title: **Sakhaa — Spiritual Companion**
- Opening mechanic: **Happiness Gate** — mood check every session, drives entire day's experience
- 5th feature: **Ask Anything** (replaced "Ask a Pandit" — broader, warmer, zero intimidation)
- Competitive moat: emotional memory + daily ritual structure + Indian spiritual specificity
- Monetisation: Freemium — free tier + Pro at ₹399/month (Phase 2)
- GitHub repo: https://github.com/softymrigendra-alt/SakhaAI.git

---

## Tech Stack — Phase 1 (Current Build)

- **Frontend:** HTML + CSS + Vanilla JavaScript — single index.html file
- **App delivery:** PWA — installable on iOS, Android, Desktop via browser
- **Primary AI:** Groq API — Llama 3.3 70B (free, 14,400 req/day)
- **Fallback AI:** Gemini 2.0 Flash (free, 1,500 req/day)
- **Premium AI:** Claude API — reserved for Pro tier users only
- **Database:** Firebase Firestore (free to 500 users)
- **Auth:** Firebase Authentication (Google + anonymous)
- **Hosting:** Vercel — sakhaa.vercel.app (free)
- **Development:** Claude Code ($20/month via Claude Pro)
- **Version control:** GitHub (private repo)
- **Total cost to 1,000 users: ₹0**

## Tech Stack — Phase 2 (After Validation)

- Flutter (iOS + Android + Web native apps)
- Same Firebase backend, same AI stack
- Push notifications via Firebase Cloud Messaging
- App Store + Play Store presence

---

## Build Approach

- Solo developer building with Claude Code
- One feature per week, one conversation per feature
- CLAUDE.md at project root — Claude Code reads it before every session
- Deploy on Vercel — push to GitHub → live in 30 seconds
- Hobby product — free to use, no ads, built with love

---

## Documents in the Project

| File | Purpose |
|---|---|
| `Sakhaa_Soul_Document.md` | Permanent foundation — never changes |
| `Sakhaa_Master_PRD.md` | Full product requirements v3.0 |
| `Sakhaa_CLAUDE_md_Architecture.md` | CLAUDE.md — architecture for Claude Code |
| `README.md` | GitHub landing page |
| `Sakhaa_Quick_Context.md` | This file |
| `sakhaa_pwa.html` | Current working prototype (PWA) |
| `Sakhaa_Firebase_Setup_Guide.md` | Firebase setup in 15 minutes |
| `Sakhaa_Claude_Code_Build_Guide.md` | 8-week build plan with prompts |

---

## What Sakhaa Is NOT

- Not a religious authority
- Not an astrology app
- Not a therapy replacement
- Not a fear-based or guilt-based spiritual tool
- Not a generic Western wellness app with Indian skin
- Not open source — private repo, solo developer

---

## The One Question

Before any decision about Sakhaa — feature, copy, design, business — ask:

> **"Would a sacred friend do this?"**

If no — it does not belong in Sakhaa.

---

## Where We Are Right Now

**Phase 0 — PWA Validation (Active)**
- Working PWA prototype built (sakhaa_pwa.html)
- Memory layer built (sakhaa_with_memory.html)
- Full PWA with install prompt built (sakhaa_pwa.html — final)
- Next: Add Firebase config + Groq API + crisis detection → deploy to Vercel
- Goal: 500+ users, 40%+ monthly retention, "feels like a sacred friend" feedback

---

*Paste this at the start of any new conversation to instantly restore full Sakhaa context.*
*Last updated: May 2026 — reflects all decisions from the full product development session.*
