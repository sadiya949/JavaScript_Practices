//function declaration
function greet(name){
    return "Hello," + name +"!";
}
console.log(greet("JavaScript"));
//function Expression
const add= function(a,b){
    return a+b;
}
console.log(add(10,20));
//Arrow function
const multiply = (a,b) => a*b;
console.log(multiply(4,5));
//avg

const Average = function(x, y) {
    return (x + y) / 2;
}
console.log(Average(10, 20));
//by arrow function
const avg = (x,y) => (x+y)/2;
console.log(avg(3,4)); 