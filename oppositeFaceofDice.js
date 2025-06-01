// using if else statement

function oppositeFaceOfDice(){
    let ans;
    if(n===1){
        ans=6;
    }else if(n===2){
        ans=5;
    }else if(n===3){
        ans = 4;
    }else if(n===4){
        ans=3;
    }else if(n===5){
        ans=2;
    }else{
        ans=1
    }
    return ans;
}
let n=3;
console.log(oppositeFaceOfDice(n))