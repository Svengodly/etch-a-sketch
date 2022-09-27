/*
TODO
Need to sanitize user input so that only numbers 1 through 100 are accepted.
*/
let container = document.querySelector("div.container");
let button = document.querySelector("button");
let size;

button.addEventListener("click", getSize)

function getSize(){
    if(container.hasChildNodes()){
        while(container.hasChildNodes()){
            container.removeChild(container.firstChild);
        }
    }
    size = prompt("Size your grid");
    //'size' currenlty stores a string type and needs to be converted to a Number type
    //for the boolean evaluation. 'Number(size)' will return NaN to 'Number.isInteger()'
    //if the value stored in 'size' cannot be converted to a number.
    while(!Number.isInteger(Number(size)) || (size > 100 || size <= 0)){
        size = prompt("Please enter a whole number between 1 and 100.");
    }
    // if(size < 0){
    //     size = prompt("Value must be greater than 0 and no more than 100.");
    // }
    createGrid(size);
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

const squares = document.querySelectorAll(".square");
    console.log(squares)
    squares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
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