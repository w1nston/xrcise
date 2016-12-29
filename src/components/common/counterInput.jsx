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
  name,
  value,
  onChange,
  onFocus,
  onBlur,
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
          name={name}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
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