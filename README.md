# FitTrack 🏋️

A full-stack workout tracking application built with the MERN stack. Users can log workouts, track sets, reps, and load, and view their workout history.

<img width="2878" height="1373" alt="Screenshot 2026-05-11 202354" src="https://github.com/user-attachments/assets/b516aed2-4e29-4bf8-8c47-a514768da47b" />


## Features

- Log workouts with title, reps, and load
- View all workout history in real time
- Delete workouts
- RESTful API with full CRUD functionality

## Tech Stack

**Frontend:** React, CSS  
**Backend:** Node.js, Express.js  
**Database:** MongoDB, Mongoose

## Getting Started

### Prerequisites
- Node.js
- MongoDB

### Installation

1. Clone the repo
```bash
git clone https://github.com/Cffampo/FitTrack.git
```

2. Install backend dependencies
```bash
cd backend
npm install
```

3. Install frontend dependencies
```bash
cd frontend
npm install
```

4. Create a `.env` file in the backend folder
```
MONGO_URI=your_mongodb_connection_string
PORT=4000
```

5. Run the backend
```bash
npm run dev
```

6. Run the frontend
```bash
npm start
```

## Roadmap
- [ ] JWT Authentication
- [ ] Progress tracking & analytics
- [ ] AI-generated training insights
- [ ] Docker containerization
- [ ] Deployment
