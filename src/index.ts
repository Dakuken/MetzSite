
let nav = <HTMLDivElement>document.querySelector("nav");
let head = <HTMLDivElement>document.getElementById("head");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    nav.style.top ="0px"
  }
});