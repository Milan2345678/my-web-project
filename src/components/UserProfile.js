import React from 'react';
import PropTypes from 'prop-types';

function UserProfile({ name, age, hobbies, isActive, address }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
      <p>Hobbies:</p>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
      <p>Address: {address.street}, {address.city}</p>
    </div>
  );
}

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  hobbies: PropTypes.arrayOf(PropTypes.string),
  isActive: PropTypes.bool,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired
  })
};

UserProfile.defaultProps = {
  hobbies: [],
  isActive: false,
  address: null // Or a default address object if appropriate
};

export default UserProfile; 