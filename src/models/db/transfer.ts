import Transaction from "./transaction";
import User from "./user";

export default class Transfer {
    transaction!: Transaction;

    transactionId!: number;

    to_user!: User;    
}
