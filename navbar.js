(function () {
    'use strict'

    /* =====================================================
       GLOBAL THEME LOADER
       Every public page already loads navbar.js, so this is the most robust
       place to make the editorial era system site-wide.
       ===================================================== */

    const validThemes = new Set([
        'default',
        'early-print',
        'modern-print',
        'editorial-print',
        'early-web',
        'future'
    ])

    function getSavedTheme() {
        try {
            const saved = window.localStorage.getItem('lima-theme')
            return validThemes.has(saved) ? saved : 'default'
        } catch (error) {
            return 'default'
        }
    }

    // Set the attribute before loading the stylesheet to reduce theme flash.
    const initialTheme = getSavedTheme()
    if (initialTheme !== 'default') {
        document.documentElement.dataset.era = initialTheme
        if (document.body) document.body.dataset.era = initialTheme
    }

    function ensureThemeStyles() {
        const existing = Array.from(document.querySelectorAll('link[rel="stylesheet"]'))
            .find(link => {
                try {
                    return new URL(link.href, document.baseURI).pathname.endsWith('/theme.css')
                } catch (error) {
                    return false
                }
            })

        if (existing) {
            existing.dataset.limaThemeStyles = 'true'
            return
        }

        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = 'theme.css'
        link.dataset.limaThemeStyles = 'true'
        document.head.appendChild(link)
    }

    function ensureThemeScript() {
        if (window.__limaThemeSwitcherLoaded) return

        const existing = Array.from(document.scripts).find(script => {
            if (!script.src) return false
            try {
                return new URL(script.src, document.baseURI).pathname.endsWith('/theme.js')
            } catch (error) {
                return false
            }
        })

        if (existing) return

        const script = document.createElement('script')
        script.src = 'theme.js'
        script.dataset.limaThemeLoader = 'true'
        document.body.appendChild(script)
    }

    ensureThemeStyles()

    /* =====================================================
       NAVIGATION
       ===================================================== */

    const page = window.location.pathname.split('/').pop()
    const mapActive = (page === 'index.html' || page === 'location.html' || page === '')
    const narActive = (page === 'itineraries.html')
    const docActive = (page === 'documentation.html')
    const aboutActive = (page === 'disclaimer_page.html')

    const nav = document.createElement('nav')
    nav.className = 'navbar navbar-expand-md border-bottom site-navbar'
    nav.setAttribute('aria-label', 'Main navigation')
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
                        <a class="nav-link ${mapActive ? 'active' : ''}" ${mapActive ? 'aria-current="page"' : ''} href="index.html">Map</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${narActive ? 'active' : ''}" ${narActive ? 'aria-current="page"' : ''} href="itineraries.html">Narratives</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${docActive ? 'active' : ''}" ${docActive ? 'aria-current="page"' : ''} href="documentation.html">Documentation</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${aboutActive ? 'active' : ''}" ${aboutActive ? 'aria-current="page"' : ''} href="disclaimer_page.html">About</a>
                    </li>
                </ul>
            </div>
        </div>
    `

    const placeholder = document.getElementById('navbar-placeholder')
    if (placeholder) placeholder.replaceWith(nav)

    /* =====================================================
       FOOTER
       ===================================================== */

    const footer = document.createElement('footer')
    footer.className = 'site-footer'
    footer.innerHTML = `
        <div class="site-footer-inner">
            <span class="site-footer-title">Lima Live Museum of Movie Locations</span>
            <span class="site-footer-divider">·</span>
            <span>A project by Alice Sgarlata and Adriana Villafuerte</span>
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

    function initializePageChrome() {
        if (!document.querySelector('.site-footer')) document.body.appendChild(footer)

        // Pages that already declare theme.js keep using that script. Pages
        // such as itineraries.html receive it automatically here.
        ensureThemeScript()

        const hero = document.querySelector('.hero')
        if (!hero) {
            nav.classList.add('nav-flat')
            return
        }

        nav.classList.add('nav-transparent')

        function updateNav() {
            const heroStillVisible = hero.getBoundingClientRect().bottom > 0
            nav.classList.toggle('nav-transparent', heroStillVisible)
            nav.classList.toggle('nav-hidden', !heroStillVisible)
        }

        window.addEventListener('scroll', updateNav, { passive: true })
        updateNav()
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializePageChrome, { once: true })
    } else {
        initializePageChrome()
    }
})()
