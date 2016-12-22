import React from 'react';
import ExercisesForm from '../../containers/exercises/exercisesForm';
import ExercisesList from '../../containers/exercises/exercisesList';
import './exercisePage.css';

export default function ExercisePage() {
  return (
    <div className="xrcise-exercises-container">
      <ExercisesForm />
      <ExercisesList />
    </div>
  );
}
