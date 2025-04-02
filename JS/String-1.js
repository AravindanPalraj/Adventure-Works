console.log("aravindan")

var mysting="hello";
var myobj ={};
console.log(myobj);

// substring
let text ="01234567890";
c=text.substring(0,4);
console.log("substring: " +c);
c=text.substring(4);
console.log("substring: " +c);
c=text.substring(25,30);
console.log("substring: " +c);

// slice

c=text.slice(0,4);
console.log("slice: " +c);
c=text.slice(4,2);
console.log("slice: " +c);
c=text.slice(25,30);
console.log("slice: " +c);
c=text.slice(-4);
console.log("slice: " +c);

// Split in JS

let a="Java Script Split"
c=a.split(" ");
console.log("split : " + c);
console.table(c);

// Replace in JS

a="Java Script";
console.log("Before Replace :" + a)
c=a.replace('Script','S');
console.log('After Replace:' + c);

// incluedes in JS

const pets=['cat','dog', 'bat'];
console.log(pets.includes('cat'));
console.log(pets.includes('rat'));

// Trim in JS(unwanted white space)

a=" Java ";
console.log("Before Trim:" +a.length);
a=a.trim();
console.log("After Trim:" +a.length);

//pad start(adding symboles before) & PadEnd (adding symboles after)

a="5";

a=a.padStart(4,0);
console.log(a);
a="5"
a=a.padEnd(4,0);
console.log(a);
a="5"
a=a.padEnd(4,'$');
console.log(a);
var number =[1,2,3,4,5,6,7,8,9,10];
// value,index, array
number.forEach((value)=>{
console.log(value)
});

number.forEach((value,index)=>{
    console.log("index:" + index + " " + "value:" + value)
    });

    // Map

const numbers =[1,2,3,4,5,6,7,8,9,10];

// pop
const users=['sam','arun','ram'];
console.log(users.pop());
console.log(users);

//shift
const user=['sam','arun','ram'];
console.log(user.shift());
console.log(user);

//unshift(add one element)
let len=user.unshift('santhose');
console.log(len);
console.log(user);
// push
let len_1=user.push('abc');
console.log(len_1);
console.log(user);






