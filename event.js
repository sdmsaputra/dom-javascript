// const p2 = document.querySelector('.p2');
// function changeColorP2() {
//     p2.style.backgroundColor = 'lightblue';
// }

// const p3 = document.querySelector('.p3');
// function changeColorP3() {
//     p3.style.backgroundColor = 'lightblue';
// }
// p2.onclick = changeColorP2;
// p3.onclick = changeColorP3;

// // Menambahkan Item List
// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function() {
//     const ul = document.querySelector('section#b ul');
//     const newLi = document.createElement('li');
//     const textLi = document.createTextNode('List Item Baru nih');
//     newLi.appendChild(textLi);
//     ul.appendChild(newLi);
// });

const p3 = document.querySelector('.p3');
// p3.onclick = function() {
//     p3.style.backgroundColor = 'lightblue';
// };

p3.addEventListener('click', function() {
    p3.style.backgroundColor = 'lightblue';
});

p3.addEventListener('click', function() {
    p3.style.color = 'red';
});