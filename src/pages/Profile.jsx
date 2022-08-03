import React, { Component } from 'react';
import UserProfile from '../components/UserProfile';
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
                <UserProfile user={this.state.user} />
            </div>
        );
    }
}
 
export default Profile;