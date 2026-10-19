// print the number from 1 to 10 
let counter = 1;

while(counter <= 10) {
    console.log(counter);
    counter++;
}

console.log('end of the loop');

// ===========================================

//Print the table of 13 using while loop
//13*1 = 13
//13*2 = 26
//13*3 = 39

let i = 1;
let number = 13;

while(i <= 10) {
    console.log(number + ' * ' + i + ' = ' + (number * i));
    i++;
}

// Print all the odd number from 1 to 50 using while loop

let num2 = 1;

while(num2 <= 50) {
    console.log(num2);
    num2 = num2 + 2;
}

// Print all the digits in the given number using while loop

let myNumber = 435176;

while(myNumber>0){

    let rem = myNumber % 10  
    console.log(rem);
    myNumber = parseInt(myNumber/10)  // 43517
    
}
