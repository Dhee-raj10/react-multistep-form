export interface Question {
  id: string;
  label: string;
  type: "text" | "radio" | "checkbox";
  options?: string[];
  required?: boolean;
}

export interface Screen {
  id: string;
  title: string;
  questions: Question[];
}

export interface Chapter {
  id: string;
  title: string;
  screens: Screen[];
}

// Sample Form Configuration
export const formConfig: Chapter[] = [
  {
    id: "chapter1",
    title: "Personal Information",
    screens: [
      {
        id: "screen1",
        title: "Basic Info",
        questions: [
          {
            id: "name",
            label: "Full Name",
            type: "text",
            required: true,
          },
          {
            id: "email",
            label: "Email Address",
            type: "text",
            required: true,
          },
        ],
      },
      {
        id: "screen2",
        title: "Gender & Experience",
        questions: [
          {
            id: "gender",
            label: "Select your gender",
            type: "radio",
            options: ["Male", "Female", "Other"],
            required: true,
          },
          {
            id: "experience",
            label: "Experience Level",
            type: "radio",
            options: ["Beginner", "Intermediate", "Advanced"],
            required: true,
          },
        ],
      },
    ],
  },
  {
    id: "chapter2",
    title: "Skills & Interests",
    screens: [
      {
        id: "screen3",
        title: "Select Skills",
        questions: [
          {
            id: "skills",
            label: "Choose your skills (at least one)",
            type: "checkbox",
            options: ["JavaScript", "React", "Node.js", "MongoDB", "CSS", "HTML"],
            required: true,
          },
          {
            id: "hobbies",
            label: "Select your hobbies",
            type: "checkbox",
            options: ["Reading", "Music", "Sports", "Traveling", "Gaming"],
            required: true,
          },
        ],
      },
      {
        id: "screen4",
        title: "Tools & Languages",
        questions: [
          {
            id: "tools",
            label: "Tools you use",
            type: "checkbox",
            options: ["VS Code", "Git", "Figma", "Postman"],
            required: true,
          },
          {
            id: "languages",
            label: "Programming languages known",
            type: "checkbox",
            options: ["JavaScript", "Python", "Java", "C++", "TypeScript"],
            required: true,
          },
        ],
      },
    ],
  },
];
