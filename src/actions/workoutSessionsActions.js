const types = {
  ADD_EXERCISE: 'ADD_EXERCISE',
  ADD_NEW_WORKOUT_SESSION: 'ADD_NEW_WORKOUT_SESSION',
  ADD_WORKOUT_SET: 'ADD_WORKOUT_SET',
  REMOVE_EXERCISE: 'REMOVE_EXERCISE',
  REMOVE_WORKOUT_SET: 'REMOVE_WORKOUT_SET',
};
export default types;

export function addExercise() {
  return {
    type: types.ADD_EXERCISE,
  };
}

export function removeExercise(row, guid) {
  return {
    type: types.REMOVE_EXERCISE,
    row,
    guid,
  };
}

export function addWorkoutSet(row) {
  return {
    type: types.ADD_WORKOUT_SET,
    row,
  };
}

export function removeWorkoutSet(row, column) {
  return {
    type: types.REMOVE_WORKOUT_SET,
    row,
    column,
  };
}

export function addNewWorkoutSession(workoutDate, workoutSets) {
  return {
    type: types.ADD_NEW_WORKOUT_SESSION,
    workoutDate,
    workoutSets,
  };
}
