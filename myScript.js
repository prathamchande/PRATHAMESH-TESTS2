function myFunction() {
  var x = document.getElementById("myTopnav");
  var y = document.getElementById("closeMenu");
  if (x.className === "topnav") {
    x.className += " responsive";
 
    y.classList.remove("fa-bars");
    y.classList.add("fa-times");
  } else {
    x.className = "topnav";
    y.classList.remove("fa-times");
    y.classList.add("fa-bars");
  }
}



document.addEventListener("DOMContentLoaded", function() {
  var links = document.querySelectorAll(".topnav .left_sec a");

  links.forEach(function(link) {
    link.addEventListener("click", function() {
      links.forEach(function(otherLink) {
        otherLink.classList.remove("active");
      });
      link.classList.add("active");
    });
  });
});


