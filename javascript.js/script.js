/* 
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
*/

const mail = ['giovanni@gmail.com', 'lorenzo@outlook.it', 'maurizio@outlook.com', 'nicola@libero.it'];
let inserimento = prompt('inserisci la tua e-mail');
for (i=0; i<mail.length; i++){
    if (inserimento === mail[i]){
                    console.log('e-mail trovata');
                    break;
    }
    else 
    {
       if (inserimento !== mail[i]){
        console.log('e-mail non trovata');
        break;
       } 
    }
}

