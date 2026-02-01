# 📘 RecruiterReady JS: The "No-AI" Development Manual

**Project Philosophy**: This website is built with **Pure HTML, CSS, and JavaScript**. We do NOT use frameworks like Bootstrap, Tailwind, or React. This means the code is lightweight, fast, and completely under your control.

This guide will teach you how to read, understand, and edit every single line.

---

## 📂 1. The File Structure (The Map)

- **`index.html`**: The **Skeleton**. This contains all the text, images, and links. If you want to change a word, it's here.
- **`css/style.css`**: The **Global Skin**. Colors, fonts, buttons, and the navbar style live here.
- **`css/hompage.css`**: The **Page Layout**. The hero section, the grid of cards, and animation specific to the home page.
- **`js/index.js`**: The **Brain**. Handles clicking, glow effects, and scroll animations.

---

## 🧱 2. HTML: The Building Blocks

You asked about specific classes. Here is exactly how they work:

### The Navbar Anatomy
```html
<nav class="glass-panel sticky-nav">
    <div class="nav-content">
        <!-- Logo and Links inside -->
    </div>
</nav>
```
1.  **`glass-panel`**: This is a **Design Class**. It adds the frosted glass effect (background blur + transparency). It is reusable; we use it on cards too.
2.  **`sticky-nav`**: This is a **Position Class**. It tells the browser: "Lock this bar to the top of the screen."
3.  **`nav-content`**: This is a **Layout Class**. It uses `display: flex` to push the Logo to the left and Links to the right.

### The Page Layout
```html
<body class="body-container">
    <main class="main-content">
```
1.  **`body-container`**: This wraps the entire website. We use it to set the background mesh gradient (that purple glow behind everything).
2.  **`main-content`**: This acts as a Safety Rail. It prevents your website from stretching 4000px wide on a gaming monitor. It limits the width to `1300px` and centers it.

---

## 🎨 3. CSS: The Design System

### The "Control Room" (CSS Variables)
Open `css/style.css` and look at the top (`:root`). This is where you control the theme.
```css
:root {
    --primary: hsl(230, 85%, 60%); /* The Main Blue Color */
    --accent: hsl(190, 90%, 50%);  /* The Cyan Highlights */
    --glass-blur: 16px;            /* How blurry the glass cards are */
}
```
**Experiment**: Change `--primary` to `red` here, and watch your whole website update instantly.

### The Grid System (Bento Grid)
We don't use Bootstrap columns. We use **CSS Grid**.
In `css/hompage.css`, look for `.bento-grid`.
*   It splits the screen into **12 invisible columns**.
*   **`.span-4`**: Takes 4/12 columns (1/3 width).
*   **`.span-6`**: Takes 6/12 columns (Half width).
*   **`.span-12`**: Takes 12/12 columns (Full width).

**Mobile Rule**: At the bottom of the CSS file, inside `@media (max-width: 768px)`, we tell all cards to become `span-12`. This makes them stack vertically on phones.

---

## ⚡ 4. JavaScript: The Logic

Open `js/index.js`. It performs 3 specific jobs:

### Job 1: The "Flashlight" Glow
```javascript
card.addEventListener('mousemove', (e) => { ... })
```
*   **What it does**: It tracks your mouse position on every `.bento-card`.
*   **The Result**: It sends X and Y coordinates to the CSS. The CSS then moves a `radial-gradient` (a glowing circle) to follow your cursor.

### Job 2: Scroll Animations
```javascript
const observer = new IntersectionObserver(...)
```
*   **What it does**: It acts like a security camera. It watches the bottom of the screen.
*   **The Result**: When a section ("Why Learn Here") scrolls into view, the camera tells it to add the class `.animate-fade`. This trigger the slide-up animation defined in CSS.

### Job 3: The Dropdown Redirect
*   **What it does**: When you select a chapter from the dropdown and click "Go", it reads the value and sends you to that folder (e.g., `../ch1/index.html`).

---

## 📖 Class Dictionary (Cheat Sheet)

| Class Name | Type | What it does | Where to find it |
| :--- | :--- | :--- | :--- |
| `.glass-panel` | Design | Adds transparency, blur, and a thin border. | `style.css` |
| `.text-gradient` | Design | Makes text look like it's glowing with color. | `style.css` |
| `.section-padding` | Layout | Adds 8rem space (top/bottom) to sections. | `style.css` |
| `.bento-grid` | Layout | The 12-column grid container. | `hompage.css` |
| `.bento-card` | Component | A specific card inside the grid with hover effects. | `hompage.css` |
| `.trust-badge` | Component | The small pill-shaped label (e.g., "Recruiter Approved"). | `hompage.css` |
| `.btn-primary` | Component | The main glowing blue button. | `style.css` |

---

**You are now the master of this codebase.** 🚀
