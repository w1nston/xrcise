import React from 'react';
import classnames from 'classnames';
import TextInput from './textInput';
import './counterInput.css';

function getClassNames(className) {
  return classnames(
    'xrcise-counter-input',
    className
  );
}

export default function CounterInput({ className, label }) {
  return (
    <div className={getClassNames(className)}>
      <label>{label}</label>
      <div className="xrcise-counter-input__content">
        <button
          className="xrcise-counter-input__button"
          tabIndex="-1"
        >+</button>
        <TextInput
          className="xrcise-counter-input__input"
        />
        <button
          className="xrcise-counter-input__button"
          tabIndex="-1"
        >-</button>
      </div>
    </div>
  );
}