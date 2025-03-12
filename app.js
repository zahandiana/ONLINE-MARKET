// Slider dinamic pentru oferte speciale
const offers = document.querySelector('.offer-slider');
let currentIndex = 0;

function slideOffers() {
    offers.scrollBy({ left: 200, behavior: 'smooth' });
    currentIndex++;
    if (currentIndex >= offers.children.length) {
        currentIndex = 0;
        offers.scrollTo({ left: 0 });
    }
}

setInterval(slideOffers, 3000); // Schimbă ofertele la fiecare 3 secunde
