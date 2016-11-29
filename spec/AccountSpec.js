describe("Account", function() {
  var account;

  beforeEach(function() {
    account = new Account();
  });

  describe("When an account is instantiated", function() {
    it(" normally has a balance of 0", function(){
      expect(account.currentBalance()).toEqual(0);
    })
    it("can be instantiated with a positive balance", function(){
      account = new Account(10);
      expect(account.currentBalance()).toEqual(10)
    })
  });

  describe("When depositing", function(){
    it("the balance is updated", function(){
      account.deposit(10);
      expect(account.currentBalance()).toEqual(10)
    })
  });

  // demonstrates use of spies to intercept and test method calls
  // it("tells the current song if the user has made it a favorite", function() {
  //   spyOn(song, 'persistFavoriteStatus');
  //
  //   player.play(song);
  //   player.makeFavorite();
  //
  //   expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  // });
  //
  // //demonstrates use of expected exceptions
  // describe("#resume", function() {
  //   it("should throw an exception if song is already playing", function() {
  //     player.play(song);
  //
  //     expect(function() {
  //       player.resume();
  //     }).toThrowError("song is already playing");
  //   });
  // });
});
