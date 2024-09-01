let Boxes = document.querySelectorAll(".Box");
let reset = document.querySelector("#reset");

let turnO = true;

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],

];

Boxes.forEach((Box)  => {
 Box.addEventListner("click", () => {
    console.log("box was clicked");
    Box.innerText = "Adi";
 });
});

//Adding fuctionality

