import React, { Component } from 'react';
import { TransactionType } from '../models/db/transaction';

class HistoryEntry extends Component {
    
    render() { 
        const transaction = this.props.transaction;

        return (
            <div className='p-3 bg-body rounded shadow-sm border'>
                <strong className="d-block">{ transaction.type }</strong>
                Id: { transaction.id }<br/>
                Type: { transaction.type }<br/>
                Amount: { transaction.amount } IDR<br/>
                Username: { transaction.user.username }<br/>
                { (transaction.type == TransactionType.Transfer) && <>Transfer Destination: { transaction.transfer.to_user.username }<br/></> }
                Date: { transaction.made_on }<br/>
                { (transaction.type == TransactionType.Deposit) && <>Approved: { transaction.deposit.is_approved + '' }<br/></> }
                { (transaction.type == TransactionType.Withdrawal) && <>Approved: { transaction.withdrawal.is_approved + '' }<br/></> }
                { (transaction.type == TransactionType.Deposit) && transaction.deposit.is_approved && <>Approved On: { transaction.deposit.approved_on }<br/></> }
                { (transaction.type == TransactionType.Withdrawal) && transaction.withdrawal.is_approved && <>Approved On: { transaction.withdrawal.approved_on }</> }
            </div>
        );
    }
}
 
export default HistoryEntry;