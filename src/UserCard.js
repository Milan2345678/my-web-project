import React from 'react';
import './UserCard.css'; // We'll create this CSS file next

function UserCard({ user }) {
  // Destructuring the user object for easier access to properties
  const { name, email, age, isActive } = user;

  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Age: {age}</p>

      {/* Conditional rendering for user status */}
      {isActive ? (
        <p>Status: Active</p>
      ) : (
        <p>Status: Inactive</p>
      )}

      {/* Example of embedding a simple expression */}
      <p>Account created in: {new Date().getFullYear() - age}</p>
    </div>
  );
}

export default UserCard;