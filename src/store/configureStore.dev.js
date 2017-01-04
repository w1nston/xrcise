import { createStore } from 'redux';
import rootReducer from '../reducers';

export default function configureStore(state) {
  const store = createStore(
    rootReducer,
    state,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers'))
    );
  }

  return store;
}
