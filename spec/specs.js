describe('Place', function () {
  it("creates a new Place with the given properties", function () {
    var testPlace = new Place("Florence", ["Duomo","David","Ponte Vecchio"], "Spring", "");
    expect(testPlace.location).to.equal("Florence");
    expect(testPlace.landmarks).to.eql(["Duomo","David","Ponte Vecchio"]);
    expect(testPlace.timeYear).to.equal("Spring");
    expect(testPlace.notes).to.equal("");
  });
});
