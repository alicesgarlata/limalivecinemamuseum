const params = new URLSearchParams(window.location.search)
const locationName = params.get('name')
const loc = locations.find(l => l.name === locationName)
if (!loc) {
    const page = document.querySelector('.location-page')
    const notice = document.createElement('div')
    notice.className = 'location-not-found'
    notice.innerHTML = '<h1>Location not found</h1><p>This location is not available in the museum catalogue.</p><p><a href="index.html">← Return to the map</a></p>'
    if (page) page.replaceChildren(notice)
    throw new Error('Unknown location requested')
}

// ── state ─────────────────────────────────────────────────────────────
const TONES   = ['young', 'adult', 'professional']
const LENGTHS = ['brief', 'mid', 'long']
let currentTone   = 'adult'
let currentLength = 'mid'

// ── banner ────────────────────────────────────────────────────────────
document.getElementById('loc-name').textContent = loc.name
const header = document.getElementById('loc-header')
if (loc.image) {
    header.style.backgroundImage = `url('${loc.image}')`
} else {
    header.classList.add('no-image')
}

const badge = document.getElementById('loc-badge')
const districtLabel = Array.isArray(loc.district) ? loc.district.join(', ') : loc.district
const districtClass = districtLabel.toLowerCase()
    .replace(/\s+/g, '-').replace(/[àáâ]/g, 'a').replace(/[èéê]/g, 'e')
    .replace(/[ùú]/g, 'u').replace(/[íì]/g, 'i').replace(/[ñ]/g, 'n')
    .split(',')[0].trim()
badge.textContent = districtLabel
badge.className = 'badge ' + districtClass
if (loc.address) document.getElementById('loc-address').textContent = loc.address
document.getElementById('loc-access').textContent = loc.access

// ── text grid resolver ────────────────────────────────────────────────
// Returns { text, fallback: bool } for the current tone+length combination.
// Falls back to mid of same tone if the exact cell is missing.
function resolveText(tone, length) {
    const t = loc.texts && loc.texts[tone]
    if (!t) return { text: loc.descriptions ? loc.descriptions[tone] || '' : '', fallback: false }
    if (t[length]) return { text: t[length], fallback: false }
    if (t['mid'])  return { text: t['mid'], fallback: true }
    return { text: '', fallback: true }
}

// ── render description ────────────────────────────────────────────────
const descEl      = document.getElementById('loc-description')
const noteEl      = document.getElementById('loc-fallback-note')
const labelEl     = document.getElementById('difficulty-label')
const lengthLbl   = document.getElementById('length-label')
const btnSimpler  = document.getElementById('btn-simpler')
const btnHarder   = document.getElementById('btn-harder')
const btnShorter  = document.getElementById('btn-shorter')
const btnLonger   = document.getElementById('btn-longer')

const LENGTH_LABELS = { brief: 'Brief', mid: 'Mid', long: 'Long' }

function renderDescription() {
    const { text, fallback } = resolveText(currentTone, currentLength)
    descEl.textContent = text

    noteEl.textContent   = fallback ? '(Full version for this level coming soon)' : ''
    noteEl.style.display = fallback ? 'block' : 'none'

    const toneIdx   = TONES.indexOf(currentTone)
    const lengthIdx = LENGTHS.indexOf(currentLength)

    labelEl.textContent   = currentTone.charAt(0).toUpperCase() + currentTone.slice(1)
    lengthLbl.textContent = LENGTH_LABELS[currentLength]

    btnSimpler.disabled = toneIdx === 0
    btnHarder.disabled  = toneIdx === TONES.length - 1
    btnShorter.disabled = lengthIdx === 0
    btnLonger.disabled  = lengthIdx === LENGTHS.length - 1
}

// ── difficulty (competence) arrow controls ────────────────────────────
btnSimpler.addEventListener('click', function () {
    const idx = TONES.indexOf(currentTone)
    if (idx > 0) {
        currentTone = TONES[idx - 1]
        renderDescription()
    }
})
btnHarder.addEventListener('click', function () {
    const idx = TONES.indexOf(currentTone)
    if (idx < TONES.length - 1) {
        currentTone = TONES[idx + 1]
        renderDescription()
    }
})

// ── length arrow controls ─────────────────────────────────────────────
btnShorter.addEventListener('click', function () {
    const idx = LENGTHS.indexOf(currentLength)
    if (idx > 0) {
        currentLength = LENGTHS[idx - 1]
        renderDescription()
    }
})
btnLonger.addEventListener('click', function () {
    const idx = LENGTHS.indexOf(currentLength)
    if (idx < LENGTHS.length - 1) {
        currentLength = LENGTHS[idx + 1]
        renderDescription()
    }
})

// ── initial render ────────────────────────────────────────────────────
renderDescription()

