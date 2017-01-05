import { connect } from 'react-redux';
import { change, reset } from 'redux-form';
import WorkoutSessionsForm, { FORM_NAME } from '../../components/forms/workoutSessionsForm';
import { getWorkoutSets, getExerciseGUIDS } from '../../reducers/workoutSessionsFormReducer';
import {
  addExercise,
  addNewWorkoutSession,
  removeExercise,
  addWorkoutSet,
  removeWorkoutSet,
} from '../../actions/workoutSessionsActions';
import { transformToWorkoutSession } from '../../utils/utilityFunctions';

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
    },

    handleAddWorkoutSet(row, event) {
      event.preventDefault();
      dispatch(addWorkoutSet(row));
    },

    handleRemoveWorkoutSet(row, column, event) {
      event.preventDefault();
      dispatch(removeWorkoutSet(row, column));
    },

    updateFieldFn(fieldName, value) {
      dispatch(change(FORM_NAME, fieldName, value));
    },

    onSubmit(values) {
      dispatch(reset(FORM_NAME));
      dispatch(addNewWorkoutSession(transformToWorkoutSession(values)));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutSessionsForm);
