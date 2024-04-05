
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Assuming you're using React Router for navigation
import Music Stream from './Music Stream'; // Import the Music component
import './App.css'; // Import your main CSS file

function App() {
  // Assume employees data is passed as props from a parent component or fetched from an API
  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/">
            {/* Render the Music Stream component */}
            {<Music stream users ={Music Stream} />}
          </Route>
          {/* Define other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;