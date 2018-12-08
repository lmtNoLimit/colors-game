let colors = generateRandomColors(6);
let pickedColor = colors[Math.round(Math.random() * colors.length)];
let squares = document.querySelectorAll('.square');
let msgDisplay = document.getElementById('message');
// display picked color
let colorDisplay = document.getElementById('color-display');
let backgroundTitle = document.querySelector('.title');
let resetBtn = document.getElementById('reset');

function randomColor() {
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`;
}
function generateRandomColors(x) {
    const arr = [];
    for(let i = 0; i < x; i++){
        arr.push(randomColor());
    }
    return arr;
}
function changeColor(color){
    for(let i = 0; i < squares.length; i++){
        squares[i].style.background = color;
    }
}
colorDisplay.textContent = pickedColor;
colorDisplay.classList.add('pickedColor');
for(let i = 0; i < squares.length; i++){
    squares[i].style.background = colors[i];
    squares[i].addEventListener('click', function(){
        let clickedColor = this.style.background;
        if(clickedColor === pickedColor){
            changeColor(clickedColor);
            msgDisplay.textContent = 'Correct!';
            backgroundTitle.style.background = clickedColor;
            resetBtn.textContent = 'Play Again?';
        } else {
            this.classList.toggle('shake');
            msgDisplay.textContent = 'Try Again!!!';
        }
    });
}
resetBtn.addEventListener('click', function(){
    colors = generateRandomColors(6);
    pickedColor = colors[Math.round(Math.random() * colors.length)];
    colorDisplay.textContent = pickedColor;
    backgroundTitle.style.background = '#4c8bf7';
    resetBtn.textContent = 'New Colors';
    msgDisplay.textContent = null;
    for(let i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
    }
});
