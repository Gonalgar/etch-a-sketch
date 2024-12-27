let grid = [];

let h1 = document.createElement('h1');
h1.textContent = 'Etch-a-Sketch';
document.body.appendChild(h1);

for (let i = 0; i < 16; i++) {
    grid[i] = [];
    let row = document.createElement('div');
    row.classList.add('row-' + i);

    for (let j = 0; j < 16; j++) {
        grid[i][j] = document.createElement('div');
        grid[i][j].classList.add('cell');
        row.appendChild(grid[i][j]);
    }

    document.body.appendChild(row);
}