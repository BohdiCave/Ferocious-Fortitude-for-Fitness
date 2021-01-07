# Ferocious Fortitude for Fitness

A fitness tracker using MongoDB with Mongoose schema and a Node/Express.js server.

## User Story

As a user, I want to be able to view create and track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.

## Acceptance Criteria

When the user loads the page, they should be given the option to create a new workout or continue with their last workout.

The user should be able to:
  * Add exercises to a previous workout plan.
  * Add new exercises to a new workout plan.
  * View the combined weight of multiple exercises on the `stats` page.

To deploy to Heroku, need to set up a MongoDB Atlas account and connect a database from there to your application. Guides for support:
  * [Set Up MongoDB Atlas](../04-Important/MongoAtlas-Setup.md)
  * [Deploy to Heroku](../04-Important/MongoAtlas-Deploy.md)
