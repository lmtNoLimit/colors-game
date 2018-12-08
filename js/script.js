const colors = generateRandomColors(6);
const pickedColor = colors[Math.round(Math.random() * colors.length)];
const squares = document.querySelectorAll('.square');
const msgDisplay = document.getElementById('message');
// display picked color
const colorDisplay = document.getElementById('color-display');
const backgroundTitle = document.querySelector('.title');

colorDisplay.textContent = pickedColor;
colorDisplay.classList.add('pickedColor');

function changeColor(color){
    for(let i = 0; i < squares.length; i++){
        squares[i].style.background = color;
    }
}

for(let i = 0; i < squares.length; i++){
    squares[i].style.background = colors[i];
    squares[i].addEventListener('click', function(){
        let clickedColor = this.style.background;
        if(clickedColor === pickedColor){
            changeColor(clickedColor);
            msgDisplay.textContent = 'Correct!';
            backgroundTitle.style.background = clickedColor;          
        } else {
            this.style.background = '#232323';
            msgDisplay.textContent = 'Try Again!!!';
        }
    });
}
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
