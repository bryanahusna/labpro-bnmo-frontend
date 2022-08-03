import React, { Component } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { backendHost } from '../config';
import layoutcss from './css/layout.css';

class Navbar extends Component {
  state = {
    user: {},
    is_logged_in: undefined
  }

  async componentDidMount(){
    const res = await fetch(`${backendHost}/api/me`, { credentials: 'include' });
    if(res.status == 200){
      this.setState({ user: await res.json(), is_logged_in: true });
    } else{
      this.setState({ is_logged_in: false });
    }
  }

  render(){
    return (
      <>
        <svg xmlns="http://www.w3.org/2000/svg" style={ { display: "none" } }>
          <symbol id="bootstrap" viewBox="0 0 118 94">
            <title>Bootstrap</title>
            <path fillRule="evenodd" clipRule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"></path>
          </symbol>
          <symbol id="speedometer2" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z"/>
            <path fillRule="evenodd" d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"/>
          </symbol>
          <symbol id="people-circle" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
          </symbol>
        </svg>

        <header>
          <div className="px-3 py-2 text-bg-dark">
            <div className="container">
              <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <Link to="/" className="d-flex flex-row align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                  <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"/></svg>
                  <h2 className='bi me-2'>BNMO</h2>
                </Link>

                <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                  <li>
                    <Link to="/dashboard" className="nav-link text-white">
                      <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlinkHref="#speedometer2"/></svg>
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <a href="/profile" className="nav-link text-white">
                      <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlinkHref="#people-circle"/></svg>
                      Profile
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="px-3 py-2 border-bottom mb-3">
            <div className="container d-flex flex-wrap flex-column-reverse">
              { (this.state.is_logged_in == false) &&
                <div className="text-end">
                  <Link to="/login" className="btn btn-light text-dark me-2">Login</Link>
                  <Link to="/register" className="btn btn-primary">Register</Link>
                </div>
              }
              { (this.state.is_logged_in == true ) &&
                <div className="text-end">
                  <Link to="/logout" className="btn btn-light text-dark me-2">Logout</Link>
                </div>
              }
            </div>
          </div>
        </header>

        <Outlet />
      </>
    )
  }
};
  
export default Navbar;
