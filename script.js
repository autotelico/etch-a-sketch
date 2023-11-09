document.addEventListener("DOMContentLoaded", () => {

    const container = document.querySelector('.container');
    const gridSizeBtn = document.querySelector('#grid-size-button');

    gridSizeBtn.addEventListener('click', () => {
        const squares = document.querySelectorAll('.square');
        squares.forEach(square => {
            square.remove();
        })


        let gridSize = prompt("Select your grid size: ", 7);

        while (gridSize > 200 || gridSize < 25) {
            gridSize = prompt("Cannot make grids smaller than 25x25 or bigger than 200x200 squares in size. Select your grid size again: ", 7);
        }
    

        container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr`;

    for (let i = 1; i <= gridSize * gridSize; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'purple';
        })
    }
})

    


})