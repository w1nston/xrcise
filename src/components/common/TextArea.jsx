import React from 'react';
import './TextArea.css';

export default function TextArea({ input }) {
  return <textarea className="xrcise-textarea" {...input} />;
}
