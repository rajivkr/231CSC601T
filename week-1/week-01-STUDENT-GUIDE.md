# Week 01 — Foundations of the Web & HTML5

> **Goal:** Understand how the web works and write correct HTML
> **Focus:** Concepts first, memorization later

---

## 1. Why This Week Matters

Before learning frameworks, it's important to understand how the browser actually works.

- CSS depends on HTML structure
- JavaScript depends on the DOM
- Backend depends on request–response

**What happens when you skip foundations:**

- Week 3: CSS doesn't work → "Why won't this center?"
- Week 5: JavaScript confusing → "Why is my element null?"
- Week 8: Node.js makes no sense → "What is a request object?"
- Job interview: "How does a website load?" → Silence.

Strong fundamentals make future learning easier.

---

## 2. Internet vs World Wide Web

- **Internet:** Network of connected computers (infrastructure)
- **World Wide Web:** Websites running on the internet (a service on top of the internet)

The internet started in 1969 as ARPANET. Email was invented in 1971. The web? 1991. Email is 20 years older than the web.

Tim Berners-Lee created the web at CERN to help scientists share documents easily.

**Key distinction:** Email, FTP, video calls, gaming — all use the internet but aren't "the web." The web specifically means browser + server + HTTP.

### Examples

| Service           | Uses Internet? | Is it "The Web"? |
| ----------------- | -------------- | ---------------- |
| Gmail in browser  | Yes            | Yes              |
| Gmail app         | Yes            | No (uses APIs)   |
| WhatsApp          | Yes            | No               |
| Netflix in browser| Yes            | Yes              |
| Netflix app       | Yes            | No (mostly)      |
| Online games      | Yes            | No               |
| Video calls       | Yes            | No               |

### Video Reference

Computerphile — The Internet: <https://www.youtube.com/watch?v=7_LPdttKXPc> (Watch: 0:00–3:20)

### Free Course

Internet Fundamentals by Jen Kramer: <https://www.internetfundamentals.com/>

---

## 3. Client–Server Model

Every website works like this:

1. Browser sends a request
2. Server sends a response
3. Browser renders the page

This applies to all websites, simple or complex.

### Key Concepts

- **Stateless:** The server has no memory of previous requests. Each request is independent.
- This is why you have to log in again after closing a tab. Cookies and sessions are mechanisms to simulate memory.
- **One page load = many requests:** Loading a single page triggers dozens of requests (HTML, CSS, JS, images).

### Try This

Open browser dev tools (F12 → Network tab), refresh any page. Each row is a separate request-response conversation.

### Free Course

Full Stack for Front-End Engineers v3 — How the Internet Works: <https://frontendmasters.com/courses/fullstack-v3/how-the-internet-works/>

---

## 4. What Happens When You Type a URL

### The Complete Journey

**Step 1: You type "google.com" and press Enter**
- The browser doesn't know what google.com means. It's just text.
- Computers only understand numbers (IP addresses like 142.250.192.46).

**Step 2: Browser checks local cache**
- Before asking anyone, the browser checks: "Have I been here before?"
- If yes and cache is fresh, skip ahead. This is why sites load faster on second visit.

**Step 3: DNS Resolution**
- DNS = Domain Name System. It converts domain names to IP addresses.
- Browser asks: "What is the IP address for google.com?"
- Important: DNS only gives addresses. It never gives web pages.

**Step 4: TCP Connection**
- Browser establishes a connection to the server.
- For HTTPS: additional TLS handshake for encryption.

**Step 5: HTTP Request**
- Browser sends: "GET / HTTP/1.1"
- This means: "Please give me the homepage."

**Step 6: Server Processing**
- Server receives request and decides what to send.
- Could be static (just read and send a file) or dynamic (run code, query database).

**Step 7: HTTP Response**
- Server sends back: status code + headers + body (the HTML).
- Status 200 = success, 404 = not found, 500 = server error.

**Step 8: Browser Parsing and Rendering**
- Browser receives HTML and reads top to bottom.
- Encounters CSS? Request CSS, apply styles.
- Encounters JS? Request JS, execute code.
- Finally: paint pixels on screen.

### Diagram

```text
[You] → [Browser] → [DNS] → [Server] → [Browser] → [Screen]
         cache?      IP?     request    parse
                             response   render
```

### Common Misconceptions

