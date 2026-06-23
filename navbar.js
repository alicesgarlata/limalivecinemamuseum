(function () {
    const page = window.location.pathname.split('/').pop()
    const mapActive   = (page === 'index.html' || page === 'location.html' || page === '')
    const aboutActive = (page === 'disclaimer_page.html')

    const nav = document.createElement('nav')
    nav.className = 'navbar navbar-expand-md bg-white border-bottom site-navbar'
    nav.innerHTML = `
        <div class="container-fluid px-4">
            <a class="navbar-brand site-brand" href="index.html">
                Lima Live Museum of Movie Locations
                <span class="site-sub d-block">Explore iconic movie locations around the world</span>
            </a>
            <button class="navbar-toggler" type="button"
                    data-bs-toggle="collapse" data-bs-target="#mainNav"
                    aria-controls="mainNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="mainNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link ${mapActive ? 'active' : ''}" href="index.html">Map</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${aboutActive ? 'active' : ''}" href="disclaimer_page.html">About</a>
                    </li>
                </ul>
            </div>
        </div>
    `

    const placeholder = document.getElementById('navbar-placeholder')
    placeholder.replaceWith(nav)

    const footer = document.createElement('footer')
    footer.className = 'site-footer'
    footer.innerHTML = `
        <div class="site-footer-inner">
            <span class="site-footer-title">Lima Live Museum of Movie Locations</span>
            <span class="site-footer-divider">·</span>
            <span>A project by Alice Sgarlata and Adriana Alborian</span>
            <span class="site-footer-divider">·</span>
            <span>Information Modeling and Web Technologies — Prof. Fabio Vitali, Università di Bologna</span>
        </div>
        <div class="site-footer-inner site-footer-credits">
            <span>© 2026</span>
            <span class="site-footer-divider">·</span>
            <span>Map: <a href="https://leafletjs.com" target="_blank" rel="noopener">Leaflet</a> + <a href="https://www.openstreetmap.org" target="_blank" rel="noopener">OpenStreetMap</a></span>
            <span class="site-footer-divider">·</span>
            <span>Film data: <a href="https://www.wikidata.org" target="_blank" rel="noopener">Wikidata</a></span>
        </div>
    `
    document.addEventListener('DOMContentLoaded', function () {
        document.body.appendChild(footer)
    })

    document.addEventListener('DOMContentLoaded', function () {
        const hero = document.querySelector('.hero')

        if (!hero) {
            // no hero on this page → always transparent, dark text, no scroll effect
            nav.classList.add('nav-flat')
            return
        }

        // start transparent
        nav.classList.add('nav-transparent')

        function updateNav() {
            const heroStillVisible = hero.getBoundingClientRect().bottom > 0
            nav.classList.toggle('nav-transparent', heroStillVisible)
            // slide navbar off-screen once the hero is gone
            nav.classList.toggle('nav-hidden', !heroStillVisible)
        }

        window.addEventListener('scroll', updateNav, { passive: true })
    })
})()
