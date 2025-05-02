// DICHIARAZIONE ED INIZIALIZZAZIONE DELLA VARIABILE CONTENENTE GLI INVITATI AD UNA FESTA
const emails = ['giovanni@gmail.com', 'lorenzo@outlook.it', 'maurizio@outlook.com', 'nicola@libero.it'];
console.log(emails);

// DICHIARAZIONE ED INIZIALIZZAZIONE DI UNA VARIABILE CHE ANDRA' A CONTROLLARE L'EMAIL ED INIZIALIZZATA A FALSE
let checkEmail = false;

// INSERIMENTO DELL'E-MAIL DA PARTE DELL'UTENTE  
let userEmail = prompt('inserisci la tua e-mail');

// CONTROLLO DELL'E-MAIL DELL'UTENTE PER POTER ACCEDERE ALLA FESTA 
if(!userEmail.includes('@') || !userEmail.includes('.')){
    userEmail = prompt('Email inserita non valida. Inseriscila di nuovo');
}

for (let i = 0; checkEmail == false && i < emails.length; i++) {
    if (emails[i] === userEmail) {
        checkEmail = true;
    }
    console.log(i);
}
if (checkEmail == true){
    // STAMPA TRAMITE UN MESSAGGIO L'ESITO DEL CONTROLLO
    console.log('Email trovata');
}
    // ALTRIMENTI L'UTENTE NON POTRA' PARTECIPARE ALLA FESTA
    else {
        emails.push(userEmail);
        // STAMPA TRAMITE UN MESSAGGIO L'ESITO DEL CONTROLLO
        console.log('Email non presente');
    }
console.log(emails);

// DICHIARAZIONE DELLA VARIABILE UserNumber ED INSERIMENTO DEL NUMERO DA PARTE DELL'UTENTE
let userNumber = parseInt(prompt('Inserisci un numero compreso tra 1 e 6'));

// DICHIARAZIONE DELLA VARIABILE pcNumber E GENERAZIONE DI UN NUMERO CASUALE
let pcNumber = Math.floor(Math.random() * 6) + 1;

for (; userNumber > 6 || userNumber <=0;){
    userNumber = parseInt(prompt('Hai inserito un numero sbagliato. Inseriscilo di nuovo'));
}

// SE IL NUMERO INSERITO DAL GIOCATORE HA UN PUNTEGGIO SUPERIORE HA VINTO IL GIOCATORE
if (userNumber > pcNumber){
    console.log(`${userNumber}-${pcNumber}: hai vinto!`);
} 

// ALTRIMENTI SE IL NUMERO INSERITO DAL GIOCATORE HA UN PUNTEGGIO INFERIORE HA VINTO IL COMPUTER 
else if (userNumber < pcNumber){
    console.log(`${userNumber}-${pcNumber}: hai perso!`);
} 
else {
    console.log('Pareggio');
}