- DNS does NOT give you the website. It only gives you the address.
- The server does NOT push content to you. You ask, it responds.
- HTTPS encryption happens AFTER DNS. DNS queries are often unencrypted.

### Video Reference

Fireship — How the Web Works: <https://www.youtube.com/watch?v=hJHvdBlSxug> (Watch: 0:00–4:15)

### Free Course

Full Stack for Front-End Engineers v3 — DNS & URLs: <https://frontendmasters.com/courses/fullstack-v3/dns-urls/>

---

## 5. Understanding a URL

URLs are instructions, not just addresses.

### Dissecting a Real URL

```text
https://www.amazon.in/s?k=laptop&ref=nav_bb
└─┬──┘ └────┬─────┘ └┘ └─────────┬───────┘
  │         │        │           │
Protocol  Domain   Path    Query String
(how)    (where)  (what)  (extra details)
```

- **Protocol (https://):** Encrypted conversation. HTTP = unencrypted. HTTPS = encrypted.
- **Domain (www.amazon.in):** Subdomain (www) + main domain (amazon) + TLD (in for India).
- **Path (/s):** What page or resource. Here, /s means "search".
- **Query (?k=laptop&ref=nav_bb):** Extra information. k=laptop means search keyword is "laptop".

### Why This Matters

When debugging, you'll read URLs constantly. Seeing `?error=auth_failed` in a URL tells you exactly what went wrong. Understanding query strings is essential for working with APIs.

### Video Reference

Web Dev Simplified — URL Explained: <https://www.youtube.com/watch?v=Vp7W8h6z6Wk> (Watch: 0:00–3:00)

---

## 6. Static vs Dynamic Websites

**Static:** Same content for everyone
**Dynamic:** Content changes based on data or user

### Examples

**Static websites:**
- Personal portfolios
- Company landing pages
- Documentation sites
- The HTML file exists on disk. Server just reads and sends it.

**Dynamic websites:**
- Amazon product pages (millions of products, can't create millions of HTML files)
- Your Instagram feed (different for every user)
- Search results (generated based on your query)
- The HTML is created on-the-fly when you request it.

**Key insight:** Both ultimately send HTML to the browser. Open any website, right-click → View Page Source. What you see is HTML. The browser has no idea if it was generated by Python, Java, PHP, or Node.js.

---

## 7. What HTML Is (and Is Not)

**HyperText Markup Language:**
- **HyperText:** Text with links. Documents that connect to other documents.
- **Markup:** You're "marking up" content to give it meaning.
- **Language:** Not a programming language. A markup language.

HTML:
- Is not a programming language
- Has no logic, loops, or conditions
- Defines structure and meaning

Programming languages have: variables, loops, conditions, functions. HTML has none. This is a strength, not a weakness. HTML is predictable, reliable, and forgiving.

### The Three Technologies

- **HTML:** Structure (what parts exist, how they connect)
- **CSS:** Appearance (colors, layout, styling)
- **JavaScript:** Behavior (movement, interaction, decisions)

---

## 8. Basic HTML Page Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Page</title>
</head>
<body>
    <h1>Hello World</h1>
    <p>This is my first web page.</p>
</body>
</html>
```

### What Each Line Means

**`<!DOCTYPE html>`**
- Tells the browser: "I'm writing HTML5, the modern version."
- Without it, browsers enter "quirks mode" — they render like it's 1999.
- Always include this as line 1.

**`<html lang="en">`**
- The root element. Everything goes inside.
- `lang="en"` tells browsers and screen readers this is English.

**`<head>`**
- Metadata — information ABOUT the page, not ON the page.
- Users don't see this directly. Search engines and browsers do.

**`<meta charset="UTF-8">`**
- Character encoding. UTF-8 supports all languages — Hindi, Chinese, emojis.
- Without this, special characters might show as garbage.

**`<meta name="viewport"...>`**
- Makes the page work on mobile devices.
- Without it, your site looks zoomed out on phones.

**`<title>`**
- The text shown in the browser tab.
- Also what Google shows in search results.

**`<body>`**
- Everything visible on the page goes here.

### Reference

MDN HTML Basics: <https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics>

### Free Course

Introduction to HTML by Jen Kramer: <https://frontendmasters.com/bootcamp/introduction-html/>

---

## 9. Common HTML Tags

- Headings: h1–h6
- Paragraph: p
- Link: a
- Image: img
- Lists: ul, ol, li
- Tables: table, tr, th, td
- Containers: div (block), span (inline)

### The Heading Hierarchy Rule

Common mistake: Using `<h1>` because you want big text. Wrong.

Headings define document outline, like a book's table of contents. Screen readers navigate by headings. If you skip levels, it's confusing.

**Rule:** Only one `<h1>` per page. Don't skip levels.

```html
<!-- WRONG -->
<h1>Welcome</h1>
<h4>About Us</h4>  <!-- Why did we skip h2, h3? -->

<!-- RIGHT -->
<h1>Welcome</h1>
<h2>About Us</h2>
<h3>Our Team</h3>
```

### Tables Are for Data, Not Layout

In the early web, people used `<table>` to create page layouts. This is bad practice. Tables are for tabular data only (spreadsheets, schedules, statistics). CSS handles layout now.

### Avoid "Div Soup"

New developers put everything in `<div>` tags. This creates meaningless structure. Better: Use semantic tags like `<nav>` for navigation, `<article>` for content, `<header>`, `<footer>`, `<main>`.

**Looking up tags is normal.** MDN is your reference.

### Video Reference

Net Ninja — HTML Tutorial: <https://www.youtube.com/watch?v=bWPMSSsVdPk> (Watch: 0:00–4:30)

---

## 10. Forms

Forms collect data from users.

Common examples:
- Login
- Signup
- Payments

Key tags:
- form
- input
- label
- button

```html
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required />

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required />

  <button type="submit">Submit</button>
</form>
```

The `for` attribute in `<label>` links to the `id` of the input for accessibility.

Forms are how users talk to servers. Depth on forms comes in Week 03.

### Free Course (Preview)

HTML Forms by Jen Kramer: <https://frontendmasters.com/bootcamp/html-forms/>

---

## 11. Exercises

### Personal Profile Page

- Name
- Bio
- Hobbies
- Image
- One link

### Student Registration Form

- Name
- Email
- Roll number
- Department
- Submit button

HTML only. No CSS or JavaScript.

---

## 12. Homework

- Rebuild both pages from scratch (copy-paste creates confusion, rebuilding creates memory)
- Add one new field to the form
- Be ready to explain your tag choices

---

## Key Takeaways

- Web follows a client–server model
- HTML defines structure, not appearance
- Fundamentals compound over time
- Looking things up is normal — even professionals do it

---

## Free Resources for Self-Study

### Video References (Short Clips)

| Topic | Video | Watch Time |
| ----- | ----- | ---------- |
| How the Internet Works | [Computerphile](https://www.youtube.com/watch?v=7_LPdttKXPc) | 0:00–3:20 |
| How the Web Works | [Fireship](https://www.youtube.com/watch?v=hJHvdBlSxug) | 0:00–4:15 |
| URL Explained | [Web Dev Simplified](https://www.youtube.com/watch?v=Vp7W8h6z6Wk) | 0:00–3:00 |
| HTML Tags | [Net Ninja](https://www.youtube.com/watch?v=bWPMSSsVdPk) | 0:00–4:30 |

### Free Courses (Frontend Masters Bootcamp — No Payment Required)

| Course | Instructor | Duration | Link |
| ------ | ---------- | -------- | ---- |
| Internet Fundamentals | Jen Kramer | ~1 hour | <https://www.internetfundamentals.com/> |
| Introduction to HTML | Jen Kramer | 1h 47m | <https://frontendmasters.com/bootcamp/introduction-html/> |
| Introduction to CSS | Jen Kramer | 4h 11m | <https://frontendmasters.com/bootcamp/introduction-css/> |
| Complete Intro to Web Dev v3 | Brian Holt | ~12 hours | <https://frontendmasters.com/courses/web-development-v3/> |

### Free Course Notes (No Video Required)

Brian Holt's Complete Intro to Web Dev: <https://btholt.github.io/complete-intro-to-web-dev-v3/>

### Specific Lessons to Explore

- How the Internet Works: <https://frontendmasters.com/courses/fullstack-v3/how-the-internet-works/>
- DNS & URLs: <https://frontendmasters.com/courses/fullstack-v3/dns-urls/>
- The DOM: <https://frontendmasters.com/courses/web-development-v3/the-dom/>

---

Next week: **HTML Structure, Lists & Tables**
