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
