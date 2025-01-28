let selectRow = null;
const emp_codes = new Set();
const formFields = ["name", "code", "city", "date", "dep", "des", "salary"];

function onFormSubmit() {
  let formData = readFormData();
  if (emp_codes.has(formData.code)) {
    alert("Emp-Code " + formData.code + " already exists!");
  } else {
    if (selectRow == null) {
      insertNewRecord(formData);
      resetForm();
    } else {
      updateRecord(formData);
      resetForm();
    }
  }
}

// Getting value from User-----------------------------------------------------
function readFormData() {
  let formData = {};
  formFields.forEach(field => {
    formData[field] = document.getElementById(field).value;
  });
  return formData;
}

// Inserting & Showing Record in Another Table-----------------------------------------------
function insertNewRecord(data) {
  let table = document.getElementById("myTable").getElementsByTagName("tbody")[0];
  let newRow = table.insertRow(table.length);
  
  formFields.forEach((field, i) => {
    let cell = newRow.insertCell(i);
    cell.innerHTML = data[field];
  });

  // Add edit and delete buttons to the last two cells
  let editCell = newRow.insertCell(formFields.length);
  editCell.innerHTML = `<a onclick="onEdit(this)">Edit</a>`;
  
  let deleteCell = newRow.insertCell(formFields.length + 1);
  deleteCell.innerHTML = `<a onclick="onDelete(this)">Delete</a>`;

  emp_codes.add(data.code);
}

// Resetting Form-----------------------------------------------------------
function resetForm() {
  formFields.forEach(field => {
    document.getElementById(field).value = "";
  });
  selectRow = null;
}

// Editing Record ----------------------------------------------------------------------------
function onEdit(td) {
  selectRow = td.parentElement.parentElement;
  formFields.forEach((field, i) => {
    document.getElementById(field).value = selectRow.cells[i].innerHTML;
  });
}

// Update Record-----------------------------------------------------------------------------
function updateRecord(formData) {
  formFields.forEach((field, i) => {
    selectRow.cells[i].innerHTML = formData[field];
  });
}

// Deleting Record--------------------------------------------------------------------------
function onDelete(td) {
  if (confirm("Are you want to delete this record ?")) {
    let row = td.parentElement.parentElement;
    emp_codes.delete(row.cells[1].innerHTML);
    document.getElementById("myTable").deleteRow(row.rowIndex);
    resetForm();
  }
}

// Search Function ------------------------------------------------------------------------
function myFunction() {
  let input = document.getElementById("myInput");
  let filter = input.value.toUpperCase();
  let table = document.getElementById("myTable");
  let tr = table.getElementsByTagName("tr");

  for (let i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      let txtValue = td.textContent || td.innerText;
      tr[i].style.display = txtValue.toUpperCase().indexOf(filter) > -1 ? "" : "none";
    }
  }
}
