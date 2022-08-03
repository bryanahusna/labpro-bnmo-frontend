import React, { Component } from 'react';

class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <footer className="footer mt-auto py-3 my-2">
                <div className="container">
                    <hr/>
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Home</a></li>
                        <li className="nav-item"><a href="/dashboard" className="nav-link px-2 text-muted">Dashboard</a></li>
                        <li className="nav-item"><a href="/profile" className="nav-link px-2 text-muted">Profile</a></li>
                        <li className="nav-item"><a href="/login" className="nav-link px-2 text-muted">Login</a></li>
                        <li className="nav-item"><a href="/register" className="nav-link px-2 text-muted">Register</a></li>
                    </ul>
                    <p className="text-center text-muted">2022 Bryan Amirul Husna</p>
                </div>
            </footer>
        );
    }
}
 
export default Footer;