import React from 'react';
import ExerciseItem from './exerciseItem';
import './exercisesList.css';

function renderExercisesItems(exercises = []) {
  return exercises.map((exercise, index) =>
    <ExerciseItem
      key={index}
      name={exercise.name}
      description={exercise.description}
    />);
}

export default function ExerciesList({ exercises }) {
  return (
    <table className="xrcise-exercises-list">
      <thead className="xrcise-exercises-list__table-head">
        <tr>
          <th className="xrcise-exercises-list__table-cell">Name</th>
          <th className="xrcise-exercises-list__table-cell">Description</th>
        </tr>
      </thead>
      <tbody>
        {renderExercisesItems(exercises)}
      </tbody>
    </table>
  );
}
