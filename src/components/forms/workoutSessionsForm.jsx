import React from 'react';
import { Field, reduxForm } from 'redux-form';
// import classnames from 'classnames';
import ExercisesSelect from '../../containers/workout_sessions/exercisesSelect';

// function submitButtonDisabled(pristine, submitting) {
//   return pristine || submitting;
// }
//
// function getSubmitButtonClassName(pristine, submitting) {
//   return classnames(
//     'xrcise-workout-sessions-form__submit-button',
//     {
//       'xrcise-workout-sessions-form__submit-button--disabled': submitButtonDisabled(
//         pristine,
//         submitting
//       ),
//     }
//   );
// }

function WorkoutSessionsForm({
  handleSubmit,
  pristine,
  submitting,
}) {
  return (
    <form className="xrcise-workout-sessions-form" onSubmit={handleSubmit}>
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
