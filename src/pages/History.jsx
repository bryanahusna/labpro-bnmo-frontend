import React, { Component } from 'react';
import HistoryEntry from '../components/HistoryEntry';

class History extends Component {
    state = {
        transactions: []
    }

    async componentDidMount(){
        const res = await fetch('http://localhost:3001/api/history', { credentials: 'include' });
        if(res.status == 200){
            this.setState({ transactions: await res.json() });
        }
    }

    render() { 
        return (
            <div className='container'>
                <h1>History</h1>
                { this.state.transactions.map(el =>
                    <HistoryEntry key={el.id} transaction = { el } />
                )}
            </div>
        );
    }
}

export default History;