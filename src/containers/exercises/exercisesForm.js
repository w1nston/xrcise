import { connect } from 'react-redux';
import { reset } from 'redux-form';
import ExercisesForm, { FORM_NAME } from '../../components/forms/exercisesForm';
import { addNewExercise } from '../../actions/exercisesActions';

function mapDispatchToProps(dispatch) {
  return {
    onSubmit(values) {
      console.log('values!', values);
      dispatch(reset(FORM_NAME));
      dispatch(addNewExercise(values.exerciseName, values.exerciseDescription));
    }
  };
}

export default connect(null, mapDispatchToProps)(ExercisesForm);
