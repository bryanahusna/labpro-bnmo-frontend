import Deposit from "./deposit";
import Transfer from "./transfer";
import User from "./user";
import Withdrawal from "./withdrawal";

const TransactionType = {
    Deposit: 'deposit',
    Withdrawal: 'withdrawal',
    Transfer: 'transfer',
    Unknown: 'unknown'
};

export default class Transaction {
    id;
    
    amount;
    
    user;

    made_on;

    type;

    deposit;

    withdrawal;

    transfer;
}

export { TransactionType };
