import React, { Component } from 'react';
import CurrencySelector from './CurrencySelector';

class Amount extends Component {
    state = {  } 
    render() {
        return (
            <div>
                <label htmlFor='amount' >Amount: </label>
                <input id='amount' value={ this.props.amount } onChange={ this.props.onAmountChanged } type="number" step='1' pattern='[0-9]' min="0" />
                <CurrencySelector id='currency' value={ this.props.currency } onChange={ this.props.onCurrencyChanged } />
                { this.props.currency != 'IDR' && <p>= { Math.round(this.props.rate * this.props.amount) } IDR</p> }
            </div>
        );
    }
}
 
export default Amount;