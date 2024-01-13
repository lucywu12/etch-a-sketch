
const box = document.getElementsByClassName("container")[0];
let num = prompt("How many squares per side for the grid? (max 100)");
makeGrid(num);

function makeGrid(num) {
    if (num > 100) {
        alert("ERROR: please enter a number less than 100");
    }
    for (let i = 0; i < num; i++) {
        const newRow = document.createElement("div");
        newRow.className = "row";
        for (let j = 0; j < num; j++) {
            const newCol = document.createElement("div");
            newCol.className = "col";
            newRow.appendChild(newCol);
        }
        box.appendChild(newRow); //add after we have added inner boxes
    }
}


//mouse enters, mouse leaves
//can technically also use bubbling (?) not quite there yet
const squares = document.querySelectorAll(".col");

squares.forEach(square => {
    square.addEventListener('mouseenter', () => {
        square.style.backgroundColor = 'blue';
    });

    square.addEventListener('mouseleave', () => {
        square.style.backgroundColor = 'red';
    })
});

