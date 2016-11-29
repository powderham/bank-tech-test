function Transaction(balance, amount, date = new Date){
  this.previousBalance = balance
  this._amount = amount
  this.amount = this._amount.toFixed(2)
  this.newBalance = this.calculateBalance()
  this.type = this.calculateType()
  this._date = date
}

Transaction.prototype.calculateType = function () {
  if (this.amount > 0){
    return "credit";
  } else {
    return "debit"
  }
};

Transaction.prototype.calculateBalance = function () {
  return  (this.previousBalance + this._amount)

};

Transaction.prototype.dateString = function () {
  if (typeof this._date === "string"){return this._date}
  else {return this.convertDatetoString()}
};

Transaction.prototype.convertDatetoString = function () {
  return this._date.getFullYear()+"/"+(this._date.getMonth()+1)+"/"+this._date.getDate()

}
