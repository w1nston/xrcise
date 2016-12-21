import types from '../actions/exercisesActions';

export default function exerciseReducer(state = {}, action = {}) {
  switch (action.type) {
    case types.ADD_NEW_EXERCISES:
      return [
        {
          name: action.name,
          description: action.description,
        },
        ...state
      ];
    default:
      return state;
  }
}
