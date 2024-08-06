//  ================================================================================================== //
//  ==================================                            ==================================== //
//  =================================     Javascript Practice-01    ================================== //
//  ==================================     Muhammad Bilal Ashiq   ==================================== //
//  ==================================                            ==================================== //
//  ================================================================================================== //


    //  -------------------------- Topics ----------------------------- //
    //  --------------------------------------------------------------- //
    //                          1.  Basics                              //
    //  --------------------------------------------------------------- //




console.log("Muhammad Bilal Ashiq");


// ---------------------   1. variables ---------------------------


// var ----> global scope
var a=5;    // it can be changed
var a=9;     // noe it changed



// let  --->  block{} scope 
let b=6;
        // let b=6;   // it will show erro, you can change but you can update it 

// const  ---->  block scope {}

const PI = 3.14;    // niether it will change nor update


// ---------------------   1. Data types ---------------------------

let num = 7;
let floatn = 4.5;
let n = null;

let x = BigInt("1234");
let y = Symbol("sybmols")


console.log(num);
console.log(typeof num);

const student = 
    {
        fullName: "Rahul Kumar",
        age: 21,
        cgpa: 3.79,
        isPass: true,
    };

// console.log(student.age);    // ------ it is also correct
console.log(student["age"]);



// student is const but it is object so we can change it
student["age"] = student["age"] +20;
console.log(student["age"]);
