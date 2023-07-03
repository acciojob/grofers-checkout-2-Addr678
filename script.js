//your code here
// Get the table element
const table = document.querySelector('table');

// Get all the price elements in the table
const priceElements = table.querySelectorAll('[data-ns-test="prices"]');

// Calculate the total price
let totalPrice = 0;
priceElements.forEach((element) => {
  totalPrice += parseFloat(element.textContent);
});

// Create a new row for the total
const newRow = document.createElement('tr');

// Create a cell for the total price
const totalCell = document.createElement('td');
totalCell.textContent = totalPrice.toFixed(2); // Assuming prices are in decimal format

// Add the total cell to the new row
newRow.appendChild(totalCell);

// Add the new row to the table
table.appendChild(newRow);

// Set the data attribute for the total cell
totalCell.setAttribute('data-ns-test', 'grandTotal');

