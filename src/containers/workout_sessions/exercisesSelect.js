import { connect } from 'react-redux';
import Select from '../../components/common/select';
import { getExercisesItems } from '../../reducers/exercisesReducer';

function trimWhiteSpaces(input = '') {
  return input.replace(/\s/g,'');
}

function mapStateToProps(state, ownProps) {
  const exercisesItems = getExercisesItems(state);
  // TODO This seems to persist sort in state... nichts gut...
  // TODO Immutable js to the rescue?
  return {
    options: exercisesItems
      .sort((x, y) => {
        if (x.name < y.name) return -1;
        if (x.name > y.name) return 1;
        return 0;
      })
      .map(item =>
      ({ value: trimWhiteSpaces(item.name), label: item.name })),
    ...ownProps.input,
  };
}

export default connect(mapStateToProps)(Select);
