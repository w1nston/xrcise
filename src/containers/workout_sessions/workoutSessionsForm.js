import { connect } from 'react-redux';
import WorkoutSessionsForm from '../../components/forms/workoutSessionsForm';
import { getWorkoutSets } from '../../reducers/workoutSessionsFormReducer';

function mapStateToProps(state) {
  return {
    workoutSets: getWorkoutSets(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // TODO
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutSessionsForm);
