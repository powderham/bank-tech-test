function Statement(){
  this._transactions = []
}

Statement.prototype.transact = function (balance, amount) {
  this._transactions.push(new Transaction(balance, amount))
};

Statement.prototype.transactions = function () {
  return this._transactions.length
};

Statement.prototype.print = function () {
  console.log("|   Date   || Credit || Debit  || Balance |")
  for(i = 0; i < this._transactions.length; i++){
    console.log(this.lineConstructor(this._transactions[i]))
  }
};

Statement.prototype.lineConstructor = function (transaction) {
  var date = this.dateConstructor(transaction)
  var balance = this.balanceConstructor(transaction)
  var transactionInfo = this.transactionInfoConstructor(transaction)
  return "|"+date+"||"+transactionInfo+"||"+balance+"|"
}

Statement.prototype.dateConstructor = function (transaction) {
  return transaction.dateString()
};

Statement.prototype.balanceConstructor = function (transaction) {
  var balance = transaction.newBalance.toFixed(2)
  balance += " ".repeat(9-balance.length)
  return balance
};
Statement.prototype.transactionInfoConstructor = function (transaction) {
  var transactionInfo = ""
  if (transaction.type === "credit") {
    transactionInfo += (transaction.amount + " ".repeat(8-transaction.amount.length)+"||        ")
  }
  else {
    transactionInfo += "        ||"+transaction.amount + " ".repeat(8-transaction.amount.length)
  }
  return transactionInfo
};
