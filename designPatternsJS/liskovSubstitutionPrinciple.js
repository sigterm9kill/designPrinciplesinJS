/* Liskov Substitution Principle 
If you have a function that will take a base type, then it should 
also be able to take a derived type without breaking functionality whatsoever.
*/

class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width
  }

  get height() {
    return this._height;
  }
  set width(value) {
    this._width = value;
  }
  
  set height(value) {
    this._height = value;
  }

  get area() {
    return this._width * this._height;
  }

  toString() {
    return `${this._width} * ${this._height}`;
  }
}


  class Square extends Rectangle {
    constructor(size) {
      super(size, size); 
    }
    set width(value) {
      this._width = this._height = value; 
    }
    set height(value) {
      this._width = this._height = value; 
    }
  }

/* 
This is a broken example. If this function can take a rectangle, (rc), 
then it should be able to take any inheritor of the rectangle class */
let usIt = (rc) => {
  let width = rc._width;
  rc.height = 10;
  console.log(
    `Expected area of ${10 * width}, ` +
    `got ${rc.area}`
  );
};

// Execution
let rc = new Rectangle(2, 3); 
usIt(rc);

let sq = new Square(5); 
usIt(sq);


