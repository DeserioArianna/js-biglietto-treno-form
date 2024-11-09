const formTicket = document.getElementById("form-ticket");
const usernamePassenger = document.getElementById("username");
const numberKm = document.getElementById("number-km");
const passengerAge = document.getElementById("passenger-age");
// console.log(formTicket, numberKm, passengerAge, username)

const nameCard = document.getElementById("username-card");
const discountPrice = document.getElementById("discount");
const carriageNum = document.getElementById("carriage");
const codeCp = document.getElementById("code-cp");
const ticketPrice = document.getElementById("ticket-price");
// console.log(nameCard, discountPrice, carriageNum, codeCp, ticketPrice)

const card = document.querySelector(".card"); 

formTicket.addEventListener("submit", function(event) {
    event.preventDefault();

    const age = parseInt(passengerAge.value.trim());
    const distance = parseInt(numberKm.value.trim());

    const priceKm = 0.21;
    const distancePrice = priceKm * distance;
    const discount20 = distancePrice * 20 / 100;
    const discount40 = distancePrice * 40 / 100;

    let price;
    let discountApplied;
    if (age < 18) {
        price = distancePrice - discount20;
        discountApplied = `Sconto 20%: €${discount20.toFixed(2)}`;
    } else if (age >= 18 && age < 65) {
        price = distancePrice;
        discountApplied = "Prezzo standart";
    } else {
        price = distancePrice - discount40;
        discountApplied =`Sconto 40%: €${discount40.toFixed(2)}`;
    }

    price = price.toFixed(2);
    console.log(price)

    card.classList.remove("d-none");
    card.classList.add("d-block");

    nameCard.innerHTML = ` ${usernamePassenger.value.trim()}`;
    discountPrice.innerHTML = ` ${discountApplied}`;
    carriageNum.innerHTML = Math.floor(Math.random()* 10) + 1;
    codeCp.innerHTML = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
    ticketPrice.innerHTML = `${price}€`;

})