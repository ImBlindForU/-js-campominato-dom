// Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.


// creare l'array per i numeri in progressione

// creo un ciclo per far prgogredire i numeri


const grid = document.querySelector(".grid")

let btn = document.getElementById("btn")
console.log(btn);

let square = []

let bomb = rdnNumbers(1,100,15)

console.log(bomb)

let message = document.getElementById("message")

btn.addEventListener("click", function(){
    grid.innerHTML = "";
    for (let i = 1; i <= 100; i++){
        
        // creo uno square per ogni numero
        let square = createSquare(i);
        
        // aggiungo un eventlistener
        square.addEventListener("click", function squareClick(){
            if (bomb.includes(i)){
                this.classList.add("red")  
                console.log(this.textContent)
                message.innerHTML = "hai perso"
               
            } else{
                this.classList.add("blue")
                console.log(this.textContent)
                message.innerHTML = "stai andando bene"
            }
        });
       
        // metto il risultato nell html
        grid.append(square)
    }
})


// funtions


function createSquare(numbers){
    let newSquare = document.createElement("div");
    newSquare.classList.add("square")
    newSquare.innerHTML = numbers;
    return newSquare;
}
  



function rdnNumbers(min, max, times) {
    const randoms = [];
    for(let i = 0; i < times; i++ ){
        randoms.push(Math.floor(Math.random() * (max - min) + min))
    }
    return randoms
}

