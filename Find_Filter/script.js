let arr_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr_2 = [
    {name: 'Eric', age: 25},
    {name: 'John', age: 20},
    {name: 'Lyli', age: 17},
    {name: 'Peter', age: 56},
    {name: 'Nike', age: 34}
];

// filter, find
// mutate
let filter_1 = arr_1.find((item, index) => {
    return item && item > 5;
});

// let filter_2 = arr_2.filter((item, index) => {
//     return item && item.age > 18;
// });

console.log(filter_1);
// console.log(filter_2);