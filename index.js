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
  return(this.radius * 2);
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

function Polygon(sides) {
  //Shape.call(this); // ??

  this.sides = sides;
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;

Polygon.prototype.perimeter = function() {
  var perimeter = 0;

  for (var i = 0; i < this.sides.length; i++) {
    perimeter += this.sides[i].length;
  }

  return perimeter;
}

Polygon.prototype.numberOfSides = function() {
  return this.sides.length;
}

function Quadrilateral(side1Length, side2Length, side3Length, side4Length) {
  Polygon.call(this, [new Side(side1Length), new Side(side2Length), new Side(side3Length), new Side(side4Length)]); // <-- !!
}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

function Triangle(side1Length, side2Length, side3Length) {
  Polygon.call(this, [new Side(side1Length), new Side(side2Length), new Side(side3Length)]); // <-- !!
}

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Polygon;

function Rectangle(width, height) {
  Quadrilateral.call(this, width, width, height, height); // <-- !!
  this.width = width;
  this.height = height;
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function() {
  return this.width * this.height;
}

function Square(side) {
  Rectangle.call(this, side, side);
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.protoype.listProperties = function() {
  var str = '';
  for (prop in this) {
    if (hasOwnProperty(prop)) {
      str += prop + ' - '
    }
  }

  return str;
}
