beforeEach(function() {
  airport = new Airport();
})

describe('Airport', function() {
  describe("#landing", function() {
    it('#landing', function() {
      airport.landing
      expect(hanger).toEqual(hanger.length(1));
    })
  })
})
