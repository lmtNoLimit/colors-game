let colors = [
    'rgb(255, 0, 255)',
    'rgb(255, 0, 0)',
    'rgb(0, 255, 0)',
    'rgb(0, 0, 255)',
    'rgb(255, 255, 0)',
    'rgb(0, 255, 255)'
];
const pickedColor = colors[Math.round(Math.random()*6)];
const squares = document.querySelectorAll('.square');

// display picked color
const colorDisplay = document.getElementById('color-display');
colorDisplay.textContent = pickedColor;
colorDisplay.classList.add('pickedColor');

for(let i = 0; i < squares.length; i++){
    squares[i].style.background = colors[i];
    squares[i].addEventListener('click', function(){
        let clickedColor = this.style.background;
        if(clickedColor === pickedColor){
            console.log('Correct');
        } else {
            console.log('Try Again');
        }
    });
}

