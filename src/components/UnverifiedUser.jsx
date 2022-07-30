import React, { Component } from 'react';

class UnverifiedUser extends Component {
    state = {
        is_submitting: false
    }

    render() { 
        return (
            <div>
                <h1>{ this.props.user.username }</h1>
                <button onClick={ this.handleVerify } disabled={ this.state.is_submitting }>Verify</button>
                <button onClick={ this.handleRemove } disabled={ this.state.is_submitting }>Remove</button>
            </div>
        );
    }

    handleVerify = async () => {
        this.setState({ is_submitting: true });
        await this.props.onVerify(this.props.user);
        this.setState({ is_submitting: false });
    }

    handleRemove = async () => {
        this.setState({ is_submitting: true });
        await this.props.onRemove(this.props.user);
        this.setState({ is_submitting: false });
    }
}
 
export default UnverifiedUser;