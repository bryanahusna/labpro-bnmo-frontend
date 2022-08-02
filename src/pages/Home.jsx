import React, { Component } from 'react';
import logo from '../logo.svg'

class Home extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <div className="px-4 py-5 my-5 text-center">
                    <img className="d-block mx-auto mb-4" src={logo} alt="" width="72" height="57" />
                    <h1 className="display-5 fw-bold">BNMO*</h1>
                    <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">BNMO, your trusted digital transaction platform</p>
                    <small className='text-muted'><i>*disclaimer: B logo in this website is Bootstrap's logo, all rights reserved</i></small>
                    {/* <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Secondary</button>
                    </div> */}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Home;
