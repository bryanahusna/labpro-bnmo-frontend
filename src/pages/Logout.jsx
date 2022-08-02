import React, { Component } from 'react';

class Logout extends Component {
    state = {  } 
    render() { 
        return (
        <div className='container'>
            <div className='d-flex justify-content-center'>
                <h1>Are you sure to log out?</h1>
            </div>
            <br/>
            <div className='d-flex align-items-center justify-content-center'>
                <button className='btn btn-primary me-3 px-3' onClick={ this.handleYes }>Yes</button>
                <button className='btn btn-secondary px-3' onClick={ this.handleNo }>No</button>
            </div>
        </div>
    );
    }

    handleYes = async () => {
        const res = await fetch('http://localhost:3001/api/logout', {
            method: 'DELETE',
            credentials: 'include'
        });
        if(res.status == 200){
            alert('Logout successful');
            return window.open('/', '_self');
        } else{
            alert('Login failed! Try again');
        }
    }

    handleNo = () => {
        window.open('/dashboard', '_self');
    }
}
 
export default Logout;
