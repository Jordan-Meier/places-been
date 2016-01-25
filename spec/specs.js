describe('Place', function () {
  it("creates a new Place with the given properties", function () {
    var testPlace = new Place("Florence", "Duomo", "Spring", "");
    expect(testPlace.location).to.equal("Florence");
    expect(testPlace.landmark).to.eql("Duomo");
    expect(testPlace.timeYear).to.equal("Spring");
    expect(testPlace.notes).to.equal("");
  });
});
