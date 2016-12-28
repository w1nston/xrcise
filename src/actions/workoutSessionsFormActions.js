const types = {
  ADD_EXERCISE: 'ADD_EXERCISE',
  REMOVE_EXERCISE: 'REMOVE_EXERCISE',
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
  }
}
