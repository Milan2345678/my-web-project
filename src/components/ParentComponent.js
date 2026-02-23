import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const dataToSend = 'This is important data!';

  return (
    <div>
      <h1>Parent Component</h1>
      <p>I have the data and I'm passing it down.</p>

      {/* Passing data to ChildComponent */}
      <ChildComponent message={dataToSend} />
    </div>
  );
}

export default ParentComponent;