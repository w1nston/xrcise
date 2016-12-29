import React from 'react';
import TextInput from '../common/textInput';

export default function ExerciseNameInput({ input }) {
  const {
    name,
    value,
  } = input;
  return (
    <TextInput
      name={name}
      value={value}
    />
  );
}
