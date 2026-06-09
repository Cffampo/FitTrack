# FitTrack 🏋️

A full-stack workout tracking application built with the MERN stack. Users can create, view, and delete workouts while tracking sets, reps, and load. The application features a React frontend, Express API, MongoDB database, JWT authentication, and Dockerized services managed with Docker Compose.

<img width="2878" height="1373" alt="Screenshot 2026-05-11 202354" src="https://github.com/user-attachments/assets/b516aed2-4e29-4bf8-8c47-a514768da47b" />

## Features

* Create, view, and delete workouts
* Track workout title, reps, and load
* JWT-based user authentication
* Protected API routes
* RESTful API with full CRUD functionality
* MongoDB data persistence
* Containerized frontend and backend services using Docker
* Multi-container orchestration with Docker Compose

## Tech Stack

**Frontend:** React, React Router, CSS

**Backend:** Node.js, Express.js

**Database:** MongoDB, Mongoose

**Authentication:** JWT, bcrypt

**DevOps:** Docker, Docker Compose

## Project Structure

```text
FitTrack/
├── frontend/
│   ├── src/
│   ├── public/
│   ├── Dockerfile
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── Dockerfile
│   ├── .env
│   └── package.json
│
└── docker-compose.yml
```

## Getting Started

### Prerequisites

* Docker Desktop
* Git

### Installation

#### 1. Clone the repository

```bash
git clone https://github.com/Cffampo/FitTrack.git
cd FitTrack
```

#### 2. Create a `.env` file in the backend directory

```env
MONG_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=4000
```

#### 3. Build and start the application

```bash
docker compose up --build
```

Docker Compose will:

* Build the frontend container
* Build the backend container
* Create a shared network
* Start both services

#### 4. Access the application

Frontend:

```text
http://localhost:3000
```

Backend API:

```text
http://localhost:4000
```

## Docker Commands

### Start the application

```bash
docker compose up
```

### Rebuild and start

```bash
docker compose up --build
```

### Run in detached mode

```bash
docker compose up -d
```

### Stop the application

```bash
docker compose down
```

### View running containers

```bash
docker ps
```

## Environment Variables

The backend requires the following environment variables:

| Variable   | Description                 |
| ---------- | --------------------------- |
| MONG_URI   | MongoDB connection string   |
| JWT_SECRET | Secret used for JWT signing |
| PORT       | Backend server port         |

## Future Improvements

* Workout analytics dashboard
* Progress tracking charts
* Exercise categories
* Dockerized MongoDB service
* CI/CD pipeline integration
* Cloud deployment

## Author

Carl Campo

GitHub: https://github.com/Cffampo
