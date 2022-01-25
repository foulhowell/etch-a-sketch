const container = document.querySelector('#container');
const rainbowButton = document.querySelector('#rainbow-button');
let rainbowModeOn = false;

function makeGrid(numBoxes) {
    for (let i = 0; i < numBoxes; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j  < numBoxes; j++) {
            const box = document.createElement('div');
            box.classList.add('box');
            // let boxSize = 100/numBoxes;
            // box.style.width(`20px`);
            // box.style.height(`20px`);
            row.appendChild(box);
        }
        container.appendChild(row);
    }
    colorBox();
}

function colorBox() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.addEventListener('mouseover', function (e) {
            if (rainbowModeOn) {
                let rgb = randomColor();
                e.target.style.backgroundColor = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
            }
            else {
                e.target.style.backgroundColor = "black";
            }
        });
    });
}

function resetGrid() {
    let newNumBoxes = parseInt(prompt("How many boxes of rows/columns would you like (Max is 100)?", 16));
    if (newNumBoxes < 101) {
        let rows = document.getElementsByClassName('row');
        while(rows.length > 0) {
            rows[0].parentNode.removeChild(rows[0]);
        }   
        makeGrid(newNumBoxes);
    }
    else {
        alert('Please input a number between 1 and 100.');
    }

}

function activateRainbowMode() {
    if (rainbowModeOn) {
        rainbowButton.textContent = 'Rainbow Mode: Off';
    }
    else {
        rainbowButton.textContent = 'Rainbow Mode: On';
    }
    rainbowModeOn = !rainbowModeOn;
}

function randomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return [red, green, blue];
}

makeGrid(16);