/*const emails = ['giovanni@gmail.com', 'lorenzo@outlook.it', 'maurizio@outlook.com', 'nicola@libero.it'];
console.log(emails);
let checkEmail = false;
let userEmail = prompt('inserisci la tua e-mail');

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
    console.log('Email trovata');
}
    else {
        emails.push(userEmail);
        console.log('Email non presente');
    }
console.log(emails);
*/


let userNumber = parseInt(prompt('Inserisci un numero compreso tra 1 e 6'));
let pcNumber = Math.floor(Math.random() * 6) + 1;

for (; userNumber > 6 || userNumber <=0;){
    userNumber = parseInt(prompt('Hai inserito un numero sbagliato. Inseriscilo di nuovo'));
}

if (userNumber > pcNumber){
    console.log(`${userNumber}-${pcNumber}: hai vinto!`);
} 
else if (userNumber < pcNumber){
    console.log(`${userNumber}-${pcNumber}: hai perso!`);
} 
else {
    console.log('Pareggio');
}

