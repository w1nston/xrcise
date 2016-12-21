import React from 'react';
import './TextInput.css';

export default function TextInput({ input }) {
  return (
    <input
      className="xrcise-input"
      type="text"
      {...input}
    />
  );
}
