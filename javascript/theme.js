
(function () {
    'use strict'

    // navbar.js can load this file automatically. The guard also prevents a
    // second panel on pages that still include theme.js explicitly.
    if (window.__limaThemeSwitcherLoaded) return
    window.__limaThemeSwitcherLoaded = true

    const STORAGE_KEY = 'lima-theme'
    const POSITION_KEY = 'lima-theme-position-v4'
    const DEFAULT_THEME = 'default'

    const themes = [
        {
            id: 'default',
            period: 'Today',
            medium: 'Original site',
            title: 'Current interface',
            description: 'The original Lima Live design, using only the main style.css.',
            colors: ['#f5f4f0', '#ffffff', '#1a1a1a'],
            browserColor: '#f5f4f0'
        },
        {
            id: 'early-print',
            period: '1500–1800',
            medium: 'Early print',
            title: 'The printed folio',
            description: 'Parchment, engraved borders and humanist typography.',
            colors: ['#efe1bd', '#3a281d', '#7c2d2d'],
            browserColor: '#3a281d'
        },
        {
            id: 'modern-print',
            period: '1st half XX century',
            medium: 'Modernist print',
            title: 'The daily newspaper',
            description: 'Newsprint, serif headlines and the dense rhythm of a mid-century paper.',
            colors: ['#e7e3d8', '#191919', '#7a1f1f'],
            browserColor: '#191919'
        },
        {
            id: 'editorial-print',
            period: '2nd half XX century',
            medium: 'Editorial print',
            title: 'The postmodern magazine',
            description: 'An energetic 1980s–90s mix of bold type, neon color and offset layers.',
            colors: ['#ece9df', '#e42f87', '#00a9b8'],
            browserColor: '#e42f87'
        },
        {
            id: 'early-web',
            period: 'Start XXI century',
            medium: 'Early websites',
            title: 'The web portal',
            description: 'Blue links, beveled controls and compact screen typography.',
            colors: ['#ececec', '#003399', '#ffcc00'],
            browserColor: '#003399'
        },
        {
            id: 'future',
            period: '2035',
            medium: 'Print / screen',
            title: 'The living archive',
            description: 'Luminous layers, responsive surfaces and a cinematic dark field.',
            colors: ['#0b0d13', '#8cf5d2', '#a98cff'],
            browserColor: '#0b0d13'
        }
    ]

    const themeIds = new Set(themes.map(theme => theme.id))

    function readStorage(key) {
        try {
            return window.localStorage.getItem(key)
        } catch (error) {
            return null
        }
    }

    function writeStorage(key, value) {
        try {
            window.localStorage.setItem(key, value)
        } catch (error) {
            // The selector still works when storage is unavailable.
        }
    }

    function getTheme(themeId) {
        return themes.find(theme => theme.id === themeId) || themes.find(theme => theme.id === DEFAULT_THEME)
    }

    function getSavedTheme() {
        const saved = readStorage(STORAGE_KEY)
        return themeIds.has(saved) ? saved : DEFAULT_THEME
    }

    function updateBrowserColor(color) {
        let meta = document.querySelector('meta[name="theme-color"]')
        if (!meta) {
            meta = document.createElement('meta')
            meta.name = 'theme-color'
            document.head.appendChild(meta)
        }
        meta.content = color
    }

    function applyTheme(themeId, options) {
        const settings = Object.assign({ persist: true, announce: true }, options)
        const theme = getTheme(themeId)

        if (theme.id === 'default') {
            delete document.documentElement.dataset.era
            if (document.body) delete document.body.dataset.era
        } else {
            document.documentElement.dataset.era = theme.id
            if (document.body) document.body.dataset.era = theme.id
        }
        document.documentElement.style.colorScheme = theme.id === 'future' ? 'dark' : 'light'
        updateBrowserColor(theme.browserColor)

        if (settings.persist) writeStorage(STORAGE_KEY, theme.id)

        document.querySelectorAll('.theme-option').forEach(button => {
            const active = button.dataset.theme === theme.id
            button.classList.toggle('active', active)
            button.setAttribute('aria-checked', String(active))
        })

        const panel = document.querySelector('.theme-panel')
        if (panel) {
            panel.dataset.activeTheme = theme.id
            const current = panel.querySelector('.theme-current-period')
            const status = panel.querySelector('.theme-status')
            if (current) current.textContent = theme.period
            if (status && settings.announce) {
                status.textContent = `${theme.period}: ${theme.title} selected.`
            }
        }

        window.dispatchEvent(new CustomEvent('lima:themechange', {
            detail: { theme: theme.id, period: theme.period }
        }))

        return theme
    }

    // Apply the saved era as soon as the script is evaluated to reduce the
    // flash of the default design.
    const initialTheme = getSavedTheme()
    if (initialTheme !== 'default') {
        document.documentElement.dataset.era = initialTheme
        if (document.body) document.body.dataset.era = initialTheme
    }

    function createThemeOption(theme) {
        const button = document.createElement('button')
        button.className = 'theme-option'
        button.type = 'button'
        button.dataset.theme = theme.id
        button.setAttribute('aria-checked', 'false')
        button.setAttribute('role', 'radio')

        const swatches = theme.colors
            .map(color => `<span class="theme-swatch" style="--swatch:${color}"></span>`)
            .join('')

        button.innerHTML = `
            <span class="theme-option-preview" aria-hidden="true">${swatches}</span>
            <span class="theme-option-copy">
                <span class="theme-option-topline">
                    <span class="theme-option-period">${theme.period}</span>
                    <span class="theme-option-type">${theme.medium}</span>
                </span>
                <span class="theme-option-title">${theme.title}</span>
                <span class="theme-option-description">${theme.description}</span>
            </span>
            <span class="theme-option-check" aria-hidden="true">✓</span>
        `

        button.addEventListener('click', () => {
            applyTheme(theme.id)
            if (window.matchMedia('(max-width: 700px)').matches) setPanelOpen(false)
        })

        button.addEventListener('keydown', event => {
            if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return
            event.preventDefault()
            const buttons = Array.from(document.querySelectorAll('.theme-option'))
            const current = buttons.indexOf(button)
            let next = current
            if (event.key === 'ArrowDown') next = (current + 1) % buttons.length
            if (event.key === 'ArrowUp') next = (current - 1 + buttons.length) % buttons.length
            if (event.key === 'Home') next = 0
            if (event.key === 'End') next = buttons.length - 1
            buttons[next].focus()
        })

        return button
    }

    function createPanel() {
        const existing = document.querySelector('.theme-panel')
        if (existing) return existing

        const panel = document.createElement('aside')
        panel.className = 'theme-panel'
        panel.dataset.side = 'left'
        panel.setAttribute('aria-label', 'Editorial era selector')

        const tab = document.createElement('button')
        tab.className = 'theme-tab'
        tab.type = 'button'
        tab.setAttribute('aria-expanded', 'false')
        tab.setAttribute('aria-controls', 'theme-selector-content')
        tab.innerHTML = `
            <span class="theme-tab-label">Themes</span>
            <span class="theme-current-period">${getTheme(initialTheme).period}</span>
        `

        const content = document.createElement('div')
        content.className = 'theme-content'
        content.id = 'theme-selector-content'
        content.setAttribute('role', 'dialog')
        content.setAttribute('aria-modal', 'false')
        content.setAttribute('aria-labelledby', 'theme-selector-title')

        const header = document.createElement('div')
        header.className = 'theme-header'
        header.dataset.dragHandle = 'true'
        header.innerHTML = `
            <div>
                <span class="theme-kicker">Lima Live display system</span>
                <h2 class="theme-title" id="theme-selector-title">Choose an editorial era</h2>
            </div>
            <div class="theme-header-actions">
                <button class="theme-reset" type="button" aria-label="Reset selector position" title="Reset position">↺</button>
                <button class="theme-close" type="button" aria-label="Close theme selector">×</button>
            </div>
        `

        const introduction = document.createElement('p')
        introduction.className = 'theme-introduction'
        introduction.textContent = 'The collection stays the same; its visual language moves through five histories of publishing.'

        const options = document.createElement('div')
        options.className = 'theme-options'
        options.setAttribute('role', 'radiogroup')
        options.setAttribute('aria-label', 'Editorial eras')
        themes.forEach(theme => options.appendChild(createThemeOption(theme)))

        const status = document.createElement('p')
        status.className = 'theme-status visually-hidden'
        status.setAttribute('aria-live', 'polite')

        content.append(header, introduction, options, status)
        panel.append(tab, content)
        document.body.appendChild(panel)

        tab.addEventListener('click', () => {
            if (tab.dataset.justDragged === 'true') return
            setPanelOpen(!panel.classList.contains('open'))
        })
        header.querySelector('.theme-close').addEventListener('click', () => setPanelOpen(false))
        header.querySelector('.theme-reset').addEventListener('click', event => {
            event.stopPropagation()
            resetPosition(panel)
        })

        document.addEventListener('keydown', event => {
            if (event.key === 'Escape' && panel.classList.contains('open')) {
                setPanelOpen(false)
                tab.focus()
            }
        })

        document.addEventListener('pointerdown', event => {
            if (panel.classList.contains('open') && !panel.contains(event.target)) setPanelOpen(false)
        })

        makeDraggable(panel, header, true)
        makeDraggable(panel, tab, false)
        restorePosition(panel)
        return panel
    }

    function setPanelOpen(open) {
        const panel = document.querySelector('.theme-panel')
        if (!panel) return
        panel.classList.toggle('open', open)
        const tab = panel.querySelector('.theme-tab')
        tab.setAttribute('aria-expanded', String(open))
        if (open) {
            window.requestAnimationFrame(() => {
                if (panel.style.top && !window.matchMedia('(max-width: 700px)').matches) {
                    const rect = panel.getBoundingClientRect()
                    dockPanel(panel, panel.dataset.side || 'left', rect.top)
                }
            })
            const active = panel.querySelector('.theme-option.active') || panel.querySelector('.theme-option')
            window.setTimeout(() => active && active.focus(), 180)
        }
    }

    function dockPanel(panel, side, top) {
        const margin = 8
        const maxTop = Math.max(margin, window.innerHeight - panel.offsetHeight - margin)
        const clampedTop = Math.max(margin, Math.min(top, maxTop))
        const dockSide = side === 'right' ? 'right' : 'left'

        panel.dataset.side = dockSide
        panel.style.top = `${clampedTop}px`
        panel.style.bottom = 'auto'
        panel.style.transform = 'none'

        if (dockSide === 'right') {
            panel.style.right = '0px'
            panel.style.left = 'auto'
        } else {
            panel.style.left = '0px'
            panel.style.right = 'auto'
        }
    }

    function makeDraggable(panel, handle, ignoreInteractiveElements) {
        let dragging = false
        let pointerId = null
        let offsetY = 0
        let startX = 0
        let startY = 0
        let moved = false

        handle.addEventListener('pointerdown', event => {
            if (window.matchMedia('(max-width: 700px)').matches) return
            if (ignoreInteractiveElements && event.target.closest('button')) return

            const rect = panel.getBoundingClientRect()
            dragging = true
            pointerId = event.pointerId
            offsetY = event.clientY - rect.top
            startX = event.clientX
            startY = event.clientY
            moved = false
            panel.classList.add('dragging')
            handle.setPointerCapture(pointerId)
        })

        handle.addEventListener('pointermove', event => {
            if (!dragging || event.pointerId !== pointerId) return
            if (Math.hypot(event.clientX - startX, event.clientY - startY) > 5) moved = true
            if (!moved) return
            const side = event.clientX < window.innerWidth / 2 ? 'left' : 'right'
            dockPanel(panel, side, event.clientY - offsetY)
        })

        function stopDragging(event) {
            if (!dragging || event.pointerId !== pointerId) return
            dragging = false
            panel.classList.remove('dragging')
            if (handle.hasPointerCapture(pointerId)) handle.releasePointerCapture(pointerId)
            pointerId = null
            if (moved) {
                handle.dataset.justDragged = 'true'
                window.setTimeout(() => delete handle.dataset.justDragged, 0)
                savePosition(panel)
            }
        }

        handle.addEventListener('pointerup', stopDragging)
        handle.addEventListener('pointercancel', stopDragging)
    }

    function savePosition(panel) {
        if (!panel.style.top) return
        writeStorage(POSITION_KEY, JSON.stringify({ side: panel.dataset.side || 'left', top: panel.style.top }))
    }

    function restorePosition(panel) {
        if (window.matchMedia('(max-width: 700px)').matches) return
        const saved = readStorage(POSITION_KEY)
        if (!saved) return

        try {
            const position = JSON.parse(saved)
            const top = Number.parseFloat(position.top)
            if (!Number.isFinite(top)) return
            dockPanel(panel, position.side, top)
        } catch (error) {
            // Ignore malformed values saved by an older version.
        }
    }

    function resetPosition(panel) {
        try {
            window.localStorage.removeItem(POSITION_KEY)
        } catch (error) {
            // Nothing else is required.
        }
        panel.removeAttribute('style')
    }

    function initialize() {
        const panel = createPanel()
        applyTheme(initialTheme, { persist: false, announce: false })

        window.addEventListener('resize', () => {
            if (window.matchMedia('(max-width: 700px)').matches) {
                panel.removeAttribute('style')
                return
            }
            if (!panel.style.top) return
            const rect = panel.getBoundingClientRect()
            dockPanel(panel, panel.dataset.side || 'left', rect.top)
        }, { passive: true })
    }

    window.LimaTheme = {
        themes: themes.map(theme => Object.assign({}, theme)),
        get: () => (document.body ? document.body.dataset.era : document.documentElement.dataset.era) || 'default',
        set: themeId => {
            if (!themeIds.has(themeId)) throw new Error(`Unknown Lima theme: ${themeId}`)
            return applyTheme(themeId)
        },
        open: () => setPanelOpen(true),
        close: () => setPanelOpen(false)
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialize, { once: true })
    } else {
        initialize()
    }
})()
