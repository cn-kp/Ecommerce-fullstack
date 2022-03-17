// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("profileList");

// Get the <span> element that closes the modal
var canx = document.getElementById("canx");

// When the user clicks the "Begin"  button, open the modal 

var modalBtn = document.getElementById("profileList");
modalBtn.addEventListener("click",function(){
    modal.style.display = "block";
});

// When the user clicks the "Cancel" button, close the modal and clear fields

var canxBtn = document.getElementById("canx");
canxBtn.addEventListener("click",function(){
    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("description").value = "";
    document.getElementById("image_link").value = "";
    modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {    
        document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("description").value = "";
    document.getElementById("image_link").value = "";
        modal.style.display = "none";
    }
}