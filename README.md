# React Multi-Step Form

A mobile-first, multi-step form built with **React**, **TypeScript**, and **Tailwind CSS**. The form is fully driven by a configuration file, supports text, radio, and checkbox inputs, and includes validation with React Hook Form and Yup.

---

## 📂 Project Structure

multi-step-form/
│
├── public/ # Public assets
├── src/
│ ├── components/ # Reusable components
│ │ ├── Question.tsx
│ │ └── Navigation.tsx
│ ├── config.ts # Chapters, screens, questions configuration
│ ├── App.tsx # Main App component
│ ├── index.tsx # Entry point
│ ├── index.css # Tailwind CSS imports
│ └── transitions.css # CSS transitions for form screens
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── tsconfig.json

---

## ⚙️ Setup Instructions

1. **Clone the repository**

 ```bash
 git clone https://github.com/Dhee-raj10/react-multistep-form.git
 cd react-multistep-form
 '''

2. **Install dependencies**
  npm install


3.Run the development server

npm start
Open http://localhost:3000
 to view the app.


Build & Deployment

Build the project

npm run build


Deploy to GitHub Pages

npm run deploy


Live demo: https://dhee-raj10.github.io/react-multistep-form/


# Features

Mobile-first design with responsive layout.

Chapters → Screens → Questions structure.

Supports text, radio, and checkbox inputs.

Validation for required fields and email formats.

Navigation with Back, Continue, and Submit buttons.

Final submission logs answers as a { questionId: answer } object.

# Author

Alugubelli Dheeraj Reddy
Email: dheerajreddyalugubelli@gmail.com

GitHub: https://github.com/Dhee-raj10
