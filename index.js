function MyArray() {
  this.myPush = function(value) {
    return (this[this.length++] = value);
  };

}

MyArray.prototype = Array.prototype;
const collection = new MyArray();

collection.myPush(56); // this is not working.
collection.myPush(2);
console.log(collection); // Array { '0': 56, '1': 2, myPush: [Function (anonymous)], length: 2 }
