# Week 01 — Foundations of the Web & HTML5

> **Goal:** Understand how the web works and write correct HTML
> **Focus:** Concepts first, memorization later

---

## 1. Why This Week Matters

Before learning frameworks, it’s important to understand how the browser actually works.

- CSS depends on HTML structure
- JavaScript depends on the DOM
- Backend depends on request–response

Strong fundamentals make future learning easier.

---

## 2. Internet vs World Wide Web

- **Internet:** Network of connected computers
- **World Wide Web:** Websites running on the internet

Examples:

- Email → Internet (not Web)
- WhatsApp → Internet (not Web)
- Websites → Web

---

## 3. Client–Server Model

Every website works like this:

1. Browser sends a request
2. Server sends a response
3. Browser renders the page

This applies to all websites, simple or complex.

---

## 4. What Happens When You Type a URL

1. Browser checks cache
2. DNS finds the server IP
3. Browser sends HTTP request
4. Server responds with HTML
5. Browser renders the page

Browsers understand HTML, CSS, and JavaScript only.

---

## 5. Understanding a URL

Example:

```html
https://example.com/products?id=10
```

- Protocol: https
- Domain: example.com
- Path: /products
- Query: id=10

---

## 6. Static vs Dynamic Websites

**Static:** Same content for everyone
**Dynamic:** Content changes based on data or user

Both ultimately send HTML to the browser.

---

## 7. What HTML Is (and Is Not)

HTML:

- Is not a programming language
- Has no logic or conditions
- Defines structure and meaning

---

## 8. Basic HTML Page Structure

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>This is my first web page.</p>
  </body>
</html>
```

---

## 9. Common HTML Tags

- Headings: h1–h6
- Paragraph: p
- Link: a
- Image: img
- Lists: ul, ol, li
- Tables: table, tr, th, td

Tables are for data, not layout.

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

- Rebuild both pages from scratch
- Add one new field to the form
- Be ready to explain your choices

---

## Key Takeaways

- Web follows a client–server model
- HTML defines structure
- Fundamentals compound over time

Next week: **HTML Structure, Lists & Tables**
