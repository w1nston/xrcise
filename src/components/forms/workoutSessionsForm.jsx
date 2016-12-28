import React from 'react';
import { Field, reduxForm } from 'redux-form';
import ExercisesSelect from '../../containers/workout_sessions/exercisesSelect';
import DatePicker from '../../components/common/datePicker';
import WorkoutSet from '../../components/workout_sessions/workoutSet';
import './workoutSessionsForm.css';

const isLastElement = (x, y) => x === y;

function WorkoutSessionsForm({
  handleSubmit,
  pristine,
  submitting,
  workoutSets,
  handleAddExercise,
  handleRemoveExercise,
  exerciseGUIDS,
}) {
  return (
    <form className="xrcise-workout-sessions-form" onSubmit={handleSubmit}>
      <div className="xricse-workout-sessions-form__row">
        <label htmlFor="workoutDate">Workout Date</label>
        <Field name="workoutDate" component={DatePicker} />
      </div>
      {workoutSets.map((workoutSet, i) => (
        <div key={i} className="xricse-workout-sessions-form__row">
          <label htmlFor={`exercises${exerciseGUIDS[i]}`}>Exercise</label>
          <div className="xrcise-workout-sessions-form__workout-set">
            <Field
              className="xrcise-workout-sessions-form__exercise-select"
              name={`exercise${exerciseGUIDS[i]}`}
              component={ExercisesSelect}
            />
            <div className="xrcise-workout-sets">
              {workoutSet.map((set, id) => <WorkoutSet key={id} {...set} />)}
            </div>
            <div className="xrcise-workout-sessions-form__row-buttons">
              {workoutSets.length > 1 && (
                <button
                  onClick={handleRemoveExercise.bind(null, i, exerciseGUIDS[i])}
                >
                  Remove
                </button>
              )}
              {isLastElement(workoutSets.length - 1, i) && (
                <button
                  onClick={handleAddExercise}
                >
                  Add
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </form>
  );
}

export const FORM_NAME = 'workoutSessionsForm';
export default reduxForm({
  form: FORM_NAME,
})(WorkoutSessionsForm);
