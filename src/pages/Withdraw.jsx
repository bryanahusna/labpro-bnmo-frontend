import React, { Component } from 'react';
import Amount from '../components/Amount';
import checkLoggedIn from '../etc/checkLoggedIn';

class Withdraw extends Component {
    state = {
        amount: 0,
        currency: 'IDR',
        rate: 1,
        is_submitting: false,
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
                <h1 className='mb-3'>Withdraw</h1>
                <form onSubmit={ this.submitHandler }>
                    <Amount
                        amount = { this.state.amount }
                        currency = { this.state.currency }
                        rate = { this.state.rate }
                        onAmountChanged = { (e) => this.setState({ amount: isNaN(parseFloat(e.target.value)) ? '' : (parseFloat(e.target.value) == 0 ? e.target.value : parseFloat(e.target.value) ) }) }
                        onBlur = { (e) => this.setState({ amount: parseFloat(e.target.value) || 0 }) }
                        onCurrencyChanged = { (e) => this.setState({ currency: e.target.value }) }
                    />
                    <br />
                    <button disabled = { this.state.is_submitting } className="btn btn-primary mb-3" type='submit'>Submit</button>
                    { this.state.submit_success &&
                        <div className="alert alert-success" role="alert">
                            <h4>Withdraw Request Submitted!</h4>
                            <p>Waiting for admin approval</p>
                            <p>Request Time  : {this.state.submit_success.made_on}</p>
                            <p>Transaction Id: {this.state.submit_success.transaction_id}</p>
                            <p>Amount        : {this.state.submit_success.amount} IDR</p>
                        </div>
                    }
                </form>
            </div>
        );
    }

    submitHandler = async (e) => {
        e.preventDefault();
        
        if(this.state.is_submitting) return;
        this.setState({ is_submitting: true });

        const resRate = await fetch(`http://localhost:3001/api/ext/currency/rate?from=${this.state.currency}`, { credentials: 'include' });
        if(resRate.status != 200){
            alert('Invalid currency!');
        } else{
            const rate = parseFloat(await resRate.text());
    
            const res = await fetch('http://localhost:3001/api/withdraw', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({
                    amount: Math.round(rate * this.state.amount)
                })
            });
    
            if(res.status == 200){
                const parsedRes = await res.json();
                const submit_success= {
                    transaction_id: parsedRes.transactionId,
                    made_on: parsedRes.transaction.made_on.replace('T', ' ').replace('Z', ''),
                    amount: parsedRes.transaction.amount
                }
                this.setState({ submit_success });
            } else{
                this.setState({ submit_success: null })
                alert(await res.text());
            }
        }

        this.setState({ is_submitting: false });
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
 
export default Withdraw;