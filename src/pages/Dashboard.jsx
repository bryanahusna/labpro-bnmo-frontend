import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class Dashboard extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <Link to='/deposit'>Deposit</Link><br />
                <Link to='/withdraw'>Withdraw</Link><br />
                <Link to='/transfer'>Transfer</Link><br />
                <Link to='/history'>Transactions History</Link><br />
            </React.Fragment>
        );
    }
}
 
export default Dashboard;
