
var navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.display = "block";
    
}
function hideMenu(){
    navLinks.style.display = "none";
    
}




//Get the button:
mybutton = document.getElementById("myBtn");

//Scroll-up button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
 mybutton.style.display = "block";
} else {
    mybutton.style.display = "none";
}
}

function topFunction() {
 document.body.scrollTop = 0;
 document.documentElement.scrollTop = 0;
}
