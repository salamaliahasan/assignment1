class BankAccount {
    constructor(accountNumber,ownerName, balance) {
      this.accountNumber = accountNumber;
      this.ownerName = ownerName;
      this.balance = balance;
      console.log("Initial Account Information");
      console.log(`Account Number: ${accountNumber}`);
      console.log(`Owner Name: ${ownerName}`);
      console.log(`Balance: $${balance}`);    
    }
    deposit(amount) {
     console.log("Deposit and Withdrawn:");
      this.balance += amount;
      console.log(`Deposited: $${amount}`);
    }
    withdraw(amount) {
      if (amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawn: $${amount}`);
      } 
      else 
      {
        console.log(`Want to withdrawn: $${amount}`);
        console.log('Insufficient balance');
      }
    }
    getBalance() {
        console.log(`Account Balance: $${this.balance}`);
      }
     displayAccountInfo() {
        console.log("Updated Account Information");
       console.log(`Account Number: ${this.accountNumber}`);
      console.log(`Owner Name: ${this.ownerName}`);
      //console.log(`Account Balance: $${this.balance}`);
      this.getBalance();
    }
    
   
  }
  const account = new BankAccount('1001',"John Doe", 700);
  account.deposit(500);
  account.withdraw(400);
  //account.getBalance();
  account.displayAccountInfo();