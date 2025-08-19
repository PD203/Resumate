# 📄 Resumate – AI ATS Resume Analyzer  

Resumate is a web application that helps job seekers calculate their **ATS (Applicant Tracking System) score** by analyzing their resume against a **company’s Job Title & Job Description**.  

With **AI-powered feedback**, it not only provides a score but also highlights missing skills, keywords, and structural improvements — helping you **optimize your resume for recruiters and ATS bots**.  

🔗 **Live Demo**: https://resumate-rosy.vercel.app/

---

## 🛠️ Built With  

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)  
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E)  
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)  
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)  
![Puter.js](https://img.shields.io/badge/Puter.js-000000?style=for-the-badge&logo=cloudflare&logoColor=white)  
![Zustand](https://img.shields.io/badge/Zustand-FFB86C?style=for-the-badge&logo=zustand&logoColor=black)  

- **React + Vite** → Frontend framework & build tool  
- **TypeScript** → Type safety and scalability  
- **Tailwind CSS** → Modern, responsive UI design  
- **Puter.js** → Authentication, file storage, AI feedback, database (serverless backend)  
- **Zustand** → State management  
- **React Router v7** → Navigation & data loaders  

---

## ✨ Features  

✔ Sign in with **Puter account**  
✔ Upload **resume (PDF)** securely  
✔ Enter **Company Name, Job Title & Job Description**  
✔ AI calculates **ATS Score** and provides **feedback JSON**  
✔ Resume preview + stored history  
✔ Missing keywords & improvement suggestions  
✔ Clean & responsive UI  

---

## 📸 How to Use  

### 1️⃣ Login with Puter  
<img src="./resuAuth.JPG" alt="Login Screenshot" width="700"/>  

---

### 2️⃣ Upload Resume  
<img src="./resu1.JPG" alt="Upload Resume Screenshot" width="700"/>  

---

### 3️⃣ Enter Company Details & JD  
<img src="./resu2.JPG" alt="Job Description Screenshot" width="700"/>  

---

### 4️⃣ Get ATS Score & Feedback  
<img src="./resu3.JPG" alt="ATS Score Screenshot" width="700"/>  

---

### 5️⃣ Resume History & Tracking  
<img src="./resu.JPG" alt="Resume History Screenshot" width="700"/>  

---

## 🔄 Workflow  

1. User logs in with **Puter Auth**  
2. Uploads resume (stored in **puter.fs**)  
3. Enters company name, job title, and job description  
4. Resume + JD sent to **puter.ai.feedback()** → generates ATS score & JSON feedback  
5. Metadata, score, and feedback stored in **puter.kv**  
6. User can view results & history in dashboard  

---

## 🙌 Inspiration  

This project was inspired by **JavaScript Mastery’s real-world app tutorials**, which focus on building modern, production-ready full-stack applications.  
A big thanks to the open-source community for ideas and support! ❤️  

---

## ⭐ Support  

If you find this project useful, please consider giving it a **star** ⭐ on GitHub!  
