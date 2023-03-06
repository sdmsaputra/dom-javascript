const p3 = document.querySelector('.p3');
function changeColor() {
    p2.style.backgroundColor = 'lightblue';
}

const p2 = document.querySelector('.p2');
p2.onClick = changeColor;