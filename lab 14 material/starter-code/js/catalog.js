/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  // Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  for (let i = 0; i < Product.allProducts.length; i++) {
    const addOptions = document.createElement('option');
    addOptions.innerText = Product.allProducts[i].name;
    addOptions.value = Product.allProducts[i].name;
    selectElement.appendChild(addOptions);
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // TODO: Prevent the page from reloading
  event.preventDefault();
  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // suss out the item picked from the select list
  let product = document.getElementById('items').value;
  let quantity = document.getElementById('quantity').value;
  cart.addItem(product, quantity);

  // console.log(newCartItem);
  // console.log(cart);

  // get the quantity
  // using those, add one item to the Cart
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {

  for (let index = 0; index < cart.items.length; index++) {
    console.log(`Current cart total is: ${cart.items.length} `);

    let counterAreaBase = document.getElementsByTagName('nav');
    let counterArea = document.getElementsByTagName('ul');
    let counterNumber = document.createElement('li');

    // counterNumber.appendChild(document.createTextNode(`Current cart total is: ${cart.items.length} `));

    counterNumber.innerText = `Current cart total is: ${cart.items.length} `;

    console.log(`${counterNumber.innerText}: should be the inner text in our li !`);

    // counterArea.appendChild(counterNumber);
    // counterAreaBase.appendChild(counterArea);
    


  }
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  let product = document.getElementById('items').value;
  let quantity = document.getElementById('quantity').value;
  // TODO: Add a new element to the cartContents div with that information
  let cartContents = document.querySelector('#cartContents');
  let newContent = document.createElement('p');
  newContent.innerText = `${quantity}: ${product}`;
  cartContents.appendChild(newContent);

}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
