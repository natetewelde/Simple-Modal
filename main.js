//Get modal element
var modal = document.getElementById("simpleModal");
// Get open modal button
var modalBtn = document.getElementById("modalBtn");
// Get close button
var closeBtn = document.getElementsByClassName("closeBtn")[0];

// Listen for a click to open modal
modalBtn.addEventListener('click', openModal);
// Listen for a click to close modal
closeBtn.addEventListener('click', closeModal);
// listen for a click outside the modal to close
window.addEventListener('click', clickOutside);
// function to open modal
function openModal() {
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

function clickOutside(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }  
}