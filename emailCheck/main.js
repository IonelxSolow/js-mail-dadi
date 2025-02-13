// crea una lista di invitati alla festa tramite "email"
const invitati = ["edoardo@gmail.com", "ionel@gmail.com", "giuseppe@gmail.com"];

//chiedi all'utente di inserire la sua email //prompt
const emailUtente = prompt("Inserisci la tua email:");

//controlla se l'email cè dentro la lista email
let emailTrovata = false;



for (let i = 0; i < invitati.length; i++) {
    if (invitati[i] === emailUtente){
        emailTrovata = true;
        console.log(emailTrovata)
    } else {
        console.log(emailTrovata)
        
    }
}
//se l'email e stata trovata stampa un messaggio in console
if (emailTrovata) {
    console.log("Email trovata, Puoi accedere")
} else {
    console.log("Email non trovata, riprova")
}