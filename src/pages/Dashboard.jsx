import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import checkLoggedIn from '../etc/checkLoggedIn';

class Dashboard extends Component {
    state = {
        user: {}
    } 

    async componentDidMount(){
        const user = await checkLoggedIn();
        this.setState({ user });
    }

    render() {
        const user = this.state.user;
        if(!user.username){
            return <h1>Please wait...</h1>;
        }
        
        return (
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" style={ { display: "none" } }>
                    <symbol id="plus-square" viewBox="0 0 16 16">
                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </symbol>
                    <symbol id="dash-square" viewBox="0 0 16 16">
                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                    </symbol>
                    <symbol id="arrow-right-square" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                    </symbol>
                    <symbol id="card-list" viewBox="0 0 16 16">
                        <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                        <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                    </symbol>
                    <symbol id="bag-check" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                    </symbol>
                    <symbol id="check-square" viewBox="0 0 16 16">
                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                        <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"/>
                    </symbol>
                    <symbol id="search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </symbol>
                </svg>

                { !user.is_admin && 
                    this.userDashboard
                }
                { user.is_admin &&
                    this.adminDashboard
                }
            </div>
        );
    }

    userDashboard = (
        <div className="container px-4 py-5" id="icon-grid">
            <h2 className="pb-2 border-bottom">Dashboard</h2>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
                <Link to="/deposit" className="col d-flex align-items-start text-dark text-decoration-none">
                    <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlinkHref="#plus-square"/></svg>
                    <div>
                        <h4 className="fw-bold mb-0">Deposit Request</h4>
                        <p>Request to add your account's balance</p>
                    </div>
                </Link>
                <Link to="/withdraw" className="col d-flex align-items-start text-dark text-decoration-none">
                    <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlinkHref="#dash-square"/></svg>
                    <div>
                        <h4 className="fw-bold mb-0">Withdraw Request</h4>
                        <p>Request to reduce your account's balance</p>
                    </div>
                </Link>
                <Link to="/transfer" className="col d-flex align-items-start text-dark text-decoration-none">
                    <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlinkHref="#arrow-right-square"/></svg>
                    <div>
                        <h4 className="fw-bold mb-0">Transfer</h4>
                        <p>Transfer some of your money to another user</p>
                    </div>
                </Link>
                <Link to="/history" className="col d-flex align-items-start text-dark text-decoration-none">
                    <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlinkHref="#card-list"/></svg>
                    <div>
                        <h4 className="fw-bold mb-0">Transactions History</h4>
                        <p>Your transactions history</p>
                    </div>
                </Link>
            </div>
        </div>
    );

    adminDashboard = (
        <div className="container px-4 py-5" id="icon-grid">
            <h2 className="pb-2 border-bottom">Dashboard</h2>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
                <Link to="/approve" className="col d-flex align-items-start text-dark text-decoration-none">
                    <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlinkHref="#bag-check"/></svg>
                    <div>
                        <h4 className="fw-bold mb-0">Approve Transaction</h4>
                        <p>Approve transactions that require admin approval</p>
                    </div>
                </Link>
                <Link to="/verify" className="col d-flex align-items-start text-dark text-decoration-none">
                    <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlinkHref="#check-square"/></svg>
                    <div>
                        <h4 className="fw-bold mb-0">Verify User</h4>
                        <p>Verify unverified users</p>
                    </div>
                </Link>
                <Link to="/search-customer" className="col d-flex align-items-start text-dark text-decoration-none">
                    <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlinkHref="#search"/></svg>
                    <div>
                        <h4 className="fw-bold mb-0">Search Customer</h4>
                        <p>Find user's profile</p>
                    </div>
                </Link>
                <Link to="/history" className="col d-flex align-items-start text-dark text-decoration-none">
                    <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlinkHref="#card-list"/></svg>
                    <div>
                        <h4 className="fw-bold mb-0">Transactions History</h4>
                        <p>Users transactions history</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}
 
export default Dashboard;
