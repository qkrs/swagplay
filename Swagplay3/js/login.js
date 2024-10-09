// Get the modal
var modal = document.getElementById("loginModal");

// Get the button that opens the modal
var btn = document.querySelector(".btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
function openModal() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function closeModal() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Handle login form submission (replace with your actual authentication logic)
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Here you would typically make an AJAX request to your server to authenticate the user
    // For this example, we'll just simulate a successful login
    console.log('Username:', username);
    console.log('Password:', password);

    alert('Login successful!'); 
    closeModal();
});