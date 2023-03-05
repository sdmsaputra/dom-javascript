// DOM SELECTION
// document.getElementById(judul)
const judul = document.getElementById('judul');
judul.style.color = 'blue';
judul.style.backgroundColor = 'yellow';
judul.innerHTML = 'Form Style JavaScript';

// document.getElementsByTagName();
// HTMLCollection
const paragraph = document.getElementsByTagName('p');
for(let i = 0; i < paragraph.length; i++) {
    paragraph[i].style.color = 'blue';    
}

// document.getElementsByClassName();
// HTMLCollection
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'Form Style';


// document.querySelectorAll();