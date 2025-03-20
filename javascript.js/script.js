const email = ['giovanni@gmail.com', 'lorenzo@outlook.it', 'maurizio@outlook.com', 'nicola@libero.it'];
let inserimentoUtente = prompt('inserisci la tua e-mail');
let controllo = false;
for (let i = 0; controllo === false && i < email.length; i++) {
    if (email[i] === inserimentoUtente) {
        controllo = true;
    }
}
if (controllo == true) {
    console.log('e-mail trovata');
}
else {
    console.log('e-mail non trovata')
}


let giocatore = parseInt(prompt('Inserisci un numero compreso tra 1 e 6'));
let computer = Math.floor(Math.random() * 6) + 1;
console.log(computer);
if (giocatore > computer) {
    console.log("il giocatore ha vinto");
}
else if (giocatore < computer) {
    console.log("il computer ha vinto");
}
else {
    console.log('Non ha vinto nessuno, entrambi hanno pareggiato');
}
 

