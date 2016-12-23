import React from 'react';
import classnames from 'classnames';
import './textInput.css';

export default function TextInput({ input, onFocus, className }) {
  return (
    <input
      className={classnames(
        'xrcise-input',
        className
      )}
      type="text"
      onFocus={onFocus}
      {...input}
    />
  );
}
