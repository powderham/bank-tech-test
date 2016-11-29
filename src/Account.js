function Account(balance = 0) {
  this._balance = balance
}

Account.prototype.currentBalance = function() {
  return this._balance
};
