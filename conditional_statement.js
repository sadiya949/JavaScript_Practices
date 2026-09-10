//if-else
let mark = 78;
if(mark>= 80){
    console.log("A+")
} else if(mark >= 70){
    console.log("A")
} else if(mark >= 60){
    console.log("A-")
} else{
    console.log("other grade or fail")
}

// ternary operator
let marks = 78;
let grade = marks>=80?"A+":marks >= 70? "A":"other";
console.log(grade);

//switch-break
let month = 2
switch(month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    default:
    console.log("Other Month");

}
