import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>hi, Welcome to the about Page</h1>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Home;