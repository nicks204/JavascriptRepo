

// Reverse the given string using for loop

let str1 = 'Let us learn JavaScript';
let reversedString = '';

for(let i = str1.length - 1; i >= 0; i--){
    reversedString += str1[i];
}

console.log('Reversed String: ' + reversedString);