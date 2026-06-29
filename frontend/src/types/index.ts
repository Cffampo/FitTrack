// Shared types for FitTrack frontend
// Mirrors backend/models/workoutModel.js and userModel.js

export interface Workout {
  _id: string;
  title: string;
  reps: number;
  load: number;
  user_id: string;
  createdAt: string; // from { timestamps: true }
  updatedAt: string;
}

export interface User {
  email: string;
  token: string;
}