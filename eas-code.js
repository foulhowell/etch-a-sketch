const container = document.querySelector('#container');

function makeGrid(numBoxes) {
    for (let i = 0; i < numBoxes; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j  < numBoxes; j++) {
            const box = document.createElement('div');
            box.classList.add('box');
            row.appendChild(box);
        }
        container.appendChild(row);
    }
}

function colorBox() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.addEventListener('mouseover', function (e) {
            e.target.style.backgroundColor = "black";
        });
    });
}

makeGrid(16);
colorBox();