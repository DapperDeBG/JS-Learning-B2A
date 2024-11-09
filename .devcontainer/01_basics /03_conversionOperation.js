/*

let score = 33;


console.log(typeof score);
//console.log(typeof(score));

let score1 = "33";
console.log(typeof score1);
//console.log(typeof(score1));


let valueInNumber = Number(score);
console.log(typeof valueInNumber);



let score2 = "33abc";

let valueInNumber1 = Number(score2);
console.log(typeof valueInNumber1);

console.log(valueInNumber1); 
// NaN //also a type of data // conversion done but
// it's not a pure number (33abc here) 


let score3 = null;

let valueInNumber2 = Number(score3);
console.log(typeof(valueInNumber2));
console.log(valueInNumber2); //0 or (NaN in some cases)


let score4 = undefined;

let valueInNumber3 = Number(score4);  
console.log(typeof(valueInNumber3)); 
console.log(valueInNumber3); //NaN

let score5 = "DebD";

let valueInNumber4 = Number(score5);  
// console.log(typeof(valueInNumber4)); 
console.log(valueInNumber4);  // string to number conversion //NaN



// "33" => 33
//"33abc"=> NaN
//true => 1; false =>0

let isloggedIn = 1;

let booleanIsLoggedIn = Boolean(isloggedIn);
console.log(booleanIsLoggedIn); //true

let isloggedIn1 = "DebD";

let booleanIsLoggedIn1 = Boolean(isloggedIn1);
console.log(booleanIsLoggedIn1);  //true

let isloggedIn2 = "";

let booleanIsLoggedIn2 = Boolean(isloggedIn2);
console.log(booleanIsLoggedIn2);  //false

//1 => True;  0 => False
// "" => false
// "DebD" => true




let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber); //33
console.log( typeof stringNumber); //string               */


//************* Operations **************

let value = 3;
let negValue = -value;
console.log(negValue);  //-3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); //power
// console.log(2/3);  //0.6666666
// console.log(2%3); //remainder/modulus  //2



let str1 = "Hello";
let str2 = "DebD";

let str3 = str1 + str2;
console.log(str3); // Hello DebD

console.log("1" + 2);      //12
console.log("1" + "2");    //12
console.log(1 + "2");      //12
console.log("1" + (2 + 2));//14
console.log(1 + 2 + "2");  //32
console.log("1" + 2 + 2);  //122
console.log((1 + 2) + "2" ); // always use parenthesis for better result. 

console.log((3 + 4) * 5 % 3); //2



let gameCounter = 100;
gameCounter++; //++gameCounter   //prefix or postfix operators
console.log(gameCounter); //101














