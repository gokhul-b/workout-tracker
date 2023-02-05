const express = require("express");
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  updateWorkout,
  deleteWorkout,
} = require("../comtrollers/workoutController");

const router = express.Router();

//to get all workouts
router.get("/", getWorkouts);

//to get a workout
router.get("/:id", getWorkout);

//to post a new workout
router.post("/", createWorkout);

//to delete the workout
router.delete("/:id", deleteWorkout);

//to update a workout
router.patch("/:id", updateWorkout);

module.exports = router;
