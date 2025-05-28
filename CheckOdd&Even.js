//Checking the number is Odd or Even using function
let num;
function checkthenumber(){
    if(num % 2 == 0){
        console.log("This Number is Even :",num);
    }else{
        console.log("This Number is Odd :", num);
    }
}
//calling the function

checkthenumber(num=4);