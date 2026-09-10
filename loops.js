//for loop
for(let i = 0; i<=10;i++){
 console.log("count:", i);
}
//while
let i = 1;
while(i<=10){
    console.log(i);
    i++;
}

//do-while
let j = 1;
do{
    console.log(j);
    j++;
} while(j<=5);

//for-of
const numbers = ["1","2","3","4","5"];
for(const number of numbers){
    console.log(number);
}

//for-in
 const person = {
    name: "sadiya",
    age: 22,
    city: "Dhaka"
};

for (const key in person) {
    console.log(key + ":", person[key]);
} 