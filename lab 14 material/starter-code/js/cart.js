/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
  console.log(cart);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  const tableBody = document.querySelector('#cart tbody');
  let chartRow = document.querySelectorAll('#cart tbody tr'); // ****** THIS IS THE LINE WE NEEDED CHANGED from get elements by id to query selector all

  for (let index = 0; index <= chartRow.length; index++) {


    if (chartRow[index]) {
      chartRow[index].remove();
      console.log('clearing children');
    }

  }


};

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  // console.log(' Show cart sanity')
  // TODO: Find the table body
  const tableBody = document.querySelector('#cart tbody');
  // TODO: Iterate over the items in the cart
  for (let i = 0; i < cart.items.length; i++) {
    // console.log(cart.items);
    let newRow = document.createElement('tr');
    newRow.classList.add('chartRow');
    let buttonCell = document.createElement('td');
    let deleteButton = document.createElement('button');
    deleteButton.id = i;
    deleteButton.classList.add('delete');
    deleteButton.innerText = 'X';
    buttonCell.appendChild(deleteButton);
    let quantityCell = document.createElement('td');
    quantityCell.innerText = cart.items[i].quantity;
    let productNameCell = document.createElement('td');
    productNameCell.innerText = cart.items[i].product;
    newRow.appendChild(buttonCell);
    newRow.appendChild(quantityCell);
    newRow.appendChild(productNameCell);

    tableBody.appendChild(newRow);

  }
  // tableBody.appendChild(newRow);
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {
  // event.preventDefault();
  // console.log(cart);
  if (event.target.classList.contains('delete')) {
    cart.removeItem(event.target.id);
    // console.log(cart);
    // Cart.saveToLocalStorage();
    cart.saveToLocalStorage();
    
    renderCart();
    }
    // console.log(event.target);
    // console.log(event.target.id);
  }


  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table



// This will initialize the page and draw the cart on screen
renderCart();
