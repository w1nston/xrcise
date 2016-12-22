import React from 'react';
import './textInput.css';

export default function TextInput({ input }) {
  return (
    <input
      className="xrcise-input"
      type="text"
      {...input}
    />
  );
}
