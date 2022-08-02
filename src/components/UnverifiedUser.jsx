import React, { Component } from 'react';

class UnverifiedUser extends Component {
    state = {
        is_submitting: false
    }

    render() { 
        return (
            <div className='p-3 bg-body rounded shadow-sm border'>
                <h5>Username: { this.props.user.username }</h5>
                <h5>Name: { this.props.user.name }</h5>
                <button className='btn btn-primary me-3' onClick={ this.handleVerify } disabled={ this.state.is_submitting }>Verify</button>
                <button className='btn btn-secondary' onClick={ this.handleRemove } disabled={ this.state.is_submitting }>Remove</button>
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