(function () {
    'use strict'

    const grid = document.getElementById('film-grid')
    const searchInput = document.getElementById('film-search')
    const decadeSelect = document.getElementById('film-decade')
    const sortSelect = document.getElementById('film-sort')
    const clearButton = document.getElementById('film-clear-filters')
    const resultsCount = document.getElementById('film-results-count')
    const emptyState = document.getElementById('film-empty-state')
    const dialog = document.getElementById('film-dialog')
    const dialogContent = document.getElementById('film-dialog-content')
    const dialogClose = document.getElementById('film-dialog-close')

    if (!grid || typeof films === 'undefined' || typeof locations === 'undefined') return

    function element(tag, className, text) {
        const node = document.createElement(tag)
        if (className) node.className = className
        if (text !== undefined && text !== null) node.textContent = text
        return node
    }

    function normalize(value) {
        return String(value || '')
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase()
            .trim()
    }

    function list(value) {
        return Array.isArray(value) ? value.filter(Boolean) : []
    }

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
        const linkedLocations = locationsForFilm(film)
        return linkedLocations.find(location => location.image)?.image || ''
    }

    function addImageFallback(image, fallback) {
        image.addEventListener('error', function () {
            image.remove()
            fallback.hidden = false
        }, { once: true })
    }

    function filmSearchText(film) {
        const linkedLocations = locationsForFilm(film)
        return normalize([
            film.title,
            film.year,
            ...list(film.director),
            ...list(film.genres),
            ...list(film.countries),
            ...linkedLocations.map(location => location.name),
            ...linkedLocations.flatMap(location => Array.isArray(location.district) ? location.district : [location.district])
        ].join(' '))
    }

    const catalogue = films.map(film => ({
        film,
        decade: Math.floor(film.year / 10) * 10,
        searchText: filmSearchText(film)
    }))

    function populatePageSummary() {
        const years = films.map(film => film.year).filter(Number.isFinite)
        document.getElementById('films-total').textContent = films.length
        document.getElementById('films-years').textContent = years.length
            ? `${Math.min(...years)}–${Math.max(...years)}`
            : 'Dates unavailable'

        const decades = [...new Set(catalogue.map(item => item.decade))].sort((a, b) => a - b)
        decades.forEach(decade => {
            const option = document.createElement('option')
            option.value = String(decade)
            option.textContent = `${decade}s`
            decadeSelect.appendChild(option)
        })
    }

    function makeCard(film) {
        const linkedLocations = locationsForFilm(film)
        const article = element('article', 'film-card film-collection-card')
        const button = element('button', 'film-card-open')
        button.type = 'button'
        button.setAttribute('aria-label', `Open the record for ${film.title}, ${film.year}`)

        const visual = element('div', 'film-card-visual')
        const fallback = element('div', 'film-card-fallback', String(film.year))
        const cover = coverForFilm(film)

        if (cover) {
            const image = document.createElement('img')
            image.src = cover
            image.alt = `Film image for ${film.title}`
            image.loading = 'lazy'
            image.decoding = 'async'
            fallback.hidden = true
            addImageFallback(image, fallback)
            visual.append(image, fallback)
        } else {
            visual.appendChild(fallback)
        }

        const index = element('span', 'film-card-index', String(film.year))
        visual.appendChild(index)

        const copy = element('div', 'film-card-copy')
        const meta = element('p', 'film-card-meta')
        meta.textContent = list(film.director).length
            ? list(film.director).join(', ')
            : 'Director not available'

        const title = element('h3', 'film-title', film.title)
        const description = element('p', 'film-description', film.description || '')

        const genres = element('div', 'film-card-genres')
        list(film.genres).slice(0, 3).forEach(genre => {
            genres.appendChild(element('span', 'film-genre-tag', genre))
        })

        const footer = element('div', 'film-card-footer')
        const locationLabel = linkedLocations.length === 1
            ? '1 mapped location'
            : `${linkedLocations.length} mapped locations`
        footer.append(
            element('span', 'film-location-count', locationLabel),
            element('span', 'film-card-arrow', 'Open record →')
        )

        copy.append(meta, title, description, genres, footer)
        button.append(visual, copy)
        button.addEventListener('click', () => openFilm(film, true))
        article.appendChild(button)
        return article
    }

    function render() {
        const query = normalize(searchInput.value)
        const decade = decadeSelect.value
        const order = sortSelect.value

        const visible = catalogue
            .filter(item => !query || item.searchText.includes(query))
            .filter(item => decade === 'all' || String(item.decade) === decade)
            .sort((a, b) => {
                if (order === 'newest') return b.film.year - a.film.year || a.film.title.localeCompare(b.film.title)
                if (order === 'title') return a.film.title.localeCompare(b.film.title)
                return a.film.year - b.film.year || a.film.title.localeCompare(b.film.title)
            })

        grid.replaceChildren(...visible.map(item => makeCard(item.film)))
        resultsCount.textContent = visible.length === 1
            ? '1 film shown'
            : `${visible.length} films shown`
        emptyState.hidden = visible.length !== 0
        clearButton.disabled = !query && decade === 'all' && order === 'oldest'
    }

    function addFact(container, label, value) {
        if (!value) return
        const item = element('div', 'film-dialog-fact')
        item.append(
            element('dt', 'film-dialog-label', label),
            element('dd', 'film-dialog-value', value)
        )
        container.appendChild(item)
    }

    function addTextSection(container, title, text) {
        if (!text) return
        const section = element('section', 'film-dialog-section')
        section.append(
            element('h3', 'film-dialog-section-title', title),
            element('p', 'film-dialog-text', text)
        )
        container.appendChild(section)
    }

    function makeDialogVisual(film, cover) {
        const visual = element('div', 'film-dialog-visual')
        const fallback = element('div', 'film-dialog-fallback', String(film.year))
        if (!cover) {
            visual.appendChild(fallback)
            return visual
        }

        const image = document.createElement('img')
        image.src = cover
        image.alt = `Film image for ${film.title}`
        addImageFallback(image, fallback)
        fallback.hidden = true
        visual.append(image, fallback)
        return visual
    }

    function makeLocationLinks(film) {
        const section = element('section', 'film-dialog-section film-dialog-locations')
        section.appendChild(element('h3', 'film-dialog-section-title', 'Locations in the museum'))
        const linkedLocations = locationsForFilm(film)

        if (!linkedLocations.length) {
            section.appendChild(element('p', 'film-dialog-text', 'No mapped location is currently linked to this film.'))
            return section
        }

        const listElement = element('ul', 'film-dialog-location-list')
        linkedLocations.forEach(location => {
            const item = document.createElement('li')
            const link = element('a', 'film-dialog-location-link', location.name)
            link.href = `location.html?name=${encodeURIComponent(location.name)}`
            const districts = Array.isArray(location.district) ? location.district.join(', ') : location.district
            item.append(link, element('span', 'film-dialog-location-district', districts || ''))
            listElement.appendChild(item)
        })
        section.appendChild(listElement)
        return section
    }

    function makeAdditionalImages(film, images) {
        if (images.length < 2) return null
        const section = element('section', 'film-dialog-section film-dialog-gallery')
        section.appendChild(element('h3', 'film-dialog-section-title', 'Images from the film'))
        const gallery = element('div', 'film-dialog-gallery-grid')
        images.slice(1).forEach(source => {
            const figure = document.createElement('figure')
            const image = document.createElement('img')
            image.src = source
            image.alt = `Additional film image for ${film.title}`
            image.loading = 'lazy'
            figure.appendChild(image)
            gallery.appendChild(figure)
        })
        section.appendChild(gallery)
        return section
    }

    function updateFilmQuery(title) {
        const url = new URL(window.location.href)
        if (title) url.searchParams.set('film', title)
        else url.searchParams.delete('film')
        window.history.replaceState({}, '', url)
    }

    function openFilm(film, updateUrl) {
        const profile = film.profile || null
        const images = profileImages(profile)
        const cover = images[0] || coverForFilm(film)
        const layout = element('article', 'film-dialog-layout')

        layout.appendChild(makeDialogVisual(film, cover))

        const record = element('div', 'film-dialog-record')
        const eyebrow = element('p', 'section-kicker', `${film.year} · Film record`)
        const title = element('h2', 'film-dialog-title', film.title)
        title.id = 'film-dialog-title'
        const facts = element('dl', 'film-dialog-facts')
        addFact(facts, 'Director', list(film.director).join(', '))
        addFact(facts, 'Country', list(film.countries).join(', '))
        addFact(facts, 'Genre', list(film.genres).join(', '))
        addFact(facts, 'Cast', list(film.cast).join(', '))
        addFact(facts, 'Production', list(film.production).join(', '))

        record.append(eyebrow, title, facts)
        addTextSection(record, 'Film description', film.description)
        if (profile) {
            addTextSection(record, 'Curatorial description', profile.description)
            addTextSection(record, 'About the film', profile.about)
            addTextSection(record, 'Main themes', profile.themes)
            addTextSection(record, 'Why these locations matter', profile.value)
        }
        record.appendChild(makeLocationLinks(film))

        const gallery = makeAdditionalImages(film, images)
        if (gallery) record.appendChild(gallery)

        if (film.wikidata_url) {
            const external = element('a', 'film-dialog-external', 'Open the Wikidata record ↗')
            external.href = film.wikidata_url
            external.target = '_blank'
            external.rel = 'noopener'
            record.appendChild(external)
        }

        layout.appendChild(record)
        dialogContent.replaceChildren(layout)

        if (typeof dialog.showModal === 'function') dialog.showModal()
        else dialog.setAttribute('open', '')
        document.body.classList.add('film-dialog-open')
        if (updateUrl) updateFilmQuery(film.title)
    }

    function closeFilm(updateUrl) {
        if (dialog.open && typeof dialog.close === 'function') dialog.close()
        else dialog.removeAttribute('open')
        document.body.classList.remove('film-dialog-open')
        if (updateUrl) updateFilmQuery('')
    }

    function openFilmFromUrl() {
        const title = new URLSearchParams(window.location.search).get('film')
        if (!title) return
        const film = films.find(item => item.title === title)
        if (film) openFilm(film, false)
    }

    searchInput.addEventListener('input', render)
    decadeSelect.addEventListener('change', render)
    sortSelect.addEventListener('change', render)
    clearButton.addEventListener('click', function () {
        searchInput.value = ''
        decadeSelect.value = 'all'
        sortSelect.value = 'oldest'
        render()
        searchInput.focus()
    })

    dialogClose.addEventListener('click', () => closeFilm(true))
    dialog.addEventListener('cancel', function (event) {
        event.preventDefault()
        closeFilm(true)
    })
    dialog.addEventListener('click', function (event) {
        if (event.target !== dialog) return
        const bounds = dialog.getBoundingClientRect()
        const inside = event.clientX >= bounds.left && event.clientX <= bounds.right
            && event.clientY >= bounds.top && event.clientY <= bounds.bottom
        if (!inside) closeFilm(true)
    })
    window.addEventListener('popstate', function () {
        const title = new URLSearchParams(window.location.search).get('film')
        if (!title) closeFilm(false)
        else {
            const film = films.find(item => item.title === title)
            if (film) openFilm(film, false)
        }
    })

    populatePageSummary()
    render()
    openFilmFromUrl()
})()
