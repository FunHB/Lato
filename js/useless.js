// Get hearts
var hearts = document.getElementsByClassName("fa-heart");

function active(i) {

    if (hearts[i].classList.contains("heart-active")) {
        heart[i].classList.remove("heart-active");
    } else {
        hearts[i].classList.add("heart-active");
    }
    
}