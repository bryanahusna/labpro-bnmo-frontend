import React, { Component } from 'react';
import UnverifiedUser from '../components/UnverifiedUser';
import checkLoggedIn from '../etc/checkLoggedIn';

class Verify extends Component {
    state = {
        users: []
    }

    async componentDidMount(){
        const user = await checkLoggedIn();
        this.setState({ ...user });

        if(!this.state.is_admin) return;

        const res = await fetch('http://localhost:3001/api/users?is_verified=false', { credentials: 'include' });
        if(res.status == 200){
            const users = await res.json();
            this.setState({ users: users });
        }
    }

    render() {
        if(!this.state.username) return <h1>Please wait...</h1>

        if(!this.state.is_admin) return <h1>Only accessible to admin</h1>

        return (
            <div className='container'>
                <h1>Verify</h1>
                { this.state.users.map(el => {
                    return (
                        <React.Fragment key={ el.username }>
                            <UnverifiedUser
                                user={ el }
                                onVerify={ this.handleVerify }
                                onRemove={ this.handleRemove } />
                            <br />
                        </React.Fragment>
                    )
                })}
            </div>
        );
    }

    handleVerify = async (user) => {
        const res = await fetch('http://localhost:3001/api/verify', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: user.username, is_verified: true })
        });
        if(res.status == 200){
            const users = this.state.users.filter(el => el.username !== user.username);
            this.setState({ users });
        } else {
            alert(await res.text());
        }
    }
    handleRemove = async (user) => {
        const res = await fetch('http://localhost:3001/api/verify', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: user.username, is_verified: false })
        });
        if(res.status == 200){
            const users = this.state.users.filter(el => el.username !== user.username);
            this.setState({ users });
        } else {
            alert(await res.text());
        }
    }
}
 
export default Verify;