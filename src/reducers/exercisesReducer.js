import {
  List as immutableList,
  Map as immutableMap,
} from 'immutable';
import types from '../actions/exercisesActions';

const initialState = immutableMap({
  exercisesList: immutableList.of(
    immutableMap({
      name: 'Squats',
      description: `crouch or sit with one's knees bent and one's` +
      `heels close to or touching one's buttocks or the back of one's thighs.`,
    }),
    immutableMap({
      name: 'Bench Press',
      description: 'Some longer description',
    }),
    immutableMap({
      name: 'Lat Pull Down',
      description: 'Some lengthy description',
    }),
    immutableMap({
      name: 'Shoulder Press (1-2-3)',
      description: 'Some description about this exercise',
    }),
  ),
});

function exerciseReducer(state = {}, action = {}) {
  switch (action.type) {
    case types.ADD_NEW_EXERCISES:
      return immutableMap({
        name: action.name,
        description: action.description,
      });
    default:
      return state;
  }
}

export default function exercisesReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.ADD_NEW_EXERCISES: {
      const updater = items =>
        items.push(exerciseReducer(null, action));
      return state.update('exercisesList', updater);
    }
    default:
      return state;
  }
}

const getCurrentReducer = state => state.exercisesReducer;
export const getExercisesItems = state => getCurrentReducer(state)
  .get('exercisesList')
  .toArray()
  .map(x => x.toObject());
