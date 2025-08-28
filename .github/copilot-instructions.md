# Copilot Instructions for Code Reviews – React.js Project

## Purpose
These instructions guide GitHub Copilot (or any automated reviewer) to perform **React.js code reviews** with a focus on **readability, maintainability, performance, and best practices**.

---

## Review Guidelines

### 1. Code Quality & Readability
- Ensure **consistent code style** (indentation, spacing, quotes, semicolons).
- Verify **descriptive variable and function names**.
- Remove **unused variables, imports, and commented-out code**.
- Check for **clear component structure** with separation of concerns.

### 2. React Best Practices
- Functional components preferred over class components unless necessary.
- Avoid unnecessary re-renders by using:
  - `React.memo` for pure components.
  - `useCallback` / `useMemo` for expensive computations.
- Ensure `key` props are set in lists and are **stable & unique**.
- Avoid directly mutating state; always use state setters or `setState`.

### 3. Hooks & State Management
- Hooks must follow **Rules of Hooks** (called at top level, not inside conditions).
- Ensure **state is minimal** and derived values are computed when needed.
- Avoid **deeply nested props drilling** — use Context API or state management library if required.

### 4. Performance Checks
- Identify and optimize **large bundle sizes** (code splitting, lazy loading).
- Ensure images and assets are optimized.
- Avoid inline anonymous functions inside JSX where possible.
- Check for unnecessary re-fetching of data — use caching or `useEffect` dependency control.

### 5. Security & Safety
- Avoid `dangerouslySetInnerHTML` unless necessary (and sanitize if used).
- Prevent exposing API keys or secrets in the frontend code.
- Validate user input before processing.
- Avoid storing sensitive data in localStorage without encryption.

### 6. File & Folder Structure
- Keep components small, reusable, and in logical folders.
- Separate **UI components** and **business logic**.
- Ensure **consistent naming convention** (PascalCase for components, camelCase for variables).

### 7. Testing
- Confirm that components have **unit tests** for core logic.
- Ensure **React Testing Library** or **Jest** is used for testing.
- Avoid over-mocking; test actual behavior.

### 8. Accessibility (a11y)
- All interactive elements must have `aria` labels where applicable.
- Use semantic HTML (`<button>`, `<nav>`, `<main>` instead of `<div>`).
- Ensure sufficient color contrast and keyboard navigation.

---

## Output Format for Review
When reviewing code, provide feedback in this structure:
1. **Summary** – Overall thoughts on the code quality.
2. **Positives** – What’s working well.
3. **Issues Found** – Specific problems with explanations.
4. **Suggestions for Improvement** – Clear steps to improve.

---

## Example Review Output
**Summary:**  
The code is well-structured but has minor performance issues.

**Positives:**  
- Good use of functional components.
- Proper folder structure and naming.

**Issues Found:**  
- Missing `key` prop in list rendering.  
- Multiple inline arrow functions causing re-renders.

**Suggestions:**  
- Add `key` props to all `.map()` rendered lists.  
- Move arrow functions outside of JSX or use `useCallback`.

---

