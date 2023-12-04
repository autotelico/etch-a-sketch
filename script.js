document.addEventListener("DOMContentLoaded", () => {

    const container = document.querySelector('.container');
    const gridSizeBtn = document.querySelector('#grid-size-button');
    const gridRangeBar = document.querySelector('#grid-range-bar');
    let isDrawing = false;
    
    // Ensure that the gridSize is defined
    let gridSize = gridRangeBar.value;

    gridRangeBar.addEventListener('input', () => {
        // Clear the grid when the range bar value changes
        clearGrid();
        gridSize = gridRangeBar.value;
        // Build the grid with the new size
        buildGrid(gridSize);
    });

    // Limit the gridSize to 200
    while (gridSize > 200) {
        gridSize = prompt("Cannot make grids bigger than 200x200 squares in size. Select your grid size again: ", 7);
    }

    // Set the grid template columns and rows
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    function clearGrid() {
        const squares = document.querySelectorAll('.square');
        squares.forEach(square => {
            square.remove();
        });
    }

    function buildGrid(size) {
        // Build a grid with 'size' number of squares
        for (let i = 1; i <= size * size; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            container.appendChild(square);
        }
    }

    container.addEventListener('mousedown', () => {
        isDrawing = true;
    });

    container.addEventListener('mouseup', () => {
        isDrawing = false;
    });

    container.addEventListener('mouseover', (e) => {
        if (isDrawing) {
            const currentSquare = e.target;
            if (currentSquare.classList.contains('square')) {
                currentSquare.style.backgroundColor = 'black';
            }
        }
    });
});
