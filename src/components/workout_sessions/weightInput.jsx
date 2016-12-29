import React from 'react';
import CounterInput from '../common/counterInput';

export default function WeightInput({
  input,
  label,
  increaseFn,
  decreaseFn,
}) {
  return (
    <CounterInput
      input={input}
      label={label}
      increaseFn={increaseFn.bind(null, input.value)}
      decreaseFn={decreaseFn.bind(null, input.value)}
    />
  );
}
