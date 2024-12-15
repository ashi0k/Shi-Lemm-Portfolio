// Get the modal
var modal = document.getElementById("contact-modal");

// Get the button that opens the modal
var btn = document.getElementById("open-modal");

// Get the close button (the div with class "circle close")
var closeButton = document.querySelector(".circle.close");

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
};

// When the user clicks on the close button, close the modal
function closeModal() {
    modal.style.display = "none";
}

// Optionally, close the modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// Function to change the background color of the modal
function changeColor(color) {
    var modalContent = document.getElementsByClassName('modal-content')[0];
    modalContent.style.backgroundColor = color;
}


