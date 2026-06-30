# FitTrack 🏋️

A full-stack fitness tracking application built with the **MERN stack** and **TypeScript**. FitTrack allows users to securely create, manage, and track their workouts through a modern, responsive interface. The application features JWT authentication, protected API routes, and a RESTful backend powered by Express and MongoDB.

<img width="2878" height="1373" alt="FitTrack Screenshot" src="https://github.com/user-attachments/assets/b516aed2-4e29-4bf8-8c47-a514768da47b" />

---

## ✨ Features

- 🔐 Secure user authentication with JWT
- 👤 User registration and login
- 🏋️ Create, view, and delete workouts
- 📊 Track workout title, load, and repetitions
- 🔒 Protected frontend routes
- 🌐 RESTful Express API
- 💾 MongoDB database with Mongoose
- ⚡ Fully built with TypeScript
- 📱 Responsive and modern UI

---

## 🛠️ Tech Stack

### Frontend
- React
- TypeScript
- React Router
- Context API
- Custom React Hooks
- CSS

### Backend
- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose

### Authentication
- JSON Web Tokens (JWT)
- bcrypt

### Development Tools
- TypeScript
- Nodemon
- ESLint

---

## 📂 Project Structure

```text
FitTrack/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── types/
│   │   └── App.tsx
│   ├── package.json
│   └── tsconfig.json
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.ts
│   ├── package.json
│   └── tsconfig.json
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm
- MongoDB Atlas or a local MongoDB instance
- Git

---

## 📥 Installation

### 1. Clone the repository

```bash
git clone https://github.com/Cffampo/FitTrack.git
cd FitTrack
```

### 2. Install dependencies

Frontend

```bash
cd frontend
npm install
```

Backend

```bash
cd ../backend
npm install
```

---

### 3. Configure environment variables

Create a `.env` file inside the **backend** folder.

```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

### 4. Start the backend

```bash
cd backend
npm run dev
```

---

### 5. Start the frontend

Open another terminal.

```bash
cd frontend
npm start
```

---

## 🌐 Application URLs

Frontend

```text
http://localhost:3000
```

Backend API

```text
http://localhost:4000
```

---

## 🔑 API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/user/signup` | Register a new user |
| POST | `/api/user/login` | Authenticate a user |

### Workouts

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/workouts` | Get all workouts |
| GET | `/api/workouts/:id` | Get a workout by ID |
| POST | `/api/workouts` | Create a workout |
| PATCH | `/api/workouts/:id` | Update a workout |
| DELETE | `/api/workouts/:id` | Delete a workout |

---

## 📸 Screenshots

### Home Page

<img width="2878" height="1373" alt="FitTrack Screenshot" src="https://github.com/user-attachments/assets/b516aed2-4e29-4bf8-8c47-a514768da47b" />

---

## 🔒 Authentication

FitTrack uses:

- JWT for authentication
- Password hashing with bcrypt
- Protected API routes
- Local storage session persistence
- React Context for authentication state

---

## 🎯 Future Improvements

- Charts and statistics
- Profile management
- Search and filtering
- Unit and integration testing
- Cloud deployment (Render/Vercel)

---

## 👨‍💻 Author

**Carl Fampo**

- GitHub: https://github.com/Cffampo
- LinkedIn: www.linkedin.com/in/carl-fampo
