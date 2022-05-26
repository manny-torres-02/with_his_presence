
import * as React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function Navbar() {
    return (
      <div>
        <nav>
        <Link to="/">Home </Link>
        <Link to="/login">Login </Link>
        <Link to="/feed">Feed </Link>
      
        </nav>
        </div>
    );
  };

export default Navbar;
