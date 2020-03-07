let reduceBase = function(array, callback, start) {  
    let acc;
    if (!start) {
        acc = array[0];
        for (let i = 1; i < array.length; i++) {
            acc = callback(acc, array[i]);
        }
    } else {
        acc = start;
        for (let i = 0; i < array.length; i++) {
            acc = callback(acc, array[i]);
        }
    }
    return acc;
}



console.log(reduceBase([1, 2, 3, 4], (acc, curr) => acc + curr));
console.log(reduceBase([1, 2, 3, 4], (acc, curr) => acc + curr, 100));
