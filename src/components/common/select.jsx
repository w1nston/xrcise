import React from 'react';
import ReactSelect from 'react-select';
import 'react-select/dist/react-select.css';
import './select.css';

export default function Select({ options, input, ...props }) {
  return (
    <ReactSelect
      className="xrcise-select"
      clearable={false}
      searchable={false}
      options={options}
      {...input}
      {...props}
    />
  );
}
