# 🚀 TradeFlow – Full-Stack Trading Platform (MERN)

[![GitHub stars](https://img.shields.io/github/stars/k-vaishnav/Trade-Flow?style=social)](https://github.com/k-vaishnav/Trade-Flow/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/k-vaishnav/Trade-Flow?style=social)](https://github.com/k-vaishnav/Trade-Flow/network)
[![GitHub issues](https://img.shields.io/github/issues/k-vaishnav/Trade-Flow)](https://github.com/k-vaishnav/Trade-Flow/issues)
[![License](https://img.shields.io/github/license/k-vaishnav/Trade-Flow)](https://github.com/k-vaishnav/Trade-Flow/blob/main/LICENSE)

---
TradeFlow is a **full-stack stock trading platform** inspired by real brokerage systems.  
It features a **React landing app**, a **React dashboard**, and a **Node.js + Express backend** with secure authentication, portfolio APIs, and modular architecture.

---

## 🌟 Features

### 🔐 Authentication
- JWT-based authentication
- Secure cookies using **react-cookie**
- Password hashing with **bcryptjs**
- Protected backend routes

### 📊 Trading Dashboard
- Portfolio overview: **Holdings, Positions, Orders, Funds**
- Interactive charts (Pie/Bar) using **Chart.js**
- Clean and reusable UI components

### ⚙️ Backend API
- Modular controllers & routes
- MongoDB + Mongoose models
- Error-handling middleware
- CORS configured for multiple origins

### 🎨 Landing Frontend
- Signup & Login
- Toast notifications with **react-toastify**
- Axios for API calls
- Cookie-based user session handling

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

## 🍪 React Cookies Usage

Cookies are used for handling:

- JWT tokens
- Auto-login sessions
- Protecting dashboard routes
- Logging out users safely  

Example:

```js
const [cookies, setCookie, removeCookie] = useCookies(["token"]);
setCookie("token", authToken, { path: "/" });
```
▶️ Running the Project Locally
1️⃣ Backend
cd backend
npm install
npm start

2️⃣ Frontend
cd frontend
npm install
npm start

3️⃣ Dashboard
cd dashboard
npm install
npm start

**🛠️ Tech Stack**
| Layer           | Technologies                                                            |
| --------------- | ----------------------------------------------------------------------- |
| Frontend        | React.js, React Router, Axios, react-cookie, react-toastify, Chart.js   |
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

> Full-stack development (React + Node.js + MongoDB)

> JWT-based authentication & protected routes

> API development & integration

> MongoDB data modeling with Mongoose

> State management with cookies

> Interactive charts & data visualization

> Responsive UI with React

> Git & GitHub workflow

**📄 License **
MIT License – Open-source
