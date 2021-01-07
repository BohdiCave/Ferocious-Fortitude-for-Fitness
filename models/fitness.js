const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for the workout"
  },
  reps: {
    type: Number,
    required: "Enter a number of repetitions"
  },
  duration: {
    type: Number,
    required: "Enter a number of minutes"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
