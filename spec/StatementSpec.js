describe("Statement", function(){
  var statement;

  beforeEach(function() {
    statement = new Statement();
  });

  it("Should instantiate with 0 transactions", function(){
    expect(statement.transactions()).toEqual(0)
  })

  it("Should add transactions when passed data", function(){
    statement.transact(10, 10)
    expect(statement.transactions()).toEqual(1)
  })
})
