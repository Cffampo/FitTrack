const express = require("express");
const { createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router();

// require auth for all workout routes
router.use(requireAuth)



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