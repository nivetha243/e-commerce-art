
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome Home Page</h1>
      <Link to="/about">Go About</Link>
    </div>
  );
}

export default Home;
