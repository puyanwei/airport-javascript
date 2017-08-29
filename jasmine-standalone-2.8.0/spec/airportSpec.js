beforeEach(function() {
  airport = new Airport();
})

describe('Airport', function() {
  describe("#landing", function() {
    it("hanger has one plane when landing", function() {
      airport.landing();
      expect(airport.hanger.length).toEqual(1);
    })
  })
})
