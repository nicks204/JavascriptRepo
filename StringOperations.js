let fName = 'Kate'
let lName = 'Wilson'

//using concatenation operator +
let fullName = fName + ' ' + lName;

//using concatenation method .concat()
let fullName2 = fName.concat(' ', lName);

console.log('Full Name: ' + fullName);
console.log('Full Name: ' + fullName2);

//Length of a string
let strLength = fullName.length;
console.log('Length of Full Name: ' + strLength);

//Uppercase and Lowercase
let upperCase = fullName.toUpperCase();
let lowerCase = fullName.toLowerCase();

console.log('Uppercase: ' + upperCase);
console.log('Lowercase: ' + lowerCase);

//replace method
let replacedStr = fullName.replace('Kate', 'Katherine');
console.log('Replaced String: ' + replacedStr);