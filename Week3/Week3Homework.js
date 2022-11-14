let pizzaToppings = ["pepperoni", "mushroom", "ham", "pineapple", "bananapepper", "sausage"];
let greeting =`Welcome to Pizza Paradise, how do you want to customize your pizza? Here are our toppings: `;

//greet customer function
function greetCustomer() {
  for (let pizzaTopping of pizzaToppings) {
  greeting += ` ${pizzaTopping} `;
}
console.log(greeting);
}

console.log(greetCustomer());

let size = ["small", "medium", "large"];
let crust = ["thick", "thin"];

//get pizza order function
function getPizzaOrder(size, crust, ...pizzaToppings) {
console.log(`One ${size} ${crust} crust pizza with ${pizzaToppings} and ${pizzaToppings[4]} , COMING UP!`);
return(["large", "thick", ["pepperoni", "bananapepper"]]);
}

console.log(getPizzaOrder(size[2], crust[0], pizzaToppings[0]));

//prepare pizza function

const obj = {size: "large",
crust: "thick",
pizzaToppings: "pepperoni"};

function preparePizza(size, crust, pizzaToppings) {
  console.log("....Making masterpiece...");
  return obj;
}
console.log(preparePizza(obj));

//serve pizza function
function servePizza(obj) {
  console.log(`ORDER UP! Here's your ${size} ${crust} crust pizza with ${pizzaToppings} and ${pizzaToppings[4]}.`);
  return obj;
}

console.log(servePizza());
