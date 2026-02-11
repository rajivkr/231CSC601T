# Web Technologies — Complete Curriculum Guide

> **Course Code:** 231CSC601T
> **Total Periods:** 45 (3 hours/week × 15 weeks)
> **Regulation:** R23, Syllabus Version 1.0
> **Prepared by:** Rajiv Ramakrishnan

---

## High-Level Course Map

| Week | Title                              | Unit | Periods | Cumulative |
| ---- | ---------------------------------- | ---- | ------- | ---------- |
| 01   | HTML Fundamentals & Web Basics     | I    | 3       | 3          |
| 02   | HTML Structure, Lists & Tables     | I    | 3       | 6          |
| 03   | HTML Forms & Data Flow             | I    | 2       | 8          |
| 04   | CSS Fundamentals                   | II   | 3       | 11         |
| 05   | CSS Layout & Positioning           | II   | 3       | 14         |
| 06   | CSS Animations & Advanced Patterns | II   | 3       | 17         |
| 07   | JavaScript Fundamentals            | III  | 3       | 20         |
| 08   | JavaScript DOM & Events            | III  | 3       | 23         |
| 09   | JavaScript Objects, JSON & AJAX    | III  | 4       | 27         |
| 10   | Node.js Foundations                | IV   | 3       | 30         |
| 11   | Node.js File System & HTTP         | IV   | 3       | 33         |
| 12   | Node.js MySQL & CRUD               | IV   | 3       | 36         |
| 13   | Bootstrap & Responsive Design      | V    | 3       | 39         |
| 14   | API Integration & Full-Stack       | V    | 3       | 42         |
| 15   | Case Study & Review                | V    | 3       | 45         |

---

## Unit-to-Week Mapping

| Unit | Title                   | Syllabus Periods | Weeks      |
| ---- | ----------------------- | ---------------- | ---------- |
| I    | HTML5                   | 8                | 01, 02, 03 |
| II   | CSS3                    | 9                | 04, 05, 06 |
| III  | JavaScript              | 10               | 07, 08, 09 |
| IV   | Node.js Framework       | 9                | 10, 11, 12 |
| V    | Dynamic Web Programming | 9                | 13, 14, 15 |

---

# UNIT I — HTML5 (8 Periods)

---

## Week 01 — HTML Fundamentals & Web Basics ✓ COMPLETED

**Syllabus Coverage:** Internet, WWW, Websites, Web Client, Web Server, URL, DNS, HTML5 basics

### Conceptual Goals

- Understand the difference between Internet and World Wide Web
- Grasp the client-server request-response model
- Know what happens when you type a URL
- Understand what HTML is and is not (markup vs programming)
- Write valid HTML5 document structure

### Teaching Flow

1. Why This Week Matters
2. Internet vs World Wide Web
3. Client-Server Model
4. URL to Page Journey (DNS, HTTP, Rendering)
5. URL Parts Breakdown
6. Static vs Dynamic Websites
7. What HTML Is (and Is Not)
8. Basic HTML Page Structure
9. Core HTML Tags Overview
10. Forms (Conceptual Introduction)

### What NOT to Teach Yet

- CSS (no styling)
- JavaScript (no interactivity)
- Deep form validation
- Any frameworks

### Exercises

- Personal profile page (name, bio, hobbies, links)
- Basic registration form structure

### References

