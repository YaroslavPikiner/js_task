function MyArray(...args) {
	if (args.length === 1 && typeof args[0] === 'number') {
		this.length = args[0];
	} else {
		this.length = args.length;
		for (let i = 0; i < args.length; i++) {
			this[i] = args[i];
		}
	}
}

MyArray.prototype[Symbol.iterator] = function () {
	let current = 0;
	let last = this.length - 1;

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

MyArray.prototype.push = function () {
	if (arguments) {
		for (let i = 0; i < arguments.length; i++) {
			this[this.length] = arguments[i];
			this.length += 1;
		}
	}
	return this.length;
};

MyArray.prototype.pop = function () {
	if (this.length === 0) {
		return;
	}

	const val = this[this.length - 1];
	delete this[this.length - 1];
	this.length -= 1;
	return val;
};

MyArray.prototype.forEach = function (callback, thisArg) {
	if (typeof callback !== 'function') {
		console.error(`${callback} is not a function`);
	}

	for (i = 0; i < this.length; i++) {
		callback.call(thisArg, this[i], i, this);
	}
};

MyArray.prototype.map = function (callback, thisArg) {
	if (typeof callback !== 'function') {
		console.error(`${callback} is not a function`);
	}

	const resultArray = new MyArray();

	for (let i = 0; i < this.length; i++) {
		resultArray[i] = callback.call(thisArg, this[i], i, this);
		resultArray.length += 1;
	}

	return resultArray;
};

MyArray.prototype.filter = function (callback, thisArg) {
	const res = new MyArray();

	if (typeof callback !== 'function') {
		console.error(`${callback} is not a function`);
	}

	for (i = 0; i < this.length; i++) {
		if (callback.call(thisArg, this[i], i, this)) {
			res.push(this[i]);
		}
	}
	return res;
};

MyArray.prototype.reduce = function (callback, initValue) {
	if (this.length === 0 && !initVal) {
		console.error('No init value or empty array');
	}

	let acc = initValue;

	if (initValue === undefined) {
		acc = this[0];
	}

	for (let i = 1; i < this.length; i++) {
		acc = callback(acc, this[i], i, this);
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
	let result = this.length === 0 ? '' : this[0];
	for (let i = 1; i < this.length; i++) {
		result += `,${this[i]}`;
	}
	return result;
};

MyArray.from = function (arrayLike, mapFn, thisArg) {
	const resultArray = new MyArray();
	let callback = null;
	let i = 0;
	for (let value of arrayLike) {
		if (mapFn) {
			callback = mapFn;
			resultArray.push(callback.call(thisArg, value, i, arrayLike));
		} else {
			resultArray.push(value);
		}
		i++;
	}

	return resultArray;
};
