function Airport() {
  this.hanger = [];
  this.capacity = 10
}

Airport.prototype.landing = function(plane = new Plane) {
  if (this.hanger.length > this.capacity) {
    throw "Hanger full";
  } else {
    this.hanger.push(plane);
  }
}

Airport.prototype.take_off = function() {
  if (this.hanger.length == 0) {
    throw "No planes in hanger!";
  } else {
    this.hanger.pop();
  }
}

function Plane() {}
