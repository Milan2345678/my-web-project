import React from 'react';
import GrandchildComponent from './GrandchildComponent';

function ChildComponent(props) { // Receives props, but only passes one down
  return (
    <div>
      <h2>Child Component</h2>
      <p>I'm just passing data along...</p>

      {/* Passing the prop down */}
      <GrandchildComponent message={props.message} />
    </div>
  );
}

export default ChildComponent;