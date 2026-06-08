const list = document.getElementById('list')
const markers = []

// ── filter pills (built from districtColors in data.js) ──────────────────────
const filterBar = document.getElementById('filter-bar')

const allBtn = document.createElement('button')
allBtn.className = 'pill active'
allBtn.textContent = 'All'
allBtn.addEventListener('click', function (e) { filterByDistrict(e, 'All') })
filterBar.appendChild(allBtn)

Object.entries(districtColors).forEach(function ([district, color]) {
    const btn = document.createElement('button')
    btn.className = 'pill'
    btn.style.setProperty('--color', color)
    btn.textContent = district
    btn.addEventListener('click', function (e) { filterByDistrict(e, district) })
    filterBar.appendChild(btn)
})

// ── helpers ──────────────────────────────────────────────────────────────────

function slugify(str) {
    const s = Array.isArray(str) ? str[0] : str
    return s.toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[àáâ]/g, 'a')
        .replace(/[èéê]/g, 'e')
        .replace(/[ùú]/g, 'u')
        .replace(/[íì]/g, 'i')
        .replace(/[ñ]/g, 'n')
}

function districtLabel(district) {
    return Array.isArray(district) ? district.join(', ') : district
}

function districtColor(district) {
    const d = Array.isArray(district) ? district[0] : district
    return districtColors[d] || '#444'
}

function locationSlug(name) {
    return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
}

// ── map pin ───────────────────────────────────────────────────────────────────

function createPin(district) {
    const color = districtColor(district)
    return L.divIcon({
        className: '',
        html: `<div style="
            width:14px; height:14px; border-radius:50%;
            background:${color}; border:2px solid white;
            box-shadow:0 1px 4px rgba(0,0,0,0.3);
        "></div>`,
        iconSize: [14, 14],
        iconAnchor: [7, 7],
        popupAnchor: [0, -10]
    })
}

// ── card rendering (uses <template id="card-template"> from index.html) ───────

function showCard(data) {
    list.innerHTML = ''
    const template = document.getElementById('card-template')

    data.forEach(function (loc) {
        // clone the template — gives us a fresh copy of the card skeleton
        const card = template.content.cloneNode(true).firstElementChild

        // unique identifier on the card element itself
        card.dataset.location = locationSlug(loc.name)

        // fill in text values using DOM methods, no string concatenation
        card.querySelector('[data-field="name"]').textContent = loc.name

        const badge = card.querySelector('[data-field="badge"]')
        badge.textContent = districtLabel(loc.district)
        badge.classList.add(slugify(loc.district))

        // build movie tags
        const moviesList = card.querySelector('[data-field="movies"]')
        loc.movies.forEach(function (m) {
            const tag = document.createElement('span')
            tag.className = 'movie-tag'
            // unique data-id so we could target this exact tag later if needed
            tag.dataset.id = `movie-${locationSlug(loc.name)}-${m.year}`
            tag.textContent = `${m.title} (${m.year})`
            moviesList.appendChild(tag)
        })

        card.querySelector('[data-field="description"]').textContent = loc.descriptions.adult
        card.querySelector('[data-field="access"]').textContent = loc.access

        const link = card.querySelector('[data-field="link"]')
        link.href = `location.html?name=${encodeURIComponent(loc.name)}`

        // attach event listeners directly — no onclick attributes in HTML
        card.querySelector('.btn-more').addEventListener('click', function (e) {
            expandCard(e, this)
        })
        card.addEventListener('click', function () {
            toggleDetail(this, loc.name, loc.lat, loc.lng)
        })

        list.appendChild(card)
    })
}

// ── card interactions ─────────────────────────────────────────────────────────

function toggleDetail(card, locName, lat, lng) {
    const isOpen = card.classList.contains('open')

    // close all cards first
    document.querySelectorAll('.card').forEach(function (c) {
        c.classList.remove('open')
        c.querySelector('.extra').classList.remove('open')
        c.querySelector('.btn-more').textContent = 'Tell me more…'
    })

    if (!isOpen) {
        card.classList.add('open')
        if (lat && lng) {
            map.flyTo([lat, lng], 15)
            markers.forEach(function (m) {
                if (m.name === locName) m.marker.openPopup()
            })
        }
    }
}

function expandCard(e, btn) {
    e.stopPropagation()
    const extra = btn.nextElementSibling
    const isOpen = extra.classList.contains('open')
    extra.classList.toggle('open')
    btn.textContent = isOpen ? 'Tell me more…' : 'Tell me less'
}

// ── district filter ───────────────────────────────────────────────────────────

function filterByDistrict(e, district) {
    document.querySelectorAll('.pill').forEach(function (pill) {
        pill.classList.remove('active')
    })
    e.target.classList.add('active')

    const filtered = district === 'All'
        ? locations
        : locations.filter(function (loc) {
            return Array.isArray(loc.district)
                ? loc.district.includes(district)
                : loc.district === district
        })
    showCard(filtered)
}

// ── map init ──────────────────────────────────────────────────────────────────

const map = L.map('map').setView([-12.0464, -77.0428], 12)
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map)

locations.forEach(function (loc) {
    if (!loc.lat || !loc.lng) return
    const movieTitles = loc.movies.map(m => `${m.title} (${m.year})`).join('<br>') || '<i>no films listed yet</i>'
    const marker = L.marker([loc.lat, loc.lng], { icon: createPin(loc.district) })
        .addTo(map)
        .bindPopup(`<b>${loc.name}</b><br>${movieTitles}`)
    markers.push({ name: loc.name, marker: marker })
})

showCard(locations)

document.getElementById('heroBtn').addEventListener('click', function () {
    document.querySelector('.filter-bar').scrollIntoView({ behavior: 'smooth', block: 'start' })
})
