const user3 = {
    firstName: "Debanjan",
    lastName: "Ghosh",
    age: 33,
    education: "B-tech",
    address: {
        city:"Kolkata",
        pinCode: 711101,
        state: "West Bengal",
        moreDetails: {
            population: "1cr",
            area: "7000 sq km"
        }
    }
}

//removing keys

// console.log(delete user3.firstName); //true

// console.log(delete user3.address); //true

// console.log(delete user3.address.moreDetails); //true

console.log(user3);


//object sealing

//no new propety can be added or removed from here // completely seals the object 
//but we can change the existing properties even if the object is sealed.. 
// Object.seal(user3);

console.log(delete user3.address.moreDetails);  


//freeze is stricter than seal.. 
//no new propety can be added or removed or modified from here.
//if we freeze any object, we can't even change the existing properties..

Object.freeze(user3);


//in 
//whether any key exists or not in any object // only key finder not value

// console.log("firstName" in user3); //true
// console.log("firstname" in user3); //false // not camel case

console.log("mobileNumber" in user3); //false



