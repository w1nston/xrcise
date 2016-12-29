import React from 'react';
import CounterInput from '../common/counterInput';
import { Left, Right } from '../../utils/funcUtils';

const parseValue = x => Number(x);
const changeCounter = x => isNaN(x) ? Left(x) : Right(x);

export default function RepsInput({
  input,
  label,
  updateFieldFn,
}) {
  const { name, value } = input;
  const updateWeight = x => updateFieldFn(name, x);

  const increaseWeight = () => changeCounter(value)
    .map(parseValue)
    .map(x => x + 1)
    .fold(
      () => { /* Ignore NaN values */ },
      updateWeight
    );

  const decreaseWeight = () => changeCounter(value)
    .map(parseValue)
    .map(x => x >= 1 ? x - 1 : 0)
    .fold(
      () => { /* Ignore NaN values */ },
      updateWeight
    );

  return (
    <CounterInput
      name={name}
      value={value}
      label={label}
      increaseFn={increaseWeight}
      decreaseFn={decreaseWeight}
      onChange={event => updateFieldFn(name, event.target.value)}
    />
  );
}

