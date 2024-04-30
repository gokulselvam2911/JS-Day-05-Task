// 04. write a class to calculate the Uber price.

class UberPriceCalculator {
    constructor(distance, duration) {
      this.distance = distance;
      this.duration = duration;
    }
  
  }
  UberPriceCalculator.BASE_FARE = 2.0;
  UberPriceCalculator.PER_MILE_RATE = 1.5;
  UberPriceCalculator.PER_MINUTE_RATE = 0.5;
  
  // Method to calculate the total fare
  UberPriceCalculator.prototype.calculateFare = function() {
    const distanceFare = this.distance * UberPriceCalculator.PER_MILE_RATE;
    const timeFare = this.duration * UberPriceCalculator.PER_MINUTE_RATE;
    const totalFare = UberPriceCalculator.BASE_FARE + distanceFare + timeFare;
    return totalFare;
  };
  
  UberPriceCalculator.prototype.getDistance = function() {
    return this.distance;
  };
  
  UberPriceCalculator.prototype.setDistance = function(distance) {
    this.distance = distance;
  };
  
  UberPriceCalculator.prototype.getDuration = function() {
    return this.duration;
  };
  
  UberPriceCalculator.prototype.setDuration = function(duration) {
    this.duration = duration;
  };
  
  UberPriceCalculator.prototype.toString = function() {
    return `UberPriceCalculator[distance=${this.distance.toFixed(2)} miles, duration=${this.duration} minutes]`;
  };
  
  // Create an instance of UberPriceCalculator with distance 5.5 miles and duration 15 minutes
  const calculator = new UberPriceCalculator(5.5, 15);
  
  console.log(calculator.toString());
  const fare = calculator.calculateFare();
  console.log(`Total Fare: ₹${fare.toFixed(2)}`);