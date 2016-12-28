import { connect } from 'react-redux';
import WorkoutSessionsForm from '../../components/forms/workoutSessionsForm';
import { getWorkoutSets } from '../../reducers/workoutSessionsFormReducer';
import { addExercise, removeExercise } from '../../actions/workoutSessionsFormActions';

function mapStateToProps(state) {
  return {
    workoutSets: getWorkoutSets(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleAddExercise(event) {
      event.preventDefault();
      dispatch(addExercise());
    },

    handleRemoveExercise(row, event) {
      event.preventDefault();
      dispatch(removeExercise(row));
      // TODO: Use redux-form correctly so that field `exercises${row}` is cleared
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutSessionsForm);
