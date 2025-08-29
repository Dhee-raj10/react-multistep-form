# React Multi-Step Form

A **mobile-first, multi-step form** application built with **React**, **TypeScript**, and **Tailwind CSS**.  
The form is **configuration-driven**, supports text, radio, and checkbox inputs, and includes **validation** for required fields and email formats.  
Built as part of the **full-stack web development learning project** to demonstrate React, form handling, and responsive UI skills.


---

## Overview

Filling long forms can be tedious and confusing, especially when navigating multiple sections. Our **React Multi-Step Form** simplifies this process by breaking forms into **chapters and screens**, providing **validation**, and enhancing usability on both mobile and desktop devices.  

The idea is simple:  
**Guide. Validate. Submit. Simplify.**  
All in a clean, responsive interface.


---

## Key Features

- **Multi-Step Navigation** — Forms are divided into chapters and screens for easy completion.  
- **Input Validation** — Required fields, email format checks, and multi-select validations prevent errors.  
- **Dynamic Configuration** — Questions and screens are fully driven by a configuration file; no hardcoding.  
- **Responsive Design** — Mobile-first layout with centered form on desktop screens using Tailwind CSS.  
- **State Preservation** — Answers are preserved when navigating between screens.  
- **Final Submission Logging** — Collects all answers in a `{ questionId: answer }` object and logs it to the console.  
- **Smooth Transitions** — Screen transitions implemented using `react-transition-group`.


---

##  Tech Stack

| Layer       | Tech Used                     |
|-------------|-------------------------------|
| Frontend    | React.js, TypeScript, Tailwind CSS |
| Forms       | React Hook Form, Yup          |
| Transitions | react-transition-group       |
| Deployment  | GitHub Pages                 |

## Folder Structure
    multi-step-form/
    │
    ├── public/               # Public assets
    ├── src/
    │ ├── components/        # Reusable components
    │ │ ├── Question.tsx     #
    │ │ └── Navigation.tsx
    │ ├── config.ts          # Chapters, screens, questions configuration
    │ ├── App.tsx            # Main App component
    │ ├── index.tsx          # Entry point
    │ ├── index.css          # Tailwind CSS imports
    │ └── transitions.css    # CSS transitions for form screens
    ├── package.json
    ├── tailwind.config.js
    ├── postcss.config.js
    └── tsconfig.json

## Sample Output

> **Final Submission Object:**  
```json
{
  "name": "Alugubelli Dheeraj Reddy",
  "email": "dheerajreddyalugubelli@gmail.com",
  "skills": ["React", "TypeScript", "Tailwind CSS"],
  "experience": "2 years"
}
```

---

## ⚙️ Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/Dhee-raj10/react-multistep-form.git
cd react-multistep-form
```
### 2. Install dependencies
```
npm install
```
### 3. Run the development server
```
npm start
```

Open http://localhost:3000 to view the app.
 
### 4. Build & Deployment
1.Build the project
```
npm run build
```
2.Deploy to GitHub Pages
```
npm run deploy

```
Live demo: https://dhee-raj10.github.io/react-multistep-form/
