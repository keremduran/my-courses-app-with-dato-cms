import React from 'react';

export default function CourseSection({ detail }) {
  console.log(detail);
  return (
    <div>
      <h1>Course Section</h1>
      {detail.description}
      <p>------------</p>
    </div>
  );
}
