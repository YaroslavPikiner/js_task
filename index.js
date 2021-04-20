function MyArray() {
  for (let i = 0; i < arguments.length; i++) {
    this[i] = arguments[i];
  }
  Object.defineProperty(this, "length", {
    get: function getLength() {
      return Object.keys(this).length;
    },
  });
}

MyArray.prototype.pushsing = function () {
  if (arguments) {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length] = arguments[i];
    }
  }
  return this.length;
};

// MyArray.prototype.pops = function (array) {
//   const value = this.array[this.array.length - 1];
//   this.array.length = this.length - 1;
//   return value;
// };

MyArray.prototype.forEach = function (callback, thisArg) {
  for (i = 0; i < this.length; i++) {
    callback.call(thisArg, this[i], [i], this);
  }
};

MyArray.prototype.map = function (callback, thisArg) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(callback.call(thisArg, this[i], [i], this));
  }
  return res;
};

MyArray.prototype.filter = function (callback, thisArg) {
  let res = [];
  for (i = 0; i < this.length; i++) {
    if (callback.call(thisArg, this[i], [i], this)) {
      res.push(this[i]);
    }
  }
  return res;
};

let array = new MyArray(122, 21, 2, 3, 5);
// array.push(10000);
array.map((item) => {
  return console.log(item);
});

array.filter((item) => {
  return item < 25;
})
