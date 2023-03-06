let userInput = prompt("select your commodity"); //sefaresh ra az user daryaft mikonim
let isInShop = null; //baraye check kardan e vojode mahsol dar shop #

let userRequest = null; //sefaresh ra dar in varible sabt mikonim #
//push basket #

let createOrder = null; //ye object hast ke push mishe toye user basket #

let sumTotal = null; //majmoe gheymat e basket

let products = [
  //mahsolate shop
  { id: 1, name: "laptop", price: 1300.0 },
  { id: 2, name: "mobile", price: 500.0 },
  { id: 3, name: "tablet", price: 700.0 },
  { id: 4, name: "airpod", price: 150.0 },
  { id: 5, name: "jacket", price: 50.0 },
  { id: 6, name: "scarf", price: 15.0 },
  { id: 7, name: "heat", price: 35.0 },
  { id: 8, name: "milk", price: 5.0 },
  { id: 9, name: "honey", price: 40.5 },
  { id: 10, name: "slat", price: 3.7 },
  { id: 11, name: "suger", price: 4.5 },
];
userBasket = [
  //sabade kharid e user
  { id: 1, name: "airpod", price: 150.0 },
  { id: 2, name: "honey", price: 40.5 },
  { id: 3, name: "suger", price: 4.5 },
];
isInShop = products.some((product) => {
  return userInput === product.name;
});

// console.log(isInShop)

products.forEach((product) => {
  if (userInput === product.name) {
    userRequest = product;
  }
});
createOrder = {
  id: 4,
  name: userRequest.name,
  price: userRequest.price,
};
userBasket.push(createOrder);
// console.log(userBasket);
userBasket.forEach((orders) => {
  sumTotal += orders.price;
});
if (isInShop) {
  console.log("Your order has been registered\n Total Amount= " + sumTotal);
  userBasket.forEach((result) => {
    console.log(result);
  });
}
// console.log(sumTotal)
