const types = {
  ADD_NEW_EXERCISES: 'ADD_NEW_EXERCISES',
};
export default types;

export function addNewExercise(name, description) {
  return {
    type: types.ADD_NEW_EXERCISES,
    name,
    description,
  };
}