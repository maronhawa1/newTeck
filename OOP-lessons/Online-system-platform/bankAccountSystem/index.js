class BankAccount {
  constructor(accountOwnerName, balance) {
    if (/^[a-zA-Z ]+$/.test(accountOwnerName)) {
      this.accountOwnerName = accountOwnerName;
    } else {
      console.log("Invalid name! Contains numbers or symbols.");
    }
    if (balance < 0 || isNaN(balance)) {
      console.log("the balance does not can negative or operations");
    } else {
      this.balance = balance;
    }
  }
  deposit(amount) {
    if (amount < 0) {
      console.log("cant add negative amount");
    } else this.balance += amount;
  }
  withdraw(amount) {
    if (amount > this.balance) {
      console.log("cant withdraw amont bigger than the balance");
    } else this.balance -= amount;
  }
  getBalance() {
    return this.balance;
  }
}
const account = new BankAccount("Ali", -1000);
account.withdraw(150);

console.log(account.getBalance());
