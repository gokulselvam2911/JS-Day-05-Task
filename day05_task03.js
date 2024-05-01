// https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md 
// Convert the UML diagram
class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    getRadius() {
      return this.radius;
    }
  
    setRadius(radius) {
      this.radius = radius;
    }
  
    area() {
      return (Math.PI * this.radius * this.radius).toFixed(2);
    }
  
    circumference() {
      return (2 * Math.PI * this.radius).toFixed(2);
    }
  }
  
  // Testing the Circle class
  const circle = new Circle(5);
  console.log("Radius:", circle.getRadius());
  console.log("Area:", circle.area());
  console.log("Circumference:", circle.circumference());
  
  circle.setRadius(10);
  console.log("New Radius:", circle.getRadius());
  console.log("New Area:", circle.area());
  console.log("New Circumference:", circle.circumference());
//Output:
//Radius: 5
//Area: 78.54
//Circumference: 31.42
//New Radius: 10
//New Area: 314.16
//New Circumference: 62.83  