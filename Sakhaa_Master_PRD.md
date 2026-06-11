# Sakhaa Master PRD
### सखा · Sacred Companion · The Complete Spiritual Companion for Modern India
**Version:** 3.0 — Phased Build Strategy  
**Date:** May 2026  
**Status:** Phase 1 Active · Phase 2 Planned

---

## SYNTHESIS NOTE

This PRD combines two product concepts:

**KrishnAI (original):** Strong on daily emotional loop (morning/midday/night), emotional memory, karma scoring, mood tracking, stress support, personalization. Weak on content depth, spiritual knowledge, and reasons to return beyond emotional check-ins.

**5-Tab App (proposed):** Strong on specific high-demand content (Gita GPT, Pooja Guide, Ask Anything, Daily Dharma, Karma Journal). Weak on daily retention hooks, emotional pull, and habit-forming structure.

**The insight:** KrishnAI is the skeleton (daily ritual structure + emotional AI). The 5 features are the organs (content that gives the skeleton purpose). Neither works alone. Together they create something no competitor has.

---

## 1. PRODUCT IDENTITY

### Name
**Sakhaa**
*(सखा) · Sakhaa = sacred friend · companion · the one who walks beside you*

In the Bhagavad Gita, Krishna does not appear to Arjuna as a god demanding worship. He appears as a sakhaa — a friend sitting beside him at his most broken, most confused, most overwhelmed moment. Calm. Wise. Non-judgmental. Present.

That is exactly what this app is.

### Tagline
**"Your sacred companion for life's journey."**

### App Store Title
**Sakhaa — Spiritual Companion**

### One-Line Positioning
An AI-powered spiritual companion inspired by the friendship of Krishna and Arjuna — combining Dharma wisdom, emotional intelligence, and daily rituals for the 500 million spiritually curious Indians who want guidance without preaching.

### What This App IS
- A daily emotional and spiritual companion
- A living, personalized Dharma guide
- A habit-building engine for spiritual growth
- A non-judgmental friend who remembers you

### What This App is NOT
- A religious preaching app
- An astrology prediction platform
- A therapy replacement
- A generic meditation content library
- A fear-based or guilt-based spiritual tool

---

## 2. THE CORE PROBLEM

Modern Indians — especially aged 18–45 — are caught between two worlds:

They grew up with spiritual traditions (Gita, pooja, Naam Jap, festivals) but live fast, stressed, urban, digital lives. They want the peace and wisdom of their spiritual roots but:

- Don't have time for 45-minute sadhanas
- Can't read Sanskrit or dense Gita translations
- Moved to cities — no family to guide daily rituals
- Don't trust fake gurus or fear-mongering astrology apps
- Are too embarrassed to ask "basic" spiritual questions
- Feel emotionally isolated but don't want Western-centric wellness

**The gap:** No product exists that combines emotional support + Dharma wisdom + daily spiritual practice in one intelligent, personalized, non-judgmental experience.

---

## 3. TARGET AUDIENCE

### Primary (Build for these first)
**Age:** 18–40  
**Location:** Indian metros + Indian diaspora (US, UK, UAE, Canada, Australia)

**User Segments:**

**Segment A — The Stressed Professional**
- Age 24–35, corporate job, Bangalore/Mumbai/Delhi/Hyderabad
- Stress: Work pressure, deadlines, relationships, comparison culture
- Spiritual interest: Curious but inconsistent — knows Gita exists, rarely reads it
- Needs: Emotional relief, 5-minute practices, no preachy content
- Hook: AI that listens without judgment + quick calming guidance

**Segment B — The Spiritual Seeker**
- Age 25–40, wants deeper meaning, possibly does yoga/meditation
- Stress: Existential questions, feeling lost, overthinking
- Spiritual interest: High — reads spiritual content, follows teachers
- Needs: Deeper Gita wisdom, honest answers to spiritual questions, ritual guidance
- Hook: Gita GPT + Ask Anything depth that no other app offers

**Segment C — The Diaspora Indian**
- Age 22–45, living outside India
- Stress: Identity, belonging, cultural disconnection, loneliness
- Spiritual interest: High emotional connection to traditions, low practical knowledge
- Needs: Pooja guidance (doing it correctly away from home), Panchang, cultural grounding
- Hook: "The spiritual guide your parents would have been"

**Segment D — Gen Z Wellness**
- Age 18–26, influenced by mental health awareness, Instagram wellness
- Stress: Social anxiety, perfectionism, purpose-seeking
- Spiritual interest: Low-medium — open but skeptical of religion
- Needs: Non-preachy, practical, modern framing of ancient wisdom
- Hook: Karma Journal + gamification + non-judgmental AI

### Secondary (Expand to these later)
- Ages 40–60: Parents wanting to reconnect with practice
- Families: Shared spiritual habits across generations
- Corporate wellness programs

---

## 4. THE PRODUCT — FEATURE ARCHITECTURE

Sakhaa is organized around one central truth:

**A spiritual life has a daily rhythm. The app mirrors that rhythm.**

```
MORNING          MIDDAY           EVENING           NIGHT
─────────        ──────────       ──────────        ──────────
Daily Dharma  →  AI Companion  →  Ask Anything  →  Karma Journal
Gita Verse       Stress Support   Gita GPT          Night Reflection
Pooja Guide      Emotional         Emotional         Sleep Meditation
Panchang         Check-in          Support           Streak Review
```

Every feature has a natural time in the day. Together they create 3–4 engineered reasons to open the app daily.

---

## 5. THE SIX CORE FEATURES (DETAILED)

---

### FEATURE 1: AI SAARTHI — The Emotional Companion
*From KrishnAI — the heart of the product*

**What it is:** A conversational AI that listens, understands, and responds with Dharma-inspired emotional wisdom. Not a chatbot — a companion with memory.

**Why it drives DAU:** Users return because the AI remembers them. "Last week you mentioned stress around your manager. How did that resolve?" — no other app does this.

**Personality:**
- Warm, calm, wise, never preachy
- Never claims to be divine or all-knowing
- Acknowledges being AI: "I'm an AI, not a guru — but I'm here to think through this with you"
- Draws from Gita, Upanishads, Buddhist and Sufi wisdom (non-sectarian)
- Uses user's name, remembers their patterns, references their history

**System Prompt (Final):**
> "You are Sakhaa, a compassionate spiritual companion — the sakhaa, the sacred friend, for whoever opens this app. You are warm, wise, calm, and deeply non-judgmental. You draw from Dharma wisdom — the Bhagavad Gita, Upanishads, and mindfulness traditions — to help users find emotional balance, clarity, and peace. You never claim to be divine. You never use fear-based or guilt-based language. You never diagnose or prescribe. You acknowledge your limitations: 'I'm an AI, not a therapist or guru.' You remember the user's emotional history and reference it naturally. You validate feelings before offering guidance. You ask one thoughtful follow-up question at a time. Your goal is to help users become a slightly better version of themselves — one conversation at a time."

**Conversation Capabilities:**
- Emotional support (stress, loneliness, anxiety, anger, grief)
- Life guidance (career, relationships, purpose, self-doubt)
- Spiritual questions (What is karma? How do I forgive? What does detachment mean?)
- Practical guidance (how to meditate, what mantra to use, how to start a practice)
- Crisis detection and safe escalation (see Safety section)

**Memory System:**
- Stores last 30 conversation exchanges per user
- Weekly summaries of emotional patterns
- Tracks: recurring stress sources, emotional triggers, growth areas, favorite practices
- References memory naturally: "You've mentioned family pressure three times this month..."
- User can view and delete their memory anytime (privacy control)

**Adaptive Follow-Up (from KrishnAI):**

| Stress Level | Follow-Up Timing | Example Message |
|---|---|---|
| Light | 6–8 hours | "How's your energy now?" |
| Moderate | 2–4 hours | "Checking in — did the breathing help?" |
| High distress | 30–60 min | "I'm still thinking about what you shared. How are you?" |
| Crisis | Immediate | Safety protocol (see Section 10) |

---

### FEATURE 2: GITA GPT — Bhagavad Gita in Plain Language
*From 5-Tab App — highest demand feature*

**What it is:** Ask any life question and receive wisdom grounded in the Bhagavad Gita, explained in plain Hindi/English, connected to your exact situation.

**Why people want it:** The Gita is the most sought spiritual text in India — 200K+ monthly searches for "Bhagavad Gita meaning." But every existing resource is either too academic, too religious, or too generic. Nobody has made it conversational and personally relevant.

**How it works:**

User input type 1 — Life situation:
> "I'm jealous of my colleague who got promoted over me"

Sakhaa responds:
> "What you're feeling is deeply human. The Gita addresses this directly in Chapter 3. Krishna tells Arjuna that suffering comes from comparing our path to others' — because each soul has its own dharma, its own timing. Your colleague's promotion isn't a measure of your worth. It's simply their chapter. Your question is: what is your next right action, regardless of what others are doing? That is karma yoga — acting with full effort, releasing the need to control outcomes. What would your next best step look like, if you weren't watching anyone else?"

User input type 2 — Direct verse question:
> "Explain Chapter 2, verse 47"

