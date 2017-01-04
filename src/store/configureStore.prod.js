import { createStore } from 'redux';
import rootReducer from '../reducers';

export default function configureStore(state) {
  return createStore(rootReducer, state);
}
