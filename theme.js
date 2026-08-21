(function () {
    'use strict'

    // navbar.js can load this file automatically. The guard also prevents a
    // second panel on pages that still include theme.js explicitly.
    if (window.__limaThemeSwitcherLoaded) return
    window.__limaThemeSwitcherLoaded = true

    const STORAGE_KEY = 'lima-theme'
    const POSITION_KEY = 'lima-theme-position'
    const DEFAULT_THEME = 'early-web'

    const themes = [
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
            title: 'The modern manifesto',
            description: 'A geometric, high-contrast language inspired by the avant-garde.',
            colors: ['#f1ead8', '#111111', '#d43b27'],
            browserColor: '#d43b27'
        },
        {
            id: 'editorial-print',
            period: '2nd half XX century',
            medium: 'Editorial print',
            title: 'The cultural magazine',
            description: 'Serif headlines, offset color and the rhythm of a printed review.',
            colors: ['#f3efe4', '#143f5f', '#d4a321'],
            browserColor: '#143f5f'
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

        document.documentElement.dataset.era = theme.id
        if (document.body) document.body.dataset.era = theme.id
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
    document.documentElement.dataset.era = initialTheme
    if (document.body) document.body.dataset.era = initialTheme

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
        panel.setAttribute('aria-label', 'Editorial era selector')

        const tab = document.createElement('button')
        tab.className = 'theme-tab'
        tab.type = 'button'
        tab.setAttribute('aria-expanded', 'false')
        tab.setAttribute('aria-controls', 'theme-selector-content')
        tab.innerHTML = `
            <span class="theme-tab-label">Change the era</span>
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

        tab.addEventListener('click', () => setPanelOpen(!panel.classList.contains('open')))
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

        makeDraggable(panel, header)
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
                if (panel.style.left && panel.style.top && !window.matchMedia('(max-width: 700px)').matches) {
                    const rect = panel.getBoundingClientRect()
                    const position = clampPosition(panel, rect.left, rect.top)
                    panel.style.left = `${position.left}px`
                    panel.style.top = `${position.top}px`
                }
            })
            const active = panel.querySelector('.theme-option.active') || panel.querySelector('.theme-option')
            window.setTimeout(() => active && active.focus(), 180)
        }
    }

    function clampPosition(panel, left, top) {
        const margin = 8
        const maxLeft = Math.max(margin, window.innerWidth - panel.offsetWidth - margin)
        const maxTop = Math.max(margin, window.innerHeight - panel.offsetHeight - margin)
        return {
            left: Math.max(margin, Math.min(left, maxLeft)),
            top: Math.max(margin, Math.min(top, maxTop))
        }
    }

    function makeDraggable(panel, handle) {
        let dragging = false
        let pointerId = null
        let offsetX = 0
        let offsetY = 0

        handle.addEventListener('pointerdown', event => {
            if (window.matchMedia('(max-width: 700px)').matches) return
            if (event.target.closest('button')) return

            const rect = panel.getBoundingClientRect()
            dragging = true
            pointerId = event.pointerId
            offsetX = event.clientX - rect.left
            offsetY = event.clientY - rect.top
            panel.classList.add('dragging')
            handle.setPointerCapture(pointerId)
        })

        handle.addEventListener('pointermove', event => {
            if (!dragging || event.pointerId !== pointerId) return
            const position = clampPosition(panel, event.clientX - offsetX, event.clientY - offsetY)
            panel.style.left = `${position.left}px`
            panel.style.top = `${position.top}px`
            panel.style.transform = 'none'
        })

        function stopDragging(event) {
            if (!dragging || event.pointerId !== pointerId) return
            dragging = false
            panel.classList.remove('dragging')
            if (handle.hasPointerCapture(pointerId)) handle.releasePointerCapture(pointerId)
            pointerId = null
            savePosition(panel)
        }

        handle.addEventListener('pointerup', stopDragging)
        handle.addEventListener('pointercancel', stopDragging)
    }

    function savePosition(panel) {
        if (!panel.style.left || !panel.style.top) return
        writeStorage(POSITION_KEY, JSON.stringify({ left: panel.style.left, top: panel.style.top }))
    }

    function restorePosition(panel) {
        if (window.matchMedia('(max-width: 700px)').matches) return
        const saved = readStorage(POSITION_KEY)
        if (!saved) return

        try {
            const position = JSON.parse(saved)
            const left = Number.parseFloat(position.left)
            const top = Number.parseFloat(position.top)
            if (!Number.isFinite(left) || !Number.isFinite(top)) return
            const clamped = clampPosition(panel, left, top)
            panel.style.left = `${clamped.left}px`
            panel.style.top = `${clamped.top}px`
            panel.style.transform = 'none'
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
            if (!panel.style.left || !panel.style.top) return
            const rect = panel.getBoundingClientRect()
            const position = clampPosition(panel, rect.left, rect.top)
            panel.style.left = `${position.left}px`
            panel.style.top = `${position.top}px`
        }, { passive: true })
    }

    window.LimaTheme = {
        themes: themes.map(theme => Object.assign({}, theme)),
        get: () => document.body ? document.body.dataset.era : document.documentElement.dataset.era,
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
