import React from 'react';
import { Field, reduxForm } from 'redux-form';
import ExercisesSelect from '../../containers/workout_sessions/exercisesSelect';
import DatePicker from '../../components/common/datePicker';
import './workoutSessionsForm.css';

function WorkoutSessionsForm({
  handleSubmit,
  pristine,
  submitting,
}) {
  return (
    <form className="xrcise-workout-sessions-form" onSubmit={handleSubmit}>
      <div className="xricse-workout-sessions-form__row">
        <label htmlFor="workoutDate">Workout Date</label>
        <Field name="workoutDate" component={DatePicker} />
      </div>
      <div className="xricse-workout-sessions-form__row">
        <label htmlFor="exercise">Exercise</label>
        <Field name="exercise" component={ExercisesSelect} />
      </div>
    </form>
  );
}

export const FORM_NAME = 'workoutSessionsForm';
export default reduxForm({
  form: FORM_NAME,
})(WorkoutSessionsForm);
