function checkYear() {
    var yearInput = document.getElementById("yearInput").value;
    var output = document.getElementById("output");
  
    if (yearInput > 2000) {
      output.innerHTML = "You are in the 21st century";
    } else {
      output.innerHTML = "You live in the Middle Age";
    }
  }
  