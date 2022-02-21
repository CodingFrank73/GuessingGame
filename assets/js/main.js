let numberOfRounds = document.getElementById("numberOfRounds");
let rounds = 4;
let randomValue = getRandomIntInclusive();
let anzahlRunde = 0;

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

function start() {
    if (anzahlRunde == 0) {
        document.getElementById("formRadio").style.display = "none";
        document.getElementById("formShow").style.display = "block";
    }

    let input = document.getElementById("input").value;

    console.log(randomValue);
    if (rounds > anzahlRunde) {
        let text;

        if (input == randomValue) {
            text = `YES!! You got me in ${anzahlRunde + 1} guesses, I'm ${randomValue}. <span><a href="">You win!! Play Again</a></span> `;
        } else if (input > randomValue) {
            text = `${anzahlRunde + 1} - You need to guess lower than ${input}, try again...`;
        } else {
            text = `${anzahlRunde + 1} - You need to guess higher than ${input}, try again...`;
        }

        anzahlRunde++;

        if (rounds == anzahlRunde) { document.getElementById("button").disabled = true; }

        document.getElementById("counter").innerHTML = `${anzahlRunde} / ${rounds}`;
        document.getElementById("help").innerHTML += `${text} <br>`;
    }
}