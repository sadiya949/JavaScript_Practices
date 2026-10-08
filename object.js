const student = {
name: "Tahsin",
age: 21,
isActive: true,
subjects: ["Math", "Physics"],
greet: function() {
return "Hi, I am " + this.name;
}
};
console.log(student.name); // dot notation
console.log(student["age"]); // bracket notation
student.city = "Chittagong"; // add new property
delete student.isActive; // remove property
console.log(student.greet());

const book = {
    title:"The Alchemist",
    author:"Paulo Coelho",
    price:500,
    year:2008,
    review: function() {
return "Bestseller book " + this.title;
}
};
console.log(book.title);
console.log(book.author);
console.log(book["price"]);
console.log(book.review());