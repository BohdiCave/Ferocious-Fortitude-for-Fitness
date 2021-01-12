const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [{
    type: {
      type: String,
      trim: true,
      required: "Choose an exercise type"
    },
    name: {
      type: String,
      trim: true,
      required: "Enter an exercise name"
    },
    duration: {
      type: Number,
      required: "Enter the number of minutes per exercise"
    },
    weight: Number,
    reps: Number,
    sets: Number,
    distance: Number
  }], 
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
