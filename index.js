function MyArray() {
  this.myPush = function (value) {
    return (this[this.length++] = value);
  };
  this.myPop = function (value) {
    return this.splice(this.length - 1, 1);
  };
}

MyArray.prototype = Array.prototype;
const collection = new MyArray();

collection.myPush(56); // this is not working.
collection.myPush("2");
collection.myPush(true);
collection.myPush(NaN);
collection.myPop();
collection.myPop();
collection.myPop();

console.log(collection); // Array { '0': 56, '1': 2, myPush: [Function (anonymous)], length: 2 }
