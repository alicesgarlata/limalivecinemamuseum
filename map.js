const filming = [
    {
        name: "Parque John F. Kennedy",
        address: "Av Diagonal, Miraflores 15074, Perù",
        district: "Miraflores",
        movies: [{ title: "Gladiator", year: 2000 }],
        description: "The Colosseum inspired all the visual aesthetics. Some scenes were shot here.",
        access: "Public - book tickets online in advance",
        lat: -12.121701218863464,
        lng: -77.0303628643947,
        pelicula: "Un grupo de mujeres aparentemente sofisticadas es en realidad parte de una red criminal. La historia mezcla humor negro con intriga mientras se revelan engaños, identidades ocultas y crímenes en un ambiente psicodélico y provocador."
    },
    {
        name: "San Martin Square",
        address: "Av. Nicolas de Piérola cdra. 9, Lima 15001",
        district: "Centro Historico",
        movies: [{ title: "Game of Thrones", year: 2011 }],
        description: "King's Landing was shot almost entirely in the Old Town.",
        access: "Public",
        lat: -12.050801747218538,
        lng: -77.03449670489425
    },
    {
        name: "Malecon de Miraflores",
        address: "Mal. de la Reserva 275, Miraflores 15074, Perù",
        district: "Miraflores",
        movies: [{ title: "Movie Title", year: 1997 }],
        description: "blablabla",
        access: "blablabla",
        lat: -12.124333888711332,
        lng: -77.03836640674605
    },
    {
        name: "Muelle Sur del Callao",
        address: "Constitucion 340, Callao 07021, Perù",
        district: "Callao",
        movies: [{ title: "Movie Title", year: 1997 }],
        description: "blablabla",
        access: "blablabla",
        lat: -12.055384127368942,
        lng: -77.1506180858518
    },
    {
        name: "Playa Agua Dulce",
        address: "RXPF+R55, Chorrillos, Perù",
        district: "Chorrillos",
        movies: [{ title: "Movie Title", year: 1997 }],
        description: "blablabla",
        access: "blablabla",
        lat: -12.162789787144682,
        lng: -77.02697982995775
    },
    {
        name: "Bridge of Sighs - Puente de Los Suspiros",
        address: "Jr. Batallón 271, Barranco 15063, Perù",
        district: "Barranco",
        movies: [{ title: "Movie Title", year: 1997 }],
        description: "blablabla",
        access: "blablabla",
        lat: -12.148642839701377,
        lng: -77.02247030601738
    },
    {
        name: "Magdalena Market - Mercado de Magdalena",
        address: "Jr. Bolognesi 504, Magdalena del Mar 15086, Perù",
        district: "Magdalena del Mar",
        movies: [{ title: "Movie Title", year: 1997 }],
        description: "blablabla",
        access: "blablabla",
        lat: -12.090168055532995,
        lng: -77.07310081413262
    },
    {
        name: "Calle Tarata",
        address: "C. Tarata, Miraflores 15074, Perù",
        district: "Miraflores",
        movies: [{ title: "Movie Title", year: 1997 }],
        description: "blablabla",
        access: "blablabla",
        lat: -12.123488301294946,
        lng: -77.0287904161149
    },
    {
        name: "Avenida Brasil",
        address: "Av. Brasil, Lima 15084, Perù",
        district: ["Breña", "Jesús María", "Pueblo Libre", "Magdalena del Mar"],
        movies: [{ title: "Movie Title", year: 1997 }],
        description: "blablabla",
        access: "blablabla",
        lat: -12.078385714156722,
        lng: -77.05694122354882
    },
    {
        name: "Jirón de la Unión",
        address: "Jirón de la Unión, Lima 15001, Perù",
        district: "Lima",
        movies: [{ title: "Movie Title", year: 1997 }],
        description: "blablabla",
        access: "blablabla",
        lat: -12.04958142862287,
        lng: -77.03413897419874
    },
    {
        name: "Parque de las Leyendas",
        address: "Av. Parque de las Leyendas 580, San Miguel 15088, Perù",
        district: "San Miguel",
        movies: [{ title: "Movie Title", year: 1997 }],
        description: "blablabla",
        access: "blablabla",
        lat: -12.066965354455284,
        lng: -77.08691083427522
    },
    {
        name: "Institución Educativa 3004 España",
        address: "XX7F+855, Rímac 15093, Perù",
        district: "Rimac",
        movies: [{ title: "Movie Title", year: 1997 }],
        description: "blablabla",
        access: "blablabla",
        lat: -12.03668676454872,
        lng: -77.02701301478236
    },
    {
        name: "Rio Rimac - Rimac River",
        district: "Lima",
        movies: [{ title: "Movie Title", year: 1997 }],
        description: "blablabla",
        access: "blablabla",
        lat: -12.043923,
        lng: -77.020982
    },
    {
        name: "Isla El Frontón",
        district: "Las Islas",
        movies: [{ title: "Movie Title", year: 1997 }],
        description: "blablabla",
        access: "blablabla",
        lat: -12.116534193316653,
        lng: -77.1813689770822
    },
    {
        name: "Lima Golf Club",
        address: "Av. Camino Real 770, San Isidro 15073, Perù",
        district: "San Isidro",
        movies: [{ title: "Movie Title", year: 1997 }],
        description: "blablabla",
        access: "blablabla",
        lat: -12.101500033881788,
        lng: -77.03853518755118
    },
    {
        name: "Estadio Lolo Fernandez",
        address: "668 Jirón Zorritos, Lima 15001, Perù",
        district: "Lima",
        movies: [{ title: "Movie Title", year: 1997 }],
        description: "blablabla",
        access: "blablabla",
        lat: -12.04958142862287,
        lng: -77.03413897419874
    },
    {
        name: "Residencial San Felipe",
        address: "Jesús María District, 15076 Perù",
        district: "Jesús María",
        movies: [{ title: "Movie Title", year: 1997 }],
        description: "blablabla",
        access: "blablabla",
        lat: -12.089083634210999,
        lng: -77.0546443877374
    },
    {
        name: "Universidad Nacional Mayor de San Marcos",
        address: "Av. Óscar R. Benavides 5737, Callao 07006, Perù",
        district: ["Lima", "Callao"],
        movies: [{ title: "Movie Title", year: 1997 }],
        description: "blablabla",
        access: "blablabla",
        lat: -12.050621401377771,
        lng: -77.08645051563546
    },
    {
        name: "Pontificia Universidad Católica del Perù",
        address: "Av. Universitaria 1801, San Miguel 15088, Perú",
        district: "San Miguel",
        movies: [{ title: "Movie Title", year: 1997 }],
        description: "blablabla",
        access: "blablabla",
        lat: -12.06900469530343,
        lng: -77.07819466909773
    },
    {
        name: "Larcomar",
        address: "Mal. de la Reserva 610, Miraflores 15074, Perù",
        district: "Miraflores",
        movies: [{ title: "Movie Title", year: 1997 }],
        description: "blablabla",
        access: "blablabla",
        lat: -12.1318722790964,
        lng: -77.03047475216545
    },
    {
        name: "Plaza Agustín Gutiérrez",
        address: "Óvalo Gutiérrez, Miraflores 15073, Perù",
        district: "Miraflores",
        movies: [{ title: "Movie Title", year: 1997 }],
        description: "blablabla",
        access: "blablabla",
        lat: -12.11031660293372,
        lng: -77.03690308601313
    },
    {
        name: "Bosque El Olivar",
        address: "Av. Paz Soldán, San Isidro, Lima 15073, Perù",
        district: ["Lima", "San Isidro"],
        movies: [{ title: "Movie Title", year: 1997 }],
        description: "blablabla",
        access: "blablabla",
        lat: -12.10211544904528,
        lng: -77.03524796521171
    }
]

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
        'Lima':             '#9b1c1c',
        'Miraflores':       '#166534',
        'Centro Historico': '#854d0e',
        'Callao':           '#1e40af',
        'Chorrillos':       '#633806',
        'Barranco':         '#6b21a8',
        'Magdalena del Mar':'#0f766e',
        'Breña':            '#9d174d',
        'Jesús María':      '#075985',
        'Pueblo Libre':     '#3f6212',
        'San Miguel':       '#9a3412',
        'Rimac':            '#334155',
        'Las Islas':        '#164e63',
        'San Isidro':       '#86198f'
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

        list.innerHTML += `
            <div class="card" onclick="toggleDetail(this, '${loc.name}', ${loc.lat || 'null'}, ${loc.lng || 'null'})">
                <h2>${loc.name}</h2>
                <div class="meta">
                    <span class="badge ${districtClass(loc.district)}">${getDistrictLabel(loc.district)}</span>
                </div>
                <div class="movies-list">${movieList}</div>
                <div class="detail">
                    <hr>
                    <p class="description">${loc.description}</p>
                    <button class="btn-more" onclick="expandCard(event, this)">Tell me more</button>
                    <p class="access">${loc.access}</p>
                    <div class="extra">
                        <a class="btn-evenmore" href="location.html?name=${encodeURIComponent(loc.name)}">Tell me even more</a>
                    </div>
                </div>
            </div>
        `
    })
}

