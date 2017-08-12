var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({[item]: Math.floor(Math.random()*100)})
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  const length = cart.length
  if (length === 0) {
    return console.log("Your shopping cart is empty.")
  }
  else {
  let shoppingList = []

  for (let i = 0; i < length; i++) {
    let itemInfo = cart[i]
    let item = Object.keys(itemInfo)[0]
    let price = itemInfo[item]
    shoppingList.push(`${item} at \$${price}`)
    }

    switch(shoppingList.length) {
      case 1:
        break;
      case 2:
        shoppingList = shoppingList.join(" and ");
        break;
      default:
        shoppingList[shoppingList.length - 1] = `and ${shoppingList[shoppingList.length -1]}`
        shoppingList = shoppingList.join(", ")
        break;
    }
    return console.log(`In your cart, you have ${shoppingList}.`)
  }
}
addToCart('banana')
addToCart('apple')
let item = cart[0]
/*
The total() function accepts no arguments, iterates through the cart array,
and returns the current total value of the items in the cart.*/
function total() {
  let itemPrices = []
  let totalPrice = 0
  let itemInfo = Object.keys(cart)
  for (let i = 0; i < itemPrices.length; i++) {
    totalPrice += parseInt(itemPrices[i])
  }
  return totalPrice
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
