function Account(balance = 0.00) {
  this._balance = balance
  this.statement = new Statement()
}

Account.prototype.currentBalance = function() {
  return this._balance
};

Account.prototype.deposit = function(amount) {
  this.logTransaction(amount)
  this.updateBalance(amount)
};

Account.prototype.withdraw = function(amount) {
  this.logTransaction(-amount)
  this.updateBalance(-amount)
};

Account.prototype.updateBalance = function (amount) {
  this._balance += amount
};

Account.prototype.logTransaction = function (amount) {
 this.statement.transact(this.currentBalance(), amount)
};
