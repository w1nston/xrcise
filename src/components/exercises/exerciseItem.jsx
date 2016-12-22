import React from 'react';

export default function ExerciseItem({ name, description }) {
  return (
    <tr>
      <td className="xrcise-exercises-list__table-cell">{name}</td>
      <td className="xrcise-exercises-list__table-cell">{description}</td>
    </tr>
  );
}
