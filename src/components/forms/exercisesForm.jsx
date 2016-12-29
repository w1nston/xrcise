import React from 'react';
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames';
import ExerciseNameInput from '../exercises/exerciseNameInput';
import TextArea from '../common/textArea';
import './exercisesForm.css';

function submitButtonDisabled(pristine, submitting) {
  return pristine || submitting;
}

function getSubmitButtonClassName(pristine, submitting) {
  return classnames(
    'xrcise-exercises-form__submit-button',
    {
      'xrcise-exercises-form__submit-button--disabled': submitButtonDisabled(pristine, submitting)
    }
  );
}

function ExercisesForm({
  handleSubmit,
  pristine,
  submitting,
}) {
  return (
    <form className="xrcise-exercises-form" onSubmit={handleSubmit}>
      <div className="xricse-exercise-form__row">
        <label
          className="xrcise-exercises-form__label"
          htmlFor="exerciseName"
        >Name</label>
        <Field
          className="xrcise-exercises-form__field"
          name="exerciseName"
          component={ExerciseNameInput}
          type="text"
        />
      </div>
      <div className="xricse-exercise-form__row">
        <label
          className="xrcise-exercises-form__label"
          htmlFor="exerciseDescription"
        >Description</label>
        <Field
          className="xrcise-exercises-form__field"
          name="exerciseDescription"
          component={TextArea}
          type="text"
        />
      </div>
      <div className="xricse-exercise-form__button-row">
        <button
          className={getSubmitButtonClassName(pristine, submitting)}
          type="submit"
          disabled={submitButtonDisabled(pristine, submitting)}
        >Add new exercise
        </button>
      </div>
    </form>
  );
}

export const FORM_NAME = 'exercisesForm';
export default reduxForm({
  form: FORM_NAME,
})(ExercisesForm);
