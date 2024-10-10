   // DECLARATION OF VARIABLES OR OBJECTS 
const product = {
    title: "ball pen",
    rating: 4,
    offer: 5,
    price: 270,
};
console.log(product)
const profile = {
    username:"Aditya.Sirsalkar",
    isfollow : true,
    posts :195,
    follower:569000,
    following:4,
};
console.log(profile)





   // UNDERSTANDING FUNCTIONS 
 function greetUser(name) {
    console.log("Hello, " + name);
  }
  greetUser("Aditya"); 
  function isEven(number) {
    return number % 2 === 0;
  }
  console.log(isEven(4));  // Output: true
  console.log(isEven(5));  // Output: false
      



    // FUNCTION EXERCISE
//       /*1)*/ function welcome(name){
//     console.log("Welcome, "+ name + "!.");
//   }
//   welcome("Aditya");

//   /*2)*/function subtract(num1,num2){
//     console.log(num1-num2);
//   }
//   subtract(8,4);

//   /*3)*/function arrow(num1,num2){
//     console.log(num1/num2);
//   }
//   arrow(6,3);





    //Arrays
  let fruits = ["Apple" , "banana" , "Mango"];
  console.log(fruits[0]);

  let numbers =[1,2,3,4];
  numbers.push(5);
  console.log(numbers.length);

//   Common Array Methods:
// push(): Adds an element to the end.
// pop(): Removes the last element.
// length: Returns the length of the array.
// forEach(): Iterates over each element.
let person = {
    name: "Aditya",
    age: 18,
    isStudent: true
  };
  console.log(person.name); // Output: Aditya
  person.age = 19; // Update age
console.log(person.age); // Output: 19
  // Array exercise 
 /*1*/ let colors = ["red","green","blue"];
  colors.push("black");
  console.log(colors.length);

  /*2*/ let car = {
    make:"no",
    model:24,
    year:2023


  }
  car.year=2024;
  console.log(car);

  let a =3;
  let b = 5;
  console.log(" a+b=", a+b);

  let num = prompt("Enter a number :");
  if(num%5==0){
    console.log("Yes");
  }
  else{
    console.log("No");
  }