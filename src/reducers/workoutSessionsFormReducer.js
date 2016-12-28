import {
  List as immutableList,
  Map as immutableMap,
} from 'immutable';
import { generateGUID } from '../utils/generatorUtils';
import types from '../actions/workoutSessionsFormActions';

const initialState = immutableMap({
  exerciseGUIDS: immutableList.of(
    generateGUID()
  ),
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
      })
    )
  ),
});

function workoutSetReducer(state, action = {}) {
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
        })
      );
    default:
      return state;
  }
}

export default function workoutSessionsFormReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.ADD_EXERCISE: {
      const workoutSetsUpdater = items =>
        items.push(workoutSetReducer(null, action));
      const exerciseGUIDSUpdater = items =>
        items.push(generateGUID());
      return state
        .update('workoutSets', workoutSetsUpdater)
        .update('exerciseGUIDS', exerciseGUIDSUpdater);
    }
    case types.ADD_WORKOUT_SET: {
      const updater = items =>
        items.set(
          action.row,
          items
            .get(action.row)
            .push(immutableMap({
              weight: null,
              reps: null,
            }))
        );
      return state.update('workoutSets', updater);
    }
    case types.REMOVE_EXERCISE: {
      const workoutSetsUpdater = items =>
        items.filter((x, index) => action.row !== index);
      const exerciseGUIDSUpdater = items =>
        items.filter(x => x !== action.guid);
      return state
        .update('workoutSets', workoutSetsUpdater)
        .update('exerciseGUIDS', exerciseGUIDSUpdater);
    }
    case types.REMOVE_WORKOUT_SET: {
      const updater = items =>
        items.set(
          action.row,
          items
            .get(action.row)
            .pop()
        );
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
export const getExerciseGUIDS = state => getCurrentReducer(state)
  .get('exerciseGUIDS')
  .toArray();