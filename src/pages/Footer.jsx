import React, { Component } from 'react';
import { Outlet, Link } from 'react-router-dom';

class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <footer className="footer mt-auto py-3 my-2">
                <div className="container">
                    <hr/>
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">Home</Link></li>
                        <li className="nav-item"><Link to="/dashboard" className="nav-link px-2 text-muted">Dashboard</Link></li>
                        <li className="nav-item"><Link to="/profile" className="nav-link px-2 text-muted">Profile</Link></li>
                        <li className="nav-item"><Link to="/login" className="nav-link px-2 text-muted">Login</Link></li>
                        <li className="nav-item"><Link to="/register" className="nav-link px-2 text-muted">Register</Link></li>
                    </ul>
                    <p className="text-center text-muted">2022 Bryan Amirul Husna</p>
                </div>
            </footer>
        );
    }
}
 
export default Footer;