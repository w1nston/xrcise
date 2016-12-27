import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import exercisesReducer from './exercisesReducer';
import workoutSessionsFormReducer from './workoutSessionsFormReducer';

export default combineReducers({
  exercisesReducer,
  workoutSessionsFormReducer,
  form: reduxFormReducer,
});
