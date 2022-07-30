import React, { Component } from 'react';
import { Outlet, Link } from 'react-router-dom';

class Layout extends Component {
  render(){
    return (
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/approve">Approve</Link>
            </li>
            <li>
              <Link to="/verify">Verify</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </nav>
        
        <Outlet />
      </>
    )
  }
};
  
export default Layout;
