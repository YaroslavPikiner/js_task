function MyArray() {
  for (let i = 0; i < arguments.length; i++) {
    this[i] = arguments[i];
  }
  Object.defineProperty(this, 'length', {
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
  console.log(val);
  this.length = this.length - 1;
  remove;
  return val;
};

MyArray.prototype.reduce = function (callback, thisArg, initVal) {
  let acc = initVal;
  let startIndex = 0;

  if (initVal === undefined) {
    acc = thisArg[0];
    startIndex = 1;
  }

  for (let index = startIndex; index < this.length; index++) {
    const val = this[index];
    acc = callback(acc, val, [index], thisArg);
  }

  return acc;
};

let array = new MyArray(122, 21, 2, 3, 5);
// array.pop();
// console.log(array);
// array.map((item) => {
//   return console.log(item);
// });

// array.filter((item) => {
//   return item < 25 ? console.log(item) : console.log('false')
// })

array.reduce(function (sum, current) {
  console.log(sum, 'sum');
  console.log(current, 'curr');
  return sum + current;
}, 1);
