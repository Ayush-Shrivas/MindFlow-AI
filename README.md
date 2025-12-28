# 🧠 MindFlare AI

[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933.svg?logo=node.js)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18.x-61DAFB.svg?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6.svg?logo=typescript)](https://www.typescriptlang.org/)
[![Google Gemini](https://img.shields.io/badge/Google-Gemini_API-4285F4.svg?logo=google)](https://ai.google.dev/)

**MindFlare AI** is an intent-understanding system that transforms unstructured human thoughts into structured intelligence.
It analyzes goals, emotions, constraints, and uncertainties from natural language input and converts them into **visual intent graphs**, enabling context-aware reasoning, smarter decisions, and future-ready AI automation.

---

## 🚀 Why MindFlare AI?

Most AI systems respond to **commands**.
**MindFlare AI** understands **intent before execution**.

Humans often express ideas vaguely:

> *“I want to do something meaningful in tech but avoid burnout.”*

**MindFlare AI** structures this ambiguity into a clear, actionable representation instead of generic responses.

---

## ✨ Key Features

* **Intent Extraction**

  * Identifies goals, emotions, constraints, and unknowns from free-text input
* **Intent Graph Generation**

  * Converts abstract thoughts into structured nodes and relationships
* **AI-Powered Reasoning**

  * Uses Google Gemini for deep semantic understanding
* **Extensible Architecture**

  * Designed as a cognitive layer for future AI agents and tools
* **Human-Centered Intelligence**

  * Focuses on *why* before *what*

---

## 🛠️ Tech Stack & Architecture

| Category     | Technology              |
| ------------ | ----------------------- |
| **Frontend** | React, Vite, TypeScript |
| **Backend**  | Node.js, Express.js     |
| **AI Layer** | Google Gemini API       |
| **Tools**    | Git, npm                |

---

## ⚙️ How It Works

1. User enters a natural language thought
2. AI extracts:

   * Core goal
   * Emotional context
   * Constraints
   * Unknowns
3. Extracted data is converted into an **Intent Graph**
4. Frontend visualizes the graph
5. Graph enables better reasoning, planning, and automation

---

## 🚀 Getting Started

Follow these instructions to run **MindFlare AI** locally.

### Prerequisites

* Node.js (v18+ recommended)
* npm
* Git

---

### Backend Setup

```bash
cd backend

npm install
npm start
```

### Backend runs on:

[http://localhost:5000](http://localhost:5000)

---

### Frontend Setup

```bash
cd frontend

npm install
npm run dev
```

### Frontend runs on:

[http://localhost:5173](http://localhost:5173)

---

### 🔑 Environment Variables

Create a `.env` file in the backend folder:

```env
GEMINI_API_KEY=your_api_key_here
```

---

### 📂 Project Structure

```
mindflare-ai/
├── backend/                          # Node.js + Express backend (AI & APIs)
│   ├── src/
│   │   ├── index.js                  # Server entry point
│   │   ├── routes/                   # API route definitions
│   │   │   └── intent.routes.js      # Intent extraction endpoint
│   │   ├── services/                 # External & AI service integrations
│   │   │   └── gemini.service.js     # Google Gemini API interaction
│   │   ├── utils/                    # Helper and transformation logic
│   │   │   └── intentGraphBuilder.js # Converts intent JSON into graph structure
│   │   ├── config/                   # App configuration
│   │   │   └── env.js                # Environment variable loader
│   │   └── middleware/               # Custom Express middleware
│   │       └── errorHandler.js       # Centralized error handling
│   ├── package.json                  # Backend dependencies & scripts
│   ├── package-lock.json
│   └── .env                          # Environment variables (ignored in Git)
│
├── frontend/                         # React + Vite + TypeScript frontend
│   ├── public/                       # Static assets
│   │   └── index.html
│   ├── src/
│   │   ├── main.tsx                  # Frontend entry point
│   │   ├── App.tsx                   # Root React component
│   │   ├── pages/
│   │   │   └── Home.tsx              # Main UI page
│   │   ├── components/
│   │   │   ├── IntentInput.tsx
│   │   │   ├── IntentGraph.tsx
│   │   │   └── Loader.tsx
│   │   ├── services/
│   │   │   └── api.ts
│   │   ├── styles/
│   │   │   └── theme.css
│   │   └── types/
│   │       └── intent.types.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
│
├── .gitignore
├── README.md
├── .env.example
└── LICENSE
```

---

## 👤 Author & 🤝 Collaboration

### Author

**[Ayush Shrivas](https://github.com/Ayush-Shrivas)**
Project Lead & Full-Stack Developer

Responsible for overall system design, frontend–backend integration, and AI architecture.

---

## 🤝 Collaboration

This project was collaboratively developed with contributions across frontend, backend, and AI reasoning.

* **[Laxmi Tiwari](https://github.com/laxmi911)** – Frontend Development & UI Contributions
* **[Apurv Singh Rajpoot](https://github.com/Apurv1107)** – Backend Development & API Design
* **[Dev Kumar Patel](https://github.com/Dev-Patel0611)** – Research, AI Logic & System Support

---

## 👥 Contributors

Thanks to the following people for contributing to **MindFlare AI**:

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Ayush-Shrivas">
        <img src="https://avatars.githubusercontent.com/Ayush-Shrivas" width="80px;" alt="Ayush Shrivas"/><br />
        <sub><b>Ayush Shrivas</b></sub>
      </a><br />
      <sub>Project Lead & Full-Stack</sub>
    </td>
    <td align="center">
      <a href="https://github.com/laxmi911">
        <img src="https://avatars.githubusercontent.com/laxmi911" width="80px;" alt="Laxmi Tiwari"/><br />
        <sub><b>Laxmi Tiwari</b></sub>
      </a><br />
      <sub>Frontend</sub>
    </td>
    <td align="center">
      <a href="https://github.com/Apurv1107">
        <img src="https://avatars.githubusercontent.com/Apurv1107" width="80px;" alt="Apurv Singh Rajpoot"/><br />
        <sub><b>Apurv Singh Rajpoot</b></sub>
      </a><br />
      <sub>Backend</sub>
    </td>
    <td align="center">
      <a href="https://github.com/Dev-Patel0611">
        <img src="https://avatars.githubusercontent.com/Dev-Patel0611" width="80px;" alt="Dev Kumar Patel"/><br />
        <sub><b>Dev Kumar Patel</b></sub>
      </a><br />
      <sub>AI & Research</sub>
    </td>
  </tr>
</table>
