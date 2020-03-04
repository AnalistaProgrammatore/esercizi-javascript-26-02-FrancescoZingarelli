let someBase = function(array, callback) {
    for (let element of array) {
        if (callback(element)) return true;
    }
    return false;
};

let someReduce = (array, callback) => array.reduce((a, b) => a ? true : callback(b), false);

console.log(someBase([1, 2, 3], x => x > 2));
console.log(someBase([1, 2, 3], x => x > 4));
console.log(someReduce([1, 2, 3], x => x > 2));
console.log(someReduce([1, 2, 3], x => x > 4));
