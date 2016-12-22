import React from 'react';
import './textArea.css';

export default function TextArea({ input }) {
  return <textarea className="xrcise-textarea" {...input} />;
}
