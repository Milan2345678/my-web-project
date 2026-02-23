import React from "react";
import "./App.css";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import UserCard from "./UserCard";

function App() {
  const sampleUser1 = {
    name: "John Doe",
    email: "john@example.com",
  };

  const sampleUser2 = {
    name: "Jane Smith",
    email: "jane@example.com",
  };

  return (
    <div>
      <Header title="User Management System" />
      <Dashboard />

      <Header title="My Awesome React App" />

      <h1>User Profiles</h1>

      <UserCard user={sampleUser1} />
      <UserCard user={sampleUser2} />

      <p>Welcome to the main content area!</p>
    </div>
  );
}

export default App;