# Lima Live Cinema Museum

Lima Live Cinema Museum is a virtual museum dedicated to the relationship between cinema and the urban spaces of Lima, Peru. It combines digital mapping, film metadata, historical research and editorial storytelling to show how streets, squares, beaches, markets, hotels and residential areas have contributed to the cinematic representation of the city.

**Live website:** [alicesgarlata.github.io/limalivecinemamuseum](https://alicesgarlata.github.io/limalivecinemamuseum/)

## Project overview

The project treats filming locations as cultural and historical records rather than simple tourist destinations. Each place is connected to one or more films and can be explored through spatial, chronological and thematic perspectives.

The current collection contains:

- 24 location records;
- 23 film records spanning 1930â€“2024;
- 36 filmâ€“location associations represented in the dataset;
- 5 curated narrative paths;
- 6 alternative editorial themes.

The website is a static multi-page application built with HTML, CSS and vanilla JavaScript. It does not require a backend, database, build system or map API key.

## Main features

### Interactive location map

The Home page uses Leaflet and OpenStreetMap to display the collection geographically. Visitors can:

- filter locations by district;
- search by location, district, film title or year;
- move between synchronized map markers and location cards;
- open a complete dynamic record for each place.

### Dynamic location records

One reusable `location.html` page displays every location through a `name` URL parameter. `location.js` retrieves the correct record from `data.js` and generates:

- the photographic header and location metadata;
- introductory texts with three tone levels and three length levels;
- historical, cultural and source tabs from `schede.js`;
- related film cards;
- enlarged film-scene images through a reusable native dialog;
- direct links to the corresponding records in the Films section.

### Film catalogue

The Films page provides a searchable and filterable catalogue. Film records can be sorted by date or title and filtered by decade. Each dialog combines factual metadata, curatorial interpretation, related images, mapped locations and an external Wikidata link when available.

Individual films can be opened directly through a URL such as:

```text
films.html?film=Gregorio
```

### Narrative paths

The Narratives section reorganises the collection into five curated perspectives:

1. **Historical Timeline â€” Lima on Screen:** a chronological reading of the cinematic city from 1938 to 2024.
2. **Cinematic Miraflores:** a walking route through public space, urban memory, commerce, the coastline and nightlife.
3. **Residential and Cinematic San Isidro:** a route connecting natural heritage, elite architecture and community housing.
4. **Callao and La Punta:** a route through airport modernity, port identity, coastal memory and the islands.
5. **Violence and Memory:** an interpretive route connecting political violence, surveillance and later reflection.

The complete itinerary texts, route maps and numbered stops are available on the website rather than duplicated in this README. Links from the Home page use URL fragments to open the requested narrative directly.

### Temporal editorial themes

The same collection can be viewed through six visual systems:

- Today;
- 1500â€“1800 â€” Early Print;
- First half of the twentieth century â€” Modernist Print;
- Second half of the twentieth century â€” Editorial Print;
- Early twenty-first-century websites;
- 2035 â€” Future Print/Screen.

JavaScript stores the selected theme in `localStorage` and applies a `data-era` attribute. `theme.css` then changes typography, colours, borders, spacing, image treatments and map filters without altering the underlying content or functionality.

## Data architecture

The project uses local JavaScript data structures:

- `data.js` contains district colours, location records and film records;
- each film contains a nested `profile` object for its extended curatorial text and images;
- each location contains lightweight film references based on title and year;
- `schede.js` contains the extended historical and cultural sections associated with location names.

The interface connects locations and films by matching both film title and year. Dynamic pages use `URLSearchParams`, while `encodeURIComponent()` creates safe links for names and titles containing spaces or special characters.

## Project structure

```text
.
â”œâ”€â”€ index.html                  Home, itinerary previews and map structure
â”œâ”€â”€ location.html               Reusable location-page structure
â”œâ”€â”€ films.html                  Film catalogue structure
â”œâ”€â”€ itineraries.html            Narrative content and map containers
â”œâ”€â”€ documentation.html          Research, design and technical documentation
â”œâ”€â”€ about.html                  Project scope, authorship and methodology
â”œâ”€â”€ disclaimer_page.html        Rights, sources and visitor disclaimer
â”œâ”€â”€ css/
â”‚   â”œâ”€â”€ style.css               Default layout, components and responsive rules
â”‚   â””â”€â”€ theme.css               Temporal theme variables and overrides
â”œâ”€â”€ javascript/
â”‚   â”œâ”€â”€ data.js                 Locations, films, profiles and district colours
â”‚   â”œâ”€â”€ schede.js               Extended location records and sources
â”‚   â”œâ”€â”€ map.js                  Home map, search, filters, markers and cards
â”‚   â”œâ”€â”€ location.js             Dynamic location rendering and interactions
â”‚   â”œâ”€â”€ films.js                Film catalogue, filters, dialogs and deep links
â”‚   â”œâ”€â”€ itineraries.js          Narrative tabs, route maps and deep links
â”‚   â”œâ”€â”€ navbar.js               Shared navigation and footer
â”‚   â””â”€â”€ theme.js                Theme selector, persistence and positioning
â””â”€â”€ images/                     Location photographs and selected film stills
```

## Technologies

- HTML5;
- CSS3, including Grid, Flexbox, custom properties and media queries;
- vanilla JavaScript;
- Leaflet 1.9.4;
- OpenStreetMap tiles;
- Bootstrap 5.3.3 for responsive navigation;
- Wikidata identifiers and external records;
- GitHub Pages for publication.

## Running the project locally

No installation or build step is required. Clone or download the repository and serve its root directory with a simple local server:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

Using a local server is recommended because it reproduces the relative-path behaviour used by GitHub Pages.

## Responsive design and accessibility

The interface combines CSS Grid and Flexbox with fluid dimensions and responsive breakpoints. On smaller screens, multi-column records become single-column layouts, sticky elements return to the normal document flow and navigation becomes collapsible.

Accessibility measures include semantic headings, native buttons and dialogs, keyboard-accessible controls, visible focus states, alternative text, live result labels and reduced-motion support.

## Sources, image rights and limitations

Maps use Leaflet and OpenStreetMap. Film records may include Wikidata identifiers, while historical and cultural sources are listed in the extended location records where available.

The website is a non-commercial university project. It includes location photographs and selected film stills, some captured from copies available online, including unofficial uploads. The project does not claim ownership or authorisation for third-party material. A professional publication would require documented provenance, full attribution and verified licences or permissions. See the [Disclaimer](https://alicesgarlata.github.io/limalivecinemamuseum/disclaimer_page.html) for the complete statement.

The collection is curated rather than exhaustive, and route or visitor information should not be treated as a real-time travel service.

## Academic context

The project was developed for the course **Information Modeling and Web Technologies**, taught by Prof. Fabio Vitali as part of the Masterâ€™s Degree in Digital Humanities and Digital Knowledge at the University of Bologna.

## Authors

- Alice Sgarlata
- Adriana Villafuerte

Original editorial writing, interface design and project-specific code Â© 2026 Alice Sgarlata and Adriana Villafuerte, unless otherwise stated. Third-party rights remain with their respective owners.
