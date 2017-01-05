import React from 'react';

function renderWorkoutSet(workoutSet, index) {
  const { weight, reps } = workoutSet;
  return (
    <span key={index}>
      {weight} / {reps}
    </span>
  );
}

function renderWorkoutSession(workoutSession, index) {
  const {
    workoutDate,
    exerciseName,
    workoutSets,
  } = workoutSession;

  return (
    <tr key={index}>
      <td>{workoutDate}</td>
      <td>{exerciseName}</td>
      <td>{workoutSets.map(renderWorkoutSet)}</td>
    </tr>
  );
}

export default function WorkoutSessionsList({ workoutSessions = [] }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Exercise</th>
          <th>Sets (weight / repetitions)</th>
        </tr>
      </thead>
      <tbody>
        {workoutSessions.map(renderWorkoutSession)}
      </tbody>
    </table>
  );
}
