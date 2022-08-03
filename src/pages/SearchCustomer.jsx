import React, { Component } from 'react';
import UserProfile from '../components/UserProfile';
import { backendHost } from '../config';
import checkLoggedIn from '../etc/checkLoggedIn';

class SearchCustomer extends Component {
    state = {
        user: null,
        found_users: [],
        search_username: ''
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
                <h1>Search Customer</h1>

                <form className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto" role="search" onSubmit={ this.handleSubmit }>
                    <div className='input-group mb-3'>
                        <input type="search" className="form-control" placeholder="Search (username)..." aria-label="Search"
                            value={this.search_username} onChange={(e) => this.setState({ search_username: e.target.value })} />
                        <button type='submit' className='btn btn-primary'>Search</button>
                    </div>
                </form>
                { this.state.found_users.length > 0 && this.state.found_users.map(e => <UserProfile key={e.username} user={e} />) }
            </div>
        );
    }

    handleSubmit = async (e) => {
        e.preventDefault(); 

        const res = await fetch(`${backendHost}/api/users/${this.state.search_username}`, { credentials: 'include' });
        if(res.status == 200){
            const users = await res.json();
            this.setState({ found_users: users });
        }

    }
}
 
export default SearchCustomer
