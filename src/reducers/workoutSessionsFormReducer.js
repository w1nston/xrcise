import {
  List as immutableList,
  Map as immutableMap,
} from 'immutable';
import { generateGUID } from '../utils/generatorUtils';
import types from '../actions/workoutSessionsFormActions';

const any = null;

const initialState = immutableMap({
  exerciseGUIDS: immutableList.of(
    generateGUID()
  ),
  workoutSets: immutableList.of(
    immutableList.of(any, any, any)
  ),
});

function workoutSetReducer(state, action = {}) {
  switch (action.type) {
    case types.ADD_EXERCISE:
      return immutableList.of(any, any, any);
    default:
      return state;
  }
}

function addExercise(state, action) {
  const workoutSetsUpdater = items =>
    items.push(workoutSetReducer(null, action));
  const exerciseGUIDSUpdater = items =>
    items.push(generateGUID());
  return state
    .update('workoutSets', workoutSetsUpdater)
    .update('exerciseGUIDS', exerciseGUIDSUpdater);
}

function addWorkoutSet(state, row) {
  const updater = items =>
    items.set(
      row,
      items
        .get(row)
        .push(any)
    );
  return state.update('workoutSets', updater);
}

function removeExercise(state, action) {
  const workoutSetsUpdater = items =>
    items.filter((x, index) => action.row !== index);
  const exerciseGUIDSUpdater = items =>
    items.filter(x => x !== action.guid);
  return state
    .update('workoutSets', workoutSetsUpdater)
    .update('exerciseGUIDS', exerciseGUIDSUpdater);
}

function removeWorkoutSet(state, row) {
  const updater = items =>
    items.set(
      row,
      items
        .get(row)
        .pop()
    );
  return state.update('workoutSets', updater);
}

export default function workoutSessionsFormReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.ADD_EXERCISE:
      return addExercise(state, action);
    case types.ADD_WORKOUT_SET:
      return addWorkoutSet(state, action.row);
    case types.REMOVE_EXERCISE:
      return removeExercise(state, action);
    case types.REMOVE_WORKOUT_SET:
      return removeWorkoutSet(state, action.row);
    default:
      return state;
  }
}

const getCurrentReducer = state => state.workoutSessionsFormReducer;
export const getWorkoutSets = state => getCurrentReducer(state)
  .get('workoutSets')
  .toArray()
  .map(x => x.toArray());
export const getExerciseGUIDS = state => getCurrentReducer(state)
  .get('exerciseGUIDS')
  .toArray();