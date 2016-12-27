import React from 'react';
import { Field, reduxForm } from 'redux-form';
import ExercisesSelect from '../../containers/workout_sessions/exercisesSelect';
import DatePicker from '../../components/common/datePicker';
import WorkoutSet from '../../components/workout_sessions/workoutSet';
import './workoutSessionsForm.css';

function WorkoutSessionsForm({
  handleSubmit,
  pristine,
  submitting,
  workoutSets
}) {
  return (
    <form className="xrcise-workout-sessions-form" onSubmit={handleSubmit}>
      <div className="xricse-workout-sessions-form__row">
        <label htmlFor="workoutDate">Workout Date</label>
        <Field name="workoutDate" component={DatePicker} />
      </div>
      {workoutSets.map((workoutSet, i) => (
        <div key={i} className="xricse-workout-sessions-form__row">
          <label htmlFor="exercise">Exercise</label>
          <div className="xrcise-workout-sessions-form__workout-set">
            <Field
              className="xrcise-workout-sessions-form__exercise-select"
              name="exercise"
              component={ExercisesSelect}
            />
            <div className="xrcise-workout-sets">
              {workoutSet.map((set, id) => <WorkoutSet key={id} {...set}/>)}
            </div>
          </div>
        </div>))
      }
    </form>
  );
}

export const FORM_NAME = 'workoutSessionsForm';
export default reduxForm({
  form: FORM_NAME,
})(WorkoutSessionsForm);
