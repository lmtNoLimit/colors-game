let numSquare = 6;
let colors = generateRandomColors(numSquare);
let pickedColor = colors[Math.floor(Math.random() * colors.length)];
let squares = document.querySelectorAll('.square');
let msgDisplay = document.getElementById('message');
let colorDisplay = document.getElementById('color-display');
let backgroundTitle = document.querySelector('.title');
let resetBtn = document.getElementById('reset');
let modeBtn = document.querySelectorAll('.mode');
colorDisplay.textContent = pickedColor;
colorDisplay.classList.add('pickedColor');
function randomColor() {
    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);
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
function reset(){
    colors = generateRandomColors(numSquare);
    pickedColor = colors[Math.floor(Math.random() * colors.length)];
    colorDisplay.textContent = pickedColor;
    backgroundTitle.style.background = '#4c8bf7';
    resetBtn.textContent = 'New Colors';
    msgDisplay.textContent = null;
    for(let i = 0; i < squares.length; i++){
        if(colors[i]) {
            squares[i].style.display = 'block';
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = 'none';
        }
    }
}
function squareClicked(){
    for(let i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
        squares[i].addEventListener('click', function(){
            let clickedColor = this.style.background;
            if(clickedColor === pickedColor){
                changeColor(clickedColor);
                msgDisplay.textContent = 'Correct!';
                msgDisplay.style.color = '#00ff0d';
                backgroundTitle.style.background = clickedColor;
                resetBtn.textContent = 'Play Again?';
            } else {
                this.classList.add('shake');
                msgDisplay.style.color = '#f00';
                msgDisplay.textContent = 'Try Again!!!';
            }
        });
        squares[i].addEventListener('animationend', function(){
            this.classList.remove('shake');
        });
    }
}
function changeMode(){
    for(let i = 0; i < modeBtn.length; i++){
        modeBtn[i].addEventListener('click', function() {
            modeBtn[0].classList.remove('active');
            modeBtn[1].classList.remove('active');
            this.classList.add('active');
            this.textContent === 'Easy' ? numSquare = 3 : numSquare = 6;
            colors = generateRandomColors(numSquare);
            reset();        
        });
    }
}
function resetClick(){
    resetBtn.addEventListener('click', function(){
        reset();
    });
}
function main(){
    changeMode();
    squareClicked();
    resetClick();
}
main();