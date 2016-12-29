import React from 'react';
import { Field } from 'redux-form';
import WeightInput from '../../components/workout_sessions/weightInput';
import RepsInput from '../../components/workout_sessions/repsInput';
import './workoutSet.css';

export default function WorkoutSet({ guid, updateFieldFn }) {
  function increaseWeight(value) {
    updateFieldFn(`weight-${guid}`, Number(value) + 2.5);
  }
  function decreaseWeight(value) {
    const parsedVal = Number(value);
    const retVal = parsedVal >= 2.5 ? parsedVal - 2.5 : 0;
    updateFieldFn(`weight-${guid}`, retVal);
  }
  return (
    <div className="xrcise-workout-set">
      <Field
        name={`weight-${guid}`}
        component={WeightInput}
        label="Weight"
        increaseFn={increaseWeight}
        decreaseFn={decreaseWeight}
      />
      <span className="xrcise-workout-set__divider">/</span>
      <Field name={`reps-${guid}`} component={RepsInput} label="Reps" />
    </div>
  );
}
