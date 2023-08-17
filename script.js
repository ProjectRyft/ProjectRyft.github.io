
// Get the modal
var modal = document.getElementById("bulshitmario");
var modal1 = document.getElementById("bugle");
var modal2 = document.getElementById("bugle2");

// Get the button that opens the modal
var btn = document.getElementById("suop");
var btn1 = document.getElementById("sorp");
var btn2 = document.getElementById("suop2");

// Get the <span> element that closes the modal
var snice = document.getElementById("snice");
var snice1 = document.getElementById("snice1");
var snice2 = document.getElementById("snice2");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

btn1.onclick = function() {
  modal1.style.display = "block";
}

btn2.onclick = function() {
  modal1.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
snice.onclick = function() {
  modal.style.display = "none";
}

snice1.onclick = function() {
  modal1.style.display = "none";
}

function bor() {
  modal.style.display = "none";
  modal1.style.display = "none";
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}

window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

function gorgle(){
  modal.style.display = "none";
  modal1.style.display = "none";
  modal2.style.display = "none";
}