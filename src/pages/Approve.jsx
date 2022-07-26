import React, { Component } from 'react';
import HistoryUnapproved from '../components/HistoryUnapproved';

class Approve extends Component {
    state = {
        is_admin: false,
        transactions: []
    }

    async componentDidMount(){
        const res = await fetch('http://localhost:3001/api/history/unapproved', { credentials: 'include' });
        if(res.status == 200){
            this.setState({ transactions: await res.json(), is_admin: true });
        } else {
            this.setState({is_admin: false });
            alert('Only Accessible to Admin');
        }
    }

    render() { 
        if(!this.state.is_admin) return <></>;

        return (
            <React.Fragment>
                <h1>Approve</h1>
                { this.state.transactions.map(el =>
                    <React.Fragment key={ el.id }>
                        <HistoryUnapproved
                            key = { el.id }
                            transaction = { el }
                            removeTransaction = { this.removeTransaction } />
                        <br />
                    </ React.Fragment>)
                }
            </React.Fragment>
        );
    }

    removeTransaction = (transaction_id) => {
        this.setState({ transactions: this.state.transactions.filter(el => el.id != transaction_id) });
    }

}

export default Approve;
