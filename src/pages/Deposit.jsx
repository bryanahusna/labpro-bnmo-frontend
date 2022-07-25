import React, { Component } from 'react';
import CurrencySelector from '../components/CurrencySelector';

class Deposit extends Component {
    state = {
        amount: 0,
        currency: 'IDR',
        rate: 1
    };

    componentDidMount(){
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.currency != this.state.currency){
            this.updateRate();
        }
    }

    render() { 
        return (
            <React.Fragment>
                <h1>Deposit</h1>
                
                <form onSubmit={ this.submitHandler }>
                    <div>
                        <label htmlFor='amount' >Amount: </label>
                        <input id='amount' value={ this.state.amount } onChange={ (e) => this.setState({ amount: e.target.value }) } type="number" step='1' pattern='[0-9]' min="0" />
                        <CurrencySelector id='currency' value={ this.state.currency } onChange={ (e) => this.setState({ currency: e.target.value }) } />
                        { this.state.currency != 'IDR' && <p>= { Math.round(this.state.rate * this.state.amount) } IDR</p> }
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </React.Fragment>
        );
    }

    submitHandler = async (e) => {
        e.preventDefault();

        const res = await fetch('http://localhost:3001/api/deposit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            credentials: 'include',
            body: JSON.stringify(this.state)
        });
        if(res.status == 200){
            const parsedRes = await res.text();
            alert(`Deposit Request Submitted!\nWaiting for admin approval`);
        } else{
            alert(await res.text());
        }
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
 
export default Deposit;