- [Computerphile — How the Internet Works](https://www.youtube.com/watch?v=7_LPdttKXPc) (0:00-3:20)
- [Fireship — How the Web Works](https://www.youtube.com/watch?v=hJHvdBlSxug) (0:00-4:15)
- [Frontend Masters — Internet Fundamentals](https://www.internetfundamentals.com/) (FREE)
- [Frontend Masters — Complete Intro to Web Dev v3](https://frontendmasters.com/courses/web-development-v3/)

---

## Week 02 — HTML Structure, Lists & Tables

**Syllabus Coverage:** HTML Lists, HTML Tables, Semantic HTML5 elements

### Conceptual Goals

- Understand why semantic structure matters (accessibility, SEO, maintainability)
- Know when to use lists vs tables vs divs
- Grasp document outline and content hierarchy
- Understand the difference between presentational and semantic markup

### Teaching Flow

#### Section 1: Why Structure Matters

- "HTML is about meaning, not appearance"
- Screen readers navigate by structure
- Google reads structure, not styling
- Maintenance becomes easier with proper structure

#### Section 2: HTML Lists

- Unordered lists (`<ul>`) — when order doesn't matter
- Ordered lists (`<ol>`) — when sequence matters
- Definition lists (`<dl>`, `<dt>`, `<dd>`) — term-definition pairs
- Nested lists — hierarchical content
- When NOT to use lists (don't force everything into lists)

#### Section 3: HTML Tables

- Tables are for **tabular data only**
- Table structure: `<table>`, `<thead>`, `<tbody>`, `<tfoot>`
- Table cells: `<tr>`, `<th>`, `<td>`
- `colspan` and `rowspan` — merging cells
- Accessibility: `<caption>`, `scope` attribute
- **Historical warning:** Tables were abused for layout (never do this)

#### Section 4: Semantic HTML5 Elements

- Why semantic elements exist (replaced `<div id="header">`)
- `<header>` — introductory content
- `<nav>` — navigation links
- `<main>` — primary content (only one per page)
- `<article>` — self-contained content
- `<section>` — thematic grouping
- `<aside>` — tangentially related content
- `<footer>` — closing content
- `<figure>` and `<figcaption>` — images with captions

#### Section 5: Document Outline

- How headings create document structure
- Using browser outline tools to verify structure
- Common mistakes: skipping heading levels, multiple h1s

### What NOT to Teach Yet

- CSS styling of lists/tables
- JavaScript manipulation
- Complex layouts

### Common Misconceptions

- "I should use `<table>` because my content looks like a grid" — No, only for actual data tables
- "Semantic elements are just for screen readers" — No, they help everyone including search engines
- "`<section>` is just a fancy `<div>`" — No, it implies thematic grouping

### Exercises

1. **Course Schedule Table**: Create a weekly class schedule with proper headers, caption, and accessibility attributes
2. **Recipe Page**: Ingredients (unordered list), Steps (ordered list), semantic structure
3. **Blog Article Page**: Full semantic structure with header, nav, main, article, aside, footer

### Homework

- Rebuild the course schedule from memory
- Create a "Comparison Table" (e.g., comparing 3 smartphones)
- Structure a news website homepage using semantic elements (no styling)

### References

- [MDN — HTML Table Basics](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics)
- [MDN — Document and Website Structure](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure)
- [Web Dev Simplified — Semantic HTML](https://www.youtube.com/watch?v=kGW8Al_cga4)
- [Frontend Masters — Intro to HTML (Tables section)](https://frontendmasters.com/bootcamp/introduction-html/)

---

## Week 03 — HTML Forms & Data Flow

**Syllabus Coverage:** HTML Form Controls (completing Unit I)

### Conceptual Goals

- Understand forms as the bridge between user and server
- Know the difference between form structure and form behavior
- Grasp how data flows from browser to server
- Understand client-side validation as user assistance (not security)

### Teaching Flow

#### Section 1: Forms as Communication

- Forms are how users "talk" to servers
- Every login, signup, search, payment = form submission
- The form is a container; inputs are the data fields
- `action` = where to send, `method` = how to send (GET vs POST)

#### Section 2: The `<form>` Element

- Form attributes: `action`, `method`, `enctype`
- GET vs POST: when to use which
- `enctype` for file uploads (`multipart/form-data`)
- Forms without JavaScript — they still work!

#### Section 3: Input Types (Comprehensive)

- Text inputs: `text`, `password`, `email`, `tel`, `url`, `search`
- Number inputs: `number`, `range`
- Date/time inputs: `date`, `time`, `datetime-local`, `month`, `week`
- Selection: `checkbox`, `radio`
- Special: `file`, `hidden`, `color`
- Buttons: `submit`, `reset`, `button`

#### Section 4: Labels and Accessibility

- Why `<label>` matters (clickable area, screen readers)
- `for` attribute linking to input `id`
- Implicit vs explicit labeling
- Never skip labels — it's not optional

#### Section 5: Select, Textarea, and Grouping

- `<select>` and `<option>` for dropdowns
- `<optgroup>` for grouped options
- `<textarea>` for multi-line text
- `<fieldset>` and `<legend>` for grouping related inputs

#### Section 6: HTML5 Validation Attributes

- `required` — field must be filled
- `minlength`, `maxlength` — text length limits
- `min`, `max`, `step` — numeric constraints
- `pattern` — regex validation
- `placeholder` — hint text (not a label replacement!)
- Browser validation messages — free UX

#### Section 7: How Form Data Flows (Conceptual)

- User fills form → clicks submit
- Browser collects all named inputs
- Browser sends HTTP request to `action` URL
- Server receives data and processes
- Server sends response (success page, error, redirect)
- **This is the same model we learned in Week 01**

### What NOT to Teach Yet

- JavaScript form handling
- AJAX form submission
- Server-side processing
- CSS form styling

### Common Misconceptions

- "Client-side validation = security" — No, server must always validate
- "Placeholder can replace label" — No, placeholder disappears when typing
- "I need JavaScript for form validation" — No, HTML5 validation is powerful

### Exercises

1. **Complete Registration Form**: Name, email, password, confirm password, date of birth, gender (radio), interests (checkboxes), bio (textarea), profile picture (file), terms checkbox
2. **Contact Form**: Name, email, subject (select), message, priority (range slider)
3. **Survey Form**: Multiple sections using fieldset, various input types

### Homework

- Rebuild registration form from scratch
- Create a job application form with file upload
- Test forms without CSS — ensure they're usable

### References

- [MDN — HTML Forms Guide](https://developer.mozilla.org/en-US/docs/Learn/Forms)
- [Frontend Masters — HTML Forms (Jen Kramer)](https://frontendmasters.com/bootcamp/html-forms/)
- [Web Dev Simplified — HTML Form Validation](https://www.youtube.com/watch?v=fNcJuPIZ2WE)

---

# UNIT II — CSS3 (9 Periods)

---

## Week 04 — CSS Fundamentals

**Syllabus Coverage:** CSS3, CSS Syntax, CSS Selectors, CSS Types, CSS Properties (text, font, background, border)

### Conceptual Goals

- Understand CSS as the presentation layer (separate from structure)
- Grasp the cascade: how styles are applied and overridden
- Master selector specificity (the #1 CSS debugging skill)
- Know when to use inline, internal, and external CSS

### Teaching Flow

#### Section 1: What CSS Is

- CSS = Cascading Style Sheets
- Separation of concerns: HTML = structure, CSS = presentation
- The same HTML can look completely different with different CSS
- Why this separation matters (maintenance, accessibility, performance)

#### Section 2: CSS Syntax

- Rule structure: selector { property: value; }
- Multiple declarations
- Comments in CSS
- Case sensitivity
- Common syntax errors

#### Section 3: Three Ways to Apply CSS

- **Inline styles**: `style` attribute (avoid except for quick testing)
- **Internal styles**: `<style>` tag in `<head>` (single-page use)
- **External styles**: `.css` file with `<link>` (preferred for projects)
- Why external CSS wins (caching, maintenance, consistency)

#### Section 4: CSS Selectors

- Element selectors: `p`, `h1`, `div`
- Class selectors: `.classname`
- ID selectors: `#idname`
- Attribute selectors: `[type="text"]`
- Descendant selectors: `nav a`
- Child selectors: `nav > a`
- Pseudo-classes: `:hover`, `:focus`, `:first-child`
- Pseudo-elements: `::before`, `::after`
- Combining selectors

#### Section 5: The Cascade and Specificity

- What "cascading" means
- Specificity hierarchy: inline > ID > class > element
- Calculating specificity (0,0,0,0 system)
- The `!important` escape hatch (and why to avoid it)
- Source order: last rule wins (when specificity is equal)

#### Section 6: Color in CSS

- Color names: `red`, `blue`
- Hex codes: `#ff0000`
- RGB: `rgb(255, 0, 0)`
- RGBA: `rgba(255, 0, 0, 0.5)` — with transparency
- HSL: `hsl(0, 100%, 50%)`
- When to use which format

#### Section 7: Text and Font Properties

- `font-family`: web-safe fonts, font stacks
- `font-size`: px, em, rem (explain the differences)
- `font-weight`: normal, bold, numeric values
- `font-style`: italic
- `line-height`: readability
- `text-align`: left, center, right, justify
- `text-decoration`: underline, none
- `text-transform`: uppercase, lowercase
- `letter-spacing`, `word-spacing`

#### Section 8: Background Properties

- `background-color`
- `background-image`: `url()`
- `background-repeat`: repeat, no-repeat
- `background-position`
- `background-size`: cover, contain
- Shorthand `background` property

#### Section 9: Border Properties

- `border-width`, `border-style`, `border-color`
- Shorthand: `border: 1px solid black`
- Individual sides: `border-top`, etc.
- `border-radius`: rounded corners

### What NOT to Teach Yet

- Box model (next week)
- Positioning (next week)
- Flexbox (next week)
- Animations (week 06)
- Responsive design (week 06)

### Common Misconceptions

- "ID selectors are better because they're more specific" — No, classes are more flexible
- "I should use inline styles for quick changes" — No, it breaks separation of concerns
- "`!important` fixes everything" — No, it creates specificity nightmares

### Exercises

1. **Style the Profile Page**: Take Week 02's profile page, add colors, fonts, backgrounds
2. **Typography Exercise**: Create a blog post with proper heading hierarchy, readable fonts
3. **Selector Challenge**: Given HTML, write selectors to target specific elements

### Homework

- Create a color scheme for a website (primary, secondary, accent, text, background)
- Style the registration form from Week 03 (focus on typography and colors, not layout)
- Practice specificity: predict which styles will apply, then verify

### References

- [Frontend Masters — Intro to CSS (Jen Kramer)](https://frontendmasters.com/bootcamp/introduction-css/)
- [Web Dev Simplified — CSS Specificity](https://www.youtube.com/watch?v=CHyPGSpIhSs)
- [MDN — CSS Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
- [Specificity Calculator](https://specificity.keegan.st/)

---

## Week 05 — CSS Layout & Positioning

**Syllabus Coverage:** CSS Box Model, CSS Positioning, Margin, CSS Flexbox

### Conceptual Goals

- Understand the box model as the foundation of all CSS layout
- Grasp how positioning removes elements from normal flow
- Master Flexbox as the modern layout solution
- Know when to use which positioning method

### Teaching Flow

#### Section 1: The Box Model

- Every element is a box
- Content → Padding → Border → Margin
- `box-sizing: content-box` vs `box-sizing: border-box`
- Why `border-box` is preferred (predictable sizing)
- Inspecting box model in DevTools

#### Section 2: Margin and Padding

- Padding: space inside the border
- Margin: space outside the border
- Shorthand: `margin: 10px 20px 10px 20px` (top, right, bottom, left)
- `margin: auto` for horizontal centering
- **Margin collapse**: when vertical margins combine (not a bug!)

#### Section 3: Width and Height

- `width`, `height`: fixed dimensions
- `min-width`, `max-width`: constraints
- `min-height`, `max-height`: constraints
- Percentage values: relative to parent
- `vh`, `vw`: viewport units

#### Section 4: Display Property

- `display: block` — takes full width, stacks vertically
- `display: inline` — flows with text, ignores width/height
- `display: inline-block` — inline but respects dimensions
- `display: none` — removes from flow entirely
- Understanding default display values

#### Section 5: CSS Positioning

- `position: static` — default, normal flow
- `position: relative` — offset from normal position, stays in flow
- `position: absolute` — removed from flow, positioned relative to nearest positioned ancestor
- `position: fixed` — removed from flow, positioned relative to viewport
- `position: sticky` — hybrid (relative until scroll threshold)
- `top`, `right`, `bottom`, `left` offsets
- `z-index`: stacking order (only works on positioned elements)

#### Section 6: Flexbox Fundamentals

- The problem Flexbox solves (centering, equal heights, distribution)
- Flex container: `display: flex`
- Main axis vs cross axis
- `flex-direction`: row, column, row-reverse, column-reverse
- `justify-content`: main axis alignment
- `align-items`: cross axis alignment
- `gap`: spacing between items

#### Section 7: Flex Item Properties

- `flex-grow`: how much item grows
- `flex-shrink`: how much item shrinks
- `flex-basis`: initial size
- Shorthand: `flex: 1` (grow, shrink, basis)
- `align-self`: override alignment for single item
- `order`: visual reordering

#### Section 8: Common Layout Patterns with Flexbox

- Centering (horizontal and vertical)
- Navigation bar
- Card layouts
- Holy grail layout
- Sticky footer

### What NOT to Teach Yet

- CSS Grid (not in syllabus)
- Responsive design (next week)
- Animations (next week)

### Common Misconceptions

- "Margin and padding are the same" — No, padding is inside, margin is outside
- "I need JavaScript to center things" — No, Flexbox makes it trivial
- "Position absolute is relative to the page" — No, it's relative to nearest positioned ancestor
- "Z-index works on any element" — No, only on positioned elements

### Exercises

1. **Card Component**: Create a card with image, title, description, button — properly spaced
2. **Navigation Bar**: Horizontal nav with logo left, links right using Flexbox
3. **Centering Challenge**: Center content horizontally and vertically in viewport
4. **Holy Grail Layout**: Header, footer, main content with two sidebars

### Homework

- Rebuild navigation bar from memory
- Create a pricing table (3 columns, equal heights)
- Build a photo gallery grid using Flexbox

### References

- [Frontend Masters — CSS Layout (Jen Kramer)](https://frontendmasters.com/courses/css-layouts/)
- [Flexbox Froggy](https://flexboxfroggy.com/) — Interactive game
- [CSS Tricks — Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Web Dev Simplified — Flexbox](https://www.youtube.com/watch?v=fYq5PXgSsbE)

---

## Week 06 — CSS Animations & Advanced Patterns

**Syllabus Coverage:** CSS Transform, CSS Transition, CSS Animations (completing Unit II)

### Conceptual Goals

- Understand transforms as visual modifications (no layout change)
- Grasp transitions as state-change animations
- Master keyframe animations for complex sequences
- Know performance implications (GPU vs CPU)

### Teaching Flow

#### Section 1: CSS Transforms

- Transforms don't affect layout (element stays in original position)
- `transform: translate(x, y)` — move element
- `transform: scale(x, y)` — resize element
- `transform: rotate(angle)` — rotate element
- `transform: skew(x, y)` — skew element
- Combining transforms
- `transform-origin`: rotation/scale center point

#### Section 2: CSS Transitions

- Transitions animate property changes
- `transition-property`: what to animate
- `transition-duration`: how long
- `transition-timing-function`: ease, linear, ease-in, ease-out, cubic-bezier
- `transition-delay`: when to start
- Shorthand: `transition: property duration timing delay`
- Which properties can be transitioned (not all can!)

#### Section 3: Common Transition Patterns

- Hover effects on buttons
- Color changes
- Transform on hover (scale, translate)
- Menu reveal animations
- Card hover effects

#### Section 4: CSS Keyframe Animations

- `@keyframes` rule: defining animation steps
- `from` and `to` (or percentages)
- `animation-name`: which keyframes to use
- `animation-duration`: total time
- `animation-timing-function`: easing
- `animation-delay`: start delay
- `animation-iteration-count`: how many times (or `infinite`)
- `animation-direction`: normal, reverse, alternate
- `animation-fill-mode`: forwards, backwards, both
- Shorthand `animation` property

#### Section 5: Practical Animation Examples

- Loading spinner
- Pulse effect
- Slide-in on page load
- Attention-grabbing bounce
- Progress bar animation

#### Section 6: Animation Performance

- Browser rendering pipeline (Style → Layout → Paint → Composite)
- GPU-accelerated properties: `transform`, `opacity`
- Expensive properties: `width`, `height`, `top`, `left`
- `will-change` hint (use sparingly)
- Why 60fps matters

#### Section 7: Responsive Design Introduction

- Why responsive matters (mobile traffic > desktop)
- Viewport meta tag (revisit from Week 01)
- Media queries: `@media (max-width: 768px)`
- Mobile-first vs desktop-first
- Common breakpoints
- Responsive typography with `clamp()`

#### Section 8: Putting It All Together

- Building a complete styled page
- Combining all CSS concepts
- CSS organization and maintainability
- CSS custom properties (variables) introduction

### What NOT to Teach Yet

- JavaScript-triggered animations
- Animation libraries
- Complex responsive frameworks (Bootstrap is Week 13)

### Common Misconceptions

- "Animations make sites better" — No, bad animations make sites worse
- "I should animate everything" — No, animate with purpose
- "All properties animate smoothly" — No, some cause jank

### Exercises

1. **Button Component Library**: Create 5 button styles with hover transitions
2. **Loading Animation**: Create a custom loading spinner using keyframes
3. **Animated Card**: Card that lifts and shadows on hover
4. **Responsive Navigation**: Nav that transforms to hamburger on mobile (CSS only)

### Homework

- Create an animated landing page hero section
- Build a responsive two-column layout that stacks on mobile
- Experiment with cubic-bezier timing functions

### References

- [Frontend Masters — CSS Animations](https://frontendmasters.com/courses/css-animations/)
- [Web Dev Simplified — CSS Transitions](https://www.youtube.com/watch?v=YszONjKpgg4)
- [MDN — CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [Cubic Bezier Generator](https://cubic-bezier.com/)

---

# UNIT III — JavaScript (10 Periods)

---

## Week 07 — JavaScript Fundamentals

**Syllabus Coverage:** JavaScript Introduction, Control Statements, Functions

### Conceptual Goals

- Understand JavaScript's role (behavior layer)
- Grasp variables, types, and operators
- Master control flow (conditions, loops)
- Understand functions as reusable code blocks
- Know the difference between browser JS and Node.js

### Teaching Flow

#### Section 1: What is JavaScript?

- The third pillar: HTML (structure), CSS (style), JS (behavior)
- JavaScript is NOT Java (historical naming accident)
- Client-side vs server-side JavaScript
- JavaScript's evolution (ES5, ES6/ES2015, modern JS)
- Where JavaScript runs (browser console, Node.js, etc.)

#### Section 2: Adding JavaScript to HTML

- Inline: `onclick="..."` (avoid)
- Internal: `<script>` tag
- External: `<script src="...">` (preferred)
- Script placement: `<head>` vs end of `<body>`
- `defer` and `async` attributes

#### Section 3: Variables and Data Types

- `var` (old, function-scoped — avoid)
- `let` (block-scoped, reassignable)
- `const` (block-scoped, not reassignable)
- **Rule: Use `const` by default, `let` when needed, never `var`**
- Primitive types: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`
- Reference types: `object`, `array`, `function`
- `typeof` operator
- Type coercion (implicit conversion)

#### Section 4: Operators

- Arithmetic: `+`, `-`, `*`, `/`, `%`, `**`
- Assignment: `=`, `+=`, `-=`, etc.
- Comparison: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
- **Always use `===` (strict equality)**
- Logical: `&&`, `||`, `!`
- String concatenation vs template literals

#### Section 5: Control Statements

- `if`, `else if`, `else`
- Ternary operator: `condition ? trueValue : falseValue`
- `switch` statement
- `for` loop
- `while` loop
- `do...while` loop
- `break` and `continue`
- `for...of` (arrays) vs `for...in` (objects)

#### Section 6: Functions

- Why functions exist (reusability, organization)
- Function declaration: `function name() {}`
- Function expression: `const name = function() {}`
- Arrow functions: `const name = () => {}`
- Parameters vs arguments
- Return values
- Default parameters
- Scope: global vs local vs block

#### Section 7: Basic Debugging

- `console.log()` — your best friend
- `console.error()`, `console.warn()`, `console.table()`
- Browser DevTools console
- Reading error messages

### What NOT to Teach Yet

- DOM manipulation (next week)
- Events (next week)
- Objects and classes (week 09)
- Async programming (week 09)

### Common Misconceptions

- "`==` and `===` are the same" — No, always use `===`
- "Variables declared with `const` can't change" — Objects/arrays can be mutated
- "JavaScript is just for websites" — No, it runs servers, mobile apps, etc.
- "`var` is fine" — No, it has scoping issues

### Exercises

1. **Calculator Functions**: Create functions for add, subtract, multiply, divide
2. **FizzBuzz**: Classic programming challenge
3. **Grade Calculator**: Input score, output letter grade using control flow
4. **Temperature Converter**: Celsius ↔ Fahrenheit functions

### Homework

- Solve 5 basic JavaScript challenges on freeCodeCamp
- Rewrite all exercises using arrow functions
- Create a function that validates email format (using string methods)

### References

- [Frontend Masters — Complete Intro to Web Dev v3 (JS section)](https://frontendmasters.com/courses/web-development-v3/)
- [Frontend Masters — Intro to JavaScript (Brian Holt)](https://frontendmasters.com/bootcamp/introduction-javascript/)
- [JavaScript.info — Fundamentals](https://javascript.info/first-steps)
- [Fireship — JavaScript in 100 Seconds](https://www.youtube.com/watch?v=DHjqpvDnNGE)

---

## Week 08 — JavaScript DOM & Events

**Syllabus Coverage:** DOM, Event Handling

### Conceptual Goals

- Understand the DOM as a tree representation of HTML
- Grasp how JavaScript can read and modify the page
- Master event handling as user interaction
- Connect forms to JavaScript

### Teaching Flow

#### Section 1: What is the DOM?

- Document Object Model — browser's representation of HTML
- HTML → parsed → DOM tree
- The DOM is NOT the HTML source code
- DOM is live — changes reflect immediately
- `document` object — the entry point

#### Section 2: Selecting Elements

- `document.getElementById('id')` — single element
- `document.getElementsByClassName('class')` — HTMLCollection
- `document.getElementsByTagName('tag')` — HTMLCollection
- `document.querySelector('selector')` — first match
- `document.querySelectorAll('selector')` — NodeList
- **Prefer `querySelector` and `querySelectorAll`**

#### Section 3: Modifying Elements

- `element.textContent` — text only
- `element.innerHTML` — HTML content (security warning: XSS)
- `element.setAttribute('attr', 'value')`
- `element.getAttribute('attr')`
- `element.classList.add()`, `.remove()`, `.toggle()`, `.contains()`
- `element.style.property` — inline styles (use sparingly)

#### Section 4: Creating and Removing Elements

- `document.createElement('tag')`
- `element.appendChild(child)`
- `element.removeChild(child)`
- `element.remove()` — remove self
- `element.insertBefore(new, reference)`
- `element.cloneNode(deep)`

#### Section 5: Event Handling Basics

- What is an event? (user actions, browser actions)
- Event types: click, submit, keydown, mouseover, focus, load, etc.
- Three ways to handle events:
  - HTML attribute: `onclick="..."` (avoid)
  - DOM property: `element.onclick = function` (limited)
  - `addEventListener`: `element.addEventListener('click', handler)` (preferred)

#### Section 6: The Event Object

- Event handler receives event object automatically
- `event.target` — element that triggered the event
- `event.currentTarget` — element handler is attached to
- `event.type` — event type
- `event.preventDefault()` — stop default behavior
- `event.stopPropagation()` — stop bubbling

#### Section 7: Event Propagation

- Capture phase (top-down)
- Target phase
- Bubble phase (bottom-up) — **default**
- Event delegation: attach handler to parent, check `event.target`
- Why delegation is powerful (dynamic elements, performance)

#### Section 8: Forms with JavaScript

- Accessing form elements: `form.elements`
- Getting input values: `input.value`
- Form submit event: `form.addEventListener('submit', handler)`
- `event.preventDefault()` to stop page refresh
- Basic form validation with JavaScript
- Showing/hiding error messages

### What NOT to Teach Yet

- AJAX/Fetch (next week)
- Async programming (next week)
- Complex state management

### Common Misconceptions

- "The DOM IS the HTML" — No, DOM is a live object model
- "I should use innerHTML for everything" — No, XSS risk
- "onclick attribute is fine" — No, addEventListener is better
- "I need to select elements inside event handlers" — Often, use event.target

### Exercises

1. **Toggle Dark Mode**: Button that toggles dark/light theme using classList
2. **Character Counter**: Real-time count as user types in textarea
3. **Todo List**: Add items, mark complete, delete items (no persistence)
4. **Form Validation**: Validate form fields on submit, show error messages

### Homework

- Build an accordion component (click to expand/collapse sections)
- Create a simple image gallery (click thumbnail, show large image)
- Implement form validation with multiple fields

### References

- [Frontend Masters — Complete Intro to Web Dev v3 (DOM section)](https://frontendmasters.com/courses/web-development-v3/)
- [JavaScript.info — Document](https://javascript.info/document)
- [JavaScript.info — Events](https://javascript.info/events)
- [Web Dev Simplified — Event Listeners](https://www.youtube.com/watch?v=XF1_MlZ5l6M)

---

## Week 09 — JavaScript Objects, JSON & AJAX

**Syllabus Coverage:** Arrays, Objects, Built-in Objects, Classes, JS Web APIs, jQuery, JSON, AJAX

### Conceptual Goals

- Understand objects as collections of properties
- Master arrays and array methods
- Grasp JSON as data interchange format
- Understand asynchronous JavaScript and AJAX
- Know why jQuery existed and why it's less needed now

### Teaching Flow

#### Section 1: Objects in JavaScript

- Objects: key-value pairs
- Object literal syntax: `{ key: value }`
- Accessing properties: dot notation vs bracket notation
- Adding/modifying properties
- Object methods (functions as properties)
- `this` keyword (basic introduction)

#### Section 2: Arrays

- Arrays: ordered collections
- Array literal: `[item1, item2]`
- Accessing by index (0-based)
- Array properties: `length`
- Mutating methods: `push`, `pop`, `shift`, `unshift`, `splice`
- Non-mutating methods: `slice`, `concat`
- Iteration: `forEach`, `map`, `filter`, `reduce`, `find`
- **Array methods are essential for modern JavaScript**

#### Section 3: Built-in Objects

- `Math`: `random`, `floor`, `ceil`, `round`, `max`, `min`
- `Date`: creating dates, getting/setting components, formatting
- `String` methods: `split`, `join`, `trim`, `includes`, `startsWith`
- `Number` methods: `toFixed`, `parseInt`, `parseFloat`

#### Section 4: Classes (ES6)

- Classes as blueprints for objects
- `class` keyword
- `constructor` method
- Instance methods
- `this` in class context
- Creating instances with `new`
- Brief: inheritance with `extends` (don't go deep)

#### Section 5: JSON

- JSON = JavaScript Object Notation
- JSON is a string format, not JavaScript objects
- JSON syntax rules (double quotes, no trailing commas)
- `JSON.stringify()` — object to JSON string
- `JSON.parse()` — JSON string to object
- Why JSON matters (API communication)

#### Section 6: Asynchronous JavaScript

- Synchronous vs asynchronous execution
- Why async? (network requests, file operations, timers)
- Callback pattern (and callback hell)
- Promises: `new Promise`, `.then()`, `.catch()`, `.finally()`
- `async/await` — cleaner syntax for promises
- **This is the most challenging concept — spend time here**

#### Section 7: AJAX and Fetch API

- AJAX = Asynchronous JavaScript And XML (historical name)
- The old way: `XMLHttpRequest` (show briefly, don't dwell)
- The modern way: `fetch()` API
- Making GET requests
- Handling responses: `response.json()`
- Error handling with try/catch
- Making POST requests with `fetch`

#### Section 8: Web APIs (localStorage, sessionStorage)

- Browser provides APIs beyond the DOM
- `localStorage`: persistent storage (survives browser close)
- `sessionStorage`: session-only storage
- Methods: `setItem`, `getItem`, `removeItem`, `clear`
- Storage only stores strings (use JSON for objects)
- Practical use: saving user preferences, form drafts

#### Section 9: jQuery (Legacy Awareness)

- Why jQuery was created (cross-browser issues)
- jQuery syntax: `$('selector')`, `.click()`, `.ajax()`
- Why jQuery is less needed now (modern browsers are consistent)
- When you might still encounter it (legacy codebases)
- **Don't learn jQuery deeply — just recognize it**

### What NOT to Teach Yet

- Node.js (next unit)
- Database operations
- Complex API authentication

### Common Misconceptions

- "JSON and JavaScript objects are the same" — No, JSON is a string format
- "AJAX means XML" — No, JSON is more common now
- "Callbacks are bad" — No, they're fine for simple cases; promises for complex
- "I must learn jQuery" — No, vanilla JS is sufficient for new projects

### Exercises

1. **Data Display**: Fetch data from public API, display in page
2. **Todo with Storage**: Todo list that persists in localStorage
3. **User Search**: Fetch GitHub users, display results
4. **Class Exercise**: Create a `Book` class with properties and methods

### Homework

- Build a weather app using a free weather API
- Create a notes app with localStorage persistence
- Fetch and display data from JSONPlaceholder API

### References

- [Frontend Masters — Complete Intro to Web Dev v3](https://frontendmasters.com/courses/web-development-v3/)
- [JavaScript.info — Promises](https://javascript.info/promise-basics)
- [JavaScript.info — Fetch](https://javascript.info/fetch)
- [Web Dev Simplified — Fetch API](https://www.youtube.com/watch?v=cuEtnrL9-H0)
- [Fireship — Async/Await](https://www.youtube.com/watch?v=vn3tm0quoqE)

---

# UNIT IV — Node.js Framework (9 Periods)

---

## Week 10 — Node.js Foundations

**Syllabus Coverage:** Node.js basics, NPM, Node.js Events

### Conceptual Goals

- Understand Node.js as JavaScript outside the browser
- Grasp the event-driven, non-blocking model
- Master NPM as the package ecosystem
- Connect Node.js to the client-server model from Week 01

### Teaching Flow

#### Section 1: What is Node.js?

- JavaScript runtime built on Chrome's V8 engine
- Not a framework, not a language — a runtime environment
- Why Node.js exists (JavaScript on the server)
- Event-driven, non-blocking I/O model
- Use cases: web servers, APIs, CLI tools, scripts

#### Section 2: Installing and Running Node.js

- Installing Node.js (LTS version)
- Running JavaScript files: `node filename.js`
- Node.js REPL (interactive mode)
- `process` object: `argv`, `env`, `exit`
- Difference from browser environment (no `window`, `document`)

#### Section 3: Modules in Node.js

- Why modules? (organization, reusability)
- CommonJS: `require()` and `module.exports`
- ES Modules: `import` and `export` (modern)
- Built-in modules vs third-party modules
- Creating your own modules

#### Section 4: NPM (Node Package Manager)

- What is NPM? (package registry + CLI tool)
- `npm init` — creating package.json
- `npm install <package>` — installing dependencies
- `package.json` and `package-lock.json`
- `node_modules` folder (never commit this)
- `.gitignore` for node_modules
- Dev dependencies: `npm install --save-dev`
- NPM scripts: `npm run <script>`

#### Section 5: Node.js Event System

- Node.js is event-driven (like browser events, but different)
- `EventEmitter` class
- `.on()` — listening for events
- `.emit()` — triggering events
- Why this matters (understanding Node's architecture)

#### Section 6: Built-in Modules Overview

- `path` — file path utilities
- `os` — operating system info
- `fs` — file system (next week)
- `http` — HTTP server (next week)
- `url` — URL parsing

#### Section 7: Your First Node.js Program

- Reading command line arguments
- Using `path` module
- Basic error handling
- Console output

### What NOT to Teach Yet

- HTTP servers (next week)
- File operations (next week)
- Database (week 12)
- Express.js (not in syllabus)

### Common Misconceptions

- "Node.js is a framework" — No, it's a runtime
- "Node.js is only for web servers" — No, it can do many things
- "I need to learn new JavaScript for Node" — No, it's the same language
- "NPM and Node.js are the same" — No, NPM is a separate tool

### Exercises

1. **Command Line Calculator**: Read numbers from argv, perform operations
2. **Module Practice**: Create utility modules, import and use them
3. **Event Emitter**: Create custom events for a simple notification system
4. **NPM Exploration**: Install and use a simple package (e.g., `chalk` for colored output)

### Homework

- Create a CLI tool that takes user input and processes it
- Explore 3 packages on npmjs.com, write summary of what they do
- Read Node.js documentation for one built-in module

### References

- [Frontend Masters — Complete Intro to Web Dev v3 (Node section)](https://frontendmasters.com/courses/web-development-v3/)
- [Frontend Masters — Introduction to Node.js (Scott Moss)](https://frontendmasters.com/courses/node-js-v3/)
- [Node.js Official Docs](https://nodejs.org/docs/latest/api/)
- [Fireship — Node.js in 100 Seconds](https://www.youtube.com/watch?v=ENrzD9HAZK4)

---

## Week 11 — Node.js File System & HTTP

**Syllabus Coverage:** HTTP Module, File System Module, URL Module, Upload Files

### Conceptual Goals

- Master file system operations (read, write, delete)
- Understand HTTP server creation from scratch
- Connect everything to the request-response model
- Handle file uploads

### Teaching Flow

#### Section 1: File System Module (fs)

- `fs` module — reading and writing files
- Synchronous vs asynchronous methods
- `fs.readFile()` / `fs.readFileSync()`
- `fs.writeFile()` / `fs.writeFileSync()`
- `fs.appendFile()` — adding to files
- `fs.unlink()` — deleting files
- `fs.mkdir()` / `fs.rmdir()` — directories
- `fs.readdir()` — listing directory contents
- **Always prefer async methods in servers**

#### Section 2: Path Module Deep Dive

- `path.join()` — joining path segments
- `path.resolve()` — absolute paths
- `path.basename()` — file name
- `path.dirname()` — directory name
- `path.extname()` — file extension
- `__dirname` and `__filename`

#### Section 3: URL Module

- Parsing URLs in Node.js
- `new URL()` constructor
- URL parts: `protocol`, `hostname`, `pathname`, `searchParams`
- Building URLs programmatically

#### Section 4: Creating an HTTP Server

- `http.createServer()` — the foundation
- Request object: `req.method`, `req.url`, `req.headers`
- Response object: `res.statusCode`, `res.setHeader()`, `res.write()`, `res.end()`
- Starting the server: `server.listen(port)`
- **This is the same request-response from Week 01!**

#### Section 5: Routing (Manual)

- Checking `req.url` to determine what to serve
- Different responses for different routes
- Serving static files (HTML, CSS, JS)
- Setting correct `Content-Type` headers
- Handling 404 (not found)

#### Section 6: Handling Different HTTP Methods

- `req.method` — GET, POST, PUT, DELETE
- GET requests — retrieving data
- POST requests — receiving data
- Parsing request body (collecting chunks)
- `JSON.parse()` for JSON bodies

#### Section 7: File Uploads

- `multipart/form-data` content type
- Challenges of parsing multipart data
- Using `formidable` or `multer` package
- Saving uploaded files
- Security considerations (file types, sizes)

#### Section 8: Putting It Together

- Building a simple file server
- Serving HTML pages
- Handling form submissions
- Returning JSON responses

### What NOT to Teach Yet

- Database operations (next week)
- Express.js (not in syllabus)
- Authentication

### Common Misconceptions

- "I need Express to create a server" — No, `http` module is sufficient
- "Sync methods are fine for servers" — No, they block everything
- "File paths work the same everywhere" — No, use `path` module

### Exercises

1. **Static File Server**: Serve HTML, CSS, JS files based on URL
2. **JSON API**: Create endpoints that return JSON data
3. **Form Handler**: Accept form submission, save to file
4. **File Upload**: Accept file upload, save to disk

### Homework

- Build a simple note-taking API (create, read notes as files)
- Create a server that logs all requests to a file
- Handle multiple routes with different content types

### References

- [Frontend Masters — Introduction to Node.js](https://frontendmasters.com/courses/node-js-v3/)
- [Node.js Docs — HTTP](https://nodejs.org/api/http.html)
- [Node.js Docs — File System](https://nodejs.org/api/fs.html)
- [Web Dev Simplified — Node.js HTTP Server](https://www.youtube.com/watch?v=VShtPwEkDD0)

---

## Week 12 — Node.js MySQL & CRUD

**Syllabus Coverage:** Node.js MySQL, CRUD, Join (completing Unit IV)

### Conceptual Goals

- Understand databases as persistent data storage
- Master CRUD operations (Create, Read, Update, Delete)
- Grasp SQL basics (enough to work with Node.js)
- Connect frontend → backend → database

### Teaching Flow

#### Section 1: Why Databases?

- Files have limitations (concurrent access, querying, relationships)
- Databases solve these problems
- SQL vs NoSQL (focus on SQL per syllabus)
- MySQL — popular relational database

#### Section 2: MySQL Basics (Quick Intro)

- Tables, rows, columns
- Primary keys
- Data types: INT, VARCHAR, TEXT, DATE
- Basic SQL syntax overview
- Tools: MySQL Workbench, command line, phpMyAdmin

#### Section 3: SQL CRUD Operations

- `INSERT INTO` — creating records
- `SELECT` — reading records
- `UPDATE` — modifying records
- `DELETE` — removing records
- `WHERE` clause — filtering
- `ORDER BY` — sorting
- `LIMIT` — pagination

#### Section 4: Connecting Node.js to MySQL

- `mysql2` package (preferred over `mysql`)
- Creating a connection: `mysql.createConnection()`
- Connection configuration (host, user, password, database)
- Environment variables for credentials
- Connection pooling

#### Section 5: Executing Queries

- `connection.query()` method
- Callback pattern
- Promise-based queries with `mysql2/promise`
- Handling results
- Error handling

#### Section 6: Parameterized Queries (IMPORTANT)

- **SQL Injection vulnerability**
- Never concatenate user input into queries
- Placeholders: `?` or named parameters
- `connection.query('SELECT * FROM users WHERE id = ?', [id])`
- This is a security fundamental

#### Section 7: SQL Joins

- Why joins? (related data in different tables)
- `INNER JOIN` — matching records only
- `LEFT JOIN` — all from left, matching from right
- `RIGHT JOIN` — all from right, matching from left
- Practical example: users and orders

#### Section 8: Building a Complete CRUD API

- GET `/users` — list all users
- GET `/users/:id` — get single user
- POST `/users` — create user
- PUT `/users/:id` — update user
- DELETE `/users/:id` — delete user
- Proper status codes (200, 201, 404, 500)

### What NOT to Teach Yet

- ORM libraries (Sequelize, etc.)
- Complex database design
- Authentication/authorization

### Common Misconceptions

- "I can build SQL queries with string concatenation" — **NO! SQL injection**
- "I need to learn all SQL to use databases" — No, CRUD covers most needs
- "Joins are complicated" — The concept is simple; practice helps

### Exercises

1. **User Management**: Full CRUD for users table
2. **Product Catalog**: Products with categories (join practice)
3. **Order System**: Users, products, orders with relationships

### Homework

- Create a complete REST API for a "Books" resource
- Implement search functionality with `LIKE` queries
- Add pagination to list endpoints

### References

- [Frontend Masters — Complete Intro to Databases](https://frontendmasters.com/courses/databases/)
- [W3Schools — MySQL Tutorial](https://www.w3schools.com/mysql/)
- [mysql2 Documentation](https://www.npmjs.com/package/mysql2)
- [Web Dev Simplified — SQL Basics](https://www.youtube.com/watch?v=p3qvj9hO_Bo)

---

# UNIT V — Dynamic Web Programming (9 Periods)

---

## Week 13 — Bootstrap & Responsive Design

**Syllabus Coverage:** Bootstrap, Developing a responsive website

### Conceptual Goals

- Understand CSS frameworks as pre-built components
- Master Bootstrap's grid system
- Grasp responsive design principles
- Know when to use frameworks vs custom CSS

### Teaching Flow

#### Section 1: What is Bootstrap?

- CSS framework — pre-written CSS (and some JS)
- Why frameworks exist (speed, consistency, responsive)
- Bootstrap history and popularity
- Alternatives (Tailwind, Foundation) — awareness only

#### Section 2: Adding Bootstrap to a Project

- CDN links (quick start)
- NPM installation (for build processes)
- Bootstrap CSS and JS files
- Order matters: Bootstrap CSS, then your custom CSS

#### Section 3: Bootstrap Grid System

- Container: `container`, `container-fluid`
- Row and columns: `row`, `col`
- 12-column system
- Responsive breakpoints: `col-sm-`, `col-md-`, `col-lg-`, `col-xl-`
- Nesting rows
- Offset and ordering

#### Section 4: Bootstrap Typography and Utilities

- Heading classes: `h1`, `h2`, etc.
- Display headings: `display-1`, etc.
- Text utilities: `text-center`, `text-muted`
- Spacing utilities: `m-`, `p-` (margin, padding)
- Flexbox utilities: `d-flex`, `justify-content-*`
- Color utilities: `bg-primary`, `text-danger`

#### Section 5: Bootstrap Components

- Buttons: `btn`, `btn-primary`, sizes, states
- Cards: content containers
- Navbar: responsive navigation
- Forms: `form-control`, `form-group`
- Alerts: feedback messages
- Modals: dialog boxes
- Carousel: image sliders

#### Section 6: Bootstrap JavaScript Components

- Components that need JS: modals, dropdowns, tooltips
- Data attributes: `data-bs-toggle`, `data-bs-target`
- No custom JS needed for basic functionality
- Bootstrap JS vs jQuery (Bootstrap 5 dropped jQuery dependency)

#### Section 7: Responsive Design Best Practices

- Mobile-first approach
- Testing on real devices and emulators
- Common breakpoints strategy
- Images: `img-fluid`
- Hiding/showing elements: `d-none`, `d-md-block`

#### Section 8: Customizing Bootstrap

- Override with custom CSS (loaded after Bootstrap)
- Using CSS variables
- Don't fight the framework — work with it

### What NOT to Teach Yet

- Sass customization
- Building Bootstrap from source
- Other frameworks in depth

### Common Misconceptions

- "Bootstrap sites all look the same" — Only if you don't customize
- "I should use Bootstrap for everything" — No, small projects might not need it
- "Bootstrap replaces learning CSS" — No, you need CSS to customize

### Exercises

1. **Landing Page**: Hero section, features grid, testimonials, footer
2. **Dashboard Layout**: Sidebar navigation, main content area, cards
3. **E-commerce Product Grid**: Responsive product cards

### Homework

- Rebuild a popular website's layout using Bootstrap
- Create a portfolio page with Bootstrap components
- Make an existing project responsive with Bootstrap grid

### References

- [Bootstrap Official Docs](https://getbootstrap.com/docs/)
- [Frontend Masters — Complete Intro to Web Dev v3](https://frontendmasters.com/courses/web-development-v3/)
- [Traversy Media — Bootstrap 5 Crash Course](https://www.youtube.com/watch?v=4sosXZsdy-s)

---

## Week 14 — API Integration & Full-Stack

**Syllabus Coverage:** Combining Web and Mobile Applications, API Integration with Front End

### Conceptual Goals

- Understand full-stack data flow (frontend ↔ backend ↔ database)
- Master API integration in frontend
- Grasp the concept of single codebase for web and mobile
- Build a complete working application

### Teaching Flow

#### Section 1: Full-Stack Architecture Review

- Frontend (browser) → HTTP → Backend (Node.js) → Database (MySQL)
- API as the contract between frontend and backend
- JSON as the data format
- RESTful conventions

#### Section 2: Connecting Frontend to Your Backend

- Using `fetch()` to call your own API
- Same-origin policy and CORS
- Enabling CORS in Node.js
- Environment-based API URLs

#### Section 3: Building Dynamic UIs

- Fetching data on page load
- Displaying data in the DOM
- Loading states and error handling
- Refreshing data

#### Section 4: Form Submission to Backend

- Capturing form data
- Sending POST requests
- Handling success and error responses
- Updating UI after successful submission
- Optimistic updates vs waiting for server

#### Section 5: CRUD UI Patterns

- List view: displaying all items
- Detail view: displaying single item
- Create form: adding new items
- Edit form: modifying existing items
- Delete confirmation: removing items
- UI feedback for all operations

#### Section 6: Web + Mobile Concept

- Responsive web apps work on mobile browsers
- Same API serves web and native mobile apps
- Progressive Web Apps (PWA) introduction
- Service workers concept (caching, offline)
- "Install" prompt on mobile

#### Section 7: PWA Basics (Introduction)

- `manifest.json` — app metadata
- Service worker — caching and offline
- Making a web app "installable"
- Limitations compared to native apps
- When PWA makes sense

#### Section 8: Deployment Considerations

- Frontend hosting (Vercel, Netlify)
- Backend hosting (Railway, Render, Heroku)
- Database hosting (PlanetScale, Railway)
- Environment variables in production
- HTTPS requirement

### What NOT to Teach Yet

- React Native / actual mobile development
- Complex PWA features
- Authentication systems

### Common Misconceptions

- "I need separate code for mobile" — Responsive web works on mobile
- "PWAs are as good as native apps" — They have limitations
- "CORS is a bug" — It's a security feature

### Exercises

1. **Full-Stack Todo App**: Frontend + Backend + Database
2. **Contact Form System**: Form → API → Database → Email notification
3. **Simple Blog**: List posts, view post, create post

### Homework

- Deploy your full-stack application
- Add PWA manifest to make it installable
- Test on actual mobile device

### References

- [Frontend Masters — Full Stack for Front-End Engineers](https://frontendmasters.com/courses/fullstack-v3/)
- [MDN — Progressive Web Apps](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
- [Web.dev — PWA](https://web.dev/progressive-web-apps/)

---

## Week 15 — Case Study & Review

**Syllabus Coverage:** Case Study: e-commerce websites and e-carts (completing Unit V)

### Conceptual Goals

- See how all concepts work together in a real application
- Understand e-commerce architecture
- Review all units for exam preparation
- Identify areas for further learning

### Teaching Flow

#### Section 1: E-Commerce Architecture Overview

- User-facing pages: homepage, product listing, product detail, cart, checkout
- Backend services: product catalog, cart management, order processing
- Database design: users, products, categories, orders, order_items
- Payment integration (conceptual — not implementing actual payments)

#### Section 2: Product Catalog System

- Products table with categories (join from Week 12)
- Product listing page with filtering
- Product detail page
- Search functionality

#### Section 3: Shopping Cart System

- Cart data structure
- Adding/removing items
- Quantity updates
- Cart persistence (localStorage or database)
- Cart totals calculation

#### Section 4: Checkout Flow (Conceptual)

- User information collection
- Address management
- Order summary
- Payment gateway concept (Razorpay, Stripe)
- Order confirmation

#### Section 5: Code Walkthrough

- Walk through a simplified e-commerce codebase
- Frontend structure
- Backend API structure
- Database schema
- How everything connects

#### Section 6: Common E-Commerce Patterns

- Product images handling
- Inventory management
- Price formatting
- Stock status
- Related products

#### Section 7: Course Review — Unit by Unit

**Unit I Review: HTML5**

- Document structure
- Semantic HTML
- Forms and validation
- Tables and lists

**Unit II Review: CSS3**

- Selectors and specificity
- Box model
- Flexbox
- Transitions and animations

**Unit III Review: JavaScript**

- Variables, functions, control flow
- DOM manipulation
- Events
- Fetch API, JSON, AJAX

**Unit IV Review: Node.js**

- Modules and NPM
- File system
- HTTP server
- MySQL CRUD

**Unit V Review: Dynamic Web**

- Bootstrap grid and components
- Responsive design
- API integration
- Full-stack patterns

#### Section 8: Exam Preparation

- Expected question types
- Key topics to review
- Common mistakes to avoid
- Practice problems

### Exercises

1. **Mini E-Commerce**: Simplified product listing → cart → checkout flow
2. **Review Quiz**: Self-assessment on all units
3. **Debug Challenge**: Find and fix bugs in provided code

### Homework

- Complete any pending exercises from earlier weeks
- Review all code examples
- Prepare questions for final review

### References

- All previous week references
- [Frontend Masters — Complete Intro to Web Dev v3](https://frontendmasters.com/courses/web-development-v3/)

---

## Appendix: Reference Summary by Topic

### Internet & Web Fundamentals

- [Computerphile — How the Internet Works](https://www.youtube.com/watch?v=7_LPdttKXPc)
- [Fireship — How the Web Works](https://www.youtube.com/watch?v=hJHvdBlSxug)
- [Frontend Masters — Internet Fundamentals](https://www.internetfundamentals.com/)

### HTML

- [Frontend Masters — Intro to HTML (Jen Kramer)](https://frontendmasters.com/bootcamp/introduction-html/)
- [Frontend Masters — HTML Forms](https://frontendmasters.com/bootcamp/html-forms/)
- [MDN — HTML Basics](https://developer.mozilla.org/en-US/docs/Learn/HTML)

### CSS

- [Frontend Masters — Intro to CSS (Jen Kramer)](https://frontendmasters.com/bootcamp/introduction-css/)
- [Frontend Masters — CSS Layouts](https://frontendmasters.com/courses/css-layouts/)
- [Flexbox Froggy](https://flexboxfroggy.com/)
- [CSS Tricks — Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### JavaScript

- [Frontend Masters — Intro to JavaScript (Brian Holt)](https://frontendmasters.com/bootcamp/introduction-javascript/)
- [Frontend Masters — Complete Intro to Web Dev v3](https://frontendmasters.com/courses/web-development-v3/)
- [JavaScript.info](https://javascript.info/)

### Node.js

- [Frontend Masters — Intro to Node.js (Scott Moss)](https://frontendmasters.com/courses/node-js-v3/)
- [Node.js Official Docs](https://nodejs.org/docs/)

### Full-Stack

- [Frontend Masters — Full Stack for Front-End Engineers](https://frontendmasters.com/courses/fullstack-v3/)

### Bootstrap

- [Bootstrap Official Docs](https://getbootstrap.com/docs/)

---

## Appendix: Quick Reference — What to Teach When

| Concept                | Don't Teach Before             |
| ---------------------- | ------------------------------ |
| CSS                    | HTML basics complete (Week 03) |
| JavaScript             | HTML & CSS complete (Week 06)  |
| DOM Manipulation       | JS fundamentals (Week 07)      |
| AJAX/Fetch             | Events & DOM (Week 08)         |
| Node.js HTTP           | JS complete (Week 09)          |
| MySQL                  | Node.js basics (Week 10)       |
| Full-Stack Integration | Node.js + MySQL (Week 12)      |

---

**End of Curriculum Guide**

_Prepared by Rajiv Ramakrishnan_
_Email: gmail@rajiv.kr_
_Mobile: +91 9566134326_
