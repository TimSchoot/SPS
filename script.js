let steenP1 = document.getElementById("steenP1");
let papierP1 = document.getElementById("papierP1");
let schaarP1 = document.getElementById("schaarP1");
let inputP1 = document.getElementById("inputP1");
let inputP2 = document.getElementById("inputP2");
let steenP2 = document.getElementById("steenP2");
let papierP2 = document.getElementById("papierP2");
let schaarP2 = document.getElementById("schaarP2");
let outcome = document.getElementById("outcome");

let player1Choice = '';
let player2Choice = '';

let scoreP1 = 0;
let scoreP2 = 0;
document.getElementById("scoreP1").textContent = `Score speler 1: ${scoreP1}`;
document.getElementById("scoreP2").textContent = `Score speler 2: ${scoreP2}`;

steenP1.addEventListener("click", function() {
    inputP1.textContent = "STEEN";
    player1Choice = 'STEEN';
    checkOutcome();
});
papierP1.addEventListener("click", function() {
    inputP1.textContent = "PAPIER";
    player1Choice = 'PAPIER';
    checkOutcome();
});
schaarP1.addEventListener("click", function() {
    inputP1.textContent = "SCHAAR";
    player1Choice = 'SCHAAR';
    checkOutcome();
});
steenP2.addEventListener("click", function() {
    inputP2.textContent = "STEEN";
    player2Choice = 'STEEN';
    checkOutcome();
});
papierP2.addEventListener("click", function() {
    inputP2.textContent = "PAPIER";
    player2Choice = 'PAPIER';
    checkOutcome();
});
schaarP2.addEventListener("click", function() {
    inputP2.textContent = "SCHAAR";
    player2Choice = 'SCHAAR';
    checkOutcome();
});

function checkOutcome() {
    if (player1Choice && player2Choice) {
        inputP1.style.visibility = "visible";
        inputP2.style.visibility = "visible";

        if (player1Choice === player2Choice) {
            outcome.textContent = "gelijk spel";
        } else if ((player1Choice === 'STEEN' && player2Choice === 'SCHAAR') ||
            (player1Choice === 'PAPIER' && player2Choice === 'STEEN') ||
            (player1Choice === 'SCHAAR' && player2Choice === 'PAPIER')) {
            outcome.textContent = 'Player 1 wint';
            scoreP1++;
            document.getElementById("scoreP1").textContent = `Score speler 1: ${scoreP1}`;
        } else {
            outcome.textContent = 'Player 2 wint';
            scoreP2++;
            document.getElementById("scoreP2").textContent = `Score speler 2: ${scoreP2}`;
        }
        disableButtons();
        setTimeout(reset, 2000);
    }
}

function disableButtons() {
    steenP1.disabled = true;
    papierP1.disabled = true;
    schaarP1.disabled = true;
    steenP2.disabled = true;
    papierP2.disabled = true;
    schaarP2.disabled = true;
}

function reset() {
    player1Choice = '';
    player2Choice = '';

    inputP1.textContent = "";
    inputP2.textContent = "";
    outcome.textContent = "";

    inputP1.style.visibility = "hidden";
    inputP2.style.visibility = "hidden";

    steenP1.disabled = false;
    papierP1.disabled = false;
    schaarP1.disabled = false;
    steenP2.disabled = false;
    papierP2.disabled = false;
    schaarP2.disabled = false;
}

window.addEventListener('keyup', function(event) {
    if (event.keyCode === 81) {
        steenP1.click();
    }
    if (event.keyCode === 87) {
        papierP1.click();
    }
    if (event.keyCode === 69) {
        schaarP1.click();
    }
    if (event.keyCode === 73) {
        steenP2.click();
    }
    if (event.keyCode === 79) {
        papierP2.click();
    }
    if (event.keyCode === 80) {
        schaarP2.click();
    }
});
