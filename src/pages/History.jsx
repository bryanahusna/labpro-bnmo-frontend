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
            <React.Fragment>
                <h1>History</h1>
                { this.state.transactions.map(el =>
                    <React.Fragment key={ el.id }>
                        <HistoryEntry key={ el.id } transaction = { el } />
                        <br/>
                    </ React.Fragment>
                )}
            </React.Fragment>
        );
    }
}

export default History;