Sakhaa responds with:
- The verse in transliterated Sanskrit
- Plain English/Hindi translation
- What it actually means in modern life
- One reflection question for the user

User input type 3 — Concept question:
> "What does detachment really mean? Does it mean not caring?"

Sakhaa gives a nuanced, warm, practical explanation.

**Content backbone:**
- All 18 chapters, 700 verses indexed
- Semantic search: maps user situations to relevant verses
- Multiple commentators synthesized (Prabhupada, Chinmayananda, Osho, modern interpretations)
- Non-sectarian framing — applicable to any background

**Morning integration:** Every morning, one Gita verse is surfaced on the home screen with a 2-line relevance note. Tap to go deeper.

---

### FEATURE 3: DAILY DHARMA — Morning Ritual Engine
*Combined from KrishnAI morning routine + 5-tab Daily Dharma*

**What it is:** Every morning at a user-set time, Sakhaa delivers a personalized 60-second spiritual moment — not generic content, but guidance calibrated to the user's current emotional state, recent conversations, and the day's Panchang significance.

**Why it drives DAU:** The single most powerful retention mechanic in wellness apps is a daily morning notification the user actually wants to open. Calm's entire empire is built on this. Sakhaa's morning moment is more personalized than Calm's because it knows who you are.

**What the morning moment includes:**
1. A personal greeting ("Good morning, Priya. Mercury is in a reflective phase today — good day for listening more than speaking.")
2. Today's Dharma focus (one practical principle for the day — from Gita, Stoicism, or mindfulness)
3. Today's Gita verse (short, plain-language, directly relevant)
4. Today's Panchang note (tithi, ekadashi, festival — for those who care)
5. One morning karma action (specific, 2–5 minutes: breathe, reflect, write one line, do 5 minutes of naam jap)
6. Optional: Guided morning meditation (3–10 min, personalized by mood)

