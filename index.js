"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = require("./products");
let productName = 'fanny pack';
let shipping;
let taxPercent;
let taxTotal;
let total;
let shippingAddress = '575 Broadway, New York City, New York';
let chosenProduct = products_1.default.filter(product => product.name === productName);
if (chosenProduct[0].preOrder === 'true') {
    console.log(`We will notify you when ${chosenProduct[0].name} has shipped!`);
}
if (Number(chosenProduct[0].price) > 25) {
    shipping = 0;
    console.log(`Lucky you! We provide free shipping for ${chosenProduct[0].name}`);
}
else {
    shipping = 5;
}
if (shippingAddress.match("New York")) {
    taxPercent = 0.1;
}
else {
    taxPercent = 0.05;
}
taxTotal = Number(chosenProduct[0].price) * taxPercent;
total = Number(chosenProduct[0].price) + taxTotal + shipping;
console.log(total + " is your total! reciept can be found below!");
console.log(`Product: ${chosenProduct[0].name}\n
  Shipping address: ${shippingAddress}\n
  Price: $${chosenProduct[0].price}.00\n
  Tax: $${taxTotal}.00\n
  Shipping cost: $${shipping}.00\n
  Total amount: $${total}.00`);
