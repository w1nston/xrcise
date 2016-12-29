import React from 'react';
import classnames from 'classnames';
import './textInput.css';

export default function TextInput({
  name,
  value,
  onFocus,
  className,
  onChange,
  onBlur,
}) {
  return (
    <input
      className={classnames(
        'xrcise-input',
        className
      )}
      type="text"
      onFocus={onFocus}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
}
