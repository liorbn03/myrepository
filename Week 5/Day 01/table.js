function insertRow() {
    // Get the table element
    var table = document.getElementById("sampleTable");
  
    // Insert a new row at the end of the table
    var newRow = table.insertRow(-1);
  
    // Insert a cell in the new row for each column
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
  
    // Add some text to the new cells
    cell1.innerHTML = "New row cell1";
    cell2.innerHTML = "New row cell2";
  }
  