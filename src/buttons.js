function forever() {}

const buttons = ["main", "about", "services", "credits", ""];
const backgrounds = ["bg.png","marble.jpg","sunrise.jpg","space.png"];

$(document).ready(function(){

});
// Testing something.
// TODO: make website keep the current tab open on refresh

function switch_to(n) {
    let l = document.getElementsByClassName("main_button");
    for (let i = 0; i < l.length; i++) {
        l[i].classList.remove("selected");
        l[i].classList.add("hover:translate-x-1")
    }
    l = document.getElementsByClassName("section");
    for (let i = 0; i < l.length; i++) {
        l[i].classList.remove("show");
    }
    l = document.getElementsByClassName("background");
    for (let i = 0; i < backgrounds.length; i++) {
        l[0].classList.remove(`bg-[url(/src/assets/${backgrounds[i]})]`);
    }


    document.getElementsByClassName("background")[0].classList.add(`bg-[url(/src/assets/${backgrounds[n]})]`)

    let b
    let a = document.getElementsByClassName("section")[n]
    a.classList.add("show")
     b = document.getElementsByClassName(buttons[n])[0];
    b.classList.add("selected");
    b.classList.remove("hover:translate-x-1")
    window.location.href = `#${buttons[n]}`
}