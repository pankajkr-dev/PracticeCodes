function sumOfDigits(n){
    let sum = 0;
    while (n !==0){

        let last  = n % 10;

        sum = sum + last;

        n = Math.floor(n/10);
    }
    return sum;
}

let n = 12345;

console.log(sumOfDigits(n));
