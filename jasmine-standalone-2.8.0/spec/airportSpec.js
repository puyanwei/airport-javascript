describe('Airport', function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  })

  describe("#initialize", function() {
    it("hanger is empty at the start", function() {
      expect(airport.hanger.length).toEqual(0);
    })
  })

  describe("#landing", function() {
    it("hanger has one plane when landing", function() {
      airport.landing(plane);
      expect(airport.hanger.length).toEqual(1);
    })
  })

  describe("#landing", function() {
    it("plane cannot land if hanger is full", function() {
      airport.capacity = 2;
      for (var i = 0; i < 3; i++) {
        airport.landing();
      }
      expect(function() {
        airport.landing()
      }).toThrow("Hanger full");
    })
  })

  describe("#take_off", function() {
    it("hanger has one less plane when taking off", function() {
      airport.landing(plane);
      airport.take_off();
      expect(airport.hanger.length).toEqual(0);
    })
  })

  describe("#take_off", function() {
    it("plane cannot take off if hanger is empty", function() {
      expect(function() {
        airport.take_off()
      }).toThrow("No planes in hanger!");
    })
  })
})

it('when stormy should raise error when trying to take off', function() {
  weather = {
    isStormy: function() {
      return true;
    }
  };
})
