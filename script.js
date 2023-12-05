document.addEventListener("DOMContentLoaded", () => {

    const container = document.querySelector('.container');
    const gridRangeBar = document.querySelector('#grid-range-bar');
    let isDrawing = false;
    
    let gridSize = gridRangeBar.value;

    gridRangeBar.addEventListener('input', () => {
        clearGrid();
        gridSize = gridRangeBar.value;
        buildGrid(gridSize);
    });

    while (gridSize > 200) {
        gridSize = prompt("Cannot make grids bigger than 200x200 squares in size. Select your grid size again: ", 7);
    }

    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    function clearGrid() {
        const squares = document.querySelectorAll('.square');
        squares.forEach(square => {
            square.remove();
        });
    }

    function buildGrid(size) {
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
