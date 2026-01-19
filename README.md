# Web Technologies — Course Repository

This repository is the **authoritative course reference** for the _Web Technologies_ subject
(Regulation R23, Syllabus Version 1.0).

It is designed to be:

- A **teaching anchor** for the instructor
- A **revision source** for students
- A **week-by-week learning map** aligned strictly with the syllabus

This README defines the **full course structure**.
Individual weeks will have their own folders with detailed material.

---

## Course Overview

### Official Course Objectives

- Understand web page design using HTML
- Apply CSS3 for styling and layout
- Build dynamic pages using JavaScript
- Develop web applications using Node.js
- Design responsive web applications using Bootstrap

---

## Course Outcomes (Mapped)

| CO  | Outcome                                    |
| --- | ------------------------------------------ |
| CO1 | Construct web pages using HTML             |
| CO2 | Apply CSS3 for web application development |
| CO3 | Build dynamic web pages using JavaScript   |
| CO4 | Develop web applications using Node.js     |
| CO5 | Construct responsive web applications      |

---

## Full Course Structure

### UNIT I — HTML5

**Scope (as per syllabus):**

- Internet, WWW, Websites
- Web Client, Web Server
- URL, DNS
- HTML5 basics
- HTML lists
- HTML tables
- HTML form controls

#### Week 01 — HTML Fundamentals & Web Basics

- Internet vs World Wide Web
- Client–Server model
- DNS, URL, HTTP request–response
- What HTML is and is not
- Basic HTML document structure
- Core HTML tags
- Introductory forms
- Hands-on: first HTML pages

#### Week 02 — HTML Structure, Lists & Tables

- HTML lists (ordered, unordered, nested)
- HTML tables (headers, rows, data modeling)
- Semantic HTML5 elements (`header`, `nav`, `section`, etc.)
- Structuring real content-heavy pages
- Hands-on: structured informational pages

#### Week 03 — HTML Forms & Data Flow

- HTML forms in depth
- Input types, labels, select, radio, checkbox
- Form attributes (`name`, `required`, `placeholder`)
- Form validation attributes (`pattern`, `min`, `max`)
- How form data flows to backend (conceptual)
- Hands-on: complete registration/feedback forms

---

### UNIT II — CSS3

**Scope (as per syllabus):**

- CSS3 syntax and selectors
- CSS types (inline, internal, external)
- Box model
- Positioning
- Properties: fonts, text, background, borders, margin
- Transform, transition, animation
- Flexbox

#### Week 04 — CSS Fundamentals

- Inline, internal, external CSS
- Selectors and specificity
- Color, text, font styling
- Box model basics

#### Week 05 — Layout & Positioning

- Margin, padding, border
- Positioning (static, relative, absolute)
- Flexbox fundamentals
- Layout patterns

#### Week 06 — Advanced CSS

- Responsive layouts
- Transforms and transitions
- Animations
- Real-world CSS patterns

---

### UNIT III — JavaScript

**Scope (as per syllabus):**

- JavaScript basics
- Control statements
- Functions
- DOM
- Arrays and objects
- Event handling
- Classes
- Web APIs
- jQuery
- JSON and AJAX

#### Week 07 — JavaScript Basics

- JavaScript role in web
- Variables, operators
- Control flow
- Functions

#### Week 08 — DOM & Events

- DOM manipulation
- Event handling
- Forms with JavaScript
- Dynamic updates

#### Week 09 — Advanced JavaScript & Web APIs

- Objects and classes
- JS Web APIs (`fetch`, `localStorage`, `sessionStorage`)
- JSON and data interchange
- AJAX and async patterns
- jQuery (legacy awareness, not deep dive)

---

### UNIT IV — Node.js Framework

**Scope (as per syllabus):**

- Node.js basics
- HTTP module
- File system module
- URL module
- NPM
- Events
- File upload
- MySQL integration
- CRUD operations
- Joins

#### Week 10 — Node.js Basics

- Why Node.js exists
- Event-driven model
- HTTP server
- NPM ecosystem

#### Week 11 — Backend Development

- File system module
- URL parsing
- Handling requests
- File upload

#### Week 12 — Database Integration

- MySQL with Node.js
- CRUD operations
- Joins
- Data flow between frontend and backend

---

### UNIT V — Dynamic Web Programming

**Scope (as per syllabus):**

- Bootstrap
- Responsive design
- Web + Mobile concepts
- API integration
- Case study: e-commerce

#### Week 13 — Bootstrap & Responsive Design

- Bootstrap grid system
- Bootstrap components (navbar, cards, forms)
- Mobile-first responsive layouts
- Web + Mobile: same codebase, responsive behavior

#### Week 14 — API Integration & Full-Stack Connection

- Frontend + backend integration
- Consuming REST APIs with `fetch`
- Data-driven UI patterns
- Combining web and mobile experiences (PWA concepts)

#### Week 15 — Case Study & Review

- E-commerce workflow
- End-to-end application walkthrough
- Revision and exam alignment

---

## Repository Structure

```sh
web-technologies/
├── README.md          ← this file (course anchor)
├── week-01/
│   ├── STUDENT.md
│   └── TEACHER.md
├── week-02/
│   ├── STUDENT.md
│   └── TEACHER.md
...
```

- `STUDENT.md` → public revision material
- `TEACHER.md` → internal teaching guide (gitignored)

---

## How Students Should Use This Repository

- Review `STUDENT.md` after each class
- Re-type code examples
- Use exercises for practice
- Revisit before exams

---

## Teaching Philosophy

This course prioritizes:

- Understanding over memorization
- Fundamentals over frameworks
- Structure before styling
- Clarity before speed

---

**This README is the base reference for the entire course.**
