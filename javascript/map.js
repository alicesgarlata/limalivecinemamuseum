const list = document.getElementById('list')
const markers = []

const locationCount = document.getElementById('location-count')
const filmCount = document.getElementById('film-count')
if (locationCount) locationCount.textContent = locations.length
if (filmCount) filmCount.textContent = films.length

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
        const card = template.content.cloneNode(true).firstElementChild
        card.dataset.location = locationSlug(loc.name)

        card.querySelector('[data-field="name"]').textContent = loc.name

        const badge = card.querySelector('[data-field="badge"]')
        badge.textContent = districtLabel(loc.district)
        badge.classList.add(slugify(loc.district))

        const moviesList = card.querySelector('[data-field="movies"]')
        loc.movies.forEach(function (m) {
            const tag = document.createElement('span')
            tag.className = 'movie-tag'
            tag.dataset.id = `movie-${locationSlug(loc.name)}-${m.year}`
            tag.textContent = `${m.title} (${m.year})`
            moviesList.appendChild(tag)
        })

        card.querySelector('[data-field="description"]').textContent =
            loc.cardDescription ? loc.cardDescription.short : (loc.descriptions.adult || '')
        card.dataset.textShort =
            loc.cardDescription ? loc.cardDescription.short : (loc.descriptions.adult || '')
        card.dataset.textLong =
            loc.cardDescription ? loc.cardDescription.long : (loc.descriptions.adult || '')
        card.querySelector('[data-field="access"]').textContent = loc.access

        const link = card.querySelector('[data-field="link"]')
        link.href = `location.html?name=${encodeURIComponent(loc.name)}`

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

    document.querySelectorAll('.card').forEach(function (c) {
        c.classList.remove('open')
        c.querySelector('.extra').classList.remove('open')
        c.querySelector('.btn-more').textContent = 'Tell me more…'

        const descEl = c.querySelector('.description')
        const cursor = descEl && descEl.querySelector('.typewriter-cursor')
        if (cursor) cursor.remove()

        if (descEl && c.dataset.textShort) {
            descEl.style.transition = 'none'
            descEl.style.opacity = '1'
            descEl.textContent = c.dataset.textShort
        }

        const bar = c.querySelector('.card-prev-next')
        if (bar) bar.remove()
    })

    if (!isOpen) {
        card.classList.add('open')

        if (lat && lng) {
            map.flyTo([lat, lng], 15)
            markers.forEach(function (m) {
                if (m.name === locName) m.marker.openPopup()
            })
        }

        const allCards = Array.from(document.querySelectorAll('.card'))
        const idx = allCards.indexOf(card)
        const prevCard = idx > 0 ? allCards[idx - 1] : null
        const nextCard = idx < allCards.length - 1 ? allCards[idx + 1] : null

        const bar = document.createElement('div')
        bar.className = 'card-prev-next'

        if (prevCard) {
            const prevBtn = document.createElement('button')
            prevBtn.className = 'card-nav-btn'
            prevBtn.textContent =
                '← ' + prevCard.querySelector('[data-field="name"]').textContent

            prevBtn.addEventListener('click', function (e) {
                e.stopPropagation()
                prevCard.click()
                prevCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
            })

            bar.appendChild(prevBtn)
        } else {
            bar.appendChild(document.createElement('span'))
        }

        if (nextCard) {
            const nextBtn = document.createElement('button')
            nextBtn.className = 'card-nav-btn card-nav-next'
            nextBtn.textContent =
                nextCard.querySelector('[data-field="name"]').textContent + ' →'

            nextBtn.addEventListener('click', function (e) {
                e.stopPropagation()
                nextCard.click()
                nextCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
            })

            bar.appendChild(nextBtn)
        }

        card.appendChild(bar)
    }
}

function expandCard(e, btn) {
    e.stopPropagation()

    const extra = btn.nextElementSibling
    const card = btn.closest('.card')
    const descEl = card.querySelector('.description')
    const isOpen = extra.classList.contains('open')

    const nextText = isOpen ? card.dataset.textShort : card.dataset.textLong

    descEl.style.transition = 'opacity 0.25s'
    descEl.style.opacity = '0'

    setTimeout(function () {
        descEl.textContent = nextText
        descEl.style.opacity = '1'

        if (isOpen) {
            extra.classList.remove('open')
            btn.textContent = 'Tell me more…'
        } else {
            extra.classList.add('open')
            btn.textContent = 'Tell me less'
        }
    }, 250)
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

/*
 * Two basemaps:
 * - CARTO Light keeps the site's normal clean appearance.
 * - Standard OpenStreetMap has much stronger coast/road/building linework,
 *   which survives the early-print CSS treatment instead of disappearing.
 */
const modernBaseLayer = L.tileLayer(
    'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
    {
        attribution: '© OpenStreetMap contributors, © CARTO',
        maxZoom: 19,
        subdomains: 'abcd'
    }
)

const earlyPrintBaseLayer = L.tileLayer(
    'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
    }
)

let activeBaseLayer = null

function currentEra() {
    return (
        document.body?.dataset.era ||
        document.documentElement.dataset.era ||
        'default'
    )
}

function setMapBaseForEra(era) {
    const wantedLayer =
        era === 'early-print' ? earlyPrintBaseLayer : modernBaseLayer

    if (activeBaseLayer === wantedLayer) return

    if (activeBaseLayer && map.hasLayer(activeBaseLayer)) {
        map.removeLayer(activeBaseLayer)
    }

    wantedLayer.addTo(map)
    wantedLayer.bringToBack()
    activeBaseLayer = wantedLayer
}

setMapBaseForEra(currentEra())

/*
 * theme.js already dispatches this event whenever the user changes era.
 * This means the basemap changes instantly without reloading the page.
 */
window.addEventListener('lima:themechange', function (event) {
    const era = event.detail && event.detail.theme
        ? event.detail.theme
        : currentEra()

    setMapBaseForEra(era)
})

locations.forEach(function (loc) {
    if (!loc.lat || !loc.lng) return

    const imgHtml = loc.image
        ? `<div class="popup-img-wrap"><img src="${loc.image}" alt="${loc.name}" class="popup-img"></div>`
        : `<div class="popup-img-placeholder"></div>`

    const popupHtml = `
        <div class="popup-card">
            ${imgHtml}
            <div class="popup-name">${loc.name}</div>
        </div>`

    const marker = L.marker(
        [loc.lat, loc.lng],
        { icon: createPin(loc.district) }
    )
        .addTo(map)
        .bindPopup(
            popupHtml,
            { maxWidth: 180, className: 'custom-popup' }
        )

    markers.push({ name: loc.name, marker: marker })
})

showCard(locations)

document.getElementById('heroBtn').addEventListener('click', function () {
    document.querySelector('.filter-bar').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})
