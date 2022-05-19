

class BankAccount {

    constructor(name) {
        this.name = name;
        this._balance = 0;
    }

    get balance() {
        return this._balance;
    }

    set balance(newBalance) {
        if (newBalance < 0) {
            newBalance = 0;
        }
        this._balance = newBalance;
        return newBalance;
    }

    credit() {
        this.balance += 1000;
    }

    describe() {
        return `Account owner: ${this.name}`;
    }
}
