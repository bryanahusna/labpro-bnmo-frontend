import React, { Component } from 'react';
import HistoryUnapproved from '../components/HistoryUnapproved';
import { backendHost } from '../config';
import checkLoggedIn from '../etc/checkLoggedIn';

class Approve extends Component {
    state = {
        is_admin: false,
        transactions: []
    }

    async componentDidMount(){
        const user = await checkLoggedIn();
        this.setState({ ...user });

        if(!this.state.is_admin) return;

        const res = await fetch(`${backendHost}/api/history/unapproved`, { credentials: 'include' });
        if(res.status == 200){
            const transactions = await res.json();
            this.setState({ transactions });
        }
    }

    render() {
        if(!this.state.username) return <h1>Please wait...</h1>
        
        if(!this.state.is_admin) return <h1>Only accessible to admin</ h1>;

        return (
            <div className='container'>
                <h1>Approve</h1>
                { this.state.transactions.map(el =>
                    <React.Fragment key={ el.id }>
                        <HistoryUnapproved
                            key = { el.id }
                            transaction = { el }
                            onApprove = { this.handleApprove }
                            onDecline = { this.handleDecline } />
                        <br />
                    </ React.Fragment>)
                }
            </div>
        );
    }

    handleApprove = async (transaction) => {
        const res = await fetch(`${backendHost}/api/approve`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ transaction_id: transaction.id, approved: true })
        });

        if(res.status == 200){
            const transactions = this.state.transactions.filter(el => el.id !== transaction.id);
            this.setState({ transactions });
        } else{
            alert(await res.text());
        }
    }

    handleDecline = async (transaction) => {
        const res = await fetch(`${backendHost}/api/approve`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ transaction_id: transaction.id, approved: false })
        });

        if(res.status == 200){
            const transactions = this.state.transactions.filter(el => el.id !== transaction.id);
            this.setState({ transactions });
        } else{
            alert(await res.text());
        }
    }
}

export default Approve;
