// CON FROM NON SO COME FARLA......................


// PARAMETRI POSIZIONALI

let rangePos = function(start, stop, step = 1) {
    let result = [];
    for (let i = start; i <= stop; i += step) {
        result = result.concat(i);
    }
    return result;
}



// PARAMETRI NOMINALI

let rangeNom = function({start, stop, step = 1}) {
    let result = [];
    for (let i = start; i <= stop; i += step) {
        result = result.concat(i);
    }
    return result;
}

console.log(rangeNom({stop: 10, start:1, step: 2}));



// SUM OF RANGE

console.log(rangePos(1, 3, 1).reduce((a, b) => a + b));
