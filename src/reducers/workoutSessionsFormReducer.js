import {
  List as immutableList,
  Map as immutableMap,
} from 'immutable';

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

export default function workoutSessionsFormReducer(state = initialState, action = {}) {
  switch (action.type) {
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