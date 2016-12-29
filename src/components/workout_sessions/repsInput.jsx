import React from 'react';
import CounterInput from '../common/counterInput';
import { Box } from '../../utils/funcUtils';

const parseValue = x => Number(x);

export default function RepsInput({
  input,
  label,
  updateFieldFn,
}) {
  const { name, value } = input;
  const updateWeight = x => updateFieldFn(name, x);

  const increaseWeight = v => Box(v)
    .map(parseValue)
    .map(x => x + 1)
    .fold(updateWeight);

  const decreaseWeight = v => Box(v)
    .map(parseValue)
    .map(x => x >= 1 ? x - 1 : 0)
    .fold(updateWeight);

  return (
    <CounterInput
      name={name}
      value={value}
      label={label}
      increaseFn={increaseWeight.bind(null, value)}
      decreaseFn={decreaseWeight.bind(null, value)}
      onChange={event => updateFieldFn(name, event.target.value)}
    />
  );
}

