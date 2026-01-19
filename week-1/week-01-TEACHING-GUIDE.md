# Week 01 — Teaching Guide (Instructor Only)

> **Purpose:** Internal teaching notes with timing, pacing, and intent
> **Duration:** 3 hours (180 minutes)

---

## Overall Teaching Strategy

- Teach mental models, not syntax
- Slow down on concepts, not tags
- Live typing > slides
- Exercises are non-negotiable

---

## 0. Opening & Framing — 10 min

**Intent:** Set expectations and authority.

Say:

- This course is about understanding how the web works
- Frameworks change, fundamentals don’t
- Typing > copy-paste

---

## 1. Why This Week Matters — 10 min

**Intent:** Motivation.

Emphasize:

- CSS depends on HTML structure
- JS depends on DOM
- Backend depends on request–response

---

## 2. Internet vs World Wide Web — 15 min

**Intent:** Kill misconceptions early.

Explain:

- Internet = network
- Web = service on top of internet

Ask:

- Is WhatsApp a website?
- Is email part of the web?

---

## 3. Client–Server Model — 15 min

**Intent:** Core architectural model.

Steps:

1. Client sends request
2. Server responds
3. Browser renders

Draw this if possible.

---

## 4. What Happens When You Type a URL — 25 min (CRITICAL)

**Intent:** Build step-by-step clarity.

Flow:

- Cache
- DNS
- HTTP request
- HTML response
- Rendering

Do not rush. Repeat in different words.

---

## 5. Understanding a URL — 5 min

**Intent:** Recognition, not memorization.

Break down protocol, domain, path, query. (Covered partially in Section 4)

---

## 6. Static vs Dynamic Websites — 5 min

**Intent:** Introduce backend conceptually.

Key line: HTML always reaches the browser. Keep brief.

---

## 7. What HTML Is (and Is Not) — 10 min

**Intent:** Reset assumptions.

Emphasize:

- No logic
- No conditions
- Structure only

---

## 8. Basic HTML5 Document Structure — 25 min (LIVE)

**Intent:** Learn by typing.

Type a minimal HTML page live.
Let students make mistakes.

---

## 9. Common HTML Tags — 10 min

**Intent:** Familiarity, not mastery.

Cover quickly:

- Headings, Paragraphs
- Links, Images
- Lists, Tables (light — depth in Week 2)

---

## 10. Forms — How Data Enters Systems — 10 min

**Intent:** Real-world relevance.

Explain: Forms are everywhere. Focus on structure only. Depth in Week 3.

---

## 11. Inputs and Labels — 5 min

**Intent:** Introduce quality & accessibility.

Quick explanation: why labels matter (`for` attribute links to `id`).

---

## 12. In-Class Exercises — 25 min (LOCK-IN)

**Intent:** Convert theory to practice.

Walk around.
Correct structure, not appearance.

---

## 13. Homework — 5 min

**Intent:** Reinforce learning.

Rules:

- Rebuild from scratch
- Add one new field
- Be ready to explain choices

---

## 14. Wrap-up & Preview — 5 min

Reinforce: Client–server model, HTML = structure.

Preview: More HTML next week (lists, tables, semantic elements).

## 📺 Pre-Class Review Links — Week 01 (Instructor)

> **Purpose:** Refresh concepts before teaching
> **Total prep time:** ~2 hours
> Focus on **mental models**, not syntax or frameworks.

---

### 1. How the Web Works (Internet, DNS, Client–Server)

**YouTube — Computerphile**

- How the Internet Works
  https://www.youtube.com/watch?v=7_LPdttKXPc
- What is DNS?
  https://www.youtube.com/watch?v=72snZctFFtA

**Frontend Masters**

- Brian Holt — _Web Development Foundations_
  (Sections: How the Internet Works, Client–Server Model)
  https://frontendmasters.com/courses/web-development-v3/

---

### 2. URL, Request–Response Flow (Critical for Week 01)

**YouTube — Fireship**

- How the Web Works
  https://www.youtube.com/watch?v=hJHvdBlSxug

**Frontend Masters**

- Brian Holt — _Web Development Foundations_
  (Section: What Happens When You Visit a Website)
  https://frontendmasters.com/courses/web-development-v3/

---

### 3. What HTML Is (and Is Not)

**Frontend Masters**

- Jen Simmons — _HTML Semantics & Structure_
  (Sections: What HTML Is For, Document Structure)
  https://frontendmasters.com/courses/html-semantics/

This helps reinforce:

- HTML ≠ programming
- Structure over styling
- Why tags exist at all

---

### 4. Basic HTML Document Structure & Core Tags

**Frontend Masters**

- Brian Holt — _Complete Intro to Web Development_
  (HTML document structure, headings, paragraphs, links, images)
  https://frontendmasters.com/courses/web-development-v3/

---

### Optional Reference (Only if students ask deeper questions)

**MDN Web Docs**

- How the Web Works
  https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works
- HTML Basics
  https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics

---

### What to Explicitly Skip for Week 01

- Forms (covered properly in Week 03)
- CSS / Bootstrap / Tailwind
- JavaScript frameworks
- “Build a website fast” tutorials

Week 01 is about **understanding**, not building fast.
