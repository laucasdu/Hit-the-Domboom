

function myFunction() {
  var x = document.getElementById("menuresponsive");
  if (x.className === "menulist") {
    x.className += " responsive";
  } 
  else {
    x.className = "menulist";
  }
}