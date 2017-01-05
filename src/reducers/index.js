import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import exercisesReducer from './exercisesReducer';
import workoutSessionsFormReducer from './workoutSessionsFormReducer';
import workoutSessionsListReducer from './workoutSessionsListReducer';

export default combineReducers({
  exercisesReducer,
  workoutSessionsFormReducer,
  workoutSessionsListReducer,
  form: reduxFormReducer,
});
