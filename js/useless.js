// Get hearts
var hearts = document.getElementsByClassName("fa-heart");

function active(i) {
    
    // Check is heart red
    if (hearts[i].classList.contains("heart-active")) {
        hearts[i].classList.remove("heart-active");
    } else {
        hearts[i].classList.add("heart-active");
    }
}