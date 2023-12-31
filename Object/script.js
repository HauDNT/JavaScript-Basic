let myObj = {
    name: "Thomas",
    address: "Vietnam",
    email: "thomas@gmail.com",
    gender: "male",
    a: function() {
        console.log('Hello world');
        return 'function returned';
    }
};

console.log('Your name: ', myObj.name)
console.log('Address: ', myObj.address)
console.log('Call function: ', myObj.a())