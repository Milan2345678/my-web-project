import React from 'react';

function GrandchildComponent({ message }) {
  return (
    <div>
      <h3>Grandchild Component</h3>
      <p>Received message: {message}</p>
    </div>
  );
}

export default GrandchildComponent;