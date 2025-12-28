# 🧠 MindFlow AI

[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933.svg?logo=node.js)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18.x-61DAFB.svg?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6.svg?logo=typescript)](https://www.typescriptlang.org/)
[![Google Gemini](https://img.shields.io/badge/Google-Gemini_API-4285F4.svg?logo=google)](https://ai.google.dev/)

**MindFlow AI** is an intent-understanding system that transforms unstructured human thoughts into structured intelligence.  
It analyzes goals, emotions, constraints, and uncertainties from natural language input and converts them into **visual intent graphs**, enabling context-aware reasoning, smarter decisions, and future-ready AI automation.

---

## 🚀 Why MindFlow AI?

Most AI systems respond to **commands**.  
MindFlow AI understands **intent before execution**.

Humans often express ideas vaguely:

> *“I want to do something meaningful in tech but avoid burnout.”*

MindFlow AI structures this ambiguity into a clear, actionable representation instead of generic responses.

---

## ✨ Key Features

- **Intent Extraction**
  - Identifies goals, emotions, constraints, and unknowns from free-text input
- **Intent Graph Generation**
  - Converts abstract thoughts into structured nodes and relationships
- **AI-Powered Reasoning**
  - Uses Google Gemini for deep semantic understanding
- **Extensible Architecture**
  - Designed as a cognitive layer for future AI agents and tools
- **Human-Centered Intelligence**
  - Focuses on *why* before *what*

---

## 🛠️ Tech Stack & Architecture

| Category        | Technology |
|----------------|-----------|
| **Frontend**   | React, Vite, TypeScript |
| **Backend**    | Node.js, Express.js |
| **AI Layer**   | Google Gemini API |
| **Tools**      | Git, npm |

---

## ⚙️ How It Works

1. User enters a natural language thought
2. AI extracts:
   - Core goal
   - Emotional context
   - Constraints
   - Unknowns
3. Extracted data is converted into an **Intent Graph**
4. Frontend visualizes the graph
5. Graph enables better reasoning, planning, and automation

---

## 🚀 Getting Started

Follow these instructions to run MindFlow AI locally.

### Prerequisites

- Node.js (v18+ recommended)
- npm
- Git

---

### Backend Setup

```bash
cd backend

npm install
npm start
```

### Backend runs on:
http://localhost:5000

---

### Frontend Setup
```bash
cd frontend

npm install
npm run dev
```

### Frontend runs on:
http://localhost:5173

---

### 🔑 Environment Variables
Create a .env file in the backend folder:

```env
GEMINI_API_KEY=your_api_key_here
```
---

### 📂 Project Structure

```
mindflow-ai/
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
│   │   ├── pages/                    # Application pages
│   │   │   └── Home.tsx              # Main UI page
│   │   ├── components/               # Reusable UI components
│   │   │   ├── IntentInput.tsx       # Text input for user thoughts
│   │   │   ├── IntentGraph.tsx       # Intent graph visualization component
│   │   │   └── Loader.tsx            # Loading and state feedback
│   │   ├── services/                 # API communication layer
│   │   │   └── api.ts                # Backend API calls
│   │   ├── styles/                   # Global and component styles
│   │   │   └── theme.css
│   │   └── types/                    # TypeScript type definitions
│   │       └── intent.types.ts       # Intent and graph data models
│   ├── package.json                  # Frontend dependencies & scripts
│   ├── tsconfig.json                 # TypeScript configuration
│   └── vite.config.ts                # Vite build configuration
│
├── .gitignore                        # Git ignored files
├── README.md                         # Project documentation
├── .env.example                      # Sample environment configuration
└── LICENSE                           # Project license

```
