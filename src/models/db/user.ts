import Transaction from "./transaction";

export default class User {
    username!: string;

    password!: string;

    foto_ktp!: string;

    name!: string;

    balance!: number;

    is_verified!: boolean;

    is_admin!: boolean;

    transactions!: Transaction[];
}
