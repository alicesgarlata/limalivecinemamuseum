const map = L.map("map").setview([44.49631992657579, 11.34198518221332], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"), {
    attribution: "&copy, OpenStreetMap"
}.addTo(map);

const cards = document.querySelectorAll(".card");
const markers = [];

cards.forEach((card, index) => {
    const lat = card.dataset.lat;
    const lng = card.dataset.lng;

    const marker = L.marker([lat, lng]).addTo(map);

    markers.push(marker);

    marker.on("click", () => {
        cards.forEach(c => c.classList.remove("active"));
        card.classList.add("active");

        card.scrollIntoView({ behaviour: "smooth", block: "center" });
    });

    card.addEventListener("click", () => {
        map.setView([lat, lng], 15);

        cards.forEach(c => c.classList.remove("active"));
        card.classList.add("active");
    });
});