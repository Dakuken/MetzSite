var nav = document.querySelector("nav");
var head = document.getElementById("head");
window.addEventListener("scroll", function () {
    if (window.scrollY > 500) {
        nav.style.top = "0px";
    }
});
