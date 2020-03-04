let filterBase = function(array, callback) {
    let result = []
    for (let element of array) {
    if (callback(element)) result = result.concat(element);
    }
    return result
};

let filterReduce = (array, callback) => array.reduce((a, b) => callback(b) ? a.concat(b) : a, [])


console.log(filterBase([1, 2, 3, 4, 5, 6], x => x % 2 === 0));
console.log(filterReduce([1, 2, 3, 4, 5, 6], x => x % 2 === 0));
