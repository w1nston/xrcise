import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import exercisesReducer from './exercisesReducer';

export default combineReducers({
  exercisesReducer,
  form: reduxFormReducer,
});
