import React from 'react';
import { Field } from 'redux-form';
import WeightInput from '../../components/workout_sessions/weightInput';
import RepsInput from '../../components/workout_sessions/repsInput';
import './workoutSet.css';

export default function WorkoutSet({ guid, updateFieldFn }) {
  return (
    <div className="xrcise-workout-set">
      <Field
        name={`weight-${guid}`}
        component={WeightInput}
        label="Weight"
        updateFieldFn={updateFieldFn}
      />
      <span className="xrcise-workout-set__divider">/</span>
      <Field
        name={`reps-${guid}`}
        component={RepsInput}
        label="Reps"
        updateFieldFn={updateFieldFn}
      />
    </div>
  );
}
