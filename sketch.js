function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';

    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

function paintCell(e) {
    let cell = e.target;
    cell.style.backgroundColor = getRandomColor();
}

function generateGrid(size){
    let grid = [];
    const gridDiv = document.querySelector('div');

    const width = gridDiv.offsetWidth;
    const cellSize = width / size - 2;

    for (let i = 0; i < size; i++) {
        grid[i] = [];
        let row = document.createElement('div');
        row.classList.add('row');

        for (let j = 0; j < size; j++) {
            grid[i][j] = document.createElement('div');
            grid[i][j].classList.add('cell');
            grid[i][j].style.width = `${cellSize}px`;
            grid[i][j].style.height = `${cellSize}px`;
            grid[i][j].addEventListener('mouseover', paintCell);
            row.appendChild(grid[i][j]);
        }

        gridDiv.appendChild(row);
    }

    document.body.appendChild(gridDiv);
}

let newGridButton = document.querySelector('button');
newGridButton.textContent = 'New Grid';

generateGrid(16);

newGridButton.addEventListener('click', (e) => {
    let size = prompt('Enter the size of the new grid');

    if (size) {
        let grid = document.querySelector('.grid');
        while (grid.firstChild) {
            grid.removeChild(grid.firstChild);
        }
        generateGrid(size);

        e.target.remove();
        document.body.appendChild(newGridButton);
    }
});

document.body.appendChild(newGridButton);