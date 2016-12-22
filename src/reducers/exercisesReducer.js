import types from '../actions/exercisesActions';

const initialState = [
  {
    name: 'Squats',
    description: 'Some description',
  },
  {
    name: 'Bench Press',
    description: 'Some longer description',
  },
  {
    name: 'Lat pull down',
    description: 'Some lengthy description',
  },
  {
    name: 'Shoulder Press (1-2-3)',
    description: 'Some description about this exercise',
  },
];

export default function exerciseReducer(state = initialState, action = {}) {
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

const getCurrentReducer = state => state.exercisesReducer;
export const getExercisesItems = state => getCurrentReducer(state);
