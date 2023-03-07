const tombol = document.getElementById('changeColorButton');
const judul = document.querySelector('h1');
tombol.addEventListener("click", function() {
    // document.body.style.backgroundColor = "lightblue";
    document.body.classList.toggle('background')
});