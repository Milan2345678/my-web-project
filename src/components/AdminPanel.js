import React from 'react';

function AdminPanel({ isAdmin }) {
  return (
    

Admin Panel Access

       {isAdmin ? (         

Welcome, Administrator! You have full access.

Manage Users           View Reports         

       ) : (         

You do not have administrative privileges. Please log in as an administrator.

       )}     

   ); }  export default AdminPanel; 