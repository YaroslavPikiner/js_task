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

MyArray.prototype.forEach = function (callback, thisArg) {
  for (i = 0; i < this.length; i++) {
    callback.call(thisArg, this[i], [i], this);
  }
};

MyArray.prototype.map = function (callback, thisArg) {
  let res = new MyArray();
  for (let i = 0; i < this.length; i++) {
    res = callback.call(thisArg, this[i], [i], this);
  }
  return res;
};

MyArray.prototype.filter = function (callback, thisArg) {
  let res = new MyArray();
  for (i = 0; i < this.length; i++) {
    if (callback.call(thisArg, this[i], [i], this)) {
      res.add(this[i]);
    }
  }
  return res;
};

MyArray.prototype.pop = function () {
  const val = this[this.length - 1];
  delete this[this.length - 1];
  return val;
};

MyArray.prototype.reduce = function (callback, result) {
  let i = 0;
  if (arguments.length < 2) {
    i = 1;
    result = this[0];
  }
  for (; i < this.length; i++) {
    result = callback(result, this[i], i, this);
  }
  return result;
};


// test sort
MyArray.prototype.sort = function () {

  for (let i = 1; i < this.length; i++) {

    for (let j = i; j > 0; j--) {

      if (this[j] < this[j - 1]) {
        const temp = this[j];
        this[j] = this[j - 1];
        this[j - 1] = temp;
      } else if (this[j] > this[j - 1]) {

        const temp = this[j];

        this[j] = this[j - 1];

        this[j - 1] = temp;

      } else {
        break;
      }
    }
  }
  return this;
};

let array = new MyArray(122, 21, 2, 3, 5);

// array.reduce((prev,curr) => {
//   console.log(prev, 'prev')
//   console.log(curr, 'curr')
// })

console.log(array.sort());
