import React from 'react';
import WorkoutSessionsForm from '../../containers/workout_sessions/workoutSessionsForm';
import WorkoutSessionsList from '../../containers/workout_sessions/workoutSessionsList';
import './workoutSessionsPage.css';

export default function WorkoutSessionsPage() {
  return (
    <div className="xrcise-workout-session-container">
      <WorkoutSessionsForm />
      <WorkoutSessionsList />
    </div>
  );
}
