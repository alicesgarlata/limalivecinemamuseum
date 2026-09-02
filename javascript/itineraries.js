// ── tab switcher ──────────────────────────────────────────────────────
const maps = {};
const narrativeTabs = Array.from(document.querySelectorAll('.narrative-tab'));
const narrativeKeys = new Set(narrativeTabs.map(tab => tab.dataset.narrative));

function activateNarrative(key, options = {}) {
    if (!narrativeKeys.has(key)) return;

    const settings = Object.assign({ scroll: false, updateUrl: false }, options);
    narrativeTabs.forEach(tab => {
        tab.classList.toggle('active', tab.dataset.narrative === key);
    });
    document.querySelectorAll('.narrative-content').forEach(content => {
        content.classList.toggle('active', content.id === `narrative-${key}`);
    });

    if (settings.updateUrl) {
        window.history.replaceState(null, '', `#${key}`);
    }
    if (settings.scroll) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    if (maps[key]) {
        setTimeout(() => maps[key].invalidateSize(), 100);
    }
}

narrativeTabs.forEach(tab => {
    tab.addEventListener('click', function () {
        activateNarrative(this.dataset.narrative, { scroll: true, updateUrl: true });
    });
});

// ── shared tile layer factory ─────────────────────────────────────────
function tileLayer() {
    return L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
    });
}

// ── numbered marker factory ───────────────────────────────────────────
function numIcon(n, color) {
    color = color || '#1a1a1a';
    return L.divIcon({
        className: '',
        html: `<div class="num-marker" style="background:${color}">${n}</div>`,
        iconSize: [26, 26],
        iconAnchor: [13, 13],
        popupAnchor: [0, -14]
    });
}

// ── MAP I: TIMELINE (key locations across all chapters) ───────────────
(function () {
    const m = L.map('map-timeline').setView([-12.08, -77.05], 12);
    tileLayer().addTo(m);
    maps['timeline'] = m;

    const pts = [
        { name: 'San Martin Square',   lat: -12.0508, lng: -77.0345, n: 1 },
        { name: 'Jirón de la Unión',   lat: -12.0496, lng: -77.0341, n: 2 },
        { name: 'Río Rímac',           lat: -12.0439, lng: -77.0210, n: 3 },
        { name: 'Magdalena Market',    lat: -12.0928, lng: -77.0655, n: 4 },
        { name: 'Malecón de Miraflores', lat: -12.1243, lng: -77.0384, n: 5 },
        { name: 'Calle Tarata',        lat: -12.1235, lng: -77.0288, n: 6 },
        { name: 'Larcomar',            lat: -12.1319, lng: -77.0305, n: 7 },
        { name: 'Muelle Sur del Callao', lat: -12.0554, lng: -77.1506, n: 8 },
        { name: 'Isla El Frontón',     lat: -12.1165, lng: -77.1814, n: 9 },
    ];

    pts.forEach(p => {
        L.marker([p.lat, p.lng], { icon: numIcon(p.n) })
          .addTo(m)
          .bindPopup(`<strong>${p.name}</strong>`);
    });
})();

// ── MAP II: MIRAFLORES ────────────────────────────────────────────────
(function () {
    const stops = [
        { name: 'Parque Kennedy',        lat: -12.1217, lng: -77.0304, n: 1, url: 'location.html?name=Parque%20John%20F.%20Kennedy' },
        { name: 'Calle Tarata',          lat: -12.1235, lng: -77.0288, n: 2, url: 'location.html?name=Calle%20Tarata' },
        { name: 'Avenida Larco',         lat: -12.1260, lng: -77.0304, n: 3, url: 'location.html?name=Avenida%20Larco' },
        { name: 'Malecón de Miraflores', lat: -12.1243, lng: -77.0384, n: 4, url: 'location.html?name=Malecon%20de%20Miraflores' },
        { name: 'Calle de las Pizzas',   lat: -12.1209, lng: -77.0300, n: 5, url: 'location.html?name=Calle%20de%20las%20Pizzas' },
    ];

    const m = L.map('map-miraflores').setView([-12.126, -77.032], 15);
    tileLayer().addTo(m);
    maps['miraflores'] = m;

    const latlngs = stops.map(s => [s.lat, s.lng]);
    L.polyline(latlngs, { color: '#1a1a1a', weight: 2, dashArray: '5,6', opacity: 0.6 }).addTo(m);

    stops.forEach(s => {
        L.marker([s.lat, s.lng], { icon: numIcon(s.n) })
          .addTo(m)
          .bindPopup(`<strong>${s.name}</strong><br><a href="${s.url}" style="font-size:11px;">Open location →</a>`);
    });
})();

