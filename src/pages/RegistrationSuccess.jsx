import React, { Component } from 'react';

class RegistrationSuccess extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <h1>Registration Successful!</h1>
                <h3>Please wait for our admin to verify your account before you can login</h3>
            </React.Fragment>
        );
    }
}
 
export default RegistrationSuccess;