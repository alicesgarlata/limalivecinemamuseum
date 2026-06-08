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

    // Transparent-to-solid scroll effect.
    // We wait for DOMContentLoaded because navbar.js runs before the rest of
    // the page HTML is parsed — the .hero element doesn't exist yet at this point.
    document.addEventListener('DOMContentLoaded', function () {
        const hero = document.querySelector('.hero')

        if (!hero) return  // no hero on this page → navbar stays solid, nothing to do

        // start transparent
        nav.classList.add('nav-transparent')

        function updateNav() {
            // getBoundingClientRect().bottom tells us how many px of the hero
            // are still visible below the top of the viewport.
            // When it drops to 0 the hero has fully scrolled away.
            const heroStillVisible = hero.getBoundingClientRect().bottom > 0
            nav.classList.toggle('nav-transparent', heroStillVisible)
        }

        window.addEventListener('scroll', updateNav, { passive: true })
    })
})()
