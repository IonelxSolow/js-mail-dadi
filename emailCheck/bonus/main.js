const invitati = ["edoardo@gmail.com", "ionel@gmail.com", "giuseppe@gmail.com"];

const emailUtente = prompt("Inserisci la tua email:");

const emailTrovata = invitati.includes(emailUtente);
console.log(emailTrovata)
if (emailTrovata == true) {
    console.log("l'email e statta trovata")
} else {
    console.log("l'email NON e stata trovata")
}
