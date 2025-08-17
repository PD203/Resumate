AI Resume Analyzer
📋 Table of Contents

✨ Introduction

⚙️ Tech Stack

🔋 Features

🤸 Workflow

📦 Authentication & Storage

🚀 Inspired By

✨ Introduction

The AI Resume Analyzer is a web application built with React, React Router, and Puter.js. It allows users to upload resumes, get AI-powered feedback, and receive ATS scores tailored to specific job descriptions. The project emphasizes a modern, reusable UI, real-time analysis, and serverless storage with Puter.js.

⚙️ Tech Stack

React – UI library for building reusable components.

React Router v7 – Powerful routing with nested routes and data loaders.

Puter.js – Serverless SDK for auth, storage, database, and AI services.

Tailwind CSS – Utility-first CSS for responsive design.

TypeScript – Strongly-typed JavaScript for better tooling and maintainability.

Vite – Modern build tool with instant HMR.

Zustand – Minimal state management with global store support.

🔋 Features

Authentication – Seamless login using Puter.js without custom backend.

Resume Upload & Storage – Store resumes (PDF) and preview images securely.

AI Resume Matching – Get ATS scores and detailed, structured AI feedback.

Reusable Modern UI – Clean, responsive components built with Tailwind CSS.

Cross-Device Compatibility – Works smoothly across all screen sizes.

Code Reusability & Architecture – Modular and maintainable codebase.

🤸 Workflow

Upload & Input – User provides optional details (Company Name, Job Title, Job Description) and uploads a resume (PDF).

Processing – PDF is uploaded to puter.fs, a PNG preview is generated, and metadata is stored in puter.kv.

AI Analysis – Resume is analyzed via ai.feedback(), returning ATS score + structured feedback JSON.

Store & Redirect – Feedback is saved in puter.kv, and the user is redirected to the results page.

Display Results – Preview of the resume and AI feedback (Summary, ATS, Details, Score Breakdown) is shown.

Wipe (Dev Only) – /wipe route allows clearing all stored resumes and metadata during development.

📦 Authentication & Storage
Authentication

Provider: Puter.js

Flow:

Unauthenticated users visiting protected routes are redirected to /auth.

puter.auth.signIn() handles login via Puter.

usePuterStore maintains session state and user info.

Storage

File Storage (puter.fs)

Resumes (PDFs) and preview images (PNG) are uploaded and stored.

Metadata Storage (puter.kv)

Resume records are saved with metadata: ID, company/job info, file paths, and AI feedback.

Home page fetches all resume:* entries to display past analyses.

🚀 Inspired By

This project was inspired by JavaScript Mastery tutorials, which provide detailed, beginner-friendly guides on building modern full-stack applications.