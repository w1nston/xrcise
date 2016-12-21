import React from 'react';
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames';
import TextInput from '../common/TextInput';
import TextArea from '../common/TextArea';
import './exercisesForm.css';

function submitButtonDisabled(pristine, submitting) {
  return pristine || submitting;
}

function getSubmitButtonClassName(pristine, submitting) {
  return classnames(
    'xrcise-exercise-form__submit-button',
    {
      'xrcise-exercise-form__submit-button--disabled': submitButtonDisabled(pristine, submitting)
    }
  );
}

function ExercisesForm({
  handleSubmit,
  pristine,
  submitting,
}) {
  return (
    <form className="xrcise-exercise-form" onSubmit={handleSubmit}>
      <div className="xricse-exercise-form__row">
        <label
          className="xrcise-exercise-form__label"
          htmlFor="exerciseName"
        >Name</label>
        <Field
          className="xrcise-exercise-form__field"
          name="exerciseName"
          component={TextInput}
          type="text"
        />
      </div>
      <div className="xricse-exercise-form__row">
        <label
          className="xrcise-exercise-form__label"
          htmlFor="exerciseDescription"
        >Description</label>
        <Field
          className="xrcise-exercise-form__field"
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
