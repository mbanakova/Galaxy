let play = document.querySelector('.button--play');
let pause = document.querySelector('.button--pause');
let mercury = 0;
let venus = 0;
let earth = 0;
let mars = 0;
let jupiter = 0;
let saturn = 0;
let uranus = 0;
let neptune = 0;
let pluto = 0;

let modal = document.querySelector('.modal');

let step = 2;


play.onclick = function () {
    play.innerHTML = 'Быстрее';

    setInterval(fMercury, step);

    function fMercury() {
        document.querySelector('.mercury').style.transform = `rotate(${mercury}deg)`;
        document.querySelector('.venus').style.transform = `rotate(${venus}deg)`;
        document.querySelector('.earth').style.transform = `rotate(${earth}deg)`;
        document.querySelector('.mars').style.transform = `rotate(${mars}deg)`;
        document.querySelector('.jupiter').style.transform = `rotate(${jupiter}deg)`;
        document.querySelector('.saturn').style.transform = `rotate(${saturn}deg)`;
        document.querySelector('.uranus').style.transform = `rotate(${uranus}deg)`;
        document.querySelector('.neptune').style.transform = `rotate(${neptune}deg)`;
        document.querySelector('.pluto').style.transform = `rotate(${pluto}deg)`;

        mercury -= 1;
        venus = Math.round(mercury / 2.9);
        earth = Math.round(mercury / 4.14);
        mars = Math.round(mercury / 7.88);
        jupiter = Math.round(mercury / 49.35);
        saturn = Math.round(mercury / 122.3);
        uranus = Math.round(mercury / 348.4);
        neptune = Math.round(mercury / 683.5);
        pluto = Math.round(mercury / 1027.4);

        if (pluto == -360) {
            modal.classList.add('show');
        }

        let mercuryTurns = document.querySelector('.statistics__cell--mercury');
        let venusTurns = document.querySelector('.statistics__cell--venus');
        let earthTurns = document.querySelector('.statistics__cell--earth');
        let marsTurns = document.querySelector('.statistics__cell--mars');
        let jupiterTurns = document.querySelector('.statistics__cell--jupiter');
        let saturnTurns = document.querySelector('.statistics__cell--saturn');
        let uranusTurns = document.querySelector('.statistics__cell--uranus');
        let neptuneTurns = document.querySelector('.statistics__cell--neptune');
        let plutoTurns = document.querySelector('.statistics__cell--pluto');

        if (mercury % 360 == 0) {
            mercuryTurns.textContent++;
        }

        else if (mercury % 1044 == 0) {
            venusTurns.textContent++;
        }

        else if (mercury % 1490 == 0) {
            earthTurns.textContent++;
        }

        else if (mercury % 2837 == 0) {
            marsTurns.textContent++;
        }

        else if (mercury % 17766 == 0) {
            jupiterTurns.textContent++;
        }

        else if (mercury % 44028 == 0) {
            saturnTurns.textContent++;
        }

        else if (mercury % 125424 == 0) {
            uranusTurns.textContent++;
        }

        else if (mercury % 246060 == 0) {
            neptuneTurns.textContent++;
        }

        else if (mercury % 369864 == 0) {
            plutoTurns.textContent++;
        }

    }
}

pause.onclick = function () {
    alert('Закружилась голова?');
}

let close = document.querySelector('.close--modal');

close.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.remove('show');
});

let table = document.querySelector('.statistics');
let tableButton = document.querySelector('.show--table');

tableButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    table.classList.toggle('statistics--shown');
});