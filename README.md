# 🎯 InterviewIQ.AI

A full-stack SaaS platform for AI-powered interview preparation — upload your resume, get personalized questions, practice rounds, and receive intelligent feedback. Built with real-world SaaS architecture including payments, auth, and production deployment.

![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat&logo=mongodb&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=firebase&logoColor=black)
![Razorpay](https://img.shields.io/badge/Razorpay-02042B?style=flat&logo=razorpay&logoColor=3395FF)
![Render](https://img.shields.io/badge/Render-46E3B7?style=flat&logo=render&logoColor=white)

🔗 **Live Demo** → [three-interviewiq-client-1lxi.onrender.com](https://three-interviewiq-client-1lxi.onrender.com/)

**Frontend**
<img width="1198" height="885" alt="image" src="https://github.com/user-attachments/assets/9340e159-f6de-45e7-9ccc-81d85a3d8028" />
<img width="1400" height="731" alt="Screenshot 2026-06-05 182941" src="https://github.com/user-attachments/assets/8ca864c2-45fb-480e-98c7-72a904f65bae" />

---

## ✨ Features

- 📄 **Resume Upload (PDF)** — AI generates personalized interview questions from your resume
- 🤖 **AI Interview Rounds** — Practice both Technical and HR rounds with adaptive follow-ups
- 💬 **Intelligent Feedback** — Real-time evaluation and scoring after each answer
- ⏱ **Timer-Based Simulation** — Real interview pressure with time tracking
- 💰 **Credit-Based Access System** — Users purchase credits to access AI sessions
- 💳 **Razorpay Payments** — Secure payment gateway integration for credit purchases
- 🔐 **Firebase Google Auth** — One-click Google login with secure session management
- 📊 **Performance Dashboard** — Graphs and analytics tracking your progress over time
- 🎞 **Framer Motion UI** — Smooth, polished animations throughout

---

## 🛠 Tech Stack

**Frontend**
- React.js + Vite
- Redux (state management)
- Framer Motion (animations)
- JavaScript (ES6+)

**Backend**
- Node.js + Express.js
- MongoDB (database)
- Firebase (Google Authentication)
- OpenRouter API (AI question generation)
- Razorpay (payments)

**Deployment**
- Full stack deployed on Render

---

## 📁 Project Structure

```
3.interviewIQ/
├── client/               # React frontend
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── redux/
│       └── utils/
└── server/               # Express backend
    ├── config/
    ├── controllers/
    ├── middlewares/
    ├── models/
    ├── routes/
    └── services/
```

---

## ⚙️ Local Setup

### Prerequisites

- Node.js v18+
- MongoDB URI (Atlas or local)
- Firebase project (Google Auth enabled)
- OpenRouter API key
- Razorpay Key ID & Secret

### Clone & Install

```bash
git clone https://github.com/Krishna-para/3.interviewIQ.git
cd 3.interviewIQ

# Install client dependencies
cd client && npm install

# Install server dependencies
cd ../server && npm install
```

### Environment Variables

Create `.env` inside `server/`:

```env
OPENROUTER_API_KEY=your_key
MONGODB_URI=your_mongodb_uri
FIREBASE_API_KEY=your_firebase_key
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
```

### Run Locally

```bash
# Start backend (from server/)
node index.js

# Start frontend (from client/)
npm run dev
```

---

## 🎓 What This Project Teaches

- Real-world SaaS architecture with credit-based access
- Payment gateway integration (Razorpay)
- Firebase Google OAuth in a MERN stack
- AI API integration with OpenRouter
- Production deployment on Render
- Backend structuring with controllers, services, and middlewares

---

## 🔥 Perfect For

- MERN Stack Developers
- Final Year Major Projects
- SaaS Builders
- Portfolio Upgrade

---

## 📬 Contact

Krishna Para — [GitHub](https://github.com/Krishna-para) · [LinkedIn](https://www.linkedin.com/in/krishna-para)
