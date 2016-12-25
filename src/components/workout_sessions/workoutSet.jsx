import React from 'react';
import CounterInput from '../common/counterInput';
import './workoutSet.css';

export default function WorkoutSet() {
  return (
    <div className="xrcise-workout-set">
      <CounterInput
        className="xrcise-workout-set__counter-input"
        label="Weight"
      />
      <span className="xrcise-workout-set__divider">/</span>
      <CounterInput
        className="xrcise-workout-set__counter-input"
        label="Reps"
      />
    </div>
  );
}
