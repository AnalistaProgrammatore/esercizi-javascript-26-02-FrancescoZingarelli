let arrayToList = function(arr) {
    let list = null;
    for (let i = arr.length - 1; i >= 0; i--) {
        list = {"value": arr[i], "rest": list}
    }
    return list;
}



let listToArray = function(list) {
    let arr = [];
    let curr = list;
    let count = 0;
    while (curr) {
        arr[count] = curr.value;
        count++;
        curr = curr.rest;
    }
    return arr;
}



let prepend = function(element, list) {
    return {value: element, rest: list}
}



let nth = function(list, pos) {
    let curr = 0;
    while (true) {
        if (!list) return undefined;
        if (curr === pos) return list.value;
        list = list.rest
        curr++
        
    }
}



let nthR = function(list, pos) {
    if (!list) return undefined;
    if (pos === 0) return list.value;
    return nthR(list.rest, pos - 1)
}



console.log(arrayToList([10, 20, 30]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
console.log(nthR(arrayToList([10, 20, 30]), 1));
