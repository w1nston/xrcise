import {
  List as immutableList,
  Map as immutableMap,
} from 'immutable';
import types from '../actions/workoutSessionsActions';

const initialState = immutableMap({
  workoutSessions: immutableList.of(
    immutableMap({
      workoutDate: '2017-01-01',
      exerciseName: 'Deadlifts',
      workoutSet: immutableList.of(
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
    })
  )
});

export default function workoutSessionsListReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.ADD_NEW_WORKOUT_SESSION: {
      return state;
    }
    default:
      return state;
  }
}

const getCurrentReducer = state => state.workoutSessionsListReducer;
export const getWorkoutSessions = state => getCurrentReducer(state)
  .get('workoutSessions')
  .toArray()
  .map(x => x.toObject())
  .map(x => ({
    ...x,
    workoutSets: x.workoutSet
      .toArray()
      .map(y => y.toObject())
  }));