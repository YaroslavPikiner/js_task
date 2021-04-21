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


MyArray.prototype.sortedFunc = function(first, second) {
  if(first > second) {
    return 1
  }

  if(second < first) {
    return -1
  }

  return 0
  
} 
// test sort
MyArray.prototype.sort = function (callback = this.sortedFunc) {

  for (let i = 1; i < this.length; i++) {

    for (let j = i; j > 0; j--) {

      if (callback(this[j] , this[j - 1])) {
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

let array = new MyArray(1,2,23,2,3,34,4576,56,8567,2,43,456,123,41,45,346,435,645,6);

// array.reduce((prev,curr) => {
//   console.log(prev, 'prev')
//   console.log(curr, 'curr')
// })

console.log(array.sort((a,b) => a < b ));
