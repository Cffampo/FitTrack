const express = require("express");
const { createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')
const router = express.Router();



//GET ALL WORKOUTS
router.get('/', getWorkouts)

//GET a single workout
router.get('/:id', getWorkout)

// POST a new workout
router.post('/', createWorkout)

// DELETE A WORKOUT
router.delete('/:id', deleteWorkout)

// UPDATE A WORKOUT
router.patch('/:id', updateWorkout)

module.exports = router