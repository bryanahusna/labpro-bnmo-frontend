import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import checkLoggedIn from '../etc/checkLoggedIn';

class Dashboard extends Component {
    state = {  } 

    async componentDidMount(){
        const user = await checkLoggedIn();
        this.setState({ ...user });
    }

    render() {
        if(!this.state.username){
            return <h1>Please wait...</h1>;
        }
        
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
