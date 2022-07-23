import Deposit from "./deposit";
import Transfer from "./transfer";
import User from "./user";
import Withdrawal from "./withdrawal";

export enum TransactionType {
    Deposit = 'deposit',
    Withdrawal = 'withdrawal',
    Transfer = 'transfer',
    Unknown = 'unknown'
};

export default class Transaction {
    id!: number;
    
    amount!: number;
    
    user!: User;

    made_on!: Date;

    type!: TransactionType;

    deposit?: Deposit;

    withdrawal?: Withdrawal;

    transfer?: Transfer;
}
