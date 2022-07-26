import React, { Component } from 'react';
import HistoryEntry from './HistoryEntry';

class HistoryUnapproved extends Component {
    state = {
        submitting: false
    } 
    render() {
        const transaction = this.props.transaction;
        return (
            <div>
                <HistoryEntry transaction = { transaction } />
                <button onClick={ this.handleApprove } disabled={ this.state.submitting }>Approve</button>
                <button onClick={ this.handleDecline } disabled={ this.state.submitting }>Decline</button>
            </div>
        );
    }

    handleApprove = async (e) => {
        this.setState({ submitting: true });

        const res = await fetch('http://localhost:3001/api/approve', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ transaction_id: this.props.transaction.id, approved: true })
        })
        if(res.status != 200){
            this.setState({ submitting: false });
            alert(await res.text());
        } else{
            this.props.removeTransaction(this.props.transaction.id);
        }
    }

    handleDecline = async (e) => {
        this.setState({ submitting: true });

        const res = await fetch('http://localhost:3001/api/approve', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ transaction_id: this.props.transaction.id, approved: false })
        })
        if(res.status != 200){
            this.setState({ submitting: false });
            alert(await res.text());
        } else{
            this.props.removeTransaction(this.props.transaction.id);
        }
    }

}
 
export default HistoryUnapproved;