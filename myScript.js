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
    createGrid(size);
}

function createGrid(size){
for (let rowNum = 1; rowNum <= size; rowNum++){
    //I can create nested for loop here to populate each containter with the number of items specified.
    //Each row can be seen as a flex container, containing sqaures which are its flex items.
    let row = document.createElement("div");
    for (let squareNum = 1; squareNum <=size; squareNum++){
        let square = document.createElement("div");
        square.classList.add("square");
        row.appendChild(square);
    }
    row.classList.add("row");
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
        })
        square.addEventListener("click", () => {
            square.style.backgroundColor = "white";
        })
    })
    container.appendChild(row);
}
}