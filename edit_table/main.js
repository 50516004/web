// Get table and button elements
const table = document.getElementById("myTable");
const addButton = document.getElementById("add-row-button");

// Add event listener for add row button
addButton.addEventListener("click", addRow);

// Add event listener for edit and delete buttons in the table
table.addEventListener("click", function(event) {
  if (event.target.classList.contains("edit-button")) {
    editRow(event.target.parentNode.parentNode);
  }
  if (event.target.classList.contains("delete-button")) {
    deleteRow(event.target.parentNode.parentNode);
  }
});

// Function to add a new row to the table
function addRow() {
  // Create new row and cells
  const newRow = table.insertRow();
  const nameCell = newRow.insertCell();
  const actionCell = newRow.insertCell();

  // Add input and buttons to the new row
  nameCell.innerHTML = '<input type="text" name="name">';
  actionCell.innerHTML = '<button class="save-button">Save</button>';

  // Disable add row button
  addButton.disabled = true;
}

// Function to edit an existing row
function editRow(row) {
  // Get cell and value of the selected row
  const nameCell = row.cells[0];
  const nameValue = nameCell.innerHTML;

  // Replace cell content with input
  nameCell.innerHTML = '<input type="text" name="name" value="' + nameValue + '">';

  // Disable add row button
  addButton.disabled = true;
}

// Function to delete an existing row
function deleteRow(row) {
  row.parentNode.removeChild(row);
}

// Add event listener for save buttons in the table
table.addEventListener("click", function(event) {
  if (event.target.classList.contains("save-button")) {
    saveRow(event.target.parentNode.parentNode);
  }
});

// Function to save an edited or newly added row
function saveRow(row) {
  // Get input and update cell content
  const nameValue = row.cells[0].querySelector("input").value;
  row.cells[0].innerHTML = nameValue;

  // Enable add row button
  addButton.disabled = false;
}
