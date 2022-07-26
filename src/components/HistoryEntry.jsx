import React, { Component } from 'react';
import { TransactionType } from '../models/db/transaction';

class HistoryEntry extends Component {
    
    render() { 
        const transaction = this.props.transaction;

        return (
        <div>
            <h4>Id: { transaction.id }</h4>
            <h4>Type: { transaction.type }</h4>
            <h4>Amount: { transaction.amount }</h4>
            <h4>Username: { transaction.user.username }</h4>
            { (transaction.type == TransactionType.Transfer) && <h4>Transfer Destination: { transaction.transfer.to_user }</h4> }
            <h4>Date: { transaction.made_on }</h4>
            { (transaction.type == TransactionType.Deposit) && <h4>Approved: { transaction.deposit.is_approved + '' }</h4> }
            { (transaction.type == TransactionType.Withdrawal) && <h4>Approved: { transaction.withdrawal.is_approved + '' }</h4> }
            { (transaction.type == TransactionType.Deposit) && transaction.deposit.is_approved && <h4>Approved On: { transaction.deposit.approved_on }</h4> }
            { (transaction.type == TransactionType.Withdrawal) && transaction.withdrawal.is_approved && <h4>Approved On: { transaction.withdrawal.approved_on }</h4> }
        </div>
        );
    }
}
 
export default HistoryEntry;