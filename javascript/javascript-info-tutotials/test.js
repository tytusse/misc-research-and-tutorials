describe("getMaxSubSum", function() {
  let variants = [
    { getSut: () => getMaxSubSum, name: "n^2"},
    { getSut: () => getMaxSubSum2, name: "n"},
  ];

  for(let variant of variants) {
    describe(variant.name, function() {
      let getSut = variant.getSut;
      it("maximal subsum of [1, 2, 3] equals 6", function() {
        assert.equal(getSut()([1, 2, 3]), 6);
      });

      it("maximal subsum of [-1, 2, 3, -9] equals 5", function() {
        assert.equal(getSut()([-1, 2, 3, -9]), 5);
      });

      it("maximal subsum of [-1, 2, 3, -9, 11] equals 11", function() {
        assert.equal(getSut()([-1, 2, 3, -9, 11]), 11);
      });

      it("maximal subsum of [-2, -1, 1, 2] equals 3", function() {
        assert.equal(getSut()([-2, -1, 1, 2]), 3);
      });

      it("maximal subsum of [100, -9, 2, -3, 5] equals 100", function() {
        assert.equal(getSut()([100, -9, 2, -3, 5]), 100);
      });

      it("maximal subsum of [] equals 0", function() {
        assert.equal(getSut()([]), 0);
      });

      it("maximal subsum of [-1] equals 0", function() {
        assert.equal(getSut()([-1]), 0);
      });

      it("maximal subsum of [-1, -2] equals 0", function() {
        assert.equal(getSut()([-1, -2]), 0);
      });

      it("maximal subsum of [2, -8, 5, -1, 2, -3, 2] equals 6", function() {
        assert.equal(getSut()([2, -8, 5, -1, 2, -3, 2]), 6);
      });
    });
  }
});
