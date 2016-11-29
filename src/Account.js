function Account(balance = 0) {
  this._balance = balance
}

Account.prototype.currentBalance = function() {
  return this._balance
};

Account.prototype.deposit = function(amount) {
  this.updateBalance(amount)
};

Account.prototype.withdraw = function(amount) {
  this.updateBalance(-amount)
};

Account.prototype.updateBalance = function (amount) {
  this._balance += amount
};

Account.prototype.recordTransaction = function () {

};
