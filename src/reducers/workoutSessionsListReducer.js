import {
  List as immutableList,
  Map as immutableMap,
  fromJS,
} from 'immutable';
import types from '../actions/workoutSessionsActions';

const initialState = immutableMap({
  workoutSessions: immutableList.of(
    immutableMap({
      workoutDate: '2017-01-01',
      exerciseName: 'Deadlifts',
      workoutSets: immutableList.of(
        immutableMap({
          weight: 60,
          reps: 5
        }),
        immutableMap({
          weight: 70,
          reps: 5
        }),
        immutableMap({
          weight: 80,
          reps: 5
        }),
        immutableMap({
          weight: 90,
          reps: 5
        })
      )
    }),
    immutableMap({
      workoutDate: '2017-01-01',
      exerciseName: 'ShoulderPress(1-2-3)',
      workoutSets: immutableList.of(
        immutableMap({
          weight: 3,
          reps: 12
        }),
        immutableMap({
          weight: 3,
          reps: 12
        }),
        immutableMap({
          weight: 3,
          reps: 12
        }),
      )
    })
  )
});

function addWorkoutSession(state, action) {
  const { workoutSession } = action;
  const updater = items =>
    items.concat(workoutSession.map(x => fromJS(x)));
  return state.update('workoutSessions', updater);
}

export default function workoutSessionsListReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.ADD_NEW_WORKOUT_SESSION:
      return addWorkoutSession(state, action);
    default:
      return state;
  }
}

const getCurrentReducer = state => state.workoutSessionsListReducer;
export const getWorkoutSessions = state => getCurrentReducer(state)
  .get('workoutSessions').toJS();