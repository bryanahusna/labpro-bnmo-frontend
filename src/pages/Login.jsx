import React, { Component } from 'react';
import { backendHost } from '../config';
import checkLoggedIn from '../etc/checkLoggedIn';

class Login extends Component {
    state = {
        username: '',
        password: ''
    };

    render() { 
        return (
            <div className='container'>
                <main className="form-signin w-100 m-auto">
                <form onSubmit={ this.handleSubmit }>
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                    <div className="form-floating">
                        <input type="text" value={ this.state.username } onChange={ (e) => this.handleUsernameInput(e) } className="form-control" id="floatingInput" placeholder="example" />
                        <label htmlFor="floatingInput">Username</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" value={ this.state.password } onChange={ (e) => this.handlePasswordInput(e) } className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <br/>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                </form>
                </main>
            </div>
        );
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        
        const res = await fetch(`${backendHost}/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            credentials: 'include',
            body: JSON.stringify(this.state)
        });
        if(res.status == 200){
            const parsedRes = await res.text();

            //const user = await checkLoggedIn();
            //localStorage.setItem('me', JSON.stringify(user));
            
            alert(`Login successful`);
            window.open('/dashboard', '_self');
        } else{
            alert(await res.text());
        }
    }

    handleUsernameInput(e){
        const newValue = e.target.value;
        this.setState({ username: newValue });
    }

    handlePasswordInput(e){
        const newValue = e.target.value;
        this.setState({ password: newValue });
    }
}
 
export default Login;