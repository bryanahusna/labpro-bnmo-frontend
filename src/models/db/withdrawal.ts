import Transaction from "./transaction";

export default class Withdrawal {
    transaction!: Transaction;

    transactionId!: number;

    is_approved!: boolean;

    approved_on!: Date;
}
