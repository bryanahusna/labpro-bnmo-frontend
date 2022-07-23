import React, { Component } from 'react';

class Register extends Component {
    state = { 
        username: '',
        password: '',
        name: '',
        foto_ktp: ''
     } 
    render() { 
        return (
            <main className="form-signin w-100 m-auto">
            <form onSubmit={ this.handleSubmit }>
                <h1 className="h3 mb-3 fw-normal">Register</h1>

                <div className="form-floating">
                    <input type="text" value={ this.state.username } onChange={ (e) => this.handleUsernameInput(e) } className="form-control" id="floatingInput" placeholder="example" required />
                    <label htmlFor="floatingInput">Username</label>
                </div>
                <div className="form-floating">
                    <input type="password" value={ this.state.password } onChange={ (e) => this.handlePasswordInput(e) } className="form-control" id="floatingPassword" placeholder="Password" required />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="form-floating">
                    <input type="text" value={ this.state.name } onChange={ (e) => this.handleNameInput(e) } className="form-control" id="floatingName" placeholder="John" required />
                    <label htmlFor="floatingName">Name</label>
                </div>
                <div className="form-floating">
                    <input type="text" value={ this.state.foto_ktp } onChange={ (e) => this.handleFotoKTPInput(e) } className="form-control" id="floatingFotoKTP" placeholder="example.jpg" required />
                    <label htmlFor="floatingFotoKTP">Foto KTP</label>
                </div>

                <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
            </form>
            </main>
        );
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        //console.log(this.state);
        const res = await fetch('http://localhost:3001/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        });
        if(res.status == 200){
            const parsedRes = await res.json();
            alert('Registration Successful!');
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

    handleNameInput(e){
        const newValue = e.target.value;
        this.setState({ name: newValue });
    }

    handleFotoKTPInput(e){
        const newValue = e.target.value;
        this.setState({ foto_ktp: newValue });
    }
}
 
export default Register;