import { Modal } from 'bootstrap';
import React, { Component } from 'react';
import Amount from '../components/Amount';
import checkLoggedIn from '../etc/checkLoggedIn';

class Transfer extends Component {
    state = {
        amount: 0,
        currency: 'IDR',
        rate: 1,
        is_submitting: false,
        to_username: '',
        to_user: {},
        valid_transfer: false,
        error_message: '',
        submit_success: null
    };
    
    async componentDidMount(){
        const user = await checkLoggedIn();
        this.setState({ ...user });
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.currency != this.state.currency){
            this.updateRate();
        }
    }

    render() { 
        if(!this.state.username){
            return <h1>Please wait...</h1>
        }

        return (
            <div className='container'>
                <h1 className='mb-3'>Transfer</h1>
                <form onSubmit={ this.submitHandler }>
                    <div className='form-group'>
                        <label htmlFor='to_user'>Destination's username</label>
                        <input id='to_user' value={this.state.to_username} onChange={ (e) => this.setState({ to_username: e.target.value }) } className='form-control' type="text" pattern='.+' title="Destination user's username, cannot be empty" />
                    </div>
                    <br />
                    <Amount
                        amount = { this.state.amount }
                        currency = { this.state.currency }
                        rate = { this.state.rate }
                        onAmountChanged = { (e) => this.setState({ amount: isNaN(parseFloat(e.target.value)) ? '' : (parseFloat(e.target.value) == 0 ? e.target.value : parseFloat(e.target.value) ) }) }
                        onBlur = { (e) => this.setState({ amount: parseFloat(e.target.value) || 0 }) }
                        onCurrencyChanged = { (e) => this.setState({ currency: e.target.value }) }
                    />
                    <br />
                    <button
                        disabled = { this.state.is_submitting } className="btn btn-primary mb-3" type='submit'
                        data-bs-toggle='modal' data-bs-target='#confirmationModal'
                    > Next </button>
                </form>
                { this.state.submit_success &&
                    <div className="alert alert-success" role="alert">
                        <h4>Transfer Finished!</h4>
                        <p>To username: {this.state.to_user.username}</p>
                        <p>Transaction time  : {this.state.submit_success.transaction.made_on}</p>
                        <p>Transaction Id: {this.state.submit_success.transactionId}</p>
                        <p>Amount        : {this.state.submit_success.transaction.amount} IDR</p>
                    </div>
                }
                { this.state.valid_transfer && !this.state.submit_success &&
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                }
                { this.generateModal() }
            </div>
        );
    }

    submitHandler = async (e) => {
        e.preventDefault();
        if(this.state.is_submitting) return;
        this.setState({ is_submitting: true });

        // check target username
        try{
            const resToUser = await fetch(`http://localhost:3001/api/users/${this.state.to_username}`, { credentials: 'include' });
            if(resToUser.status != 200){
                throw new Error(await res.text());
            }

            const users = await resToUser.json();
            if(users.length == 0){
                throw new Error('No user with the given id found');
            }
            if(users.length > 1){
                throw new Error('More than one user with the given username found!');
            }

            const user = users[0];
            if(user.username == this.state.username){
                throw new Error('Cannot transfer to your own account')
            }

            this.setState({ to_user: {
                username: user.username,
                name: user.name
            }, valid_transfer: true})
        } catch(err){
            this.setState({ error_message: `Transfer failed! Reason: ${err.message}`, valid_transfer: false, submit_success: false });
        }

        this.setState({ is_submitting: false });
    }

    handleConfirm = async () => {
        this.setState({ is_submitting: true, submit_success: false });
        try{
            const res = await fetch('http://localhost:3001/api/transfer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({
                    amount: Math.round(this.state.rate * this.state.amount),
                    to_user: this.state.to_username
                })
            })
            if(res.status != 200){
                throw new Erro(await res.text());
            }

            this.setState({ submit_success: await res.json() });
        } catch(err){
            alert(`Transaction failed! Reason: ${err.message}`);
        }
        
        this.setState({ is_submitting: false, valid_transfer: false});
    }

    generateModal = () => {
        return (
            <div className="modal fade" id="confirmationModal" tabIndex="-1" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="confirmationModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="confirmationModalLabel">Confirmation</h5>
                            <button type="button" className="btn-close" onClick={() => { this.setState({valid_transfer: false}) }} data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        { !this.state.valid_transfer ?
                            <div className='modal-body'>{this.state.error_message}</div>
                            : <div className="modal-body">
                                Username: { this.state.to_user.username }<br/>
                                Name: { this.state.to_user.username }<br/>
                                Amount: { this.state.amount }<br/>
                                <br/>
                                <p>Are you sure?</p>
                            </div>}
                        <div className="modal-footer">
                            <button type="button" onClick={() => { this.setState({valid_transfer: false}) }} className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            { this.state.valid_transfer && <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={ this.handleConfirm }>Confirm</button>}
                        </div>
                        </div>
                    </div>
                </div>
        )
    }
    
    updateRate = async () => {
        const res = await fetch(`http://localhost:3001/api/ext/currency/rate?from=${this.state.currency}`, { credentials: 'include' });
        if(res.status == 200){
            this.setState({ rate: parseFloat(await res.text()) });
        } else{
            this.setState({ rate: NaN });
        }
    }
}
 
export default Transfer;