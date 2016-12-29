import React from 'react';
import classnames from 'classnames';
import TextInput from './textInput';
import './counterInput.css';
import { triggerCallback } from '../../utils/funcUtils';

function getClassNames(className) {
  return classnames(
    'xrcise-counter-input',
    className
  );
}

export default function CounterInput({
  className,
  label,
  increaseFn,
  decreaseFn,
  input,
}) {
  function handleClick(callback, event) {
    event.preventDefault();
    triggerCallback(callback)
      .fold(
        () => console.warn(`prop increaseFn or decreaseFn are not defined on <CounterInput />`),
        c => c()
      );
  }

  return (
    <div className={getClassNames(className)}>
      <label>{label}</label>
      <div className="xrcise-counter-input__content">
        <button
          onClick={handleClick.bind(null, increaseFn)}
          className="xrcise-counter-input__button"
          tabIndex="-1"
        >+
        </button>
        <TextInput
          className="xrcise-counter-input__input"
          input={input}
        />
        <button
          onClick={handleClick.bind(null, decreaseFn)}
          className="xrcise-counter-input__button"
          tabIndex="-1"
        >-
        </button>
      </div>
    </div>
  );
}