import {
  List as immutableList,
  Map as immutableMap,
} from 'immutable';
import types from '../actions/workoutSessionsFormActions';

const initialState = immutableMap({
  workoutSets: immutableList.of(
    immutableList.of(
      immutableMap({
        weight: null,
        reps: null,
      }),
      immutableMap({
        weight: null,
        reps: null,
      }),
      immutableMap({
        weight: null,
        reps: null,
      }),
      immutableMap({
        weight: null,
        reps: null,
      }),
      immutableMap({
        weight: null,
        reps: null,
      })
    )
  ),
});

function workoutSessionFormReducer(state, action = {}) {
  switch (action.type) {
    case types.ADD_EXERCISE:
      return immutableList.of(
        immutableMap({
          weight: null,
          reps: null,
        }),
        immutableMap({
          weight: null,
          reps: null,
        }),
        immutableMap({
          weight: null,
          reps: null,
        }),
        immutableMap({
          weight: null,
          reps: null,
        }),
        immutableMap({
          weight: null,
          reps: null,
        })
      );
    default:
      return state;
  }
}

export default function workoutSessionsFormReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.ADD_EXERCISE: {
      const updater = items =>
        items.push(workoutSessionFormReducer(null, action));
      return state.update('workoutSets', updater);
    }
    case types.REMOVE_EXERCISE: {
      const updater = items =>
        items.filter((x, index) => action.row !== index);
      return state.update('workoutSets', updater);
    }
    default:
      return state;
  }
}

const getCurrentReducer = state => state.workoutSessionsFormReducer;
export const getWorkoutSets = state => getCurrentReducer(state)
  .get('workoutSets')
  .toArray()
  .map(
    x => x.toArray()
      .map(y => y.toObject())
  );