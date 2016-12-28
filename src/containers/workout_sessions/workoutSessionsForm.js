import { connect } from 'react-redux';
import { change } from 'redux-form';
import WorkoutSessionsForm, { FORM_NAME } from '../../components/forms/workoutSessionsForm';
import { getWorkoutSets, getExerciseGUIDS } from '../../reducers/workoutSessionsFormReducer';
import { addExercise, removeExercise } from '../../actions/workoutSessionsFormActions';

function mapStateToProps(state) {
  return {
    exerciseGUIDS: getExerciseGUIDS(state),
    workoutSets: getWorkoutSets(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleAddExercise(event) {
      event.preventDefault();
      dispatch(addExercise());
    },

    handleRemoveExercise(row, guid, event) {
      event.preventDefault();
      dispatch(removeExercise(row, guid));
      dispatch(change(FORM_NAME, `exercise${guid}`, ''));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutSessionsForm);
