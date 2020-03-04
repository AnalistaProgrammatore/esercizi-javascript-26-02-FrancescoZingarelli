let everyBase = function(array, callback) {
    for (let element of array) {
        if (!callback(element)) return false;
    }
    return true;
};

let everyReduce = (array, callback) => array.reduce((a, b) => !a ? false : callback(b), true);

console.log(everyBase([2, 4, 6], x => x % 2 === 0), everyBase([1, 2, 3], x => x % 2 === 0));
console.log(everyReduce([2, 4, 6], x => x % 2 === 0), everyReduce([1, 2, 3], x => x % 2 === 0));
