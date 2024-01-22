const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// Expected output: Array [1, 100000, 21, 30, 4]

array1.sort((item1, item2) => item1 - item2);
console.log(array1);
// [1, 4, 21, 30, 100000]

array1.sort((item1, item2) => {
    return item1 - item2
});
console.log(array1);
// [1, 4, 21, 30, 100000]