let container = document.querySelector("div.container");

for (let rowNum = 1; rowNum <= 16; rowNum++){
    //I can create nested for loop here to populate each containter with the number of items specified.
    let row = document.createElement("div");
    for (let squareNum = 1; squareNum <=16; squareNum++){
        let square = document.createElement("div");
        // square.textContent = squareNum;
        square.classList.add("square");
        row.appendChild(square);
    }
    row.classList.add("row");
    container.appendChild(row);
    console.log(`Row: ${rowNum}`);
}