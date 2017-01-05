import { connect } from 'react-redux';
import WorkoutSessionsList from '../../components/workout_sessions/workoutSessionsList';
import { getWorkoutSessions } from '../../reducers/workoutSessionsListReducer';

function mapStateToProps(state) {
  return {
    workoutSessions: getWorkoutSessions(state),
  };
}

export default connect(mapStateToProps)(WorkoutSessionsList);
