
// Find out whether a number is prime or not
let num = 11;

let isPrime = 0;

for(let i = 2; i < num; i++){
    if(num % i == 0){
        isPrime = 1;
        break;
    }
}

if(isPrime == 0){
    console.log(num + ' is a prime number');
}else {
    console.log(num + ' is not a prime number');
}