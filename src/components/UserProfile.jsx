import React, { Component } from 'react';

class UserProfile extends Component {
    state = {  } 
    render() { 
        const user = this.props.user;
        return (
            <div className='p-3 bg-body rounded shadow-sm border'>
                Username: {user.username}<br/>
                { user.is_admin && <p className='text-primary'>Admin</p> }
                Name: {user.name}<br/>
                Balance: {user.balance}<br/>
                Verified?: {user.is_verified ? 'yes' : 'no'}<br/>
                Foto KTP: {this.props.user.foto_ktp}<br/>
            </div>
        );
    }
}
 
export default UserProfile;
