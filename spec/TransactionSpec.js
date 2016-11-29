describe("Transaction", function() {
  var transaction

  describe("On instantiation", function(){
    transaction = new Transaction(10, 5)
    it("should contain the new balance", function(){
      expect(transaction.newBalance).toEqual(15)
    });
    it("should have a record of the change to the balance", function(){
      expect(transaction.amount).toEqual("5.00")
    });
    it("should record whether it was a deposit or withdrawal", function(){
      expect(transaction.type).toEqual("credit")
    });
    it("should allow a user added date", function(){
      transaction = new Transaction(10, 5, "2016/25/12")
      expect(transaction.dateString()).toEqual("2016/25/12")
    })
    it("should default to a new date object", function(){
      transaction = new Transaction(10, 5)
      expect(transaction.dateString()).toEqual("2016/11/29")
    })
  });
});