const filmsContainer = document.getElementById('loc-films')
const filmsHeading = document.getElementById('loc-films-heading')
const filmLightbox = document.getElementById('location-film-lightbox')
const filmLightboxImage = document.getElementById('location-film-lightbox-image')
const filmLightboxCaption = document.getElementById('location-film-lightbox-caption')
const filmLightboxClose = document.getElementById('location-film-lightbox-close')

function profileImages(profile) {
    if (!profile) return []
    const values = []
    if (profile.image) values.push(...(Array.isArray(profile.image) ? profile.image : [profile.image]))
    if (profile.images) values.push(...(Array.isArray(profile.images) ? profile.images : [profile.images]))
    return [...new Set(values.filter(Boolean))]
}

function locationsForFilm(film) {
    return locations.filter(location => location.movies.some(movie => (
        movie.title === film.title && movie.year === film.year
    )))
}

function coverForFilm(film) {
    const profile = film.profile || null
    const images = profileImages(profile)
    if (images.length) return images[0]
    return locationsForFilm(film).find(location => location.image)?.image || ''
}

if (loc.movies.length === 0) {
    filmsHeading.style.display = 'none'
    filmsContainer.innerHTML = '<p class="no-films">No films catalogued for this location yet.</p>'
} else {
    filmsHeading.textContent = 'Films shot here'
    filmsContainer.innerHTML = ''
    loc.movies.forEach(function(movieRef, movieIndex) {
        const film = films.find(f => f.title === movieRef.title && f.year === movieRef.year)
        if (!film) return

        const genres = film.genres ? film.genres.join(', ') : ''
        const directors = film.director ? film.director.join(', ') : ''
        const cast = film.cast && film.cast.length ? film.cast.slice(0, 4).join(', ') : ''
        const countries = film.countries ? film.countries.join(', ') : ''

        const profile = film.profile || null
        const cover = coverForFilm(film)

        const filmImageHtml = `
            <div class="location-film-image">
                <button class="location-film-image-button" type="button" data-film-index="${movieIndex}" aria-haspopup="dialog" aria-label="Enlarge film image"${cover ? '' : ' disabled'}>
                    ${cover ? `<img src="${cover}" alt="" loading="lazy" decoding="async">` : ''}
                    <span class="location-film-image-fallback"${cover ? ' hidden' : ''}>${film.year}</span>
                </button>
            </div>`

        const profileHtml = profile ? `
            <button class="film-profile-toggle" type="button">About this film ↓</button>
            <div class="film-profile">
                <p class="film-profile-text">${profile.description}</p>
                <h4 class="film-profile-label">What it is about</h4>
                <p class="film-profile-text">${profile.about}</p>
                <h4 class="film-profile-label">Main themes</h4>
                <p class="film-profile-text film-profile-themes">${profile.themes}</p>
                <h4 class="film-profile-label">Why this location</h4>
                <p class="film-profile-text">${profile.value}</p>
            </div>` : ''

        filmsContainer.innerHTML += `
            <div class="film-card location-film-card">
                <h3 class="film-title">${film.title}</h3>
                ${filmImageHtml}
                <div class="location-film-details-row">
                    <div class="location-film-details">
                        <span class="film-year">${film.year}</span>
                        ${genres ? `<span class="film-genres">${genres}</span>` : ''}
                    </div>
                    ${film.wikidata_url ? `<a class="film-wiki" href="${film.wikidata_url}" target="_blank" rel="noopener">Wikidata ↗</a>` : ''}
                </div>
                <p class="film-description">${film.description}</p>
                <div class="film-meta">
                    ${directors ? `<span><span class="film-meta-label">Dir.</span> ${directors}</span>` : ''}
                    ${cast ? `<span><span class="film-meta-label">Cast</span> ${cast}</span>` : ''}
                    ${countries ? `<span><span class="film-meta-label">Countries</span> ${countries}</span>` : ''}
                </div>
                <a class="location-film-record-link" href="films.html?film=${encodeURIComponent(film.title)}">View in Films →</a>
                ${profileHtml}
            </div>
        `
    })

    filmsContainer.querySelectorAll('.location-film-image img').forEach(function(image) {
        image.addEventListener('error', function() {
            image.hidden = true
            const fallback = image.nextElementSibling
            if (fallback) fallback.hidden = false
            const button = image.closest('.location-film-image-button')
            if (button) button.disabled = true
        }, { once: true })
    })

    filmsContainer.querySelectorAll('.location-film-image-button').forEach(function(button) {
        const movieRef = loc.movies[Number(button.dataset.filmIndex)]
        const film = movieRef
            ? films.find(item => item.title === movieRef.title && item.year === movieRef.year)
            : null
        if (!film) return

        const image = button.querySelector('img')
        if (image) image.alt = `Scene from ${film.title}`
        button.setAttribute('aria-label', `View scene from ${film.title} at full size`)

        button.addEventListener('click', function() {
            const cover = coverForFilm(film)
            if (!cover || !filmLightbox) return
            filmLightboxImage.src = cover
            filmLightboxImage.alt = `Enlarged scene from ${film.title}`
            filmLightboxCaption.textContent = `${film.title} (${film.year})`
            if (typeof filmLightbox.showModal === 'function') {
                filmLightbox.showModal()
            } else {
                filmLightbox.setAttribute('open', '')
            }
            document.body.classList.add('location-film-lightbox-open')
        })
    })

    filmsContainer.querySelectorAll('.film-profile-toggle').forEach(function(button) {
        button.addEventListener('click', function() {
            button.classList.toggle('open')
            const profile = button.nextElementSibling
            if (profile) profile.classList.toggle('open')
        })
    })
}

