// steen papier schaar

let steenP1 = document.getElementById("steenP1");
let papierP1 = document.getElementById("papierP1");
let schaarP1 = document.getElementById("schaarP1");
let inputP1 = document.getElementById("inputP1");
let inputP2 = document.getElementById("inputP2");
let steenP2 = document.getElementById("steenP2");
let papierP2 = document.getElementById("papierP2");
let schaarp2 = document.getElementById("schaarp2");
let outcome = document.getElementById("outcome");

let steenP1Pressed = false;
let papierP1Pressed = false;
let schaarP1Pressed = false;
let steenP2Pressed = false;
let papierP2Pressed = false;
let schaarP2Pressed = false;


let scoreP1 = 0;
let scoreP2 = 0;
document.getElementById("scoreP1").textContent = `Score speler 1: ${scoreP1}`;
document.getElementById("scoreP2").textContent = `Score speler 2: ${scoreP2}`;
console.log(typeof scoreP1);

steenP1.addEventListener("click", function() {
    inputP1.textContent = "STEEN";
    steenP1Pressed = true;
    checkOutcome();
});
papierP1.addEventListener("click", function() {
    inputP1.textContent = "PAPIER";
    papierP1Pressed = true;
    checkOutcome();
});
schaarP1.addEventListener("click", function() {
    inputP1.textContent = "SCHAAR";
    schaarP1Pressed = true;
    checkOutcome();
});
steenP2.addEventListener("click", function() {
    inputP2.textContent = "STEEN";
    steenP2Pressed = true;
    checkOutcome();
});
papierP2.addEventListener("click", function() {
    inputP2.textContent = "PAPIER";
    papierP2Pressed = true;
    checkOutcome();
});
schaarp2.addEventListener("click", function() {

    inputP2.textContent = "SCHAAR";
    schaarP2Pressed = true;
    checkOutcome();
});

function checkOutcome(){
    if(steenP1Pressed && steenP2Pressed){
        outcome.textContent = "gelijk spel";
    }
    if(papierP1Pressed && steenP2Pressed){
        outcome.textContent = 'Player 1 wint';
        scoreP1++;
        document.getElementById("scoreP1").textContent = `Score speler 1: ${scoreP1}`;
    }
    if(schaarP1Pressed && steenP2Pressed){
        outcome.textContent = 'Player 2 wint';
        scoreP2++;
        document.getElementById("scoreP2").textContent = `Score speler 2: ${scoreP2}`;
    }
    if(steenP1Pressed && papierP2Pressed){
        outcome.textContent = 'Player 2 wint';
        scoreP2++;
        document.getElementById("scoreP2").textContent = `Score speler 2: ${scoreP2}`;
    }
    if(papierP1Pressed && papierP2Pressed){
        outcome.textContent = 'gelijk spel';
    }
    if(schaarP1Pressed && papierP2Pressed){
        outcome.textContent = 'Player 1 wint';
        scoreP1++;
        document.getElementById("scoreP1").textContent = `Score speler 1: ${scoreP1}`;
    }
    if(steenP1Pressed && schaarP2Pressed){
        outcome.textContent = 'Player 1 wint';
        scoreP1++;
        document.getElementById("scoreP1").textContent = `Score speler 1: ${scoreP1}`;
    }
    if(papierP1Pressed && schaarP2Pressed){
        outcome.textContent = 'Player 2 wint';
        scoreP2++;
        document.getElementById("scoreP2").textContent = `Score speler 2: ${scoreP2}`;
    }
    if(schaarP1Pressed && schaarP2Pressed){
        outcome.textContent = 'gelijk spel';
    }
};

function resetAndCheckOutcome() {
    reset();
    checkOutcome(); 
}

function reset() {
    steenP1Pressed = false;
    papierP1Pressed = false;
    schaarP1Pressed = false;
    steenP2Pressed = false;
    papierP2Pressed = false;
    schaarP2Pressed = false;
    
    inputP1.textContent = "";
    inputP2.textContent = "";
    outcome.textContent = "";
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
        schaarp2.click();
    } 
});

