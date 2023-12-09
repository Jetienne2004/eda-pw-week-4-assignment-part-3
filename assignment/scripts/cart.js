console.log("***** Cart Functions *****");
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem(item) {
  basket.push(item);
  console.log(`item added,: ${item}`);
  return true;
}
addItem("tomatoes");
addItem("lettuce");

function listItems() {
  for (let i = 0; i < basket.length; i++) {
    console.log(basket[i]);
  }
}
listItems(basket);
function empty(array) {
  array.length = 0;
  console.log(`your basket has been emptied.`);
}
empty(basket);
// DO NOT MODIFY
// Used for automated testing
// try {
//   module.exports = {
//     basket: typeof basket !== "undefined" ? basket : undefined,
//     addItem: typeof addItem !== "undefined" ? addItem : undefined,
//     listItems: typeof listItems !== "undefined" ? listItems : undefined,
//     maxItems: typeof maxItems !== "undefined" ? maxItems : undefined,
//     empty: typeof empty !== "undefined" ? empty : undefined,
//     isFull: typeof isFull !== "undefined" ? isFull : undefined,
//     removeItem: typeof removeItem !== "undefined" ? removeItem : undefined,
//   };
// } catch (e) {
//   // Do nothing
// }
