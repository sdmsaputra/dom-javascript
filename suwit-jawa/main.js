function getPilihanComputer() {
    const comp = Math.random();
    if(comp < 0.34) return 'gajah';
    if(comp >= 0.34 && comp < 0.67 ) return 'orang';
    return 'semut';
}

function getHasil(comp, player) {
    if( player == comp ) return 'SERI';
    if( player == 'gajah' ) return ( comp == 'orang') ? 'MENANG!' : 'KALAH!';
    if( player == 'orang' ) return ( comp == 'semut') ? 'KALAH!' : 'MENANG!';
    if( player == 'semut' ) return ( comp == 'gajah') ? 'MENANG!' : 'KALAH!';
}

const pGajah = document.querySelector('.gajah');
pGajah.addEventListener('click', function() {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pGajah.className;
    const hasil = getHasil(pilihanPlayer, pilihanComputer);
    const imageComputer = document.querySelector('.img-komputer');
    imageComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

    const info = document.querySelector('.info');
    info.innerHTML = hasil;
});
