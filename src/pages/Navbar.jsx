import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the About Page.</p>
      <Link to="/">Go back to Home Page</Link>
    </div>
  );
};

export default Navbar;
