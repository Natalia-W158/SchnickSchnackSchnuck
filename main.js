weapons = [
    "rock",
    "scissors",
    "paper"
];

/* console.log(weapons[0]) */
let drei = document.getElementById("drei");
let fuenf = document.getElementById("fuenf");
let sieben = document.getElementById("sieben");

let result = document.getElementById("result");
let playersWIN =document.getElementById("roundsPlayer");
let computersWIN =document.getElementById("roundsComputer");

playersChoice = (x) => {
    let computersChoice= Math.floor(Math.random()*weapons.length);
    console.log(x,computersChoice)
    if (x === computersChoice){
        result.innerHTML ="Unentschieden"; 
    } else if (x === 0 && computersChoice === 1){
     console.log(computersChoice==1 ? "You win" : "You lose")
     result.innerHTML = "Du hast den Stein gewählt. Dein Gegner die Schere. Du gewinnst.";
     playersWIN.innerHTML++;

    }else if (x === 0 && computersChoice === 2){
        console.log(computersChoice==1 ? "You win" : "You lose")
        result.innerHTML = "Du hast den Stein gewählt. Dein Gegner das Papier. Du hast verloren.";
        computersWIN.innerHTML++;

    }else if (x === 1 && computersChoice === 2){
        console.log(computersChoice==2 ? "You win" : "You lose")
        result.innerHTML = "Du hast die Schere gewählt. Dein Gegner das Papier. Du gewinnst.";
        playersWIN.innerHTML++;

    }else if (x === 1 && computersChoice === 0){
        console.log(computersChoice==2 ? "You win" : "You lose")
        result.innerHTML = "Du hast die Schere gewählt. Dein Gegner den Stein. Du hast verloren.";
        computersWIN.innerHTML++;

    }else if (x === 2 && computersChoice== 0 ){
        console.log(computersChoice==0 ? "You win" : "You lose")
        result.innerHTML = "Du hast Papier gewählt. Dein Gegner den Stein.Du hast gewonnen";
        playersWIN.innerHTML++;

    }else if (x === 2 && computersChoice== 1 ){
        console.log(computersChoice==0 ? "You win" : "You lose")
        result.innerHTML = "Du hast Papier gewählt. Dein Gegner die Schere.Du hast verloren";
        computersWIN.innerHTML++;
    }
    
}

function spielstand(){
    if(drei.checked && playersWIN === 3){
        alert( "Super gut! Du hast das Spiel gewonnen!")
    }else if(drei.checked && computersWIN === 3){
        alert("Leider hast du 3 Runden verloren! Starte nochmal!")
    }
    if(fuenf.checked && playersWIN === 5){
        alert( "Super gut! Du hast das Spiel gewonnen!")
    }else if(fuenf.checked && computersWIN === 5){
        alert("Leider hast du 5 Runden verloren! Starte nochmal!")
    }
    if(sieben.checked && playersWIN === 7){
        alert( "Super gut! Du hast das Spiel gewonnen!")
    }else if(sieben.checked && computersWIN == 7){
        alert("Leider hast du 7 Runden verloren! Starte nochmal!")
    }
}






clearAll = () => {window.location.reload()};