function closeFilmLightbox() {
    if (!filmLightbox) return
    if (filmLightbox.open && typeof filmLightbox.close === 'function') filmLightbox.close()
    else filmLightbox.removeAttribute('open')
    document.body.classList.remove('location-film-lightbox-open')
}

filmLightboxClose.addEventListener('click', closeFilmLightbox)
filmLightbox.addEventListener('close', function() {
    document.body.classList.remove('location-film-lightbox-open')
    filmLightboxImage.removeAttribute('src')
})
filmLightbox.addEventListener('click', function(event) {
    if (event.target !== filmLightbox) return
    const bounds = filmLightbox.getBoundingClientRect()
    const inside = event.clientX >= bounds.left && event.clientX <= bounds.right
        && event.clientY >= bounds.top && event.clientY <= bounds.bottom
    if (!inside) closeFilmLightbox()
})

// ── scheda estesa (Introduction / History / Curiosity / ecc.) ──────────
// Non tutte le location hanno una scheda: se manca, non mostriamo nulla.
const schedaData = (typeof schede !== 'undefined') ? schede[loc.name] : null
const schedaContainer = document.getElementById('loc-scheda')

if (schedaData) {
    const tabs = [
        { key: 'Introduction', label: 'Introduction' },
        { key: 'General Information and Location', label: 'General Info' },
        { key: 'History of the Place', label: 'History' },
        { key: 'Highlighted Curiosity', label: 'Curiosity' },
        { key: 'Cultural and Urban Importance', label: 'Cultural Importance' },
        { key: 'Sources', label: 'Sources' }
    ].filter(tab => schedaData[tab.key] && schedaData[tab.key].trim() !== '')

    if (tabs.length > 0) {
        const tabBar = document.createElement('div')
        tabBar.className = 'scheda-tab-bar'

        const tabContent = document.createElement('div')
        tabContent.className = 'scheda-tab-content'

        function selectTab(key, btn) {
            tabBar.querySelectorAll('.scheda-tab-btn').forEach(b => b.classList.remove('active'))
            btn.classList.add('active')
            tabContent.innerHTML = schedaData[key]
        }

        tabs.forEach(function (tab, i) {
            const btn = document.createElement('button')
            btn.className = 'scheda-tab-btn' + (i === 0 ? ' active' : '')
            btn.textContent = tab.label
            btn.addEventListener('click', function () { selectTab(tab.key, btn) })
            tabBar.appendChild(btn)
        })

        const heading = document.createElement('h2')
        heading.className = 'scheda-heading'
        heading.textContent = 'Learn more'

        schedaContainer.appendChild(heading)
        schedaContainer.appendChild(tabBar)
        schedaContainer.appendChild(tabContent)

        tabContent.innerHTML = schedaData[tabs[0].key]
    }
}

// ── previous / next location ──────────────────────────────────────────
const locIndex = locations.findIndex(l => l.name === loc.name)
const prevLoc  = locIndex > 0 ? locations[locIndex - 1] : null
const nextLoc  = locIndex < locations.length - 1 ? locations[locIndex + 1] : null

const prevNextBar = document.createElement('div')
prevNextBar.className = 'prev-next-bar'
prevNextBar.innerHTML = `
    ${prevLoc
        ? `<a class="prev-next-btn prev-next-prev" href="location.html?name=${encodeURIComponent(prevLoc.name)}">← ${prevLoc.name}</a>`
        : `<span class="prev-next-btn prev-next-disabled">← First location</span>`}
    <a class="prev-next-home" href="index.html">↑ Map</a>
    ${nextLoc
        ? `<a class="prev-next-btn prev-next-next" href="location.html?name=${encodeURIComponent(nextLoc.name)}">${nextLoc.name} →</a>`
        : `<span class="prev-next-btn prev-next-disabled">Last location →</span>`}
`
document.querySelector('.location-page').appendChild(prevNextBar)
