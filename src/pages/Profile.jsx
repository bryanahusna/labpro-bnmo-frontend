import React, { Component } from 'react';
import checkLoggedIn from '../etc/checkLoggedIn';

class Profile extends Component {
    state = {
        user: null
    }

    async componentDidMount(){
        const user = await checkLoggedIn();
        this.setState({ user });
    }

    render() { 
        if(!this.state.user){
            return <h1>Please wait...</h1>
        }

        return (
            <div className='container'>
                <h1>Profile</h1>
                Username: {this.state.user.username}<br/>
                Name: {this.state.user.name}<br/>
                Balance: {this.state.user.balance}<br/>
                Verified?: {this.state.user.is_verified ? 'yes' : 'no'}<br/>
                Foto KTP: {this.state.user.foto_ktp}<br/>
            </div>
        );
    }
}
 
export default Profile;