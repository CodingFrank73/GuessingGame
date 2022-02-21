

let numberOfRounds = document.getElementById("numberOfRounds");

var radios = document.querySelectorAll('input[type=radio][name="rounds"]');

radios.forEach(radio => radio.addEventListener('change', () => {

    if (radios.item(0).checked == true) {
        rounds = 4;
        clearInputNumberOfRounds()
    } else if (radios.item(1).checked == true) {
        rounds = 5;
        clearInputNumberOfRounds()
    } else if (radios.item(2).checked == true) {
        rounds = 6;
        clearInputNumberOfRounds()
    } else {
        numberOfRounds.style.display = "block";
    }
}))

function clearInputNumberOfRounds() {
    numberOfRounds.value = "";
    numberOfRounds.style.display = "none";
}

function update() {
    rounds = numberOfRounds.value;
}

function getRandomIntInclusive() {
    min = Math.ceil(1);
    max = Math.floor(100);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let rounds = 4;
let randomValue = getRandomIntInclusive();
let anzahlRunde = 0;

function start() {
    if (anzahlRunde == 0) {
        document.getElementById("formRadio").style.display = "none";
        document.getElementById("formShow").style.display = "flex";
    }

    let input = document.getElementById("input").value;

    if (rounds > anzahlRunde) {
        let text;

        if (input == randomValue) {
            text = `${anzahlRunde} treffer`;
        } else if (input > randomValue) {
            text = `${anzahlRunde + 1} - suche kleiner`;
        } else {
            text = `${anzahlRunde + 1} - suche größer`;
        }

        anzahlRunde++;

        if (rounds == anzahlRunde) { document.getElementById("button").disabled = true; }

        document.getElementById("counter").innerHTML = `${anzahlRunde} / ${rounds}`;
        document.getElementById("help").innerHTML += `${text} <br>`;
    }

}



