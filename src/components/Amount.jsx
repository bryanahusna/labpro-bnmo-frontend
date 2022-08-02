import React, { Component } from 'react';
import CurrencySelector from './CurrencySelector';

class Amount extends Component {
    state = {  } 
    render() {
        return (
            <div className='form-group'>
                <label htmlFor='amount' >Amount</label>
                <div className='input-group'>
                    <input id='amount'
                        value={ this.props.amount }
                        onChange={ this.props.onAmountChanged }
                        onBlur={ this.props.onBlur }
                        type="text" pattern='[0-9]+(\.[0-9]*)?' min="0"
                        className='form-control ms-2 me-3'
                    />
                    <CurrencySelector id='currency' value={ this.props.currency } onChange={ this.props.onCurrencyChanged } />
                </div>
                { this.props.currency != 'IDR' && <p className='ms-3'>= { Math.round(this.props.rate * this.props.amount) } IDR</p> }
            </div>
        );
    }
}
 
export default Amount;