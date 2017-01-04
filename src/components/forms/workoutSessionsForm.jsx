import React from 'react';
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames';
import ExercisesSelect from '../../containers/workout_sessions/exercisesSelect';
import DatePicker from '../../components/common/datePicker';
import WorkoutSet from '../../components/workout_sessions/workoutSet';
import './workoutSessionsForm.css';

const isLastElement = (x, y) => x === y;

function getSubmitButtonClassName(disabled) {
  return classnames(
    'xrcise-workout-sessions-form__submit-button',
    {
      'xrcise-workout-sessions-form__submit-button--disabled': disabled
    }
  );
}

function WorkoutSessionsForm({
  handleSubmit,
  pristine,
  submitting,
  workoutSets,
  handleAddExercise,
  handleAddWorkoutSet,
  handleRemoveExercise,
  handleRemoveWorkoutSet,
  exerciseGUIDS,
  updateFieldFn,
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
              name={`exercise_${exerciseGUIDS[i]}`}
              component={ExercisesSelect}
            />
            <div className="xrcise-workout-sets">
              {workoutSet.map((any, sequence) => (
                  <WorkoutSet
                    key={sequence}
                    guid={exerciseGUIDS[i]}
                    sequenceNumber={sequence}
                    updateFieldFn={updateFieldFn}
                  />
                )
              )}
              <div className="xrcise-workout-sets__buttons">
                {workoutSet.length > 1 && (
                  <button
                    onClick={handleRemoveWorkoutSet.bind(null, i, workoutSet.length - 1)}
                    className="xrcise-workout-sets__button"
                  >
                    -
                  </button>
                )}
                <button
                  onClick={handleAddWorkoutSet.bind(null, i)}
                  className="xrcise-workout-sets__button"
                >
                  +
                </button>
              </div>
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
      <div className="xricse-workout-sessions-form__row">
        <button
          className={getSubmitButtonClassName(pristine || submitting)}
          type="submit"
          disabled={pristine || submitting}
        >
          Save workout
        </button>
      </div>
    </form>
  );
}

export const FORM_NAME = 'workoutSessionsForm';
export default reduxForm({
  form: FORM_NAME,
})(WorkoutSessionsForm);
