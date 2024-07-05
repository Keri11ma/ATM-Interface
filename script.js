class BankAccount {
    constructor(initialBalance) {
        this.balance = initialBalance;
        this.transactionHistory = [];
    }

    getBalance() {
        return this.balance;
    }

    deposit(amount) {
        this.balance += amount;
        this.transactionHistory.push(`Deposit: R${amount}`);
        return true;
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            this.transactionHistory.push(`Withdrawal: R${amount}`);
            return true;
        } else {
            return false;
        }
    }

    getTransactionHistory() {
        return this.transactionHistory.join("\n");
    }
}

const account = new BankAccount(4000);

function deposit() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (!isNaN(amount) && amount > 0) {
        account.deposit(amount);
        document.getElementById('message').innerText = `Successfully deposited R${amount}. New balance is: R${account.getBalance()}`;
    } else {
        document.getElementById('message').innerText = 'Please enter a valid amount to deposit.';
    }
}

function withdraw() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (!isNaN(amount) && amount > 0) {
        if (account.withdraw(amount)) {
            document.getElementById('message').innerText = `Successfully withdrawn R${amount}. Remaining balance is: R${account.getBalance()}`;
        } else {
            document.getElementById('message').innerText = 'Insufficient balance for withdrawal.';
        }
    } else {
        document.getElementById('message').innerText = 'Please enter a valid amount to withdraw.';
    }
}

function checkBalance() {
    document.getElementById('message').innerText = `Your current balance is: R${account.getBalance()}`;
}

function checkStatement() {
    const history = account.getTransactionHistory();
    if (history) {
        document.getElementById('message').innerText = `Transaction History:\n${history}`;
    } else {
        document.getElementById('message').innerText = 'No transactions made yet.';
    }
}

function exitATM() {
    document.getElementById('message').innerText = 'Thank you for using the Save Money ATM. Goodbye!';
    setTimeout(() => {
        window.close();
    }, 3000);
}
