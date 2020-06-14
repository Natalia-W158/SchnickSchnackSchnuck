weapons = [
    "rock",
    "scissors",
    "paper"
];

/* console.log(weapons[0]) */

let result = document.getElementById("result")


playersChoice = (x) => {
    let computersChoice= Math.floor(Math.random()*weapons.length);
    console.log(x,computersChoice)
    if (x === computersChoice){
        result.innerHTML ="Unentschieden"; 
    } else if (x === 0 && computersChoice === 1){
     console.log(computersChoice==1 ? "You win" : "You lose")
     result.innerHTML = "Du hast den Stein gewählt. Dein Gegner die Schere. Du gewinnst."

    }else if (x === 0 && computersChoice === 2){
        console.log(computersChoice==1 ? "You win" : "You lose")
        result.innerHTML = "Du hast den Stein gewählt. Dein Gegner die Papier. Du hast verloren."

    }else if (x === 1 && computersChoice === 2){
        console.log(computersChoice==2 ? "You win" : "You lose")
        result.innerHTML = "Du hast den Schere gewählt. Dein Gegner die Papier. Du gewinnst."
    }else if (x === 1 && computersChoice === 0){
        console.log(computersChoice==2 ? "You win" : "You lose")
        result.innerHTML = "Du hast die Schere gewählt. Dein Gegner die Stein. Du hast verloren."

    }else if (x === 2 && computersChoice== 0 ){
        console.log(computersChoice==0 ? "You win" : "You lose")
        result.innerHTML = "Du hast Papier gewählt. Dein Gegner den Stein.Du hast gewonnen"
    }else if (x === 2 && computersChoice== 1 ){
        console.log(computersChoice==0 ? "You win" : "You lose")
        result.innerHTML = "Du hast Papier gewählt. Dein Gegner die Schere.Du hast verloren"
    }
    
}






clearAll = () => {window.location.reload()};