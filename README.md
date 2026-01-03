# 🚀 TradeFlow – Full-Stack Trading Platform (MERN)

[![GitHub stars](https://img.shields.io/github/stars/k-vaishnav/Trade-Flow?style=social)](https://github.com/k-vaishnav/Trade-Flow/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/k-vaishnav/Trade-Flow?style=social)](https://github.com/k-vaishnav/Trade-Flow/network)
[![GitHub issues](https://img.shields.io/github/issues/k-vaishnav/Trade-Flow)](https://github.com/k-vaishnav/Trade-Flow/issues)
[![License](https://img.shields.io/github/license/k-vaishnav/Trade-Flow)](https://github.com/k-vaishnav/Trade-Flow/blob/main/LICENSE)

---
TradeFlow is a **full-stack stock trading platform** inspired by real brokerage systems.  
It features a **React landing app**, a **React dashboard**, and a **Node.js + Express backend** with secure authentication, and a local AI assistant for trading guidance.

---

## 🌐 Live Demo:
- Frontend: https://trade-flow-frontend.onrender.com
- Dashboard: https://trade-flow-dashboard-fhaz.onrender.com

## ⚠️ Backend is hosted on Render free tier.
Initial requests may take 20–30 seconds due to cold start.


## 🌟 Features

### 🔐 Authentication
- JWT-based authentication
- HttpOnly secure authentication cookies
- Password hashing with **bcryptjs**
- Protected backend routes

 ### ⚠️ Note:
Authentication uses HttpOnly cookies (more secure), so the token cannot be accessed via JavaScript or react-cookie.
react-cookie is only used for non-sensitive UI preferences.

### 📊 Trading Dashboard
- Portfolio overview: **Holdings, Positions, Orders, Funds**
- Interactive charts (Pie/Bar) using **Chart.js**
- Buy/Sell Orders (virtual trading)
- Clean and reusable UI components

### 🤖 Local AI Assistant
- Fully client-side AI assistant using WebLLM
- Users can ask questions about stocks, trading terms, and indicators
- Works with or without login
- Typing animation and clear, concise responses
- Safe: never gives personal financial advice

### ⚙️ Backend API
- Modular controllers & routes
- MongoDB + Mongoose models
- Centralized error handler
- CORS configured for multiple origins
- Token verification middleware

### 🎨 Landing Frontend
- Signup & Login
- Toast notifications with **react-toastify**
- Axios for API calls
- Cookie-based session (Http only)
- AI Assistant
---

## 📁 Project Structure

tradeflow/
│
├── frontend/ # React Landing App (Signup/Login)
│ ├── src/
│ └── package.json
│
├── backend/ # Node.js + Express REST API
│ ├── src/
│ └── package.json
│
└── dashboard/ # React Dashboard (Holdings, Orders, Funds)
├── src/
└── package.json

---

### 🍪 Cookie Strategy (Important)

TradeFlow uses cookies for :

✔ 1. HttpOnly Authentication Cookie

Used for:
- Session persistence
- /verify route
- Protected dashboard access

This cookie **cannot be accessed by JavaScript** (more secure).
It is sent automatically through axios when using:
```
js
axios.get("/users/verify", { withCredentials: true });

```

▶️ Running the Project Locally

## 💻 Installation & Running

1️⃣ Backend
- cd backend
- npm install
- npm start

2️⃣ Frontend
- cd frontend
- npm install
- npm start

3️⃣ Dashboard
- cd dashboard
- npm install
- npm start

**Open your browser:**
Frontend: http://localhost:3000
Dashboard: http://localhost:3001
Backend API: http://localhost:3002

**🛠️ Tech Stack**
| Layer           | Technologies                                                            |
| --------------- | ----------------------------------------------------------------------- |
| Frontend        | React.js, React Router, Axios, react-cookie(UI only), react-toastify, Chart.js, WebLLM (AI Assistant)   |
| Backend         | Node.js, Express, MongoDB, Mongoose, JWT, bcryptjs, cookie-parser, CORS |
| Testing         | Jest, ThunderClient                                                     |
| Version Control | Git, GitHub                                                             |


**📦 API Overview**
| Method | Endpoint  | Description          |
| ------ | --------- | -------------------- |
| POST   | `/signup` | Create new user      |
| POST   | `/login`  | Login & set cookie   |
| GET    | `/logout` | Clear cookie         |
| GET    | `/verify` | Check active session |


| Method | Endpoint        | Description         |
| ------ | --------------- | ------------------- |
| GET    | `/allHoldings`  | Fetch user holdings |
| GET    | `/allPositions` | Fetch all positions |
| POST   | `/buy`          | Place a buy order   |
| POST   | `/sell`         | Place a sell order  |

**📌 Skills Demonstrated**

- Full-stack development (React + Node.js + MongoDB)

- JWT-based authentication & protected routes

- API development & integration

- MongoDB data modeling with Mongoose

- State management with cookies

- Interactive charts & data visualization

- Responsive UI with React

- Git & GitHub workflow

- Client-side AI integration (WebLLM)
  
- AI-driven user guidance and explanation


**📄 License **
MIT License – Open-source
