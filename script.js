//1.Math.sqrt(x)
// This methods returns the square root of the Number.When we give negative number as a input then it gives NaN(not a number)
let num=34;
console.log(Math.sqrt(num));//5.830.....
const num1=-34;
console.log(Math.sqrt(num1));//NaN

//2.Math.pow(x,y)
//x isthe base and y is the power
// This methods returns the value of X to the power y
let x=2;
let y=2;
console.log(Math.pow(x,y));//4

const a=4;
const b=-2;
console.log(Math.pow(a,b));//4

//3.Math.floor(x)
// The Math.floor(x) returns the decimal part of the give Number.
 const n1=2.23;
 console.log(Math.floor(n1));

 const n2=2.67;
 console.log(Math.floor(n2));

 const n3=-8.67;
 console.log(Math.floor(n3));

 const n4=-8.23;
 console.log(Math.floor(n4));

 //4.Math.ceil(x)
//  This methods rounds  a number  rounded up to the nearrest integer
//1st-> cut decimal part then ->next

const num3=2.2;
console.log(Math.ceil(num3));

const num4=3.78;
console.log(Math.ceil(num4));

const num5=-6.89;
console.log(Math.ceil(num5));

const num6=-4.0;
console.log(Math.ceil(num6));

//5.Math.round)(x)
// This methos round up of a number
 let x1=5.2;
 console.log(Math.round(x1));
 let x2=5.5;
 console.log(Math.round(x2));
 let x3=5.78;
 console.log(Math.round(x3));
 let x4=-2.4;
 console.log(Math.round(x4));
 let x5=-2.5;
 console.log(Math.round(x5));
 let x6=-2.89;
 console.log(Math.round(x6));

 //6.Math.random()
//  This methods return values between o(Inclusive) and 1(exclusive)

console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());