**Personalization engine:**
- If user was stressed yesterday → morning guidance addresses that emotional state
- If user completed morning karma yesterday → streak is acknowledged
- If today is a significant day (Ekadashi, festival, user's DOB) → content reflects it
- Over time: learns user's preferred morning length, type of guidance, music preference

**Panchang integration:**
- Tithi, Vara, Nakshatra displayed daily
- Festival alerts 3 days in advance with context ("Ekadashi in 3 days — here's what it means and a simple way to observe it")
- No fear-based predictions — only positive cultural context
- Optional for users who don't care (can hide Panchang widget)

---

### FEATURE 4: POOJA GUIDE — AI Ritual Companion
*From 5-Tab App — serves underserved diaspora + urban youth segment*

**What it is:** A step-by-step AI guide for home poojas and Hindu rituals. User says what they want to do; Sakhaa walks them through it in plain language, using whatever they have at home, without judgment.

**Why the demand is real:** "How to do pooja at home" gets 500K+ monthly searches. Millions of young Indians and diaspora want to continue home rituals but have no one to guide them. YouTube videos are 45 minutes long. Pandits are expensive. Family isn't nearby.

**Coverage (MVP):**
- Daily morning pooja (Ganesh, Lakshmi, Shiva, generic)
- Satyanarayan pooja
- Diwali pooja
- Navratri daily ritual
- Ganesh Chaturthi
- New home/car/business pooja
- Eclipse protocol
- New moon and full moon rituals
- Personal milestone poojas (new job, marriage, new baby)

**How it works:**

User: "I want to do a simple Ganesh pooja tonight. I don't have all the items."

Sakhaa:
> "Perfect. Ganesh pooja doesn't require much — he's known for accepting simple offerings with full heart. Let me check what you have at home first. Do you have: incense or agarbatti? A flower or even a leaf (tulsi or any garden flower works)? A diya or candle? Water in a small vessel? If you have even two of these, we're ready to begin."

Then walks through:
1. Preparation (what to gather, how to set up the space — 5 minutes)
2. Invocation (transliterated Sanskrit + plain meaning — user reads along)
3. Offerings sequence (step by step, with explanations of why each step matters)
4. Aarti (with lyrics transliterated, audio optional)
5. Closing prayer + prasad
6. What this pooja is for, spiritually and emotionally

**Key UX principles:**
- Never makes user feel bad for missing items ("Bhagwan accepts sincerity over ceremony")
- Explains the why behind each step (builds meaning, not just ritual)
- Allows "simplified version" for time-constrained users (10-minute version of any pooja)
- Remembers which poojas user has done before

**Festival calendar integration:** Panchang alerts trigger Pooja Guide suggestions 3 days before major festivals.

---

### FEATURE 5: ASK ANYTHING — Open Spiritual Q&A
*Replaces "Ask a Pandit" — broader, warmer, zero intimidation*

**What it is:** A feature where users can ask any spiritual question — curious, practical, philosophical, basic, deep, silly, or serious — and receive a warm, honest, plain-language answer. Not a consultation with a religious authority. Not a search engine. A knowledgeable friend who happens to know a lot about spirituality and will answer anything without making you feel small.

**The insight that drives this feature:** People don't just have embarrassing questions. They have all kinds of questions that simply never got answered. "Why do we ring bells in temples?" is not embarrassing — it's just something nobody ever explained properly. "What is the difference between karma and fate?" is genuinely curious. "How do I start meditating?" is purely practical. The feature serves all of these equally. Every question is welcome. Every question gets a real answer.

**Why the demand is enormous:** Spiritual questions are typed into Google millions of times a month — and the answers are either too academic, too religious, too contradictory, or buried under 47 ads. There is no trusted, warm, always-available place to get a real answer to a real spiritual question. Ask Anything is that place.

**Demand signals:**
- "Why do Hindus..." gets 2M+ monthly searches in India
- "What does karma mean" — 500K+ monthly searches
- "How to do pooja" — 500K+ monthly searches
- Quora's spirituality topics have 10M+ followers
- r/hinduism top posts are almost always questions — not discussions

**Tab label:** Ask Anything
**Feature headline:** "Ask Anything. Seriously, anything."
**Subtitle:** "Curious, confused, or just wondering — bring it here."
**Empty state:** "What have you always wanted to know about spirituality, rituals, karma, or life? No question is too basic, too bold, or too random."

---

**Question categories (all equally welcome):**

Practical & ritual:
- "Why do we ring bells in temples?"
- "Can I do pooja without a priest?"
- "Does the direction I face while meditating matter?"
- "Is vegetarianism required in Hinduism?"
- "Can I do pooja during my period?"
- "How do I set up a home mandir?"

Scriptural & philosophical:
- "What is the difference between karma and fate?"
- "What does moksha actually mean?"
- "Is reincarnation real?"
- "What does detachment mean — does it mean not caring?"
- "How does the Gita's concept of duty apply to modern life?"

Curious & exploratory:
- "Why 108 repetitions in naam jap?"
- "What is the actual purpose of fasting?"
- "Why do Hindus cremate instead of bury?"
- "What does Om actually represent?"
- "Is Hinduism a religion or a philosophy?"

Personal & reflective:
- "I haven't prayed in years. Is it too late?"
- "I feel nothing when I pray. Is something wrong with me?"
- "Does God actually hear individual people?"
- "Can I be spiritual without being religious?"
- "I feel guilty for questioning my faith. Is that normal?"

Modern & nuanced:
- "Is eating meat bad karma?"
- "Is it okay to pray for material things like a job or money?"
- "Does watching violent movies affect your karma?"
- "Can non-Hindus do Hindu rituals?"
- "How do I deal with a spiritual dry spell?"

---

**Answer structure (every response follows this):**

1. Acknowledge the question warmly — never "good question!" (patronising) — just dive in with warmth
2. Give the direct, honest answer first — no hedging, no building up to it
3. Provide context from scripture, tradition, or philosophy — briefly, plainly
4. Connect it to the user's actual life — what does this mean for how you live?
5. Optional: one follow-up thought or related question to explore

**Example — practical question:**

User: "Why do we ring bells in temples?"

Sakhaa:
> "The bell is not just ritual — it has real purpose. The sharp, sustained sound of a temple bell is meant to clear your mind of distraction the moment you enter. Scientifically, certain sound frequencies activate the brain's focus centres. Spiritually, the ringing signals to both you and the divine: I am here, I am present, this moment is sacred. It's also traditionally believed that the sound wards off negative energy. But at its core, the bell is a transition tool — from the noise of the outside world to the stillness of prayer. Next time you ring one, pause for two seconds after. Feel the shift."

**Example — philosophical question:**

User: "What is the difference between karma and fate?"

Sakhaa:
> "Karma and fate are almost opposites, actually. Fate suggests your life is predetermined — written in advance, unchangeable. Karma says the opposite: your actions now shape what comes next. The Gita is very clear on this — there is no fixed destiny, only consequence. What you do, how you think, how you treat people — these create ripples that come back to you, sometimes immediately, sometimes across a lifetime. Fate removes your power. Karma gives it back. The reason people confuse them is that karma can feel like fate when you don't see the original action that caused the consequence. But the chain is always there, even when invisible."

**Example — personal question:**

User: "I haven't prayed in years. Is it too late?"

Sakhaa:
> "Not even slightly. The Gita says: 'Even if you are the most sinful of all sinners, you shall cross all sins by the boat of knowledge.' There is no spiritual statute of limitations. The divine doesn't keep a clock. What matters is the moment you turn back — not the years you were away. Actually, people who come back to spirituality after a long gap often bring something richer: they've lived, they've questioned, they've found their way back on their own terms. That's not absence — that's a journey. Start wherever you are right now. That's always the right place."

---

**UX flow — how it works:**

Step 1 — User opens Ask Anything tab
- Clean, open interface — text input front and centre
- Below the input: rotating sample questions to inspire ("People are asking: 'Why do we do aarti?' 'What is moksha?' 'Is fasting compulsory?'")
- No categories, no dropdowns — just ask

Step 2 — User types their question (any length, any type)
- No format required — they can type a full paragraph or three words
- Optional: "What's the context?" field if they want a more personalised answer

Step 3 — AI responds
- Response arrives in conversation format (not a wall of text)
- Clear, warm, structured answer (see answer structure above)
- At the end: 2–3 related questions they might also find interesting (discovery mechanic)

Step 4 — Follow-up conversation
- User can reply, dig deeper, ask a follow-up
- AI maintains context within the session
- "Take me to the Gita on this" button — instantly surfaces the relevant verse in Gita GPT

Step 5 — Save or share
- User can save answers to their personal library
- Share card: elegant quote-style card with the key insight, shareable to WhatsApp/Instagram

---

**Discovery mechanic — "Others are asking"**

Anonymous, aggregated popular questions displayed on the Ask Anything home screen.

Organised not by category but by theme of the week — tied to Panchang, festival season, or trending spiritual topics.

Examples:
- During Navratri: "What is the spiritual significance of fasting for 9 days?"
- During exam season: "Does the Gita say anything about dealing with pressure?"
- On a full moon: "Why is the full moon considered spiritually significant?"

This solves a real UX problem: many users don't know what to ask until they see someone else asking it. Discovery questions lower the barrier to first engagement and dramatically increase feature adoption.

---

**How Ask Anything differs from Gita GPT:**

| Ask Anything | Gita GPT |
|---|---|
| Any spiritual question | Gita-specific wisdom |
| Practical, curious, philosophical | Verse explanations + life application |
| "Why do we ring bells?" | "What does Chapter 3 mean?" |
| Broad knowledge base | Deep Gita focus |
| Conversational Q&A | Wisdom-first exploration |
| Entry point for casual users | Entry point for serious seekers |

They live together in the Wisdom tab but serve different user intents. A user who starts with Ask Anything ("why do we fast?") is naturally led toward Gita GPT ("what does the Gita say about self-discipline?") — the two features create a curiosity funnel.

---

**Knowledge base architecture:**

Seeded content (pre-launch):
- 500+ common spiritual questions with high-quality, reviewed answers
- Organised by theme: rituals, karma, scripture, practice, philosophy, modern life
- Reviewed by a spiritual advisor and cross-referenced with scripture

AI-generated answers (real-time):
- For questions not in the seed library, Claude generates answers grounded in the knowledge base
- Every generated answer is logged for quality review
- High-confidence answers are added to the permanent library (reviewed first)

Community-discovered questions (post-launch):
- Anonymised popular questions surfaced weekly
- Seasonal and festival-relevant questions auto-surfaced via Panchang integration
- Users can "upvote" questions they also had — surfaces most useful content

Quality control:
- Spiritual advisor reviews new AI-generated answers weekly
- Users can flag answers that feel wrong or harmful
- No answer claims absolute religious authority — framing is always "according to tradition" or "the Gita teaches"

---

**Monetisation:**
- Free tier: 5 questions per day
- Premium: unlimited questions + saved answers library + share cards
- This is the feature with the highest willingness to pay — users who get a genuinely good answer to a question they've had for years will pay to keep that access

---

### FEATURE 6: KARMA JOURNAL — AI-Powered Evening Reflection
*Combined from KrishnAI night reflection + 5-tab Karma Journal*

**What it is:** Every evening, Sakhaa invites the user into a guided 5-minute reflection — not therapy journaling into a void, but a conversation where the AI reflects their day back with wisdom, tracks their karmic growth, and prepares them for rest.

**Why it's the strongest retention mechanic:** The night reflection is the #1 thing that makes KrishnAI different from every other wellness app. Calm ends with a sleep story. Sakhaa ends with a real conversation about your day. Users who complete the night reflection have 3x higher 30-day retention than those who don't.

**The Evening Flow:**

Step 1 — Emotional check-in (30 seconds)
> "How was your day, [Name]?"
> Mood selector: Peaceful / Energetic / Stressed / Sad / Angry / Mixed / Grateful

Step 2 — Positive karma reflection (90 seconds)
> "What was one thing you did today that you feel good about — no matter how small?"
> (text input, optional voice)

Sakhaa responds with genuine acknowledgment + Karma +10 animation

Step 3 — Growth reflection (90 seconds)
> "Was there a moment today that didn't go the way you wanted?"
> Options: Anger / Impatience / Harsh words / Overthinking / Laziness / Nothing — it was a good day

Sakhaa responds with:
- Zero guilt ("This is not about judgment — it's about awareness")
- One insight from Dharma wisdom that reframes the situation
- One small intention for tomorrow

Step 4 — Karma score update
- Daily karma tally displayed with animation
- Streak acknowledged if maintained
- Weekly karma trend (are you growing?)

Step 5 — Sleep preparation
> "Would you like help winding down?"
> Options:
> - Sleep meditation (8 min)
> - Calming bhajan (personalized to user's favorite)
> - Guided breathing (5 min)
> - Naam jap session (108 repetitions, guided)
> - Just rest — goodnight

**What gets tracked:**
- Emotional state per day (mood trend over time)
- Recurring positive actions (patterns of growth)
- Recurring growth areas (patterns to work on — shown with compassion, never shame)
- Karma score (cumulative, streak-based)
- Sleep audio preferences

**Weekly Karma Report (Sunday evening):**
A warm, personalized summary: "This week you showed up 6 out of 7 days. Your most common feeling was 'stressed' but you ended most days with something positive. Your karma actions this week: 4 meditations, 2 gratitude reflections, 3 moments of helping others. That is real growth."

---

## 6. DAILY USER EXPERIENCE — THE FULL LOOP

### THE HAPPINESS GATE — Official Opening Architecture

Every time a user opens Sakhaa — morning, afternoon, or night — the first thing they see is one question:

> **"How are you feeling right now?"**

Three options. Thirty seconds. No pressure.
- 😊 Happy
- 😐 So-so
- 😔 Not great

The answer is stored as the user's **emotional context** for the session. Every feature in the app reads this context and responds accordingly. This is not a mood tracker — it is the intelligence layer that makes the entire app feel personally responsive rather than generic.

---

### WHY THE GATE DRIVES DAU

Most wellness apps show every user the same home screen. Sakhaa shows a completely different experience based on how you answered one question 30 seconds ago. This creates three outcomes:

1. **Emotional investment from the first tap** — users are asked to check in with themselves before consuming any content. That 30-second pause is itself a mindfulness practice.
2. **Personalised session every single time** — no two openings feel the same because the user's emotional state is different every day.
3. **The app feels like it is paying attention** — because it is. Every feature responds to the gate answer throughout the day.

---

### THE THREE EMOTIONAL PATHS

#### PATH A — Happy

**Gate response:**
> "That's real karma in action. Let's build on this energy today."
> Karma +15 · gratitude acknowledged

**Home screen surfaces:**
- Karma actions that amplify outward energy (helping someone, expressing gratitude, doing something for others)
- Gita verse on karma yoga, sustained action, gratitude
- Streak celebration if applicable
- Momentum meditation (energising, not calming)
- Evening journal pre-set to: "You started the day feeling good — what made today meaningful?"

**Daily Dharma verse:** Selected for amplification — themes of gratitude, sustained action, karma yoga

**AI Saarthi midday:** No proactive push (user is doing well). Available on demand. Midday nudge to log a karma action.

**Night reflection opens with:** "This morning you said you were feeling good because of [reason]. Did that carry through the day?"

---

#### PATH B — Not Great

**Gate response (Step 2 — identify the source):**
After selecting "Not great," user sees:
> "I'm sorry to hear that. What's weighing on you?"

Options:
- Work or career stress
- A relationship or family situation
- Feeling lost or without purpose
- Anxiety or overthinking
- Loneliness or feeling unseen
- I don't know — I just feel off

Each source gets a specific, warm AI response grounded in Gita wisdom relevant to that exact struggle.

**Then user chooses what helps right now:**
- 2-minute breathing exercise
- Talk it through with AI Saarthi
- What the Gita says about this
- Just take me to the app

**Home screen surfaces:**
- Breathing exercise front and centre
- AI Saarthi open and waiting (not buried in tabs)
- Gita verse on strength, resilience, the temporary nature of pain
- Proactive follow-up check-in scheduled for 2–3 hours later
- Karma actions lean inward: meditate, breathe, be gentle with yourself
- Night reflection pre-loaded with: "This morning you were carrying [stress source]. How are you feeling about it now?"

**Daily Dharma verse:** Selected for comfort — themes of surrender, equanimity, strength in difficulty

**AI Saarthi midday:** Proactive push notification: "Hey [Name] — how are you doing now? I've been thinking about what you shared this morning." References specific stress source by name.

**Night reflection opens with:** "This morning was heavy. You got through it. Let's close the loop."

---

#### PATH C — So-so

**Gate response (Step 2 — identify the feeling):**
After selecting "So-so," user sees:
> "So-so is honest. What describes it best?"

Options:
- Tired or low energy
- Life feels a bit routine or flat
- Distracted or scattered
- Actually I'm fine — just being honest

Each gets a warm, specific response — not preachy, not clinical. Just honest.

**Home screen surfaces:**
- Daily Dharma guidance front and centre
- One meaningful intention prompt ("What's one thing you want to do with intention today?")
- Steady karma actions — build momentum gently
- Midday reminder to check back in
- Night reflection pre-set to: "You set an intention this morning. Did you get to it?"

**Daily Dharma verse:** Selected for direction — themes of purpose, dharma, intentional action

**AI Saarthi midday:** Soft nudge: "Did you get to your intention this morning?" Encourages follow-through without pressure.

**Night reflection opens with:** "Steady days build strong lives. How was today?"

---

### MOOD UPDATE — Always Available

Moods change. Someone who answered "happy" at 8 AM may have a crisis at 2 PM.

A persistent **"Update mood"** button lives in the app header at all times — one tap, reopens the gate, resets today's emotional context across all features. No friction, no judgment. Essential for accuracy and user trust.

This is not a prominent feature — it is a small, always-accessible safety valve that makes the whole system honest.

---

### FULL DAY SYNC — How the Gate Connects to Every Feature

```
7:00 AM   HAPPINESS GATE OPENS
          ↓ Answer stored as today's emotional context
          ↓
7:01 AM   HOME SCREEN PERSONALISES
          Happy → amplify | Unhappy → support | So-so → direct
          ↓
7:05 AM   DAILY DHARMA
          Verse chosen to match emotional state
          ↓
9:00 AM   KARMA ACTIONS
          Happy → outward giving | Unhappy → inward care | So-so → growth
          ↓
11:00 AM  AI SAARTHI MIDDAY
          Happy → no push, available | Unhappy → proactive check-in | So-so → gentle nudge
          ↓
2:00 PM   MOOD UPDATE AVAILABLE (header button, always)
          ↓
6:00 PM   POOJA GUIDE
          Happy → gratitude pooja suggested | Unhappy → clarity pooja offered | So-so → festival reminder
          ↓
9:00 PM   KARMA JOURNAL NIGHT REFLECTION
          Pre-loaded with morning context — closes the emotional loop
          ↓
9:30 PM   AI SAARTHI NIGHT CLOSE
          References full day arc — gate answer → what happened → how you feel now
          ↓
NEXT DAY  GATE OPENS WITH MEMORY
          "Yesterday you were feeling [state]. How are you today?"
```

**The result:** The app feels like a companion who was present all day — not a collection of features a user navigates through.

---

### TOUCH POINTS PER DAY — DAU ARCHITECTURE

| Time | Touch Point | Gate-Driven? | DAU Contribution |
|---|---|---|---|
| 7:00 AM | Happiness Gate | Yes — is the gate | Opens the session |
| 7:01 AM | Personalised home screen | Yes — reads gate | Immediate engagement |
| 7:05 AM | Daily Dharma | Yes — verse chosen by mood | Morning retention |
| 11:00 AM | AI Saarthi check-in | Yes — triggered by gate | Midday re-engagement |
| 6:00 PM | Pooja Guide | Yes — contextual suggestion | Afternoon retention |
| 9:00 PM | Karma Journal | Yes — pre-loaded with context | Night retention |
| 9:30 PM | Sleep preparation | Yes — mood-matched audio | Session completion |

**7 engineered touch points per day.** Calm and Headspace have 1–2. This is the DAU advantage.

---

### DAILY TOUCH POINT DESCRIPTIONS

#### 7:00 AM — Happiness Gate + Morning Moment
Push notification: "Good morning, [Name]. How are you feeling today?"
- Gate question (30 seconds)
- Personalised home screen loads instantly
- Daily Dharma verse (mood-matched, 2 minutes)
- Morning karma action (mood-matched, 2–5 minutes)
- Optional: Morning meditation (mood-matched style)

**DAU driver:** Personalised, expected, emotionally resonant. Users miss it when they skip it.

---

#### During the Day — On Demand + Proactive (Features 1, 2, 5)
- Stress hits → AI Saarthi already knows the context → conversation starts mid-thread, not from scratch
- Spiritual question → Ask Anything → answered in 60 seconds
- Life decision → Gita GPT → Dharma wisdom applied to situation
- Unhappy gate answer → proactive AI check-in at 11 AM references morning specifically

**DAU driver:** Emotional reliability. The app already knows what you're carrying today.

---

#### 6:00 PM — Pooja Guide (Contextual)
Not daily for everyone — but gate-aware for those who practice:
- Happy gate → "A good evening for gratitude pooja — your energy is right for it"
- Unhappy gate → "A simple Ganesh pooja for clarity might help today. Even lighting a diya counts."
- Festival reminders 3 days in advance regardless of mood

**MAU driver:** Festival-triggered spikes bring dormant users back.

---

#### 9:00 PM — Karma Journal + Night Reflection
Push notification personalised by gate answer:
- Happy: "You had a good day. Let's close it well."
- Unhappy: "Today was heavy. Let's reflect together."
- So-so: "Steady day. Let's see what you built."

Journal pre-loaded with morning gate context. AI response closes the emotional loop opened at 7 AM.

**DAU driver:** The strongest habit hook in the app. Users who complete this daily have 3x higher 30-day retention.

---

## 7. HOME SCREEN DESIGN

The home screen is not a fixed layout. It is a **responsive emotional environment** that reorganises itself based on the happiness gate answer. The same user sees three meaningfully different home screens depending on how they answered the gate that morning.

---

### HOME SCREEN A — Happy State

```
┌─────────────────────────────────────────┐
│  Good morning, Priya ☀️                  │
│  Tuesday · Ekadashi · Your energy: High │
├─────────────────────────────────────────┤
│  TODAY'S DHARMA — Building on momentum  │
│  ┌───────────────────────────────────┐  │
│  │ "Act. Complete. Release.          │  │
│  │  Then act again."  — Gita 3.19    │  │
│  │  [Tap to explore karma yoga]      │  │
│  └───────────────────────────────────┘  │
├─────────────────────────────────────────┤
│  KARMA STREAK: 12 days 🔥   Score: 82   │
│  [░░░░░░░░░░░░░░░░░░░░░] 82%            │
├─────────────────────────────────────────┤
│  TODAY'S KARMA ACTIONS          35/100  │
│  ✅ Morning gate · gratitude    +15     │
│  ☐  Help someone today          +15     │
│  ☐  Express gratitude to someone +10   │
│  ☐  Share something positive    +10     │
│  ☐  Evening reflection           +15    │
├─────────────────────────────────────────┤
│  AMPLIFY THIS ENERGY                    │
│  🧘 Momentum meditation (8 min)         │
│  📖 Gita on karma yoga                  │
│  ✍️  Log what's going well              │
└─────────────────────────────────────────┘
```

---

### HOME SCREEN B — Not Great State

```
┌─────────────────────────────────────────┐
│  Good morning, Priya                     │
│  Tuesday · I'm here with you today      │
├─────────────────────────────────────────┤
│  START HERE                             │
│  ┌───────────────────────────────────┐  │
│  │  Take 3 breaths with me first.    │  │
│  │  [Begin 2-min breathing]          │  │
│  └───────────────────────────────────┘  │
├─────────────────────────────────────────┤
│  TODAY'S DHARMA — For difficult days   │
│  ┌───────────────────────────────────┐  │
│  │ "This too shall pass. Your        │  │
│  │  strength is greater than this    │  │
│  │  moment."        — Gita 2.14      │  │
│  └───────────────────────────────────┘  │
├─────────────────────────────────────────┤
│  💬 SAARTHI IS WAITING                  │
│  "Tell me what's going on today"        │
│  [Open conversation →]                  │
├─────────────────────────────────────────┤
│  GENTLE KARMA TODAY             0/60   │
│  ☐  5-min meditation            +15     │
│  ☐  Be kind to yourself         +15     │
│  ☐  One small act of patience   +15     │
│  ☐  Evening reflection           +15    │
├─────────────────────────────────────────┤
│  CHECK-IN SCHEDULED: 11:00 AM          │
│  "I'll check how you're doing then"    │
└─────────────────────────────────────────┘
```

---

### HOME SCREEN C — So-so State

```
┌─────────────────────────────────────────┐
│  Good morning, Priya                     │
│  Tuesday · Ekadashi · Steady day ahead  │
├─────────────────────────────────────────┤
│  TODAY'S INTENTION                      │
│  ┌───────────────────────────────────┐  │
│  │ "What's one thing you want to     │  │
│  │  do with full presence today?"    │  │
│  │  [Set my intention]               │  │
│  └───────────────────────────────────┘  │
├─────────────────────────────────────────┤
│  TODAY'S DHARMA — Finding direction    │
│  ┌───────────────────────────────────┐  │
│  │ "Even a little dharma practice   │  │
│  │  protects you." — Gita 2.40      │  │
│  └───────────────────────────────────┘  │
├─────────────────────────────────────────┤
│  KARMA STREAK: 12 days 🔥   Score: 68   │
├─────────────────────────────────────────┤
│  TODAY'S KARMA ACTIONS          0/100  │
│  ☐  Morning meditation (5 min)  +10     │
│  ☐  Read Gita verse             +10     │
│  ☐  Gratitude reflection        +10     │
│  ☐  Help someone                +10     │
│  ☐  Evening reflection          +15     │
├─────────────────────────────────────────┤
│  REMINDER SET: Midday check-in          │
└─────────────────────────────────────────┘
```

---

### WHAT STAYS CONSTANT ACROSS ALL THREE STATES
- Bottom navigation (5 tabs — always accessible)
- Karma streak (always visible — motivational anchor)
- Panchang date and tithi (always shown — cultural grounding)
- "Update mood" button in header (always accessible — safety valve)

### WHAT CHANGES BASED ON GATE ANSWER
- Opening message tone (celebratory / compassionate / steady)
- Daily Dharma verse theme (amplify / comfort / direct)
- Karma actions (outward giving / inward care / growth)
- Featured shortcut (meditation type / AI Saarthi / intention setting)
- Proactive check-in scheduling (none / 11 AM push / midday nudge)
- Night reflection pre-loading (gratitude / loop-closing / accountability)

---

### BOTTOM NAVIGATION (5 tabs — unchanged)
- Home (gate + daily loop overview)
- Saarthi (AI companion chat)
- Wisdom (Gita GPT + Ask Anything)
- Practice (Pooja Guide + Meditations + Bhajans)
- Journey (Karma Journal + Mood trends + Streaks)

---

---

## 8. PERSONALIZATION ENGINE

Sakhaa becomes more valuable the longer a user uses it. This is the moat competitors cannot copy — it's built on relationship, not content.

### Two Layers of Personalization

**Layer 1 — Session context (happiness gate)**
Updated every time the app is opened. Drives everything the user sees in that session. Fast, real-time, immediate. This is what makes each session feel personally responsive.

**Layer 2 — Long-term emotional memory**
Built over weeks and months from conversation history, mood logs, gate answers, and journal entries. This is what makes the app feel like it truly knows you over time.

Both layers work together. Session context tells the app how you feel right now. Long-term memory tells the app who you are becoming.

---

### What the Gate Feeds Into Personalization

Every gate answer is stored with:
- Timestamp
- Mood selected (happy / so-so / not great)
- Stress source selected (if unhappy)
- Intervention chosen (breathing / talk / Gita / just open app)
- Whether mood was updated mid-day

Over time this builds:
- **Peak stress patterns** — which days and times the user is most likely to open "not great"
- **Most common stress sources** — work appears 70% of unhappy mornings for this user
- **Most effective interventions** — breathing works better than conversation for this user under work stress
- **Mood trajectory** — is the user trending calmer or more stressed over the past month?

---

### What Gets Learned Over Time

**Emotional patterns:**
- Peak stress times (time of day, day of week) — from gate history
- Most common stress triggers (work/relationships/family/self) — from gate + AI Saarthi
- Which interventions work (breathing vs. mantra vs. Gita wisdom vs. music) — from gate choices + follow-up engagement
- Mood trend over weeks and months — from daily gate answers + journal

**Spiritual preferences:**
- Preferred deities or traditions (if any)
- Favourite meditation style (silent/guided/music-based)
- Favourite bhajans or mantras
- Interest level in Panchang (high/low)
- Depth of Gita engagement (surface/moderate/deep)

**Behavioural patterns:**
- Morning vs. night person
- Prefers short or long sessions
- Engages more with text or audio
- Mood update frequency (how often they change their gate answer mid-day)

---

### Personalization in Practice

**Month 1 — Session context only:**
Gate answer → home screen changes → verse chosen by mood.
Feels responsive but not yet deeply personal.

**Month 3 — Patterns emerging:**
> "Good morning, Priya. You've had a few tough Mondays lately — I noticed. Today's guidance is about staying grounded when the week feels heavy before it's even started."

**Month 6 — Full emotional memory:**
> "Good morning, Priya. You've been under a lot of work pressure this week — your gate answers have been 'not great' four days running. Today's verse is especially relevant. And since today is Ekadashi, the energy is good for letting go of what you're carrying. Your morning action: 3 minutes of silent breathing before you check your phone."

**The difference between Month 1 and Month 6 is the moat.** A competitor can copy the gate. They cannot copy six months of a specific user's emotional history.

---

### Privacy Principle (Non-Negotiable)
- All personalization is consent-driven
- Gate answers stored locally first, synced to server only with explicit permission
- Users can view exactly what is stored about them (full data transparency screen)
- Full data deletion available anytime — deletes gate history, conversation memory, journal entries
- No selling or sharing of personal data
- No social media surveillance or cross-app tracking
- Personalization built only from conversations within the app

---

---

## 9. GAMIFICATION & GROWTH SYSTEM

Gamification serves one purpose: making spiritual habit formation feel like progress, not pressure.

### Karma Points System

**Earning karma (daily):**

| Action | Points |
|---|---|
| Morning meditation (5 min) | +10 |
| Read/reflect on Gita verse | +10 |
| Complete gratitude reflection | +10 |
| Help someone (self-reported) | +10 |
| Practice patience (self-reported) | +10 |
| Complete night reflection | +15 |
| Do a complete pooja | +20 |
| 108 Naam Jap | +15 |
| Ask a meaningful spiritual question | +5 |

**Daily karma goal:** 100 points (achievable in 20–30 minutes total across the day)

**Karma levels:**

| Level | Points | Title |
|---|---|---|
| 1 | 0–500 | Seeker |
| 2 | 500–2000 | Sadhak |
| 3 | 2000–5000 | Dharmic |
| 4 | 5000–12000 | Yogi |
| 5 | 12000+ | Mahatma |

**Streaks:**
- Daily app engagement streak
- Morning ritual streak
- Night reflection streak
- Meditation streak
- Streaks shown on home screen with fire animation
- Streak protection: one "grace day" per week (real life happens)

**Badges (sample):**
- "First Gita verse understood" — first Gita GPT session
- "Still waters" — 7 consecutive days of mood improvement
- "Karma keeper" — 30-day streak
- "Midnight seeker" — asked a deep question after 10 PM
- "Festival faithful" — completed pooja on 5 festivals
- "Helper" — self-reported helping someone 10 times

**Principles:**
- Positive reinforcement only — no punishment for missing days
- No comparison with other users (spiritual growth is personal)
- No karma loss (only gain) — this is not judgment, it's encouragement
- Badges are milestones, not trophies for showing off

---

## 10. SAFETY & CRISIS FRAMEWORK

This is a non-negotiable foundation of the product. A product that handles emotional distress must have excellent safety infrastructure.

### Self-Harm and Suicidal Ideation

**Detection:** Keyword + sentiment analysis. Triggers on: "suicide," "self-harm," "kill myself," "end my life," "don't want to live," "no point in living," combined with negative sentiment context.

**Immediate AI response — scripted, not improvised:**
> "What you're sharing matters, and I want to make sure you're okay. I'm an AI and not equipped to support you through this — but there are people who are. Please reach out right now:
> India: iCall — 9152987821 | AASRA — 9820466627
> If you're outside India, visit findahelpline.com
> I'll be here when you're ready to talk about anything else."

**What the AI NEVER does in crisis:**
- Offer spiritual bypass ("Trust karma, things will improve")
- Continue normal conversation
- Make the user feel guilty for sharing
- Promise confidentiality (cannot guarantee this)
- Ask probing questions that deepen distress

**Post-crisis protocol:**
- Incident logged and flagged for human review within 2 hours
- Account marked for gentle monitoring
- 24 hours later, a soft check-in: "How are you doing today?"

### Emotional Distress Severity Levels

| Level | Signals | AI Response |
|---|---|---|
| Mild | Occasional stress, sadness | Supportive conversation + calming action |
| Moderate | Persistent anxiety, relationship pain | Validation + breathing + resources mentioned |
| Severe | "I can't cope," "Everything is hopeless" | Crisis resources + therapist referral offered |
| Critical | Self-harm/suicidal language | Scripted crisis response immediately |

### Responsible AI Principles

The AI will never:
- Diagnose any mental health condition
- Prescribe medication or supplement advice
- Give medical advice of any kind
- Make predictions about a user's future
- Claim divine authority or special spiritual powers
- Encourage isolation from family, friends, or professionals
- Create dependency ("Only I can help you")
- Use fear, guilt, or shame as motivators
- Make claims about other religions or traditions

### Mandatory Disclaimers (Onboarding + Settings)
- "Sakhaa is a spiritual wellness companion, not a replacement for professional mental health support."
- "If you are experiencing a mental health crisis, please contact a qualified professional."
- "AI responses are for reflection and general guidance — not medical, legal, or financial advice."

---

## 11. ONBOARDING FLOW

### Principle
The onboarding must do three things: (1) emotionally connect the user to the product, (2) collect enough personalization data to make Day 1 feel tailored, (3) get the user to their first meaningful experience in under 3 minutes.

### Screen Flow

**Screen 1 — Emotional hook**
Visual: Peaceful illustration — early morning light, a lamp, or open sky
Headline: "A wise, warm companion for your everyday life."
Subheading: "Dharma wisdom. Emotional support. Daily spiritual practice. All in one place."
CTA: "Begin"

**Screen 2 — Name + DOB**
"What's your name?" (text)
"When were you born?" (date picker — used for Panchang personalization, optional)
Reassurance: "This is just for personalization. We never share your data."

**Screen 3 — What brings you here? (multi-select, up to 3)**
- Reduce stress and anxiety
- Understand the Bhagavad Gita
- Build a daily spiritual practice
- Get guidance on rituals and poojas
- Find more peace and purpose
- Better emotional balance
- Just curious about Dharma

**Screen 4 — What weighs on you most? (single select)**
- Work and career pressure
- Relationships and family
- Loneliness and isolation
- Overthinking and anxiety
- Feeling lost or purposeless
- Financial stress
- I'm generally okay — just want to grow

**Screen 5 — Spiritual background (optional, skip available)**
"Where are you with spirituality right now?"
- I have a regular practice (meditation, pooja, reading)
- I'm curious but inconsistent
- I grew up with traditions but drifted away
- I'm new to all of this — start simple

**Screen 6 — What do you want each morning?**
"Your morning moment will be sent at:"
[Time picker — default 7:30 AM]
"How long do you want it to be?"
- Quick — 2 minutes
- Short — 5 minutes
- Full — 10 minutes

**Screen 7 — Welcome**
"Welcome, [Name]."
[Warm illustration — sunrise or diya]
"Here's what I'll do for you every day:"
- Morning Dharma moment (at [time they set])
- Wisdom whenever you need it
- Evening reflection to end the day well
- Remember you and grow with you

CTA: "Let's start with today's wisdom →"
→ Lands directly on today's Gita verse with an invitation to explore

---

## 12. CONTENT ARCHITECTURE

### Gita Knowledge Base
- All 700 verses, all 18 chapters
- Each verse tagged with: themes, emotional situations, life contexts, difficulty level
- Semantic mapping: life situations → relevant verses (AI-powered)
- Multiple interpretation layers: literal, philosophical, practical, modern
- Language: English and Hindi (Phase 1), Tamil and Telugu (Phase 2)

### Meditation Library
- Categorized by: mood (stressed/anxious/sad/grateful/energetic), duration (3/5/10/20 min), type (guided/music/silent/breathing)
- Personalized recommendations based on user's current emotional state
- Sleep meditations (dedicated category — 15–30 min)
- Morning energizing meditations
- Custom bhajan playlist (user curates favorites)
- Naam Jap sessions (108 / 1008 repetitions, guided)

### Dharma Wisdom Library
- Daily Dharma principles (365 unique, cycling)
- Drawn from: Bhagavad Gita, Upanishads, Yoga Sutras, Buddhist teachings, Sufi wisdom
- Each principle: title, 2-line explanation, one practical application
- Searchable by theme: patience, forgiveness, purpose, detachment, karma, love, discipline

### Pooja Content
- Step-by-step guides for 20+ poojas (MVP: 8 core poojas)
- Each pooja: materials list, setup guide, step-by-step, Sanskrit transliteration, meaning, simplified version
- Festival calendar with 3-day advance alerts
- Video/audio for aarti and mantras (future phase)

### Ask Anything Knowledge Base
- Seeded with 500+ common spiritual questions and high-quality answers
- AI synthesizes new answers from knowledge base + LLM reasoning
- Grows with every user question (anonymized)
- Reviewable by spiritual advisors quarterly for accuracy

---

## 13. TECH STACK

Sakhaa is built in two phases. Phase 1 validates the product with real users at zero cost. Phase 2 converts the proven product into native apps.

---

### PHASE 1 — PWA (Current Build)
*Goal: Validate the sacred friend concept with real users. Zero cost to 1,000 users.*

#### Frontend
**HTML + CSS + Vanilla JavaScript**
- Single HTML file — all screens, all features
- PWA (Progressive Web App) — installable on Android and iOS from browser
- Web App Manifest + Service Worker — offline caching, home screen icon
- Fonts: Google Fonts (Cormorant Garamond + DM Sans) — free
- Deploy URL: sakhaa.vercel.app

**Why not a framework:** At this stage, plain HTML/JS is faster to build, easier to debug, and anyone can contribute. No build step, no dependencies, no complexity.

#### AI — Primary
**Groq API + Llama 3.3 70B**
- Free tier: 14,400 requests/day — covers ~1,000 users at 10 messages/day
- Speed: 500+ tokens/second — conversations feel instant
- API endpoint: https://api.groq.com/openai/v1/chat/completions
- Model: llama-3.3-70b-versatile
- System prompt: Sakhaa Soul Document (sacred friend personality)

**Fallback: Gemini 2.0 Flash (Google)**
- Activates if Groq rate limit hit
- Free tier: 1,500 requests/day
- API endpoint: https://generativelanguage.googleapis.com/v1beta/models/

**Premium tier AI: Claude API (Anthropic)**
- Reserved for paying users (₹399/month Pro tier)
- Model: claude-sonnet-4-20250514
- Introduced only when premium tier launches
- Best emotional intelligence for sacred friend personality

#### Backend
**Firebase (Google) — Free Spark Plan**
- Firestore: user profiles, conversation memory, gate history, karma, journals
- Firebase Auth: Google sign-in + anonymous sign-in
- Free tier covers: 50K reads/day, 20K writes/day, 1GB storage
- Region: asia-south1 (Mumbai — lowest latency for India)

**Firebase Functions (Phase 1.5)**
- Scheduled follow-up notifications (11 AM check-in for unhappy gate users)
- Weekly karma report generation (Sunday evening)
- Requires Blaze plan upgrade (pay-as-you-go, minimal cost)

#### Hosting & Deployment
**Vercel (Free Hobby Plan)**
- URL: sakhaa.vercel.app (free, no domain purchase needed)
- Auto HTTPS — required for PWA service worker
- 100GB bandwidth/month free
- Auto-deploy: push to GitHub → live in 30 seconds
- Zero configuration for single HTML file

#### Development Tools
**Claude Code** — AI coding assistant ($20/month via Claude Pro)
- Reads entire codebase, writes features from CLAUDE.md instructions
- CLAUDE.md contains soul document + architecture + design system
- One feature at a time — never "build everything at once"

**VS Code** — code editor (free)
**GitHub** — code hosting, version control, deployment trigger (free private repos)
**Firebase Console** — database viewer + user monitoring (free)

#### Analytics
**Firebase Analytics** — basic usage metrics (free)
**Manual tracking** — Google Sheet for gate answers, return rates, feedback

---

### PHASE 2 — Native Apps (After Validation)
*Goal: Native iOS + Android + Web after PWA proves product-market fit.*
*Trigger: 500+ active users, 40%+ monthly retention, "feels like a sacred friend" feedback.*

#### Frontend
**Flutter (iOS + Android + Web)**
- Single Dart codebase compiles to all three platforms
- Native performance: smooth animations, haptic feedback
- Push notifications via Firebase Cloud Messaging (FCM) — #1 DAU driver
- App Store (iOS) + Play Store (Android) presence
- Offline support for meditations and daily content

**Why Flutter over React Native:** Better animations (critical for breathing exercises, karma celebrations), stronger Firebase integration, better iOS + Android parity.

#### AI
Same as Phase 1 — Groq primary, Claude premium. No change needed.

#### Backend
Same Firebase stack — Firestore schema unchanged. Add:
- Firebase Cloud Messaging (FCM) for push notifications
- Firebase Remote Config for feature flags
- Firebase App Check for security

#### State Management
**Riverpod** — Flutter's best state management solution

#### Analytics
**Mixpanel** — user behaviour funnels, retention cohorts, feature adoption

---

### COST COMPARISON

| Stage | Users | Monthly Cost |
|---|---|---|
| Phase 1 PWA | 0–500 | ₹0 |
| Phase 1 PWA | 500–1,000 | ₹0–800 (minor API overages) |
| Phase 1 PWA | 1,000–5,000 | ₹2,000–5,000 |
| Phase 2 Flutter | Post-PMF | Revenue covers all costs |

**The only money spent before 1,000 users: $20/month Claude Pro (for Claude Code).**

### Data Architecture (Firestore)

```
users/{userId}/
  profile/          → name, dob, goals, stress triggers, preferences
  conversations/    → AI chat history (last 30 exchanges + weekly summaries)
  gate_history/     → daily gate answers, stress sources, interventions chosen, mood updates
  gate_session/     → today's active gate answer (read by all features in real time)
  mood_history/     → daily mood logs, calmness scores, gate answer trends
  karma/            → daily points, streaks, badges, level
  practices/        → meditation history, pooja history, favorites
  journal_entries/  → karma journal reflections (encrypted)

content/
  gita_verses/      → all 700 verses with metadata + mood tags
  daily_dharma/     → 365 wisdom principles + mood tags (happy/unhappy/neutral)
  poojas/           → step-by-step pooja guides
  meditations/      → meditation library metadata + mood tags
  qa_library/       → Ask Anything question bank
```

**Gate session data structure:**
```
gate_session: {
  date: "2026-05-26",
  mood: "unhappy",                    // happy | neutral | unhappy
  stress_source: "work",              // null if happy/neutral
  intervention: "breathing",          // breathing | talk | gita | skip
  updated_at: null,                   // timestamp if mood updated mid-day
  updated_mood: null,                 // new mood if updated
  verse_served: "2.14",               // which verse was shown this morning
  follow_up_scheduled: "11:00",       // notification time if unhappy
  night_reflection_context: "..."     // pre-loaded journal opening line
}
```

### Privacy & Security
- All conversation data encrypted at rest (AES-256)
- End-to-end encryption option for journal entries
- No third-party data sharing except Claude API (with DPA in place)
- India data residency (Firebase asia-south1 region)
- DPDP Act compliance (India's data protection law)
- Full data export and deletion available in settings

---

## 14. NOTIFICATIONS STRATEGY

Notifications are the #1 driver of DAU — and the #1 cause of uninstalls if done wrong. Every notification in Sakhaa is gate-aware — it knows what the user answered this morning and references it directly.

### Daily Notification Schedule (Gate-Driven)

| Time | Notification | Gate-Aware? | Personalisation |
|---|---|---|---|
| 7:30 AM (user-set) | Happiness Gate opens | Is the gate | Opening question — no content until answered |
| 11:00 AM | AI Saarthi check-in | Yes — unhappy gate only | References specific stress source from morning |
| 12:30 PM | Midday nudge | Yes — so-so gate only | "Did you get to your intention this morning?" |
| 6:30 PM | Pooja / ritual reminder | Yes — mood-matched suggestion | Only for users who practice; tone matches gate |
| 9:00 PM (user-set) | Night reflection | Yes — all states | Opening line references morning gate answer |

**Maximum:** 3 notifications per day (hard cap — never exceed this)
**Quiet hours:** 10 PM – 7 AM (default, user-adjustable)

---

### Gate-Aware Notification Copy

**Morning gate (all users):**
> "Good morning, Priya. How are you feeling today? ☀️"
→ Tapping opens the gate directly. No content until answered.

**Midday check-in (unhappy gate users only):**
> "Hey Priya — how are you doing now? You were carrying a lot this morning."

> "Checking in. Work stress can ease through the day. How are you feeling?"

> "I've been thinking about what you shared this morning. How's your energy now?"

**Midday nudge (so-so gate users only):**
> "Did you get to your intention this morning? Even one step counts."

**Night reflection — happy gate:**
> "You had a good day. Let's close it well — 5 minutes?"

**Night reflection — unhappy gate:**
> "Today was heavy. I'm here to help you close it gently."

**Night reflection — so-so gate:**
> "Steady day. Let's see what you built — reflection time."

**Festival notification (all users, gate-independent):**
> "Ekadashi tomorrow. A simple guide is ready — even lighting a diya counts."

---

### Notification Principles
- Always personal — "[Name]" not "Hey there"
- Always references gate context when available
- Never urgent, never shame-based ("Don't break your streak!" is forbidden)
- Never sent to happy-gate users unless they haven't opened the app by midday
- Unhappy-gate users get one proactive check-in — not repeated if ignored
- User can pause all notifications for 24 hours with one tap (rest day)

---

---

## 15. MONETIZATION

### Model: Freemium Subscription

### Free Tier (Always available)
- Daily morning Dharma guidance (text)
- 3 AI Saarthi conversations per day (5 exchanges each)
- Gita GPT: 5 questions per day
- Ask Anything: 3 questions per day
- Basic night reflection (no AI response, just logging)
- Basic karma scoring and streaks
- Panchang widget
- 1 guided meditation per week
- 3 pooja guides (basic: Ganesh, Lakshmi, generic morning)

**Free tier philosophy:** Enough to feel real value, limited enough that power users upgrade.

### Premium: "Sakhaa Pro" — ₹399/month or ₹3,499/year (~$4.99/month)
- Unlimited AI Saarthi conversations
- Full Gita GPT access (unlimited questions)
- Full Ask Anything library
- Complete night reflection with AI response and weekly karma report
- Full meditation library (200+ meditations, all categories)
- Personalized bhajan playlist
- All 20+ pooja guides
- Advanced mood analytics and emotional insights
- AI memory (remembers you across 6 months of conversations)
- Full Panchang with festival prep guides
- Offline access to meditations and daily content
- Ad-free

**Pricing rationale:**
- ₹399/month = price of one coffee + a samosa/month in Indian metros
- $4.99/month = 3x cheaper than Calm ($14.99), 2.5x cheaper than Headspace ($12.99)
- Annual at ₹3,499 = 27% discount (strong incentive to commit)
- Indian pricing in INR removes friction for primary market

### Family Plan: "Sakhaa Family" — ₹699/month
- All Pro features for up to 4 family members
- Shared festival calendar
- Optional family karma board (encouragement, not competition)

### Revenue Projections

| Metric | Month 6 | Month 12 | Month 18 |
|---|---|---|---|
| Total users | 30K | 100K | 250K |
| Premium % | 8% | 12% | 15% |
| Premium users | 2.4K | 12K | 37.5K |
| MRR (INR) | ₹9.6L | ₹47.9L | ₹149L |
| MRR (USD) | ~$11.5K | ~$57K | ~$179K |
| Annual Revenue | ~$138K | ~$684K | ~$2.1M |

### Future Revenue Streams (Post-PMF)
- Expert satsang series (live sessions with verified spiritual teachers, ticketed)
- Premium content packs ("Deep Gita" 30-day course, "Meditation Mastery" program)
- Corporate wellness partnerships (employee wellness programs)
- Wearable integrations (Apple Health, Fitbit — data insights premium)

---

## 16. SUCCESS METRICS

### North Star Metric
**Daily gate completion with session continuation**
Definition: Users who answer the happiness gate AND complete at least one further action in the same session (Daily Dharma, AI conversation, karma action, or meditation) — measured daily.

Why: The gate alone proves the app was opened. Continuing after the gate proves the user found value. Together they indicate genuine daily habit, not accidental opens.

---

### Gate-Specific Metrics (New — Primary Health Indicators)

| Metric | Definition | 3-Month Target | 12-Month Target |
|---|---|---|---|
| Gate completion rate | % of app opens where gate is answered | 85% | 92% |
| Gate-to-session rate | % who continue after answering gate | 70% | 80% |
| Unhappy path resolution | % of unhappy-gate users who engage with offered support | 60% | 72% |
| Mood update rate | % of users who update mood mid-day at least once/week | 15% | 25% |
| Gate streak | Average consecutive days of gate completion | 8 days | 18 days |
| Night reflection loop closure | % of unhappy-gate mornings that end with night reflection | 45% | 60% |

**The most important gate metric:** Night reflection loop closure for unhappy users. If someone opened the app stressed and ended their day with a reflection, the app completed its emotional promise. That is the product working.

---

### Engagement Metrics

| Metric | Definition | 3-Month Target | 12-Month Target |
|---|---|---|---|
| DAU | North star gate + session engagement | 8K | 40K |
| MAU | Active in last 30 days | 25K | 120K |
| DAU/MAU ratio | Habit formation indicator | 32% | 33% |
| Gate completion rate | % of opens with gate answered | 85% | 92% |
| Morning ritual completion | % completing post-gate morning moment | 55% | 65% |
| Night reflection completion | % completing nightly | 40% | 60% |
| AI conversation depth | Average turns per conversation | 6 | 9 |
| Gita GPT sessions/week | Per active user | 3 | 5 |
| Touch points per active user/day | Average daily feature interactions | 3.2 | 4.5 |

### Retention Benchmarks

| Cohort | Week 1 | Month 1 | Month 3 |
|---|---|---|---|
| Target | 55% | 38% | 25% |
| Healthy range | 50–65% | 35–45% | 22–30% |
| Red flag | <40% | <25% | <15% |

*Note: Best-in-class wellness apps (Calm, Headspace) achieve 25–35% M1 retention. Target is competitive.*

### Impact Metrics (Proxy for "Are we helping people?")

| Metric | Measurement | Target |
|---|---|---|
| Stress reduction (self-reported) | Weekly survey: "Did this help?" | 70%+ say yes |
| Mood improvement trend | Compare Week 1 vs. Month 3 gate answer distributions | 45% show improvement |
| Unhappy-to-happy arc | % of users who trend from majority unhappy gates to majority happy gates over 3 months | 35% |
| User trust score | Monthly NPS survey | NPS > 50 |
| Spiritual growth self-rating | Quarterly survey | 60%+ report feeling more grounded |
| Testimonials | Qualitative user stories | 100+ by Month 6 |


### Business Metrics

| Metric | 6-Month | 12-Month |
|---|---|---|
| Premium conversion | 8% | 12% |
| Monthly churn | 6% | 4% |
| LTV (premium user) | ₹8,000 (~$96) | ₹12,000 (~$144) |
| CAC | ₹800 (~$9.6) | ₹600 (~$7.2) |
| LTV:CAC ratio | 10:1 | 20:1 |

### Safety Metrics

| Metric | Target | Measurement |
|---|---|---|
| Crisis escalation rate | <0.5% of users/month | Automated detection log |
| Human review response time | <2 hours | System log |
| AI harmful output rate | <0.1% | QA sampling (10%/week) |
| User-reported harmful content | <5 incidents/month | In-app flag system |

---

## 17. COMPETITIVE ADVANTAGE SUMMARY

### vs. Calm & Headspace (Western wellness)
- They offer content (meditations, sleep stories)
- We offer relationship (AI that knows you)
- They are Western-centric — no Gita, no Panchang, no bhajans
- We are built for Indian spiritual context
- Their AI is minimal — ours is the product

### vs. Gyan App, Bhagavad Gita apps (Indian scripture apps)
- They are reference tools — passive consumption
- We are active companions — daily engagement loops
- They have no emotional intelligence
- We combine wisdom with emotional support
- Their retention is low (use once, uninstall)
- Our retention is high (3 daily touch points)

### vs. Astrology apps (Astrotalk, AstroSage)
- They are fear-based and prediction-focused
- We are wisdom-based and growth-focused
- They monetize anxiety
- We monetize peace

### vs. Therapy apps (BetterHelp, TherapyMantra)
- They are clinical and expensive
- We are spiritual and affordable
- They require scheduling
- We are always available
- We are complements, not competitors — we refer to them when needed

### Our Sustainable Moat
1. **Emotional memory** — the longer users stay, the more irreplaceable we become
2. **Indian spiritual specificity** — no Western company will build Pooja Guide, Panchang, and Bhagavad Gita GPT with this depth
3. **Daily ritual structure** — 3 engineered touch points per day vs. competitors' 1
4. **Non-fear positioning** — in a category full of anxiety-exploiting apps, trust is a powerful differentiator
5. **Brand as "spiritual friend"** — emotional brand associations are extremely difficult to copy

---

## 18. MVP FEATURE LIST (What to Build First)

### Must-Have (Launch with these)
- AI Saarthi companion (emotional chat + memory + follow-ups)
- Daily Dharma morning moment (text + notification)
- Gita GPT (life questions → Gita wisdom)
- Night reflection + Karma Journal (basic)
- Karma scoring + streaks
- Ask Anything (basic Q&A, 500 seeded questions)
- Basic Panchang widget
- Mood tracking
- Basic meditation recommendations (10 curated meditations)
- Onboarding flow
- Push notifications

### Should-Have (Add in first 3 months post-launch)
- Pooja Guide (8 core poojas)
- Personalized meditation library (50+ meditations)
- Bhajan playlist (personalized)
- Weekly Karma Report
- Advanced mood analytics
- Stress follow-up system (adaptive timing)

### Could-Have (3–6 months post-launch)
- Full pooja library (20+ poojas)
- Gita verse search (all 700)
- Festival preparation guides
- Family plan features
- Hindi language support
- Audio for poojas (aarti, mantras)

### Won't-Have (Post-PMF)
- Voice AI companion
- Community circles / satsang groups
- Live expert sessions
- Wearable integrations
- Kids mode
- Regional language expansion beyond Hindi

---

## 19. PHASED ROADMAP

### Phase 0: PWA Validation (Weeks 1–8) ← CURRENT PHASE
Prove the sacred friend concept with real users before building native apps.

Stack: HTML/CSS/JS + Groq AI + Firebase + Vercel
Build with: Claude Code
Cost: ₹0/month

Priorities: Complete PWA with all 6 features — happiness gate + AI Saarthi + Daily Dharma + Ask Anything + Karma Journal + basic Pooja Guide

Success criteria: 500+ users, 40%+ monthly retention, "feels like a sacred friend" feedback, users asking "when is the app?"

---

### Phase 1: Foundation — Flutter (Months 3–6)
Convert proven PWA into native iOS + Android app.

Priorities: AI Saarthi + Morning Dharma + Night Reflection + Gita GPT + Basic Karma + Push Notifications

Success criteria: 10K users, 40% M1 retention, 4.5+ app store rating, users saying "I miss it when I don't use it"

---

### Phase 2: Depth (Months 4–6)
Add content that justifies premium and expands use cases.

Priorities: Pooja Guide + Full Ask Anything + Meditation Library + Premium tier launch + Hindi support

Success criteria: 50K users, 8% premium conversion, ₹9.6L MRR, NPS > 45

---

### Phase 3: Scale (Months 7–12)
Grow distribution, strengthen moat, expand features.

Priorities: Corporate wellness partnerships + Family plan + Festival campaigns + Advanced personalization + Community features (beta)

Success criteria: 150K users, 12% premium conversion, ₹47.9L MRR, <4% churn

---

### Phase 4: Expand (Months 13–18)
Become the category-defining spiritual wellness platform.

Priorities: Tamil + Telugu language + Live satsang + Expert content + Wearable integrations + International expansion (US/UK diaspora focus)

Success criteria: 300K users, ₹149L MRR, recognized as #1 Indian spiritual wellness app

---

## 20. GO-TO-MARKET STRATEGY (ZERO BUDGET FIRST)

### Phase 0 — Validate (Weeks 1–4, ₹0)
Before building the Flutter app, validate core demand using the PWA (already built).

1. Deploy sakhaa_pwa.html to Vercel — live URL in 30 seconds (free)
2. Add Firebase config — memory and personalisation enabled
3. Share URL in WhatsApp groups, Reddit (r/spirituality, r/india, r/hinduism)
4. Get 50–100 users using it on their phones via browser
5. Measure: Do they return daily? Do they say "this felt like a sacred friend?"

Go signal: 60%+ return after 7 days, 70%+ say it helped, users asking "is there an app?"

---

### Phase 1 — Early Adopters (Months 1–3, low spend)

**Organic channels:**
- Reddit (r/spirituality, r/india, r/hinduism, r/meditation) — authentic posts, not spam
- Twitter/X threads on spirituality + Dharma (build in public)
- Instagram Reels sharing one Gita verse per day with modern application
- YouTube Shorts: "What does [Gita concept] actually mean?" (30-60 seconds)

**Partnerships (zero cost):**
- Yoga teachers and wellness coaches (offer free premium for content collaboration)
- Spiritual content creators (mutual promotion)
- Meditation app complementary partnerships

**Word-of-mouth mechanic:**
- In-app "Share today's Gita verse" as a WhatsApp-optimized card
- "Send this to someone who needs this today" after AI Saarthi sessions
- Referral: 1 month free premium for successful referral

---

### Phase 2 — Paid Growth (Month 4+, after PMF)
Start paid only after achieving: 10K users, 35%+ M1 retention

**Channels:**
- Instagram/Facebook ads targeting: 20–40, India, interested in meditation/yoga/spirituality/Gita
- YouTube pre-roll on spiritual content
- Podcast sponsorships (Indian wellness podcasts)

**CAC target:** ₹600–800 per user (premium)
**Monthly budget start:** ₹2L, scale to ₹8L when ROAS is proven

---

## 21. TEAM REQUIREMENTS

### Build Approach
Solo developer building with Claude Code.

**Stack:**
- You (product vision + Claude Code for all development)
- Groq API (free AI — Llama 3.3 70B)
- PWA on Vercel (live URL, all devices)
- Firebase (backend — memory + auth)
- GitHub (private repo — personal project)

**Months 1–4:** Build PWA with Claude Code, deploy on Vercel, share URL with friends and communities for feedback.

**Months 5–8:** Iterate based on real user feedback. Add remaining features. Grow organically.

**Months 9+:** If traction proves demand, consider Flutter native app. Decision based on real usage data, not assumptions.

---

## FINAL PRODUCT SUMMARY

**Sakhaa** is not an app. It is a daily relationship.

It is the only product that gives a spiritually curious, emotionally stressed modern Indian everything they need in one place:

- The emotional support of a wise, non-judgmental friend (AI Saarthi)
- The wisdom of the Bhagavad Gita made accessible and personal (Gita GPT)
- A daily spiritual moment that takes 5 minutes and actually works (Daily Dharma)
- Guidance on rituals without embarrassment or expensive pandits (Pooja Guide)
- Any spiritual question answered honestly, plainly, warmly (Ask Anything)
- An evening ritual that builds self-awareness without guilt (Karma Journal)

It competes with no single app because no single app does all of this. It beats Western wellness apps because it speaks their language. It beats Indian scripture apps because it has emotional intelligence. It beats astrology apps because it doesn't exploit fear.

Its moat is the relationship it builds — and the longer users stay, the deeper that moat becomes.

The product is ready to be built. Start with the Telegram bot. Validate in 4 weeks. Then build what users prove they love.

---

*Sakhaa PRD v2.0 — Synthesized from KrishnAI original PRD, PM review, and 5-feature market analysis*
*Next step: Technical architecture document + Design wireframes*
