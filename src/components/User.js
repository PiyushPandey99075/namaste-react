import { useState } from "react";

const User = (props) => {
  const [count] = useState(0);
  const [count2] = useState(1);

  // Distrucharing props on code base
  const { name, location } = props;
  return (
    <div className="user-card">
      <h1>Count1: {count}</h1>
      <h1>Count2: {count2}</h1>

      <h1>Name: {name}</h1>
      <h2>Location: {location}</h2>
      <h2>Contact: +91-812177385</h2>
    </div>
  );
};

export default User;
