function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString() {
  return '(' + this.x + ', ' + this.y + ')'
}
