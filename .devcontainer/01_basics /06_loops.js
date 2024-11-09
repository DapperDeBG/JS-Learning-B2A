//for loop
//my name five times print as op

// for ( let count = 0; count < 100; count++){
//  console.log("DebD");
// }
// console.log("Loop has ended");





/*
//program to add first n natural numbers
// const prompt = require("prompt-sync") ({sigint: true});
let sum = 0;
let n = 10;
// let n = ("Enter the value of n: ");
// let n = prompt("Enter the value of n");
// n = Number.parseInt(n);
for(let i = 0; i <= n; i++){
    sum += i;
}
console.log("sum =", sum);
// console.log("Sum of first " + n + " natural numbers is " + sum); */


//for_in loop

// for in: loops through the properties of an object

let obj = {
    harry: 90,
    nayan: 80,
    neel:  70,
    saheb: 60,
    wrik:  30
}

// for( let a in obj) {
//     console.log(" Marks of " + a + " in maths is " +obj[a]);
// }



// for of loop
// for of:loops through the values of an iterable object

1.// for( let b of "SAHEB") {
//     console.log(b);
// }



2.// let str = "Debanjan";

// for(let i of str){
//     console.log(i);
// }
 

//for loop exmaples for array

// let cars = ["BMW", "Volvo", "Tata", "Mercedez", "Jeep", "Audi"];


// for (let i = 0; i < cars.length; i++) {
//   const text = cars[i] ;
//   console.log(text);
// }




let myArray = ["Apple","Guava","Pomegranate","Banana","Litchi"];

let i = 3;
let len = myArray.length;

/*for (; i <= len; i++){   
equals to - never used in the case of array, result will come undefined as 
array's value starts from zero..    */

for (; i < len; i++){   
 const element = myArray[i];
 console.log (element); 
}


// nested for loop

// for(let i = 1; i <= 10; i++){
//   console.log(`Outer loop value: ${i}`);

//   for(let j = 1; j <= 10; j++){
//   // console.log(`Inner loop value ${j} and inner loop ${i}`);

//   console.log(i + '*' + j + ' = ' + i * j);
//   }
// }




// While loop

// let index = 0;

// while (index <= 10){
//     console.log(`Value of index is ${index}`);
//     index = index + 2;
// }


// applying while loop on array 
// let myArray1 = ["batman", "superman", "spiderman","ironman","hulk"];

// let arr = 0;
// while (arr < myArray1.length) {
//     console.log(`Value is ${myArray1[arr]}`);
//     arr++ ;
// }

//Do while loop

// let score = 1;

// do{
// console.log(`Score is ${score}`);
// score++;
// }

// while(score <= 10);


// what if the value of score is 11 before the execution of the loop above

// let score = 11;

// do{
//     console.log(`Score is ${score}`);
//     score++;
// }

// while(score <= 10);

/* In the case of do-while loop, loop execution gets performed first and then the conditions of the loop
 get checked. So the loop nody is executed at least once.  */ // op: score is 11 



// break statement

loop1: for( let i = 0; i <= 3; i++){

    loop2: for( let j = 0; j < 3;j++){
     if(i === 1 && j === 1){
        break loop1;

     }
     console.log(` i = ${i}, j = ${j}`);
    }
}

// while loop with break statement

const prompt = require("prompt-sync")();


let sum = 0, number;
while(true){
    number = parseInt(prompt("Enter a no:"));

    if(number < 0){
        break;
    }
    else{
    sum += number;
    }
    console.log(`The sum is ${sum}`);
}





