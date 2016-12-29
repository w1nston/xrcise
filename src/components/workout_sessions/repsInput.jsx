import React from 'react';
import CounterInput from '../common/counterInput';

export default function RepsInput({
  input,
  label,
}) {
  return (
    <CounterInput
      input={input}
      label={label}
      increaseFn={x => x + 1}
      decreaseFn={x => x - 1}
    />
  );
}
