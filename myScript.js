/*
TODO

*/
let container = document.querySelector("div.container");
let sizeButton = document.querySelector("button");
let clearButton = document.querySelector("button.clear");
let size;

sizeButton.addEventListener("click", getSize)

clearButton.addEventListener("click", () => {
   const squares = document.querySelectorAll(".square");
   squares.forEach((square) => {
    square.style.backgroundColor = "white";
   })
})

function getSize(){
    if(container.hasChildNodes()){
        while(container.hasChildNodes()){
            container.removeChild(container.firstChild);
        }
    }
    size = prompt("Enter the size of your grid. Will return a grid of x by x.");
    //'size' currenlty stores a string type and needs to be converted to a Number type
    //for the boolean evaluation. 'Number(size)' will return NaN to 'Number.isInteger()'
    //if the value stored in 'size' cannot be converted to a number.
    if(size == null){
        container.style.border = "none";
        return
    } else{
        while(!Number.isInteger(Number(size)) || (size > 100 || size <= 0)){
            if(size == null){
                container.style.border = "none";
                return
            } else{

                size = prompt("Please enter a whole number between 1 and 100.");
            }
        }
        createGrid(size);

    }
}

function createGrid(size){
for (let rowNum = 1; rowNum <= size; rowNum++){
    //I can create nested for loop here to populate each containter with the number of items specified.
    //Each row can be seen as a flex container, containing sqaures which are its flex items.
    let row = document.createElement("div");
    for (let squareNum = 1; squareNum <= size; squareNum++){
        let square = document.createElement("div");
        square.classList.add("square");
        row.appendChild(square);
    }
    row.classList.add("row");
    container.appendChild(row);
}

container.style.border = "solid black 5px";
const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            // let x = Math.floor(Math.random() * 255) + 1;
            // let y = Math.floor(Math.random() * 255) + 1;
            // let z = Math.floor(Math.random() * 255) + 1;
            square.style.backgroundColor = `black`;
        })
        square.addEventListener("click", () => {
            square.style.backgroundColor = "white";
        })
    })
}

/*
Ideas for future iterations
-Add the ability to undo colored squares. This can be accomplished by a mouse event (click and hold) or by
creating a button that serves as a toggle between fill and erase.
-Add a reset button that clears the entire grid while keeping its size.
-Let the user swap between colors.
*/