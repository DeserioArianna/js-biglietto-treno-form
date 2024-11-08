const formTicket = document.getElementById("form-ticket");
const numberKm = document.getElementById("number-km");
const passengerAge = document.getElementById("passenger-age");
// console.log(formTicket, numberKm, passengerAge)

const nameCard = document.getElementById("username-card");
const discountPrice = document.getElementById("discount");
const carriageNum = document.getElementById("carriage");
const codeCp = document.getElementById("code-cp");
const ticketPrice = document.getElementById("ticket-price");
// console.log(nameCard, discountPrice, carriageNum, codeCp, ticketPrice)

formTicket.addEventListener("submit", function(event) {
    event.preventDefault();

    const age = parseInt(passengerAge.value.trim());
    const distance = parseInt(numberKm.value.trim());

    const priceKm = 0.21;
    const distancePrice = priceKm * distance;

    let price;
    if (age < 18) {
        price = distancePrice - (distancePrice * 20 / 100);
    } else if (age > 18 && age < 65) {
        price = distancePrice;
    } else {
        price = distancePrice - (distancePrice * 40 / 100);
    }

    price = price.toFixed(2);
    // console.log(price)


})