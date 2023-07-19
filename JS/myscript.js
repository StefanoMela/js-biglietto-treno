// INPUT UTENTE

const totalKm = parseInt(prompt("Inserisci la distanza da percorre in Km"));
const userAge = parseInt(prompt("Inserisci la tua età", "18"));


// CALCOLI

const kmPrice = totalKm * .21;

let discount = 0

// CHECK INPUT UTENTE

if (isNaN(totalKm) || isNaN(userAge)) {

    alert("devi inserire un numero!")

} else {

    if (userAge < 18) {

        discount = (kmPrice * 20) / 100;

    } else if (userAge >= 65) {

        discount = (kmPrice * 40) / 100;

    }
}

const totalPrice = (kmPrice - discount).toFixed(2);

document.getElementById("ticketPrice").innerHTML = ("il prezzo totale del tuo biglietto è " + totalPrice + "€")
