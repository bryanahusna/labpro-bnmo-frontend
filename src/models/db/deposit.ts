import Transaction from "./transaction";

export default class Deposit {
    transaction!: Transaction;

    transactionId!: number;
    
    is_approved!: boolean;

    approved_on!: Date;    
}
