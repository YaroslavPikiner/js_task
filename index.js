function MyArray() {
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] === undefined) {
      console.log("попався");
    }
    this[i] = arguments[i];
  }
  Object.defineProperty(this, "length", {
    get: function getLength() {
      return Object.keys(this).length;
    },
  });
}

MyArray.prototype[Symbol.iterator] = function () {
  let current = 0;
  let last = this.length - 1;
  console.log(this, "this");
  return {
    next() {

      if (current === undefined) {
        current = last;
      }
      if (current <= last) {
        return {
          done: false,
          value: current++,
        };
      } else {
        return {
          done: true,
          value: undefined,
        };
      }
    },
  };
};

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

MyArray.prototype.reduce = function (callback, initVal) {
  let acc = initVal;
  let startAtIndex = 0;

  if (initVal === undefined) {
    acc = this[0];
    startAtIndex = 1;
  }

  for (let index = startAtIndex; index < this.length; index += 1) {
    acc = callback(acc, this[index], index, this);
  }

  return acc;
};

MyArray.prototype.sortedFunc = function (first, second) {
  if (first > second) {
    return 1;
  }
  if (second < first) {
    return -1;
  }
  return 0;
};
// test sort
MyArray.prototype.sort = function (callback = this.sortedFunc) {
  for (let i = 1; i < this.length; i++) {
    for (let j = i; j > 0; j--) {
      if (callback(this[j], this[j - 1])) {
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



MyArray.prototype.toString = function () {
  let result = "";
  for (let i = 0; i < this.length; i++) {
    result += `${this[i]},`;
  }
  return result.substring(0, result.length - 1);
};

let array = new MyArray(1, 2, 3, 4, 5,1,3,123,2,53,65,678,689);

let arr = [...array];
console.log(arr);

// array.map((item,i) => {
//   console.log(item + '-' + i)
// })

// console.log(array.sort((a,b) => a < b ));
// console.log(array.from());

// 3 создать from to
MyArray.prototype.from = function () {};