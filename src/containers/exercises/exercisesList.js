import { connect } from 'react-redux';
import ExerciesList from '../../components/exercises/exercisesList';
import { getExercisesItems } from '../../reducers/exercisesReducer';

function mapStateToProps(state) {
  return {
    exercises: getExercisesItems(state),
  };
}

export default connect(mapStateToProps)(ExerciesList);
