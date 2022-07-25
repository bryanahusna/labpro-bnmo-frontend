import React, { Component } from 'react';

class Logout extends Component {
    state = {  } 
    render() { 
        return (
        <React.Fragment>
            <h1>Are you sure to log out?</h1>
            <button onClick={ this.handleYes }>Yes</button>
            <button onClick={ this.handleNo }>No</button>
        </React.Fragment>
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
