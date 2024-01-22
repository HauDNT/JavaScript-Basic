let arrTop4 = ['Liver', 'MU', 'Man City'];
let i = 0;

while (i < arrTop4.length) {
    i++;
    if(arrTop4[i] === 'MU') {
        console.log('Found it: ', arrTop4[i], ' at index = ', i);
        continue;
    }
    console.log('Check i =', i);
}