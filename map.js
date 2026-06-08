const list = document.getElementById("list")
const markers = []

function districtClass(district) {
    const d = Array.isArray(district) ? district[0] : district
    return d.toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[àáâ]/g, 'a')
        .replace(/[èéê]/g, 'e')
        .replace(/[ùú]/g, 'u')
        .replace(/[íì]/g, 'i')
        .replace(/[ñ]/g, 'n')
}

function getDistrictColor(district) {
    const d = Array.isArray(district) ? district[0] : district
    const colors = {
        'Lima':              '#9b1c1c',
        'Miraflores':        '#166534',
        'Centro Historico':  '#854d0e',
        'Callao':            '#1e40af',
        'Chorrillos':        '#633806',
        'Barranco':          '#6b21a8',
        'Magdalena del Mar': '#0f766e',
        'Breña':             '#9d174d',
        'Jesús María':       '#075985',
        'Pueblo Libre':      '#3f6212',
        'San Miguel':        '#9a3412',
        'Rimac':             '#334155',
        'Las Islas':         '#164e63',
        'San Isidro':        '#86198f'
    }
    return colors[d] || '#444'
}

function createPin(district) {
    const color = getDistrictColor(district)
    return L.divIcon({
        className: '',
        html: `<div style="
            width: 14px; height: 14px;
            border-radius: 50%;
            background: ${color};
            border: 2px solid white;
            box-shadow: 0 1px 4px rgba(0,0,0,0.3);
        "></div>`,
        iconSize: [14, 14],
        iconAnchor: [7, 7],
        popupAnchor: [0, -10]
    })
}

function getDistrictLabel(district) {
    return Array.isArray(district) ? district.join(', ') : district
}

function showCard(data) {
    list.innerHTML = ""
    data.forEach(function(loc) {
        const movieList = loc.movies.map(function(m) {
            return `<span class="movie-tag">${m.title} (${m.year})</span>`
        }).join('')

        const safeName = loc.name.replace(/\\/g, '\\\\').replace(/'/g, "\\'")

        list.innerHTML += `
            <div class="card" onclick="toggleDetail(this, '${safeName}', ${loc.lat || 'null'}, ${loc.lng || 'null'})">
                <h2>${loc.name}</h2>
                <div class="meta">
                    <span class="badge ${districtClass(loc.district)}">${getDistrictLabel(loc.district)}</span>
                </div>
                <div class="movies-list">${movieList}</div>
                <div class="detail">
                    <hr>
                    <p class="description">${loc.descriptions.adult}</p>
                    <button class="btn-more" onclick="expandCard(event, this)">Tell me more…</button>
                    <div class="extra">
                        <p class="access">${loc.access}</p>
                        <a class="btn-evenmore" href="location.html?name=${encodeURIComponent(loc.name)}">Tell me even more →</a>
                    </div>
                </div>
            </div>
        `
    })
}

function toggleDetail(card, locName, lat, lng) {
    const isOpen = card.classList.contains("open")
    document.querySelectorAll('.card').forEach(function(c) {
        c.classList.remove("open")
        const extra = c.querySelector('.extra')
        const btn = c.querySelector('.btn-more')
        if (extra) extra.classList.remove("open")
        if (btn) btn.textContent = "Tell me more…"
    })
    if (!isOpen) {
        card.classList.add("open")
        if (lat && lng) {
            map.flyTo([lat, lng], 15)
            markers.forEach(function(m) {
                if (m.name === locName) m.marker.openPopup()
            })
        }
    }
}

function expandCard(e, btn) {
    e.stopPropagation()
    const extra = btn.nextElementSibling
    const isOpen = extra.classList.contains("open")
    extra.classList.toggle("open")
    btn.textContent = isOpen ? "Tell me more…" : "Tell me less"
}

function filterByDistrict(e, district) {
    document.querySelectorAll(".pill").forEach(function(pill) {
        pill.classList.remove("active")
    })
    e.target.classList.add("active")

    const filtered = district === "All"
        ? locations
        : locations.filter(function(loc) {
            return Array.isArray(loc.district)
                ? loc.district.includes(district)
                : loc.district === district
        })
    showCard(filtered)
}

const map = L.map('map').setView([-12.0464, -77.0428], 12)
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map)

locations.forEach(function(loc) {
    if (loc.lat && loc.lng) {
        const movieTitles = loc.movies.map(function(m) {
            return `${m.title} (${m.year})`
        }).join('<br>')
        const marker = L.marker([loc.lat, loc.lng], { icon: createPin(loc.district) })
            .addTo(map)
            .bindPopup(`<b>${loc.name}</b><br>${movieTitles || '<i>no films listed yet</i>'}`)
        markers.push({ name: loc.name, marker: marker })
    }
})

showCard(locations)

document.getElementById('heroBtn').addEventListener('click', function() {
    document.querySelector('.main').scrollIntoView({ behavior: 'smooth', block: 'start' })
})
