import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

function EmployeeList(props) {
  return (
    <div className="Music">
      <h1>Music </h1>
      <ul>
        {props.music stream.map((employee) => (
          <li key={user.userId}>
            {/* Create a link to the user detail page */}
            <Link to={`/user/${user.userId}`}>
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Music Stream;