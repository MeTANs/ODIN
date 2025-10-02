const grid = document.getElementById("grid");
const newGrid = document.getElementById("new-grid");
const resetGrid = document.getElementById("reset-btn");
const normalBtn = document.getElementById("normal-btn");
const colorPalet = document.getElementById("color");
const rgb = document.getElementById("rainbow-btn")

let colorMod = false;

function getRandomColor () {
    const random = Math.floor(Math.random() * 16777215);
    const hex = "#" + random.toString(16).padStart(6, "0")
    return hex;
};

function createGrid(size) {
    grid.innerHTML = "";
    
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    for (let i = 0; i < size * size ; i++) {
        const square = document.createElement("div");
        square.classList.add("sqr");
        grid.appendChild(square);

        square.addEventListener("mouseover", () => {
        if (colorMod) {
            square.style.background = getRandomColor();
        } else {
            square.style.background = colorPalet.value;
        }});
    };  
};

function qlearGrid() {
    const squares = document.querySelectorAll(".sqr");
    squares.forEach(square => {
        square.style.background = "#f0f0f0";
    });
}

newGrid.addEventListener("click", () => {
    let input = prompt('Enter squares per side (1–100):');
    if (input === null) return;
    const size = parseInt(input);
    if (!Number.isInteger(size) || size < 1 || size > 100) {
        alert('Please enter a number between 1 and 100.');
        return;
    };
  createGrid(size);
});


rgb.addEventListener("click", () => {
    colorMod = true
});

normalBtn.addEventListener("click", () => {
    colorMod = false
})

resetGrid.addEventListener("click", () => {
    qlearGrid()
});



createGrid(16);
