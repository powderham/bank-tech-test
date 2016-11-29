function Account(balance = 0) {
  this._balance = balance
}

Account.prototype.currentBalance = function() {
  return this._balance
};

Account.prototype.deposit = function(amount) {
  this._balance += amount
};
