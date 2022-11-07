let pizzaPlace = "Pizza Paradise";
let numberOfToppings = 8;

//Print Variable and their types

console.log(pizzaPlace);
console.log(typeof pizzaPlace);
console.log(numberOfToppings);
console.log(typeof numberOfToppings);

//Print a template literal that uses both variables
console.log(`The ${pizzaPlace} has only ${numberOfToppings} toppings but the quality is amazing!`);

//if statement
if (numberOfToppings < 10) {
  console.log("Quality, not quantity.")
} else {
  console.log("A whole lot of pizza.")
};

