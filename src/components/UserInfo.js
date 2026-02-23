import React from 'react';

function UserInfo({ username, email, role }) { // Destructuring props here
  return (
    <div>
      <h2>{username}</h2>
      <p>Email: {email}</p>
      <p>Role: {role}</p>
    </div>
  );
}

export default UserInfo;