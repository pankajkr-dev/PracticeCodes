function reverseString(s){
    return s.split('').reverse().join('');
}
let s="Pankaj";
console.log(reverseString(s));

//using loop

let actualString="Pankaj kumar";
let revString = " ";

for(let i=actualString.length-1;i>=0;i--){
    revString+=actualString[i];
}
console.log(revString);

