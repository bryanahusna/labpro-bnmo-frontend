import React, { Component } from 'react';
import HistoryEntry from './HistoryEntry';

class HistoryUnapproved extends Component {
    state = {
        is_submitting: false
    } 
    render() {
        const transaction = this.props.transaction;
        return (
            <div>
                <HistoryEntry transaction = { transaction } />
                <button className='btn btn-primary me-3' onClick={ this.handleApprove } disabled={ this.state.is_submitting }>Approve</button>
                <button className='btn btn-secondary' onClick={ this.handleDecline } disabled={ this.state.is_submitting }>Decline</button>
            </div>
        );
    }

    handleApprove = async (e) => {
        this.setState({ is_submitting: true });
        await this.props.onApprove(this.props.transaction);
        this.setState({ is_submitting: false });
    }

    handleDecline = async (e) => {
        this.setState({ is_submitting: true });
        await this.props.onDecline(this.props.transaction);
        this.setState({ is_submitting: false });
    }

}
 
export default HistoryUnapproved;