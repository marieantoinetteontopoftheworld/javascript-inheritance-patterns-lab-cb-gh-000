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
  //Shape.call(this); // ?

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

function Side(length) {
  this.length = length;
}

function Polygon(Sides) {
  //Shape.call(this); // ??

  this.sides = Sides;
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;

Polygon.prototype.perimeter = function() {
  var perimeter = 0;

  for (var i = 0; i < this.sides; i++) {
    perimeter += this.sides[i];
  }

  return perimeter;
}

Polygon.prototype.numberOfSides = function() {
  return this.sides.length;
}

function Quadrilateral([side1, side2, side3, side4]) {
  Polygon.call(this, [side1, side2, side3, side4]); // <-- !!
}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Polygon;
