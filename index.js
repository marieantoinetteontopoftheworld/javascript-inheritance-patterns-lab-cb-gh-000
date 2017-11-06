function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return '(' + this.x + ', ' + this.y + ')'
}

function Shape() {
  //this.position = '';
}

Shape.prototype.addToPlane = function(x, y) {
  this.position = new Point(x, y);
}

Shape.prototype.move = function(x, y) {
  this.position.x = x;
  this.position.y = y;
}

function Circle(r) {

  this.radius = r;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.diameter = function() {
  return(this.radius *2 );
}

Circle.prototype.area = function() {
  return this.radius * this.radius * Math.PI;
}

Circle.prototype.circumference = function() {
  return 2 * this.radius * Math.PI;
}