function toggleDetail(card, locName, lat, lng) {
    document.querySelectorAll('.card').forEach(function(c) {
        c.classList.remove("open")
    })
    card.classList.toggle("open")
    if (lat && lng) {
        map.flyTo([lat, lng], 15)
        markers.forEach(function(m) {
            if (m.name === locName) m.marker.openPopup()
        })
    }
}

function filterByDistrict(district) {
    document.querySelectorAll(".pill").forEach(function(pill) {
        pill.classList.remove("active")
    })
    event.target.classList.add("active")

    if (district === "All") {
        showCard(filming)
    } else {
        const filtered = filming.filter(function(loc) {
            if (Array.isArray(loc.district)) {
                return loc.district.includes(district)
            }
            return loc.district === district
        })
        showCard(filtered)
    }
}

showCard(filming)

const map = L.map('map').setView([-12.0464, -77.0428], 12)
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map)

filming.forEach(function(loc) {
    if (loc.lat && loc.lng) {
        const movieTitles = loc.movies.map(function(m) {
            return `${m.title} (${m.year})`
        }).join('<br>')
        const marker = L.marker([loc.lat, loc.lng], { icon: createPin(loc.district) })
            .addTo(map)
            .bindPopup(`<b>${loc.name}</b><br>${movieTitles}`)
        markers.push({ name: loc.name, marker: marker })
    }
})

document.getElementById('heroBtn').addEventListener('click', function() {
    const mainSection = document.querySelector('.main')
    if (mainSection) mainSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
})
