// factorial of 5

//using for loop
// let factorial = 1; //default value baire. looper vitore dile bar bar i er value 1dhorbe factorial hbe nh
// for(let i = 1; i<=5; i++) {
//     factorial = factorial * i;
// } 
// console.log(factorial);

//using function
function getFactorial(number){
       let factorial = 1;
       for (let i=1; i<= number; i++){
           factorial = factorial * i;
       }
       return factorial;
}

var firstFactorial = getFactorial(7);
console.log('facorial of 7 is', firstFactorial);

var SecondFactorial = getFactorial(9);
console.log('facorial of 7 is', secondFactorial);

