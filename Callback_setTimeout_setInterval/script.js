let sum = (a, b, callback) => {

    let sum = a + b;
    callback(sum);
}

let printSum = (msg) => {
    console.log('Check sum 1 + 2 =', msg);
}

sum(1, 2, printSum);