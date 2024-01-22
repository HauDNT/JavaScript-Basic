// console.log('Connected')

// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// // For loop
// for(let i = 0; i< arr.length; i++)
//     arr[i] = arr[i] * arr[i];

// console.log("Check value arr: ", arr);

// let mapArr = arr.map((item, index) => {
//     item = item * item;
//     return item;
// })

// console.log("Check value arr: ", mapArr);

let usersID = [1, 2, 3, 4, 5];
// for (let i = 0; i < usersID.length; i++)
//     usersID[i] = '<td>' + usersID[i] + '</td>' ;

let mapUsersName = usersID.map((id, index) => {
    return `<td>${id}</td>`
})

console.log(mapUsersName);
console.log(usersID);