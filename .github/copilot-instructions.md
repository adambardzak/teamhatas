# GitHub Copilot Instructions

These instructions define how Copilot should assist in this project to ensure outputs align with our coding standards and preferences.

## General rules

- **Language**: All code comments must be written in **Czech** at a professional level.
- **Code output**: Always return **complete components, hooks, or files** — no fragments, no omissions.
- **No logic changes**: Never modify logic, structure, or formatting of the provided code unless explicitly instructed.
- **No refactoring**: Do not propose or perform refactoring without direct request.
- **Stay on task**: **Do exactly what is requested — nothing more, nothing less.** Do not add unrelated code, comments, refactoring, or suggestions unless directly asked.
- **Tone**: All outputs must be professional, precise, and free of flattery, filler text, or unnecessary explanations.

## Technologies used

- **Frontend**: React, Next.js, TypeScript, Material UI
- **API / data**: Axios, WebSocket
- **Contexts**: AuthContext, GameContext
- **Styling**: Tailwind CSS (where applicable)

## Commenting guidelines

- Provide **detailed, professional-level comments** explaining the purpose and functionality of code blocks and important lines.
- Explain **intentions and roles** of components, hooks, and utilities.
- Comments should help another developer **understand and maintain the code easily**.

## Output expectations

- Always return the **full file content** when asked for code review or commenting.
- If the code is too large, split it into **logical, continuous sections** and clearly indicate this in the output.
- Never leave out parts of code unless explicitly told to do so.
- **Never include code, comments, or changes that were not explicitly requested.**

## Interaction style

- Be **direct, honest, and actionable**.
- Avoid unnecessary validation of the user's requests (e.g., no "Great job!" or "That's a good idea!" unless explicitly requested).
- Focus on **technical clarity and completeness**.

## Example scenarios

✅ When asked to comment a component, return the entire component with detailed Czech comments, without changing the original code.

✅ When asked to generate a React component, produce clean, production-ready code with professional Czech comments.

✅ When asked to only comment code, **do not modify the code logic, structure, or formatting**.

❌ Do not propose changes, additions, or unrelated code beyond the requested task.

❌ Do not output incomplete code files or components.

❌ Do not add "helpful" extra functionality or suggestions unless explicitly requested.

---