// ── MAP III: SAN ISIDRO ───────────────────────────────────────────────
(function () {
    const stops = [
        { name: 'Bosque El Olivar', lat: -12.1021, lng: -77.0352, n: 1, url: 'location.html?name=Bosque%20El%20Olivar' },
        { name: 'Country Club Lima Hotel', lat: -12.0980, lng: -77.0490, n: 2, url: 'location.html?name=Country%20Club%20Lima%20Hotel' },
        { name: 'Santa Cruz Residential Complex', lat: -12.1097, lng: -77.0495, n: 3, url: 'location.html?name=Residencial%20Santa%20Cruz' },
    ];

    const m = L.map('map-sanisidro').setView([-12.105, -77.037], 15);
    tileLayer().addTo(m);
    maps['sanisidro'] = m;

    const latlngs = stops.map(s => [s.lat, s.lng]);
    L.polyline(latlngs, { color: '#1a1a1a', weight: 2, dashArray: '5,6', opacity: 0.6 }).addTo(m);

    stops.forEach(s => {
        L.marker([s.lat, s.lng], { icon: numIcon(s.n) })
          .addTo(m)
          .bindPopup(`<strong>${s.name}</strong><br><a href="${s.url}" style="font-size:11px;">Open location →</a>`);
    });
})();

// ── MAP IV: CALLAO & LA PUNTA ─────────────────────────────────────────
(function () {
    const stops = [
        { name: 'Jorge Chávez International Airport', lat: -12.0198, lng: -77.1087, n: 1, url: 'location.html?name=Jorge%20Ch%C3%A1vez%20International%20Airport' },
        { name: 'Callao Monumental', lat: -12.0598, lng: -77.1385, n: 2, url: 'location.html?name=Monumental%20Del%20Callao' },
        { name: 'La Punta — Cantolao Beach', lat: -12.0763, lng: -77.1630, n: 3, url: 'location.html?name=Playa%20Cantolao' },
        { name: 'Isla El Frontón',   lat: -12.1165, lng: -77.1814, n: 4, url: 'location.html?name=Isla%20El%20Front%C3%B3n' },
    ];

    const m = L.map('map-callao').setView([-12.067, -77.145], 12);
    tileLayer().addTo(m);
    maps['callao'] = m;

    const latlngs = stops.map(s => [s.lat, s.lng]);
    L.polyline(latlngs, { color: '#1a1a1a', weight: 2, dashArray: '5,6', opacity: 0.6 }).addTo(m);

    stops.forEach(s => {
        const popup = s.url
            ? `<strong>${s.name}</strong><br><a href="${s.url}" style="font-size:11px;">Open location →</a>`
            : `<strong>${s.name}</strong>`;
        L.marker([s.lat, s.lng], { icon: numIcon(s.n) })
          .addTo(m)
          .bindPopup(popup);
    });
})();

// ── MAP V: LIMA, VIOLENCE & MEMORY ────────────────────────────────────
(function () {
    const stops = [
        {
            name: 'Calle Tarata',
            lat: -12.1235,
            lng: -77.0288,
            n: 1,
            url: 'location.html?name=Calle%20Tarata'
        },
        {
            name: 'Calle Varsovia',
            lat: -12.1136,
            lng: -77.0110,
            n: 2,
            url: 'location.html?name=Calle%20Varsovia'
        },
        {
            name: 'Puente de los Suspiros',
            lat: -12.1492,
            lng: -77.0218,
            n: 3,
            url: 'location.html?name=Bridge%20of%20Sighs%20-%20Puente%20de%20Los%20Suspiros'
        }
    ];

    const m = L.map('map-conflict').setView([-12.133, -77.021], 13);
    tileLayer().addTo(m);
    maps['conflict'] = m;

    const latlngs = stops.map(s => [s.lat, s.lng]);
    L.polyline(latlngs, {
        color: '#1a1a1a',
        weight: 2,
        dashArray: '5,6',
        opacity: 0.6
    }).addTo(m);

    stops.forEach(s => {
        L.marker([s.lat, s.lng], { icon: numIcon(s.n) })
          .addTo(m)
          .bindPopup(`<strong>${s.name}</strong><br><a href="${s.url}" style="font-size:11px;">Open location →</a>`);
    });
})();

const requestedNarrative = window.location.hash.slice(1);
if (narrativeKeys.has(requestedNarrative)) {
    activateNarrative(requestedNarrative);
}

window.addEventListener('hashchange', function () {
    const key = window.location.hash.slice(1);
    if (narrativeKeys.has(key)) activateNarrative(key);
});
