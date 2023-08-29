let add = document.querySelector(".add");
let save = document.querySelector(".save");

let reset = document.querySelector(".reset");

let number = document.querySelector(".number");
let savetext = document.querySelector(".savetext");

add.addEventListener("click", function () {
    number.innerHTML = +number.innerHTML + 1;
    save.classList.replace("notallow", "save");
});

save.addEventListener("click", function () {
    if (number.innerHTML == 0) {
        save.classList.replace("save", "notallow");
    } else {
        if (savetext.innerHTML == 0) {
            savetext.innerHTML = number.innerHTML;
        } else {
            savetext.innerHTML += " , " + number.innerHTML;
        }
        number.innerHTML = 0;
    }
});



reset.addEventListener("click", function () {
    number.innerHTML = 0;
    savetext.innerHTML = 0;
    save.classList.replace("notallow", "save");

});
