import React, { Component } from 'react';
import Amount from '../components/Amount';
import checkLoggedIn from '../etc/checkLoggedIn';

class Deposit extends Component {
    state = {
        amount: 0,
        currency: 'IDR',
        rate: 1,
        submitting: false
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
            <React.Fragment>
                <h1>Deposit</h1>
                <form onSubmit={ this.submitHandler }>
                    <Amount
                        amount = { this.state.amount }
                        currency = { this.state.currency }
                        rate = { this.state.rate }
                        onAmountChanged = { (e) => this.setState({ amount: e.target.value }) }
                        onCurrencyChanged = { (e) => this.setState({ currency: e.target.value }) }
                    />
                    <button disabled = { this.state.submitting } type='submit'>Submit</button>
                </form>
            </React.Fragment>
        );
    }

    submitHandler = async (e) => {
        e.preventDefault();
        if(this.state.submitting) return;
        this.setState({ submitting: true });

        const resRate = await fetch(`http://localhost:3001/api/ext/currency/rate?from=${this.state.currency}`, { credentials: 'include' });
        if(resRate.status != 200){
            alert('Invalid currency!');
        } else{
            const rate = parseFloat(await resRate.text());
    
            const res = await fetch('http://localhost:3001/api/deposit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                credentials: 'include',
                body: JSON.stringify({
                    amount: Math.round(rate * this.state.amount)
                })
            });
    
            if(res.status == 200){
                const parsedRes = await res.text();
                alert(`Deposit Request Submitted!\nWaiting for admin approval`);
            } else{
                alert(await res.text());
            }
        }

        this.setState({ submitting: false });
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
