const districtColors = {
  "Lima": "#9b1c1c",
  "Miraflores": "#166534",
  "Centro Historico": "#854d0e",
  "Callao": "#1e40af",
  "Chorrillos": "#633806",
  "Barranco": "#6b21a8",
  "Magdalena del Mar": "#0f766e",
  "Breña": "#9d174d",
  "Jesús María": "#075985",
  "Pueblo Libre": "#3f6212",
  "San Miguel": "#9a3412",
  "Rimac": "#334155",
  "Las Islas": "#164e63",
  "San Isidro": "#86198f"
};

const locations = [
  {
    "name": "Parque John F. Kennedy",
    "address": "Av Diagonal, Miraflores 15074, Perú",
    "district": "Miraflores",
    "movies": [
      {
        "title": "Lima 13",
        "year": 2012
      },
      {
        "title": "Gregorio",
        "year": 1984
      },
      {
        "title": "¡Asu Mare!",
        "year": 2013
      }
    ],
    "descriptions": {
      "young": "Kennedy Park is the beating heart of Miraflores — always alive with street artists, cats wandering around, and people from all walks of life. Three Peruvian films have been shot here, and it's easy to see why: it's just unmistakably Lima.",
      "adult": "A central public park in Miraflores, known for cultural activity, street artists, and as a social gathering point. It has served as a backdrop for three Peruvian films, representing the vitality and everyday rhythm of modern Lima.",
      "professional": "Parque John F. Kennedy functions as a primary cinematographic reference for the Miraflores district, its sociological significance as a site of intersection between tourism, informal commerce, and everyday social practice making it a recurring spatial motif in contemporary Peruvian cinema."
    },
    "access": "Public — free access",
    "lat": -12.121701218863464,
    "lng": -77.0303628643947,
    "cardDescription": {
      "short": "Kennedy Park is the beating heart of Miraflores — always alive with street artists, wandering cats, and people from all walks of life.",
      "long": "Few places in Lima feel as alive as Kennedy Park. Street artists, musicians, and people from every corner of the city converge here daily, making it one of the most socially layered public spaces in the capital. Three Peruvian films have used it as a backdrop — not for any single event, but for what it represents: the pulse of modern Lima, where the traditional and the contemporary coexist naturally."
    },
    "texts": {
      "young": {
        "brief": "Kennedy Park is where Miraflores comes alive — street artists, cats, and everyone you can imagine.",
        "mid": "Kennedy Park is the beating heart of Miraflores — always alive with street artists, cats wandering around, and people from all walks of life. Three Peruvian films have been shot here, and it's easy to see why: it's just unmistakably Lima.",
        "long": "Kennedy Park is one of those places that's almost impossible to pass through without slowing down. Street artists set up on the corners, cats weave between park benches, and the crowd shifts from schoolkids to tourists to couples to elderly regulars — all at the same time, all sharing the same space. It's the kind of park where something is always happening, even when nothing in particular is going on. Three Peruvian films have used it as a location — not because it's spectacular, but because it's real. When you need a shot of Lima that doesn't feel staged, Kennedy Park is the answer."
      },
      "adult": {
        "brief": "Kennedy Park is the beating heart of Miraflores — always alive with street artists, wandering cats, and people from all walks of life.",
        "mid": "A central public park in Miraflores, known for cultural activity, street artists, and as a social gathering point. It has served as a backdrop for three Peruvian films, representing the vitality and everyday rhythm of modern Lima.",
        "long": "Few places in Lima feel as alive as Kennedy Park. Street artists, musicians, and people from every corner of the city converge here daily, making it one of the most socially layered public spaces in the capital. Three Peruvian films have used it as a backdrop — not for any single event, but for what it represents: the pulse of modern Lima, where the traditional and the contemporary coexist naturally."
      },
      "professional": {
        "brief": "Parque Kennedy: a high-density public space in Miraflores functioning as a key cinematographic site of urban social intersection.",
        "mid": "Parque John F. Kennedy functions as a primary cinematographic reference for the Miraflores district, its sociological significance as a site of intersection between tourism, informal commerce, and everyday social practice making it a recurring spatial motif in contemporary Peruvian cinema.",
        "long": "Parque John F. Kennedy occupies a structurally significant position within Lima's urban social geography. Its location in the Miraflores district — associated with upper-middle-class leisure and commercial activity — is complicated by the park's role as a democratic public space attracting visitors from across the socioeconomic spectrum. In Peruvian cinema, this tension has been productively exploited: the park's social heterogeneity makes it a naturalistic setting for films that wish to represent Lima as a city in negotiation between its class distinctions and its public commons. Its three documented cinematic appearances span comedy, drama, and biographical film, confirming its status as a persistent cinematographic reference for the district."
      }
    }
  },
  {
    "name": "San Martin Square",
    "address": "Av. Nicolas de Piérola cdra. 9, Lima 15001",
    "district": "Centro Historico",
    "movies": [
      {
        "title": "Las Sicodélicas",
        "year": 1968
      },
      {
        "title": "Gregorio",
        "year": 1984
      },
      {
        "title": "Palomillas del Rímac",
        "year": 1938
      },
      {
        "title": "Caídos del Cielo",
        "year": 1990
      }
    ],
    "descriptions": {
      "young": "One of Lima's most legendary squares — grand old buildings, decades of history packed into one place. Peruvian films have used it since the 1930s to capture what downtown Lima looks and feels like.",
      "adult": "One of Lima's most important historic squares, surrounded by republican-era architecture and deeply linked to the city's political and cultural identity. It has appeared in Peruvian films across nearly a century, from 1938 to the 1990s.",
      "professional": "Plaza San Martín constitutes a foundational locus of Lima's urban identity. Its republican architectural ensemble provides a visual shorthand for historical continuity and civic memory, with its cinematic uses spanning from the populist comedies of the 1930s to the socially critical dramas of the 1990s."
    },
    "access": "Public — free access",
    "lat": -12.050801747218538,
    "lng": -77.03449670489425,
    "image": "images/plaza-mayor-lima.webp",
    "cardDescription": {
      "short": "One of Lima's most iconic historic squares, surrounded by republican-era architecture that has anchored the city's identity for over a century.",
      "long": "Plaza San Martín is the formal heart of Lima's Centro Histórico — grand colonnaded buildings, open sky, and the constant movement of city life below. It has appeared in Peruvian cinema since the 1930s, used across nearly a century to represent downtown Lima at different political and social moments. From populist comedies of the 1930s to the socially critical dramas of the 1990s, the square has remained a consistent visual shorthand for the city's civic memory."
    },
    "texts": {
      "young": {
        "brief": "One of Lima's most famous squares — huge old buildings, decades of history, and a great place to understand what downtown Lima looks like.",
        "mid": "One of Lima's most legendary squares — grand old buildings, decades of history packed into one place. Peruvian films have used it since the 1930s to capture what downtown Lima looks and feels like.",
        "long": "Plaza San Martín is one of those places that makes you feel the weight of a city's history just by standing in it. The buildings around it are grand and weathered, the space is wide open, and the people crossing it seem unaware they're in one of the most filmed squares in Peruvian cinema. Films have been shot here since the 1930s — which means the square has appeared on screen across almost a century, sometimes as a backdrop, sometimes as the main character. If you want to understand what downtown Lima has looked and felt like through the decades, this is a good place to start."
      },
      "adult": {
        "brief": "One of Lima's most iconic historic squares, surrounded by republican-era architecture that has anchored the city's identity for over a century.",
        "mid": "One of Lima's most important historic squares, surrounded by republican-era architecture and deeply linked to the city's political and cultural identity. It has appeared in Peruvian films across nearly a century, from 1938 to the 1990s.",
        "long": "Plaza San Martín is the formal heart of Lima's Centro Histórico — grand colonnaded buildings, open sky, and the constant movement of city life below. It has appeared in Peruvian cinema since the 1930s, used across nearly a century to represent downtown Lima at different political and social moments. From populist comedies of the 1930s to the socially critical dramas of the 1990s, the square has remained a consistent visual shorthand for the city's civic memory."
      },
      "professional": {
        "brief": "Plaza San Martín: a foundational civic space in Lima's Centro Histórico, with documented cinematic use spanning the 1930s to the 1990s.",
        "mid": "Plaza San Martín constitutes a foundational locus of Lima's urban identity. Its republican architectural ensemble provides a visual shorthand for historical continuity and civic memory, with its cinematic uses spanning from the populist comedies of the 1930s to the socially critical dramas of the 1990s.",
        "long": "Plaza San Martín represents one of the most persistent cinematographic spaces in Peruvian film history, its documented appearances spanning nearly sixty years from Palomillas del Rímac (1938) to Caídos del Cielo (1990). The square's republican-era architectural ensemble — defined by colonnaded facades, the Hotel Bolívar, and the equestrian monument to the liberator — provides a stable visual grammar of civic authority and national identity that filmmakers have deployed across radically different ideological and generic registers. Its function as a sign of 'Lima' shifts from an indexical marker of the city's popular entertainment culture in the 1960s to a more fraught space of social inequality and historical crisis in the dramas of the 1980s and 1990s."
      }
    }
  },
  {
    "name": "Malecon de Miraflores",
    "address": "Mal. de la Reserva 275, Miraflores 15074, Perú",
    "district": "Miraflores",
    "movies": [
      {
        "title": "Caídos del Cielo",
        "year": 1990
      },
      {
        "title": "Lima 13",
        "year": 2012
      },
      {
        "title": "Metal y Melancolía",
        "year": 1993
      }
    ],
    "descriptions": {
      "young": "Walking along the Malecón feels cinematic on its own — cliffs, the Pacific stretched out below, paragliders above. It shows up in films as the face of Lima that's both beautiful and a bit melancholic.",
      "adult": "A scenic coastal walkway overlooking the Pacific Ocean, associated with modern, romantic, and upper-middle-class Lima. It appears in films ranging from political drama to documentary to intimate personal stories.",
      "professional": "The Malecón de Miraflores operates as a cinematographic signifier of Lima's aspirational modernity and its tensions, mediating representations across genre — from the documentary gaze of Honigmann's taxi drivers to the psychological interiority of Lombardi's social drama."
    },
    "access": "Public — free access",
    "lat": -12.124333888711332,
    "lng": -77.03836640674605,
    "image": "images/lima-shore.webp",
    "cardDescription": {
      "short": "A clifftop walkway above the Pacific — one of Lima's most cinematic and melancholic views.",
      "long": "The Malecón stretches along the edge of Miraflores, with the Pacific Ocean far below and paragliders drifting overhead. It's both beautiful and bittersweet — a boundary between the prosperous district behind it and the vastness of the sea. Filmmakers have used it to represent the aspirational, modern face of Lima, but also its loneliness. It appears in films spanning political drama, intimate personal stories, and documentary portraits of the city."
    },
    "texts": {
      "young": {
        "brief": "A clifftop walkway above the Pacific — one of the most beautiful spots in Lima, and a favourite for films that want to show the city at its most dramatic.",
        "mid": "Walking along the Malecón feels cinematic on its own — cliffs, the Pacific stretched out below, paragliders above. It shows up in films as the face of Lima that's both beautiful and a bit melancholic.",
        "long": "There's something about the Malecón that makes you stop and stare. You're walking through the middle of a very busy city, and suddenly there's nothing in front of you but ocean and sky. The cliff drops away, paragliders drift past at eye level, and the Pacific goes all the way to the horizon. It's the kind of view that catches you off guard even if you've seen it before. Films have used it for exactly that reason — it's a place where Lima shows a side of itself that feels both grand and a bit lonely, beautiful in a way that isn't quite comfortable."
      },
      "adult": {
        "brief": "A clifftop walkway above the Pacific — one of Lima's most cinematic and melancholic views.",
        "mid": "A scenic coastal walkway overlooking the Pacific Ocean, associated with modern, romantic, and upper-middle-class Lima. It appears in films ranging from political drama to documentary to intimate personal stories.",
        "long": "The Malecón stretches along the edge of Miraflores, with the Pacific Ocean far below and paragliders drifting overhead. It's both beautiful and bittersweet — a boundary between the prosperous district behind it and the vastness of the sea. Filmmakers have used it to represent the aspirational, modern face of Lima, but also its loneliness. It appears in films spanning political drama, intimate personal stories, and documentary portraits of the city."
      },
      "professional": {
        "brief": "Malecón de Miraflores: a coastal urban boundary space functioning as a cinematographic signifier of Lima's aspirational modernity.",
        "mid": "The Malecón de Miraflores operates as a cinematographic signifier of Lima's aspirational modernity and its tensions, mediating representations across genre — from the documentary gaze of Honigmann's taxi drivers to the psychological interiority of Lombardi's social drama.",
        "long": "The Malecón de Miraflores constitutes a liminal urban space in both geographic and representational terms, positioned at the boundary between the district's residential prosperity and the Pacific's vastness. Its cinematic uses exploit this liminality: the space lends itself equally to documentary observation — as in Honigmann's use of it as a site of encounter between urban subjects — and to the staging of psychological states of longing, loss, and social aspiration. The walkway's visual grammar, combining coastal grandeur with the domesticity of joggers and dog-walkers, produces a particular version of Lima that is at once modern and melancholy, international in aspiration and distinctly local in atmosphere."
      }
    }
  },
  {
    "name": "Monumental Callao",
    "address": "Jirón Constitución 250, Callao 07021, Perú",
    "district": "Callao",
    "movies": [
      {
        "title": "Viejos amigos",
        "year": 2014
      },
      {
        "title": "Django: La Otra Cara",
        "year": 2002
      },
      {
        "title": "Django: Sangre de mi sangre",
        "year": 2018
      }
    ],
    "descriptions": {
      "young": "Monumental Callao is a colorful cultural district in the historic center of Callao, known for murals, galleries, street art, music, food, and restored republican-era buildings. It shows a creative and urban side of the port city, very different from the industrial image usually associated with Callao.",
      "adult": "A culture-driven urban regeneration area located in Callao's historic center, centered around Casa Fugaz and the surrounding heritage streets. Monumental Callao brings together urban art, galleries, restored architecture, gastronomy, rooftop views, local memory, and community projects, offering a renewed reading of one of Lima's most historically important port districts.",
      "professional": "Monumental Callao functions as a contemporary cultural and urban regeneration node within the historic center of Callao. Through Casa Fugaz, the Ronald Building, mural interventions, galleries, artist studios, gastronomic spaces, and heritage routes, the area reframes the port city as a site of visual production, collective memory, architectural recovery, and community-based cultural transformation."
    },
    "access": "Public cultural area — Casa Fugaz and guided tours available Tuesday to Sunday, 11:00 a.m. to 6:00 p.m.; some indoor spaces or rooftop activities may require reservation",
    "lat": -12.06085,
    "lng": -77.14645,
    "cardDescription": {
      "short": "A revitalized cultural district in Callao’s historic center, known for murals, galleries, heritage buildings, music, food, and urban art.",
      "long": "Monumental Callao is not the restricted industrial port, but a cultural and artistic district in the historic center of Callao. Around Casa Fugaz, Jirón Constitución, Plaza Matriz, Plaza Gálvez, Plaza Grau, and the old Ronald Building, the area combines restored republican architecture, street art, galleries, artist studios, gastronomy, music, and community projects. It offers a visual counterpoint to Lima’s more polished districts by showing Callao as a place of memory, creativity, port identity, and urban transformation."
    },
    "texts": {
      "young": {
        "brief": "A colorful art district in historic Callao, full of murals, galleries, music, food, and restored old buildings.",
        "mid": "Monumental Callao is one of the most creative urban spaces in the port city. Instead of cranes and warehouses, here you find murals, galleries, rooftops, artist studios, food spots, and old republican buildings brought back to life.",
        "long": "Monumental Callao is the side of Callao where history and street art meet. Around Casa Fugaz and the old streets of the historic center, walls have become murals, old buildings have become galleries, and public spaces have turned into places for music, food, workshops, and cultural events. It still feels urban and very connected to the port, but its energy is now more creative than industrial: colorful façades, local stories, rooftop views, and a strong sense of neighborhood identity."
      },
      "adult": {
        "brief": "A revitalized cultural district in Callao’s historic center, shaped by art, heritage, gastronomy, and community life.",
        "mid": "Monumental Callao is a culture-led regeneration area centered around Casa Fugaz and the heritage streets of the old port district. It brings together urban murals, galleries, restored architecture, local gastronomy, and historical routes through places such as Plaza Matriz, Plaza Gálvez, Plaza Grau, and the Ronald Building.",
        "long": "Monumental Callao represents the transformation of part of Callao’s historic center into a cultural, artistic, and tourist-oriented district. Its streets preserve traces of the old port city through republican buildings, traditional plazas, balconies, and narrow urban passages, while contemporary murals, galleries, artist studios, restaurants, music spaces, and rooftop venues give the area a new public life. Rather than functioning as a restricted port zone, it is a walkable cultural route that connects heritage, local memory, urban art, and the social identity of Callao."
      },
      "professional": {
        "brief": "Monumental Callao: a culture-led urban regeneration district in the historic port center, articulated through art, heritage architecture, and community activation.",
        "mid": "Monumental Callao operates as a contemporary urban regeneration project within the historic center of Callao. Centered on Casa Fugaz, the Ronald Building, public murals, galleries, studios, cultural programming, and heritage routes, it transforms the port city’s architectural and social memory into a platform for visual culture, tourism, and community-based cultural production.",
        "long": "Monumental Callao should be understood not as an industrial port facility but as a cultural and spatial reactivation of Callao’s historic center. Its value lies in the encounter between republican architecture, port memory, public art, creative industries, gastronomy, and community-oriented cultural management. The district uses restored buildings, mural interventions, gallery spaces, artist studios, rooftop programming, and guided routes through Plaza Matriz, Plaza Gálvez, Plaza Grau, Jirón Constitución, and Casa Fugaz to reframe Callao as a site of heritage, visual experimentation, and urban transformation. For audiovisual narratives, it offers a layered setting where historical architecture, street art, local identity, and social renewal coexist within the symbolic geography of Peru’s main port city."
      }
    }
  },
  {
    "name": "Playa Cantolao",
    "address": "Malecón Figueredo, La Punta, Callao, Perú",
    "district": "La Punta",
    "movies": [
      {
        "title": "Viaje a Tombuctú",
        "year": 2014
      },
      {
        "title": "Viejos amigos",
        "year": 2014
      }
    ],
    "descriptions": {
      "young": "Playa Cantolao is one of the most traditional beaches in Callao, located in La Punta. Instead of sand, it has a rocky shoreline, calm waters, boats, views of San Lorenzo Island, and a relaxed seaside atmosphere that feels closely connected to the port city’s maritime identity.",
      "adult": "A historic pebble beach in La Punta, Callao, facing the Pacific Ocean and located near the Malecón Figueredo and the Peruvian Naval School. Cantolao is known for its calm waters, nautical activities, views of San Lorenzo and El Frontón islands, and its role as a traditional recreational space for families, visitors, fishermen, and local residents.",
      "professional": "Playa Cantolao functions as a coastal and maritime landscape within the district of La Punta, Callao. Its pebble shoreline, calm bay waters, proximity to the Naval School, visual connection with San Lorenzo and El Frontón islands, and relationship with fishing, boating, swimming, and local recreation make it a significant audiovisual and urban setting for representing Callao’s seaside identity."
    },
    "access": "Public beach — free entry; recommended visiting hours are 9:00 a.m. to 6:00 p.m.; access may depend on weather, sea conditions, or temporary municipal restrictions",
    "lat": -12.0681,
    "lng": -77.1626,
    "cardDescription": {
      "short": "A traditional pebble beach in La Punta, Callao, with calm waters, boats, island views, and strong maritime identity.",
      "long": "Playa Cantolao is one of Callao’s most traditional coastal spaces. Located in La Punta, near the Malecón Figueredo and the Peruvian Naval School, it is known for its pebble shoreline, calm waters, nautical atmosphere, and views of San Lorenzo and El Frontón islands. The beach connects recreation, fishing, boating, family visits, and local memory, offering a quieter and more maritime image of Callao than the industrial port or the urban center."
    },
    "texts": {
      "young": {
        "brief": "A calm pebble beach in La Punta, with boats, island views, and a relaxed Callao seaside atmosphere.",
        "mid": "Playa Cantolao is one of the most recognizable beaches in La Punta. It has stones instead of sand, calm water, small boats, views of San Lorenzo Island, and a coastal mood that feels very different from the beaches of central Lima.",
        "long": "Playa Cantolao is the kind of place where Callao feels closer to the sea than to the city. The beach is made of rounded stones, the water is usually calmer than on the open coast, and the view opens toward San Lorenzo and El Frontón islands. You can see boats, families, swimmers, and people walking along the waterfront. It is not a luxury beach or a tourist postcard beach; it is more local, maritime, and connected to the everyday life of La Punta."
      },
      "adult": {
        "brief": "A traditional beach in La Punta, Callao, known for its pebble shore, calm bay waters, boats, and island views.",
        "mid": "Playa Cantolao is a historic coastal space in La Punta, located near the Malecón Figueredo and the Peruvian Naval School. Its calm waters, pebble shoreline, fishing activity, boat rides, and views of San Lorenzo and El Frontón give it a strong maritime character.",
        "long": "Playa Cantolao is one of the most traditional beaches in Callao and an important part of La Punta’s coastal identity. Unlike many sandy beaches in Lima, Cantolao is defined by its stone-covered shore, calm bay waters, nearby boats, and direct visual relationship with San Lorenzo Island and El Frontón. Historically, it has functioned as a recreational meeting place for local families, visitors, fishermen, and people connected to nautical activities. Its atmosphere combines leisure, maritime tradition, residential life, and the memory of Callao as Peru’s main port city."
      },
      "professional": {
        "brief": "Playa Cantolao: a traditional coastal landscape in La Punta, shaped by pebble shorelines, calm bay waters, nautical activity, and Callao’s maritime memory.",
        "mid": "Playa Cantolao operates as a representative coastal space within La Punta, Callao. Its physical features — pebble beach, sheltered waters, boats, waterfront promenades, and views toward San Lorenzo and El Frontón — create a visual setting linked to recreation, fishing, navigation, and the historical maritime identity of the port city.",
        "long": "Playa Cantolao should be understood as a coastal and cultural landscape rather than simply a recreational beach. Located in La Punta, facing the bay and visually connected to San Lorenzo and El Frontón islands, it condenses several layers of Callao’s identity: port memory, nautical activity, family recreation, fishing practices, and residential seaside life. Its pebble shoreline, calm waters, boats, waterfront infrastructure, and proximity to the Peruvian Naval School make it a visually distinctive location for audiovisual narratives. In cinematic terms, Cantolao offers a quieter and more contemplative image of Callao, different from the industrial port or dense urban streets, but still deeply connected to the sea, movement, memory, and local everyday life."
      }
    }
  },
  {
    "name": "Playa Agua Dulce",
    "address": "RXPF+R55, Chorrillos, Perú",
    "district": "Chorrillos",
    "movies": [
      {
        "title": "Caídos del Cielo",
        "year": 1990
      },
      {
        "title": "Metal y Melancolía",
        "year": 1993
      },
      {
        "title": "¡Asu Mare!",
        "year": 2013
      },
      {
        "title": "Juliana",
        "year": 1989
      },
      {
        "title": "Cholo",
        "year": 1972
      }
    ],
    "descriptions": {
      "young": "Agua Dulce is Lima's go-to beach — packed on weekends, full of limeño summer energy, and one of the few spots where everyone from every background shows up together.",
      "adult": "One of Lima's most popular public beaches, associated with summer recreation, local culture, and the coastal dimension of everyday city life.",
      "professional": "Playa Agua Dulce represents an important site of popular urban recreation, its inclusive social character — drawing visitors across class lines — making it a significant space for the study of public life and leisure in Lima."
    },
    "access": "Public — free access",
    "lat": -12.162789787144682,
    "lng": -77.02697982995775,
    "cardDescription": {
      "short": "Lima's most democratic beach — packed, loud, and full of the city's summer energy.",
      "long": "Agua Dulce is where Lima goes to the beach. Unlike the private clubs of Miraflores, this public shore draws people from across the city and across economic backgrounds, making it one of the rare spaces where the social mix of Lima becomes truly visible. Its crowded weekends and limeño summer atmosphere have made it a recurring reference in films that want to show the city not as an architectural stage, but as a living, breathing community."
    },
    "texts": {
      "young": {
        "brief": "Lima's most popular beach — free, busy, and full of real limeño summer energy.",
        "mid": "Agua Dulce is Lima's go-to beach — packed on weekends, full of limeño summer energy, and one of the few spots where everyone from every background shows up together.",
        "long": "Agua Dulce is not a glamorous beach. There are no private clubs, no reserved sections, no entry fees. On a summer weekend it's loud, crowded, and joyful in the way only truly public spaces can be — people from every part of Lima and every walk of life sharing the same strip of sand and the same cold Pacific water. That's exactly what makes it interesting. In a city as economically divided as Lima, Agua Dulce is one of the few places where those divisions temporarily dissolve. Films have used it to show this Lima: not the postcard version, but the real one."
      },
      "adult": {
        "brief": "Lima's most democratic beach — packed, loud, and full of the city's summer energy.",
        "mid": "One of Lima's most popular public beaches, associated with summer recreation, local culture, and the coastal dimension of everyday city life.",
        "long": "Agua Dulce is where Lima goes to the beach. Unlike the private clubs of Miraflores, this public shore draws people from across the city and across economic backgrounds, making it one of the rare spaces where the social mix of Lima becomes truly visible. Its crowded weekends and limeño summer atmosphere have made it a recurring reference in films that want to show the city not as an architectural stage, but as a living, breathing community."
      },
      "professional": {
        "brief": "Playa Agua Dulce: a significant public beach site embodying Lima's social geography of leisure and class accessibility.",
        "mid": "Playa Agua Dulce represents an important site of popular urban recreation, its inclusive social character — drawing visitors across class lines — making it a significant space for the study of public life and leisure in Lima.",
        "long": "Playa Agua Dulce occupies a distinctive position in Lima's social geography as a publicly accessible beach in a coastal city whose shoreline is otherwise largely mediated through private clubs and exclusive residential access. Its cinematic significance lies precisely in this inclusivity: the beach's social heterogeneity makes it a productive space for representing a Lima that transcends the class stratifications that typically structure the city's spatial organisation. Its appearances in film reflect an interest in the beach as a democratic commons — temporary, seasonal, and contested — within an urban environment defined by persistent inequality."
      }
    }
  },
  {
    "name": "Bridge of Sighs - Puente de Los Suspiros",
    "address": "Jr. Batallón 271, Barranco 15063, Perú",
    "district": "Barranco",
    "movies": [
      {
        "title": "La última tarde",
        "year": 2016
      },
      {
        "title": "Muero por Muriel",
        "year": 2007
      }
    ],
    "descriptions": {
      "young": "The Bridge of Sighs in Barranco is the most romantic spot in Lima — a wooden bridge surrounded by old colorful houses, street musicians, and the sound of the ocean in the distance. Very photogenic, but genuinely beautiful.",
      "adult": "A historic wooden bridge in Barranco, symbolic of the district's bohemian, artistic, and romantic identity. Barranco has long been Lima's artistic quarter, and this bridge is its most iconic landmark.",
      "professional": "The Puente de Los Suspiros serves as an architectural and cultural emblem of Barranco's identity as Lima's historically designated artistic district. Its repeated appearance in visual media reflects the bridge's function as a condensed signifier of nostalgia, romanticism, and the city's bohemian cultural memory."
    },
    "access": "Public — free access",
    "lat": -12.148642839701377,
    "lng": -77.02247030601738,
    "cardDescription": {
      "short": "A historic wooden bridge in Barranco — the most romantic landmark in Lima's artistic quarter.",
      "long": "Puente de Los Suspiros is one of Lima's most photographed and most storied locations. Set in the bohemian district of Barranco, surrounded by colorful colonial houses and within earshot of the ocean, it carries the weight of over a century of love stories, art, and local legend. For Peruvian cinema, it represents a Lima of beauty and melancholy — a place that feels apart from the rest of the city, suspended somewhere between past and present."
    },
    "texts": {
      "young": {
        "brief": "The most romantic bridge in Lima — wooden, old, and right in the middle of Barranco, the city's artistic neighbourhood.",
        "mid": "The Bridge of Sighs in Barranco is the most romantic spot in Lima — a wooden bridge surrounded by old colorful houses, street musicians, and the sound of the ocean in the distance. Very photogenic, but genuinely beautiful.",
        "long": "If someone tells you to meet them at the Bridge of Sighs, you'll understand why when you get there. It's a small wooden bridge in the middle of Barranco, one of Lima's most beautiful and creative neighbourhoods, and it has a particular atmosphere that's hard to describe — something between nostalgia and romance, with street musicians usually playing nearby and the sound of the ocean just a few streets away. There's a legend that if you cross the bridge holding your breath and make a wish, it will come true. Whether or not you believe that, it's easy to see why this place has ended up in so many films."
      },
      "adult": {
        "brief": "A historic wooden bridge in Barranco — the most romantic landmark in Lima's artistic quarter.",
        "mid": "A historic wooden bridge in Barranco, symbolic of the district's bohemian, artistic, and romantic identity. Barranco has long been Lima's artistic quarter, and this bridge is its most iconic landmark.",
        "long": "Puente de Los Suspiros is one of Lima's most photographed and most storied locations. Set in the bohemian district of Barranco, surrounded by colorful colonial houses and within earshot of the ocean, it carries the weight of over a century of love stories, art, and local legend. For Peruvian cinema, it represents a Lima of beauty and melancholy — a place that feels apart from the rest of the city, suspended somewhere between past and present."
      },
      "professional": {
        "brief": "Puente de Los Suspiros: an emblematic heritage structure in Barranco functioning as a condensed sign of Lima's bohemian cultural memory.",
        "mid": "The Puente de Los Suspiros serves as an architectural and cultural emblem of Barranco's identity as Lima's historically designated artistic district. Its repeated appearance in visual media reflects the bridge's function as a condensed signifier of nostalgia, romanticism, and the city's bohemian cultural memory.",
        "long": "The Puente de Los Suspiros constitutes one of the most semantically overdetermined architectural sites in Lima's cultural landscape. Its position within Barranco — a district historically associated with artistic production, intellectual bohemianism, and upper-class leisure — lends it a symbolic density that Peruvian filmmakers and photographers have consistently exploited. The bridge functions as a sign of a particular Lima: romantic, slightly melancholy, affiliated with aesthetic sensibility and the productive nostalgia of a city that is always in the process of changing while longing for what it was. Its legend — that wishes made while crossing without breathing are granted — further consolidates its status as a site of affective investment."
      }
    }
  },
  {
    "name": "Magdalena Market - Mercado de Magdalena",
    "address": "Jr. Bolognesi 504, Magdalena del Mar 15086, Perú",
    "district": "Magdalena del Mar",
    "movies": [
      {
        "title": "Gregorio",
        "year": 1984
      },
      {
        "title": "Juliana",
        "year": 1989
      }
    ],
    "descriptions": {
      "young": "Traditional markets like this are where you really see how Lima lives — vendors, food, noise, color. Both Gregorio and Juliana used it to show the everyday struggle of working-class kids on the streets of the city.",
      "adult": "A traditional neighborhood market in Magdalena del Mar, reflecting everyday commerce, Peruvian gastronomy, and working-class urban life. It appears in two Grupo Chaski films focused on child poverty and street survival.",
      "professional": "Mercado de Magdalena del Mar appears in the social realist cinema of Grupo Chaski as a site of informal economic activity and precarious survival, its documentary-adjacent use of market space grounding the films' representations of childhood poverty in the material conditions of 1980s Lima."
    },
    "access": "Public — free access during market hours",
    "lat": -12.090168055532995,
    "lng": -77.07310081413262,
    "image": "images/mercado-magdalena.webp",
    "cardDescription": {
      "short": "A traditional neighborhood market where Lima's everyday life — food, noise, color, and community — plays out in full.",
      "long": "Mercado de Magdalena is the kind of place that tells you more about how Lima works than any tourist itinerary could. Vendors, fresh produce, street food, and the constant negotiation of daily commerce fill its narrow aisles. Two films by Grupo Chaski — the collective known for their unflinching portraits of Lima's working-class and marginalized communities — used this market to frame stories about child poverty and life on the street, grounding fiction in the textures of real urban life."
    },
    "texts": {
      "young": {
        "brief": "A real Lima market — loud, colourful, and full of life. The kind of place where you understand how the city actually works.",
        "mid": "Traditional markets like this are where you really see how Lima lives — vendors, food, noise, color. Both Gregorio and Juliana used it to show the everyday struggle of working-class kids on the streets of the city.",
        "long": "Mercado de Magdalena is everything a traditional Lima market should be: crowded, noisy, overflowing with fresh produce, street food, and the constant business of daily commerce. It's the kind of place where everyone knows each other and everyone is always busy. Two films by Grupo Chaski — a collective known for making films about the parts of Lima that rarely appear on screen — used this market to tell stories about children living on the margins of the city. The market gave their fiction its texture: the real sound and smell and movement of Lima's working-class daily life."
      },
      "adult": {
        "brief": "A traditional neighborhood market where Lima's everyday life — food, noise, color, and community — plays out in full.",
        "mid": "A traditional neighborhood market in Magdalena del Mar, reflecting everyday commerce, Peruvian gastronomy, and working-class urban life. It appears in two Grupo Chaski films focused on child poverty and street survival.",
        "long": "Mercado de Magdalena is the kind of place that tells you more about how Lima works than any tourist itinerary could. Vendors, fresh produce, street food, and the constant negotiation of daily commerce fill its narrow aisles. Two films by Grupo Chaski — the collective known for their unflinching portraits of Lima's working-class and marginalized communities — used this market to frame stories about child poverty and life on the street, grounding fiction in the textures of real urban life."
      },
      "professional": {
        "brief": "Mercado de Magdalena: a traditional urban market used by Grupo Chaski as a documentary-adjacent site for representing child poverty and social marginality.",
        "mid": "Mercado de Magdalena del Mar appears in the social realist cinema of Grupo Chaski as a site of informal economic activity and precarious survival, its documentary-adjacent use of market space grounding the films' representations of childhood poverty in the material conditions of 1980s Lima.",
        "long": "Mercado de Magdalena del Mar functions in the films of Grupo Chaski as a site whose spatial density and social heterogeneity serve both a documentary and a dramatic purpose. The collective's neorealist aesthetic — non-professional actors, location shooting, ambient sound — positions the market as a space where the boundary between fiction and social document is deliberately blurred. The market's informal economy and its role as a site of working-class social reproduction make it productive for films seeking to represent the structural conditions of poverty and childhood precarity in Lima, grounding abstract social critique in the material textures of everyday commercial life."
      }
    }
  },
  {
    "name": "Calle Tarata",
    "address": "C. Tarata, Miraflores 15074, Perú",
    "district": "Miraflores",
    "movies": [
      {
        "title": "Tarata",
        "year": 2009
      }
    ],
    "descriptions": {
      "young": "Calle Tarata is a short, quiet street in Miraflores that became one of the most significant addresses in Lima's recent history. In 1992, a terrorist attack here killed dozens of civilians. The 2009 film Tarata is entirely built around that night.",
      "adult": "A residential street in Miraflores marked permanently by the 1992 Sendero Luminoso bombing, which killed 25 people and injured hundreds. The street gave its name to Fabrizio Aguilar's film about the human impact of that attack.",
      "professional": "Calle Tarata constitutes a site of urban trauma within the Miraflores district. The 1992 car bombing by Sendero Luminoso transformed it into a memorial space whose cinematic treatment in Aguilar's Tarata (2009) navigates the intersection of collective memory, political violence, and bourgeois civilian experience."
    },
    "access": "Public — free access",
    "lat": -12.123488301294946,
    "lng": -77.0287904161149,
    "image": "images/calle-tarata.webp",
    "cardDescription": {
      "short": "A quiet Miraflores street marked forever by the 1992 Sendero Luminoso bombing that killed 25 civilians.",
      "long": "Calle Tarata looks like many other residential streets in Miraflores — until you know its history. On the night of July 16, 1992, a car bomb planted by Sendero Luminoso exploded here, killing 25 people and injuring hundreds more. The attack became one of the defining events of Peru's internal conflict. Fabrizio Aguilar's 2009 film takes the street's name as its title, reconstructing that night to examine the human cost of political violence on ordinary lives."
    },
    "texts": {
      "young": {
        "brief": "A quiet street in Miraflores that became one of the most significant addresses in Lima's recent history after a 1992 terrorist attack.",
        "mid": "Calle Tarata is a short, quiet street in Miraflores that became one of the most significant addresses in Lima's recent history. In 1992, a terrorist attack here killed dozens of civilians. The 2009 film Tarata is entirely built around that night.",
        "long": "Calle Tarata doesn't look like a place where history happened. It's short, residential, and quiet — the kind of street you'd walk past without noticing. But on the night of July 16, 1992, a car bomb placed by Sendero Luminoso exploded here, killing 25 people and wounding hundreds more. The attack struck at the heart of Miraflores — Lima's most prosperous, most visible neighbourhood — and sent a message that no part of the city was safe. The 2009 film Tarata reconstructs that night, showing the event not as history but as something that happened to specific people in a specific place. The street is both a real address and a memorial."
      },
      "adult": {
        "brief": "A quiet Miraflores street marked forever by the 1992 Sendero Luminoso bombing that killed 25 civilians.",
        "mid": "A residential street in Miraflores marked permanently by the 1992 Sendero Luminoso bombing, which killed 25 people and injured hundreds. The street gave its name to Fabrizio Aguilar's film about the human impact of that attack.",
        "long": "Calle Tarata looks like many other residential streets in Miraflores — until you know its history. On the night of July 16, 1992, a car bomb planted by Sendero Luminoso exploded here, killing 25 people and injuring hundreds more. The attack became one of the defining events of Peru's internal conflict. Fabrizio Aguilar's 2009 film takes the street's name as its title, reconstructing that night to examine the human cost of political violence on ordinary lives."
      },
      "professional": {
        "brief": "Calle Tarata: a site of urban trauma in Miraflores, cinematically treated as a space of memory for the 1992 Sendero Luminoso bombing.",
        "mid": "Calle Tarata constitutes a site of urban trauma within the Miraflores district. The 1992 car bombing by Sendero Luminoso transformed it into a memorial space whose cinematic treatment in Aguilar's Tarata (2009) navigates the intersection of collective memory, political violence, and bourgeois civilian experience.",
        "long": "Calle Tarata occupies a distinctive position in Lima's urban memory as the site of the July 16, 1992 car bombing by Sendero Luminoso, which killed 25 civilians and became one of the most symbolically charged events of Peru's internal conflict. The attack's location in Miraflores — Lima's most affluent and internationally visible district — was understood at the time as a deliberate escalation of the conflict into spaces previously perceived as protected by class geography. Fabrizio Aguilar's Tarata (2009) engages directly with this dimension, reconstructing the night of the bombing in a mode that blends personal testimony with collective trauma, positioning the street not as historical backdrop but as a space whose spatial memory structures the film's entire affective logic."
      }
    }
  },
  {
    "name": "Avenida Brasil",
    "address": "Av. Brasil, Lima 15084, Perú",
    "district": [
      "Breña",
      "Jesús María",
      "Pueblo Libre",
      "Magdalena del Mar"
    ],
    "movies": [
      {
        "title": "Esta es la U",
        "year": 2024
      },
      {
        "title": "Cholo",
        "year": 1972
      },
      {
        "title": "Metal y Melancolía",
        "year": 1993
      }
    ],
    "descriptions": {
      "young": "Avenida Brasil runs through several Lima districts and is one of those streets that just shows the city in motion — cars, buses, everyday people. It shows up in films as a connector, a slice of the city's daily flow.",
      "adult": "A major avenue crossing multiple districts, used in films to represent the flow of everyday urban life, middle-class Lima, and the city's spatial connections. It appears across diverse genres, from documentary to comedy to crime.",
      "professional": "Avenida Brasil functions as a cinematographic artery of Lima's urban landscape, its cross-district extent making it a spatial marker of the city's social heterogeneity. Its use across multiple productions — from Honigmann's documentary to Maldonado's biographical comedy — reflects its role as a shared spatial reference for Lima's diverse cinematic representations."
    },
    "access": "Public — free access",
    "lat": -12.078385714156722,
    "lng": -77.05694122354882,
    "image": "images/avenida-brasil.webp",
    "cardDescription": {
      "short": "A major Lima avenue that crosses the city like a vein — busy, unglamorous, and completely alive.",
      "long": "Avenida Brasil doesn't appear in films for its beauty. It appears because it feels true. Running through Breña, Jesús María, and Pueblo Libre, it carries the traffic and daily rhythms of middle Lima — the Lima of buses and corner shops and people always somewhere to be. Across documentary, comedy, and crime genres, filmmakers have used it as a spatial connector, a slice of urban motion that locates stories firmly in the real geography of the city."
    },
    "texts": {
      "young": {
        "brief": "One of Lima's main avenues — busy, everyday, and a reliable way to show the city as it actually is.",
        "mid": "Avenida Brasil runs through several Lima districts and is one of those streets that just shows the city in motion — cars, buses, everyday people. It shows up in films as a connector, a slice of the city's daily flow.",
        "long": "Avenida Brasil isn't a scenic street and it isn't trying to be. It's a major urban artery that runs through Breña, Jesús María, and Pueblo Libre, carrying traffic, buses, and the daily movement of middle Lima in both directions. That's exactly why filmmakers use it. When you want a shot of the city that feels honest — not beautiful, not ugly, just real — Avenida Brasil delivers. It's the Lima of bus stops and corner pharmacies and people who have somewhere to be. Several films across very different genres have used it for exactly that quality: the unglamorous, undeniable rhythm of everyday urban life."
      },
      "adult": {
        "brief": "A major Lima avenue that crosses the city like a vein — busy, unglamorous, and completely alive.",
        "mid": "A major avenue crossing multiple districts, used in films to represent the flow of everyday urban life, middle-class Lima, and the city's spatial connections. It appears across diverse genres, from documentary to comedy to crime.",
        "long": "Avenida Brasil doesn't appear in films for its beauty. It appears because it feels true. Running through Breña, Jesús María, and Pueblo Libre, it carries the traffic and daily rhythms of middle Lima — the Lima of buses and corner shops and people always somewhere to be. Across documentary, comedy, and crime genres, filmmakers have used it as a spatial connector, a slice of urban motion that locates stories firmly in the real geography of the city."
      },
      "professional": {
        "brief": "Avenida Brasil: a multi-district urban artery used cinematographically as a spatial marker of Lima's middle-class everyday life.",
        "mid": "Avenida Brasil functions as a cinematographic artery of Lima's urban landscape, its cross-district extent making it a spatial marker of the city's social heterogeneity. Its use across multiple productions reflects its role as a shared spatial reference for Lima's diverse cinematic representations.",
        "long": "Avenida Brasil's cinematic utility lies in its indexical quality: as a major arterial road crossing several of Lima's central districts, it provides a spatial reference point that grounds diverse filmic narratives in a shared urban geography. Unlike the symbolic monuments of the Centro Histórico or the aspirational architectures of Miraflores, the avenue's visual register is resolutely quotidian — traffic, commerce, transit — making it a productive site for films seeking to represent Lima's middle strata and their daily spatial practices. Its cross-generic appearances, from documentary to comedy to social drama, confirm its status as a versatile cinematographic resource for a wide range of representational purposes."
      }
    }
  },
  {
    "name": "Jirón de la Unión",
    "address": "Jirón de la Unión, Lima 15001, Perú",
    "district": "Lima",
    "movies": [
      {
        "title": "Palomillas del Rímac",
        "year": 1938
      },
      {
        "title": "Metal y Melancolía",
        "year": 1993
      },
      {
        "title": "Las chicas del Jirón de la Unión",
        "year": 1930
      },
      {
        "title": "Las Sicodélicas",
        "year": 1968
      },
      {
        "title": "Gregorio",
        "year": 1984
      },
      {
        "title": "Juliana",
        "year": 1989
      }
    ],
    "descriptions": {
      "young": "Jirón de la Unión is Lima's main pedestrian street downtown — full of shops, street sellers, and people from all over the country. Six films used it from the 1930s to the 1990s, showing how the street has always been the pulse of the city.",
      "adult": "Lima's historic pedestrian thoroughfare, central to commercial and social life in the Centro Histórico. It has served as a backdrop for six films spanning six decades, consistently used to represent the movement, diversity, and contradictions of downtown Lima.",
      "professional": "Jirón de la Unión represents one of Lima's most persistently cinematographic urban spaces. Its pedestrian character and demographic diversity render it a productive site for representing social heterogeneity and urban tension, with cinematic uses spanning from early popular cinema in the 1930s to socially critical dramas of the 1990s."
    },
    "access": "Public — free access",
    "lat": -12.04958142862287,
    "lng": -77.03413897419874,
    "image": "images/jiron-de-la-union.webp",
    "cardDescription": {
      "short": "Lima's main pedestrian street — the commercial and social spine of the Centro Histórico.",
      "long": "Jirón de la Unión has been the pulse of downtown Lima for generations. Lined with shops, food stalls, street sellers, and passersby from every part of the country, it concentrates the movement and contradictions of the Centro Histórico in a single walkable artery. Six films across six decades have used it — from early popular cinema in the 1930s to the urban dramas of the 1990s — consistently returning to this street as a visual index of how the city's center has changed, and what has stayed the same."
    },
    "texts": {
      "young": {
        "brief": "Lima's main pedestrian street in the historic centre — always busy, always interesting, always very Lima.",
        "mid": "Jirón de la Unión is Lima's main pedestrian street downtown — full of shops, street sellers, and people from all over the country. Six films used it from the 1930s to the 1990s, showing how the street has always been the pulse of the city.",
        "long": "Jirón de la Unión is the kind of street where you can walk for ten minutes and feel like you've seen a cross-section of the whole country. Street sellers, tourists, office workers, students, and families all share the same narrow pedestrian artery through the Centro Histórico, moving in different directions for different reasons. It's been like this for decades. Films have used it since the 1930s — and what's interesting is that while Lima has changed enormously, the street's character has stayed recognisable. Six films across six decades came back to it because it always feels like the city's centre of gravity."
      },
      "adult": {
        "brief": "Lima's main pedestrian street — the commercial and social spine of the Centro Histórico.",
        "mid": "Lima's historic pedestrian thoroughfare, central to commercial and social life in the Centro Histórico. It has served as a backdrop for six films spanning six decades, consistently used to represent the movement, diversity, and contradictions of downtown Lima.",
        "long": "Jirón de la Unión has been the pulse of downtown Lima for generations. Lined with shops, food stalls, street sellers, and passersby from every part of the country, it concentrates the movement and contradictions of the Centro Histórico in a single walkable artery. Six films across six decades have used it — from early popular cinema in the 1930s to the urban dramas of the 1990s — consistently returning to this street as a visual index of how the city's centre has changed, and what has stayed the same."
      },
      "professional": {
        "brief": "Jirón de la Unión: Lima's principal pedestrian thoroughfare, with documented cinematic use spanning six decades of Peruvian film.",
        "mid": "Jirón de la Unión represents one of Lima's most persistently cinematographic urban spaces, with cinematic uses spanning from early popular cinema in the 1930s to socially critical dramas of the 1990s.",
        "long": "Jirón de la Unión's status as Lima's principal pedestrian axis — connecting the Plaza Mayor to the Plaza San Martín through the commercial heart of the Centro Histórico — makes it a uniquely productive cinematographic space. Its demographic heterogeneity, concentrated pedestrian density, and architectural layering of colonial, republican, and twentieth-century commercial fabric produce a visual environment that filmmakers have returned to consistently as an index of Lima's social complexity. Its six documented cinematic appearances across six decades reveal a consistent deployment of the street as a space where social distinction and urban anonymity coexist — where the contradictions of Peruvian urban modernity are made visible in motion."
      }
    }
  },
  {
    "name": "Institución Educativa 3004 España",
    "address": "XX7F+855, Rímac 15093, Perú",
    "district": "Rimac",
    "movies": [
      {
        "title": "Gregorio",
        "year": 1984
      },
      {
        "title": "Juliana",
        "year": 1989
      },
      {
        "title": "La Hora Final",
        "year": 2017
      }
    ],
    "descriptions": {
      "young": "A public school in Rímac, one of Lima's oldest and most historically rich districts. Schools like this appear in films about childhood, education, and the realities of public life across the city.",
      "adult": "A public educational institution in the Rímac district, representative of Lima's public school infrastructure and the community life of one of the city's most historic neighborhoods.",
      "professional": "Institución Educativa 3004 España functions as a cinematographic site of public institutional life within the Rímac district — a neighborhood whose historical significance and socioeconomic character make it a recurring setting in films engaging with themes of urban community and educational access."
    },
    "access": "Restricted — educational institution",
    "lat": -12.03668676454872,
    "lng": -77.02701301478236,
    "cardDescription": {
      "short": "A public school in Rímac, one of Lima's oldest districts — a setting for stories about childhood and community.",
      "long": "Schools like IE 3004 España are where Lima's public life begins for most of its residents. Located in Rímac — a district with deep roots in the city's colonial and republican history — the school represents the infrastructure of everyday urban childhood, far from elite institutions. Its appearance in film reflects a broader interest in the realities of public education and community life in Lima's older, working-class neighborhoods."
    },
    "texts": {
      "young": {
        "brief": "A public school in one of Lima's oldest districts — the kind of place that tells you about how most of the city lives.",
        "mid": "A public school in Rímac, one of Lima's oldest and most historically rich districts. Schools like this appear in films about childhood, education, and the realities of public life across the city.",
        "long": "Institución Educativa 3004 España is a public school in Rímac, one of the oldest and most historically layered districts in Lima. It's not a landmark in the tourist sense, but it's exactly the kind of place that matters if you want to understand how the city works for most of its residents. Public schools in Lima are where the majority of the city's children spend their days — and in films, they appear as spaces of both community and constraint, where social realities play out in the language of childhood. Rímac, with its colonial history and working-class present, gives this school a particular weight."
      },
      "adult": {
        "brief": "A public school in Rímac, one of Lima's oldest districts — a setting for stories about childhood and community.",
        "mid": "A public educational institution in the Rímac district, representative of Lima's public school infrastructure and the community life of one of the city's most historic neighbourhoods.",
        "long": "Schools like IE 3004 España are where Lima's public life begins for most of its residents. Located in Rímac — a district with deep roots in the city's colonial and republican history — the school represents the infrastructure of everyday urban childhood, far from elite institutions. Its appearance in film reflects a broader interest in the realities of public education and community life in Lima's older, working-class neighbourhoods."
      },
      "professional": {
        "brief": "IE 3004 España: a public educational institution in Rímac functioning as a cinematographic site of urban childhood and community life.",
        "mid": "Institución Educativa 3004 España functions as a cinematographic site of public institutional life within the Rímac district, whose historical significance and socioeconomic character make it a recurring setting in films engaging with themes of urban community and educational access.",
        "long": "Institución Educativa 3004 España represents a cinematographic site whose significance lies less in its architectural or historical distinction than in its social typicality. As a public school in Rímac — one of Lima's oldest districts, with a complex history that combines colonial heritage, republican civic investment, and contemporary working-class community life — the school embodies the everyday institutional infrastructure of Peruvian urban education. Its use in film reflects a tendency in socially engaged Peruvian cinema to locate drama in the institutions that structure ordinary life, positioning the school as a space where social reproduction, community bonds, and the constraints of public provision all become narratively visible."
      }
    }
  },
  {
    "name": "Rio Rimac - Rimac River",
    "address": "Rímac, Lima, Perú",
    "district": "Lima",
    "movies": [
      {
        "title": "Palomillas del Rímac",
        "year": 1938
      },
      {
        "title": "Metal y Melancolía",
        "year": 1993
      },
      {
        "title": "Gregorio",
        "year": 1984
      },
      {
        "title": "Juliana",
        "year": 1989
      },
      {
        "title": "Caídos del Cielo",
        "year": 1990
      }
    ],
    "descriptions": {
      "young": "The Rímac River is one of Lima's most ancient landmarks — and one of its most complicated ones. Polluted, contested, and historically significant, it divides the city in both geographic and social terms. Five films used it to represent marginality and urban struggle.",
      "adult": "Lima's main river, historically dividing the city and associated with social contrasts, marginality, and the older, less affluent parts of the capital. It appears in five films engaging with poverty, crime, and the city's underside.",
      "professional": "The Río Rímac constitutes a persistent cinematographic symbol of urban division and social stratification in Lima, its contested waters functioning as a visual metaphor for the boundaries separating the city's formal and informal economies and its historic and contemporary urban fabrics."
    },
    "access": "Public — open natural area",
    "lat": -12.043923,
    "lng": -77.020982,
    "image": "images/rio-rimac.webp",
    "cardDescription": {
      "short": "Lima's ancient river — geographically central, socially divided, and cinematically charged.",
      "long": "The Rímac gives the city one of its oldest names and one of its sharpest social boundaries. Historically, crossing the river meant crossing into a different Lima — one associated with marginality, poverty, and the urban struggles that more prosperous districts preferred not to see. Five films have used the river to explore exactly that divide: the Rímac as a threshold between two cities that exist side by side but rarely look at each other."
    },
    "texts": {
      "young": {
        "brief": "Lima's main river — historically important, geographically central, and a symbol of the social divisions that run through the city.",
        "mid": "The Rímac River is one of Lima's most ancient landmarks — and one of its most complicated ones. Polluted, contested, and historically significant, it divides the city in both geographic and social terms. Five films used it to represent marginality and urban struggle.",
        "long": "The Rímac River is older than the city it runs through. Lima was founded on its banks in 1535, and for centuries the river was the city's main water source and a natural boundary between north and south. Today it's polluted and contested, crossed by dozens of bridges but rarely seen up close by most limeños. Socially, the river has always marked a division: the poorer, older districts of the north bank on one side, the more prosperous south on the other. Five films have gone to the Rímac not for its beauty but for what it represents — a fault line in a city that is constantly negotiating its own inequalities."
      },
      "adult": {
        "brief": "Lima's ancient river — geographically central, socially divided, and cinematically charged.",
        "mid": "Lima's main river, historically dividing the city and associated with social contrasts, marginality, and the older, less affluent parts of the capital. It appears in five films engaging with poverty, crime, and the city's underside.",
        "long": "The Rímac gives the city one of its oldest names and one of its sharpest social boundaries. Historically, crossing the river meant crossing into a different Lima — one associated with marginality, poverty, and the urban struggles that more prosperous districts preferred not to see. Five films have used the river to explore exactly that divide: the Rímac as a threshold between two cities that exist side by side but rarely look at each other."
      },
      "professional": {
        "brief": "Río Rímac: a persistent cinematographic symbol of Lima's urban division and social stratification, used across five films.",
        "mid": "The Río Rímac constitutes a persistent cinematographic symbol of urban division and social stratification in Lima, its contested waters functioning as a visual metaphor for the boundaries separating the city's formal and informal economies.",
        "long": "The Río Rímac functions in Peruvian cinema as a spatial figure of urban division whose significance is both geographic and social. The river's historical role as a boundary between Lima's colonial south bank and the popular districts of the north has been consolidated in cultural representations that associate the Rímac with marginality, poverty, and the underside of the city's modernization narratives. Its documented use in five films across several decades confirms its status as a persistent cinematographic resource for representations of social inequality — a body of water that, far from serving as a scenic element, operates as a threshold marking the limits of the city's prosperity and the beginning of its precarity."
      }
    }
  },
  {
    "name": "Isla El Frontón",
    "address": "Off the coast of Callao, Lima, Perú",
    "district": "Las Islas",
    "movies": [
      {
        "title": "Alias \"La Gringa\"",
        "year": 1991
      }
    ],
    "descriptions": {
      "young": "Frontón Island was once one of Peru's most feared prison facilities. The 1986 prison massacre that took place there made it a symbol of state violence. Today it's abandoned — and it appeared in Alias La Gringa as a backdrop for the story of a man caught between two worlds.",
      "adult": "A small island off the coast of Callao, historically significant as the site of the El Frontón prison and the 1986 massacre of inmates during the Shining Path period. It appears in Alias La Gringa as a reference for the Peruvian carceral system.",
      "professional": "Isla El Frontón bears the historical weight of the 1986 penitentiary massacre, in which Sendero Luminoso-affiliated inmates were killed during a government operation. Its use in Alias La Gringa (1991) positions the island as a site of state violence and institutional failure, whose cinematic representation engages directly with Peru's political trauma of the late 1980s."
    },
    "access": "Restricted — limited access, authorization required",
    "lat": -12.116534193316653,
    "lng": -77.1813689770822,
    "image": "images/el-fronton.webp",
    "cardDescription": {
      "short": "A decommissioned island prison off Callao — the site of a 1986 massacre and a symbol of state violence.",
      "long": "El Frontón was one of Peru's most feared maximum-security prisons, housing Shining Path and MRTA prisoners during the country's internal conflict. In June 1986, during a coordinated prison uprising, Peruvian security forces stormed the island and killed hundreds of inmates. The event became one of the defining human rights scandals of the period. In Alias La Gringa, the island frames the story of a man released from Frontón who must navigate a city that has no place for him."
    },
    "texts": {
      "young": {
        "brief": "An abandoned prison island off the coast of Callao — the site of one of Peru's most disturbing episodes of state violence in 1986.",
        "mid": "Frontón Island was once one of Peru's most feared prison facilities. The 1986 prison massacre that took place there made it a symbol of state violence. Today it's abandoned — and it appeared in Alias La Gringa as a backdrop for the story of a man caught between two worlds.",
        "long": "Isla El Frontón sits off the coast of Callao, close enough to see from shore but completely cut off. For much of the twentieth century it was a prison — one of Peru's most feared, used to hold political prisoners during the country's internal conflict. In June 1986, during a coordinated uprising, government forces stormed the island and killed hundreds of inmates. The event became one of the defining human rights scandals of the period, and the island became a symbol of what the Peruvian state was capable of. Alias La Gringa uses it as a reference point: the main character is released from Frontón and finds himself in a Lima that doesn't know what to do with him."
      },
      "adult": {
        "brief": "A decommissioned island prison off Callao — the site of a 1986 massacre and a symbol of state violence.",
        "mid": "A small island off the coast of Callao, historically significant as the site of the El Frontón prison and the 1986 massacre of inmates during the Shining Path period. It appears in Alias La Gringa as a reference for the Peruvian carceral system.",
        "long": "El Frontón was one of Peru's most feared maximum-security prisons, housing Shining Path and MRTA prisoners during the country's internal conflict. In June 1986, during a coordinated prison uprising, Peruvian security forces stormed the island and killed hundreds of inmates. The event became one of the defining human rights scandals of the period. In Alias La Gringa, the island frames the story of a man released from Frontón who must navigate a city that has no place for him."
      },
      "professional": {
        "brief": "Isla El Frontón: a site of carceral history and political violence, deployed cinematographically as a space of institutional trauma.",
        "mid": "Isla El Frontón bears the historical weight of the 1986 penitentiary massacre, in which Sendero Luminoso-affiliated inmates were killed during a government operation. Its use in Alias La Gringa (1991) positions the island as a site of state violence and institutional failure.",
        "long": "Isla El Frontón constitutes a site of dense historical and political signification within Peru's cultural memory of the internal conflict. The June 1986 massacre — in which Peruvian security forces killed an estimated 133–300 inmates during a coordinated uprising at the island's maximum-security penitentiary — remains one of the most documented and contested episodes of human rights violation in the country's recent history. Its cinematic treatment in Alias La Gringa (1991) — a film produced in the immediate aftermath of the events — exploits the island's symbolic charge to situate its protagonist's moral and social disorientation within a broader national crisis of institutional legitimacy and political violence."
      }
    }
  },
  {
    "name": "Lima Golf Club",
    "address": "Av. Camino Real 770, San Isidro 15073, Perú",
    "district": "San Isidro",
    "movies": [
      {
        "title": "Un mundo para Julius",
        "year": 2021
      },
      {
        "title": "No Se Lo Digas a Nadie",
        "year": 1998
      },
      {
        "title": "El embajador y yo",
        "year": 1966
      },
      {
        "title": "¡Asu Mare!",
        "year": 2013
      },
      {
        "title": "Muero por Muriel",
        "year": 2007
      }
    ],
    "descriptions": {
      "young": "The Lima Golf Club in San Isidro is where the most exclusive side of Lima plays. Its use in films — from a biographical comedy to a psychological thriller — shows how filmmakers use elite spaces to explore class and identity.",
      "adult": "An exclusive private golf club in San Isidro, representing Lima's upper-class lifestyle and elite social spaces. It has appeared in five films exploring class dynamics, personal identity, and social aspiration.",
      "professional": "The Lima Golf Club functions as a cinematographic sign of Lima's upper-class habitus, its spatial exclusivity making it a productive site for exploring tensions of class, sexuality, and social performance across ¡Asu Mare!, No Se Lo Digas a Nadie, and Muero por Muriel."
    },
    "access": "Private — members and guests only",
    "lat": -12.101500033881788,
    "lng": -77.03853518755118,
    "image": "images/lima-golf-club.webp",
    "cardDescription": {
      "short": "San Isidro's exclusive golf club — a symbol of Lima's upper-class social world.",
      "long": "The Lima Golf Club sits in the center of San Isidro, the capital's financial and diplomatic heart, surrounded by embassies and corporate towers. Its manicured fairways represent a Lima of privilege and social closure that rarely appears in film without being scrutinized. Five films have used it to explore class dynamics, social aspiration, and the particular rituals of Lima's elite — from biographical comedy to psychological thriller."
    },
    "texts": {
      "young": {
        "brief": "The most exclusive golf club in Lima — a window into a side of the city that most people never see.",
        "mid": "The Lima Golf Club in San Isidro is where the most exclusive side of Lima plays. Its use in films — from a biographical comedy to a psychological thriller — shows how filmmakers use elite spaces to explore class and identity.",
        "long": "The Lima Golf Club is not a public space. It's a private institution in the middle of San Isidro — Lima's financial and diplomatic district — and it serves the city's most privileged residents. Green fairways in the middle of a dense urban neighbourhood, surrounded by embassies and corporate towers. Films have used it as a setting for stories about class, aspiration, and the rituals of Lima's elite — from the biographical comedy of ¡Asu Mare! to the darker territory of No Se Lo Digas a Nadie. It's a space where who you know and how you perform your status matter as much as anything else."
      },
      "adult": {
        "brief": "San Isidro's exclusive golf club — a symbol of Lima's upper-class social world.",
        "mid": "An exclusive private golf club in San Isidro, representing Lima's upper-class lifestyle and elite social spaces. It has appeared in five films exploring class dynamics, personal identity, and social aspiration.",
        "long": "The Lima Golf Club sits in the centre of San Isidro, the capital's financial and diplomatic heart, surrounded by embassies and corporate towers. Its manicured fairways represent a Lima of privilege and social closure that rarely appears in film without being scrutinised. Five films have used it to explore class dynamics, social aspiration, and the particular rituals of Lima's elite — from biographical comedy to psychological thriller."
      },
      "professional": {
        "brief": "Lima Golf Club: a site of elite spatial practice used cinematographically to explore class, sexuality, and social performance.",
        "mid": "The Lima Golf Club functions as a cinematographic sign of Lima's upper-class habitus, its spatial exclusivity making it a productive site for exploring tensions of class, sexuality, and social performance across ¡Asu Mare!, No Se Lo Digas a Nadie, and Muero por Muriel.",
        "long": "The Lima Golf Club operates in Peruvian cinema as a site of elite habitus — a space whose exclusivity, spatial arrangement, and associated social codes make it a productive setting for films that engage critically with Lima's class structure. Its appearances in ¡Asu Mare! (biographical comedy), No Se Lo Digas a Nadie (psychological drama addressing homosexuality and class), and Muero por Muriel (romantic comedy) demonstrate a consistent deployment of the club as a space where social performance, identity, and aspiration are staged and sometimes subverted. The golf club's role as a sign of Lima's upper-class world makes it particularly useful for narratives concerned with the tensions between social belonging and its exclusions."
      }
    }
  },
  {
    "name": "Estadio Lolo Fernandez",
    "address": "Jr. Zorritos 668, Lima 15001, Perú",
    "district": "Lima",
    "movies": [
      {
        "title": "Esta es la U",
        "year": 2024
      },
      {
        "title": "Cholo",
        "year": 1972
      }
    ],
    "descriptions": {
      "young": "The Estadio Lolo Fernández is home to Universitario de Deportes — Peru's most famous football club. The 2024 documentary Esta es la U was shot here to celebrate the club's 100th anniversary.",
      "adult": "The historic stadium of Universitario de Deportes, one of Peru's most beloved football clubs. It served as a primary location for Esta es la U (2024), a documentary marking the club's centenary.",
      "professional": "Estadio Lolo Fernández constitutes a significant site of popular cultural memory in Lima, its association with Universitario de Deportes — a club with deep roots in Peruvian national identity — making it a space where sports, emotion, and collective history converge in documentary form."
    },
    "access": "Restricted — event-based access",
    "lat": -12.04902,
    "lng": -77.04784,
    "image": "images/estadio-lolo-fernandez.webp",
    "cardDescription": {
      "short": "The home of Universitario de Deportes — Peru's most beloved football club and a symbol of national sporting identity.",
      "long": "Estadio Lolo Fernández carries over a century of football history. Home to 'La U', one of Peru's most supported clubs, it is a space of collective memory, passion, and community for fans across the country. The 2024 documentary Esta es la U was filmed here in full to mark the club's centenary — a celebration of not just sporting achievement, but of what football means to Peruvian cultural identity."
    },
    "texts": {
      "young": {
        "brief": "Home of Peru's most famous football club — a place packed with a century of passion and collective memory.",
        "mid": "The Estadio Lolo Fernández is home to Universitario de Deportes — Peru's most famous football club. The 2024 documentary Esta es la U was shot here to celebrate the club's 100th anniversary.",
        "long": "If you want to understand what football means in Peru, going to a Universitario match at Estadio Lolo Fernández is a good start. The club — known as La U — is over a century old and has a following across the entire country. The stadium is where that following comes together: hundreds of thousands of fans, decades of victories and defeats, and a continuous thread of collective memory that connects generations of Peruvians. The 2024 documentary Esta es la U was filmed here to mark the club's centenary — not just a sports film, but a portrait of what an institution like this means to the people who love it."
      },
      "adult": {
        "brief": "The home of Universitario de Deportes — Peru's most beloved football club and a symbol of national sporting identity.",
        "mid": "The historic stadium of Universitario de Deportes, one of Peru's most beloved football clubs. It served as a primary location for Esta es la U (2024), a documentary marking the club's centenary.",
        "long": "Estadio Lolo Fernández carries over a century of football history. Home to 'La U', one of Peru's most supported clubs, it is a space of collective memory, passion, and community for fans across the country. The 2024 documentary Esta es la U was filmed here in full to mark the club's centenary — a celebration of not just sporting achievement, but of what football means to Peruvian cultural identity."
      },
      "professional": {
        "brief": "Estadio Lolo Fernández: a site of popular cultural memory and sporting identity used documentarily to mark Universitario de Deportes' centenary.",
        "mid": "Estadio Lolo Fernández constitutes a significant site of popular cultural memory in Lima, its association with Universitario de Deportes making it a space where sports, emotion, and collective history converge in documentary form.",
        "long": "Estadio Lolo Fernández functions as a site of popular cultural memory whose significance extends well beyond sport. As the home ground of Universitario de Deportes — a club founded in 1924 with deep roots in Lima's university culture and a national following — the stadium represents a space where collective identity, generational continuity, and emotional investment are enacted through ritual and performance. Esta es la U (2024) deploys the stadium documentarily as a site of centenary commemoration, using the spatial and affective resources of the venue to stage a narrative of institutional memory that positions football as a vehicle for Peruvian national and popular cultural identity."
      }
    }
  },
  {
    "name": "Universidad Nacional Mayor de San Marcos",
    "address": "Av. Óscar R. Benavides 5737, Lima 15081, Perú",
    "district": [
      "Lima",
      "Callao"
    ],
    "movies": [
      {
        "title": "La Hora Final",
        "year": 2017
      },
      {
        "title": "Tarata",
        "year": 2009
      },
      {
        "title": "Esta es la U",
        "year": 2024
      }
    ],
    "descriptions": {
      "young": "UNMSM is the oldest university in the Americas — founded in 1551. Its campus was a major site of political activity during Peru's internal conflict in the 1980s and 1990s, and it appears in La Hora Final for exactly that reason.",
      "adult": "The oldest university in the Americas, founded in 1551. Its campus carries significant historical weight as a center of intellectual and political life, including during Peru's internal conflict. It appears in films engaging with both political history and Peruvian sports culture.",
      "professional": "The Universidad Nacional Mayor de San Marcos constitutes a site of layered historical and political significance. Its use in La Hora Final (2017) reflects the campus's documented role in Sendero Luminoso's academic network, while Esta es la U (2024) mobilizes the institution's prestige in a different register of national identity."
    },
    "access": "Semi-public — controlled campus access",
    "lat": -12.050621401377771,
    "lng": -77.08645051563546,
    "image": "images/unmsm.webp",
    "cardDescription": {
      "short": "The oldest university in the Americas, founded in 1551 — a historic center of Peruvian intellectual and political life.",
      "long": "San Marcos is not just a university; it is an institution that has shaped Peruvian history for nearly five centuries. During the internal conflict of the 1980s and 1990s, its campus was a focal point of political tension, associated with radical student movements and state surveillance. La Hora Final draws on this history directly, using UNMSM as a location tied to the political violence of the era. The university has also appeared in films about Peruvian sports culture, reflecting the breadth of its public significance."
    },
    "texts": {
      "young": {
        "brief": "The oldest university in the Americas, founded in 1551 — and a major site of political activity during Peru's difficult years in the 1980s and 1990s.",
        "mid": "UNMSM is the oldest university in the Americas — founded in 1551. Its campus was a major site of political activity during Peru's internal conflict in the 1980s and 1990s, and it appears in La Hora Final for exactly that reason.",
        "long": "San Marcos was founded in 1551 — before Harvard, before Oxford as we know it, before most universities in the world. It is not just a very old university; it has been at the centre of Peruvian intellectual and political life for nearly five centuries. In the 1980s and 1990s, its campus became a site of acute political tension, associated with the presence of Sendero Luminoso among the student population and with the state's often violent response. La Hora Final uses UNMSM precisely because of this history — the campus is not a neutral backdrop but a charged space, a place where the political conflicts of the era were literally fought out."
      },
      "adult": {
        "brief": "The oldest university in the Americas, founded in 1551 — a historic centre of Peruvian intellectual and political life.",
        "mid": "The oldest university in the Americas, founded in 1551. Its campus carries significant historical weight as a centre of intellectual and political life, including during Peru's internal conflict. It appears in films engaging with both political history and Peruvian sports culture.",
        "long": "San Marcos is not just a university; it is an institution that has shaped Peruvian history for nearly five centuries. During the internal conflict of the 1980s and 1990s, its campus was a focal point of political tension, associated with radical student movements and state surveillance. La Hora Final draws on this history directly, using UNMSM as a location tied to the political violence of the era. The university has also appeared in films about Peruvian sports culture, reflecting the breadth of its public significance."
      },
      "professional": {
        "brief": "UNMSM: the oldest university in the Americas, used cinematographically as a site of political memory and national institutional identity.",
        "mid": "The Universidad Nacional Mayor de San Marcos constitutes a site of layered historical and political significance. Its use in La Hora Final (2017) reflects the campus's documented role in Sendero Luminoso's academic network.",
        "long": "The Universidad Nacional Mayor de San Marcos occupies a singular position in Peru's intellectual and political history as both the oldest university in the Americas and a central site of contestation during the internal conflict of the 1980s and 1990s. The campus's documented association with Sendero Luminoso's academic recruitment networks made it a subject of intense state surveillance and, on several occasions, violent intervention. La Hora Final (2017) engages with this history by positioning the campus as a space of political danger — a site where the boundaries between academic community, political militancy, and state repression became fatally blurred. The film's use of UNMSM thus participates in a broader project of cinematic memory-making around Peru's period of internal conflict, positioning spatial familiarity as a vehicle for historical reckoning."
      }
    }
  },
  {
    "name": "Pontificia Universidad Católica del Perú",
    "address": "Av. Universitaria 1801, San Miguel 15088, Perú",
    "district": "San Miguel",
    "movies": [
      {
        "title": "No Se Lo Digas a Nadie",
        "year": 1998
      },
      {
        "title": "Un mundo para Julius",
        "year": 2021
      },
      {
        "title": "Viaje a Tombuctú",
        "year": 2014
      }
    ],
    "descriptions": {
      "young": "PUCP is one of Peru's most prestigious universities, and it appears in Viaje a Tombuctú as part of the film's portrait of a Peruvian woman returning to the Lima of her youth in the 1980s.",
      "adult": "A major private university in Lima, known for its academic and cultural influence. It appears in Viaje a Tombuctú as a setting evoking the 1980s social and intellectual life of Lima's educated middle class.",
      "professional": "The Pontificia Universidad Católica del Perú serves as a cinematographic site of middle-class intellectual life in Viaje a Tombuctú (2014), its campus spaces functioning as a vehicle for the film's meditation on generational memory and the social landscape of 1980s Lima."
    },
    "access": "Semi-public — controlled campus access",
    "lat": -12.06900469530343,
    "lng": -77.07819466909773,
    "image": "images/universidad-catolica.webp",
    "cardDescription": {
      "short": "One of Peru's most prestigious private universities — a setting that evokes Lima's educated middle class and the 1980s.",
      "long": "PUCP has shaped Lima's intellectual and professional landscape for over a century. Its leafy campus in San Miguel represents a particular social world — that of Lima's educated, urban middle class, with its cultural references, political debates, and social codes. In Viaje a Tombuctú, the university appears as part of a personal geography: the Lima a woman remembers from her youth in the 1980s, before leaving and building another life elsewhere."
    },
    "texts": {
      "young": {
        "brief": "One of Peru's most prestigious universities — and a setting that captures Lima's educated middle class and the feeling of the 1980s.",
        "mid": "PUCP is one of Peru's most prestigious universities, and it appears in Viaje a Tombuctú as part of the film's portrait of a Peruvian woman returning to the Lima of her youth in the 1980s.",
        "long": "PUCP is one of those institutions whose name carries a particular weight in Peru — a shorthand for a certain kind of education, a certain social world, a certain set of references. In Viaje a Tombuctú, the university appears as part of the Lima that the main character remembers from her youth in the 1980s: the campus, the people she knew, the debates and certainties of a particular moment in Peruvian intellectual life. It's used not just as a location but as a piece of personal and social geography — the Lima of a generation that has since dispersed, remembered from the distance of time and migration."
      },
      "adult": {
        "brief": "One of Peru's most prestigious private universities — a setting that evokes Lima's educated middle class and the 1980s.",
        "mid": "A major private university in Lima, known for its academic and cultural influence. It appears in Viaje a Tombuctú as a setting evoking the 1980s social and intellectual life of Lima's educated middle class.",
        "long": "PUCP has shaped Lima's intellectual and professional landscape for over a century. Its leafy campus in San Miguel represents a particular social world — that of Lima's educated, urban middle class, with its cultural references, political debates, and social codes. In Viaje a Tombuctú, the university appears as part of a personal geography: the Lima a woman remembers from her youth in the 1980s, before leaving and building another life elsewhere."
      },
      "professional": {
        "brief": "PUCP: a major private university used cinematographically as a space of generational memory and middle-class social identity in 1980s Lima.",
        "mid": "The Pontificia Universidad Católica del Perú serves as a cinematographic site of middle-class intellectual life in Viaje a Tombuctú (2014), functioning as a vehicle for the film's meditation on generational memory and the social landscape of 1980s Lima.",
        "long": "The Pontificia Universidad Católica del Perú functions in Viaje a Tombuctú (2014) as a site of social and generational memory — a space whose campus architecture and institutional culture serve as vehicles for the film's reflection on the Lima of the 1980s and the particular social formation of the educated urban middle class of that period. The university's selection as a location reflects a broader cinematographic strategy in which physical spaces of institutional belonging are used to anchor personal histories and collective memories. PUCP's distinctive campus environment — architecturally homogeneous, socially legible — provides a stable spatial reference for a narrative organised around the tensions between departure, return, and the irreversibility of social change."
      }
    }
  },
  {
    "name": "Larcomar",
    "address": "Mal. de la Reserva 610, Miraflores 15074, Perú",
    "district": "Miraflores",
    "movies": [
      {
        "title": "Caídos del Cielo",
        "year": 1990
      },
      {
        "title": "Gregorio",
        "year": 1984
      },
      {
        "title": "Lima 13",
        "year": 2012
      },
      {
        "title": "¡Asu Mare!",
        "year": 2013
      },
      {
        "title": "No Se Lo Digas a Nadie",
        "year": 1998
      }
    ],
    "descriptions": {
      "young": "Larcomar is literally a mall built into the edge of a cliff overlooking the Pacific — only in Lima. It's appeared in five films, often as the symbol of the aspirational, consumerist side of Miraflores life.",
      "adult": "A modern shopping and entertainment center built into the Miraflores coastal cliffs, offering ocean views and associated with Lima's commercial and nightlife culture. It appears in five films spanning the late 1990s to the 2010s.",
      "professional": "Larcomar occupies a distinctive position in Lima's urban geography, its cliff-edge architecture integrating commercial infrastructure with spectacular coastal scenery. Its repeated cinematic use — across comedy, drama, and thriller — reflects its function as a symbol of Lima's aspirational consumer modernity and its associated social contradictions."
    },
    "access": "Public — free access",
    "lat": -12.1318722790964,
    "lng": -77.03047475216545,
    "image": "images/larcomar.webp",
    "cardDescription": {
      "short": "A shopping mall built into the cliffs of Miraflores — literally cantilevered over the Pacific.",
      "long": "Larcomar is Lima doing something only Lima would do: carving a commercial center into the coastal cliffs, with ocean views from every terrace. Since opening in 1998, it has become a symbol of Miraflores' aspirational lifestyle — glamorous, slightly surreal, and undeniably spectacular. Five films have used it as a location, repeatedly deploying its architecture to represent the consumerist and upper-class social culture of the district, sometimes admiringly, sometimes critically."
    },
    "texts": {
      "young": {
        "brief": "A shopping mall built into the cliffs of Miraflores, with the Pacific directly below — one of Lima's most surreal and spectacular spaces.",
        "mid": "Larcomar is literally a mall built into the edge of a cliff overlooking the Pacific — only in Lima. It's appeared in five films, often as the symbol of the aspirational, consumerist side of Miraflores life.",
        "long": "Larcomar is the kind of place that takes a moment to process the first time you see it. It's a shopping centre — cinemas, restaurants, shops — but it's built into the cliff face of the Malecón, with the Pacific Ocean filling the horizon from every terrace. The combination of commercial space and coastal drama is uniquely limeño: glamorous and slightly absurd at the same time. Five films have used it as a location, and in all of them it carries the same meaning — Miraflores at its most aspirational, a place where lifestyle and status are performed against a backdrop of extraordinary views."
      },
      "adult": {
        "brief": "A shopping mall built into the cliffs of Miraflores — literally cantilevered over the Pacific.",
        "mid": "A modern shopping and entertainment centre built into the Miraflores coastal cliffs, offering ocean views and associated with Lima's commercial and nightlife culture. It appears in five films spanning the late 1990s to the 2010s.",
        "long": "Larcomar is Lima doing something only Lima would do: carving a commercial centre into the coastal cliffs, with ocean views from every terrace. Since opening in 1998, it has become a symbol of Miraflores' aspirational lifestyle — glamorous, slightly surreal, and undeniably spectacular. Five films have used it as a location, repeatedly deploying its architecture to represent the consumerist and upper-class social culture of the district, sometimes admiringly, sometimes critically."
      },
      "professional": {
        "brief": "Larcomar: a cliff-edge commercial complex functioning cinematographically as a condensed sign of Lima's aspirational consumer modernity.",
        "mid": "Larcomar occupies a distinctive position in Lima's urban geography, its cliff-edge architecture integrating commercial infrastructure with spectacular coastal scenery. Its repeated cinematic use reflects its function as a symbol of Lima's aspirational consumer modernity.",
        "long": "Larcomar's integration of commercial infrastructure into the coastal cliff face of the Malecón de Miraflores represents a significant moment in Lima's urban development, inaugurating a model of spectacular retail environment whose design exploits the city's geography as a vehicle for commercial aspiration. Its cinematic uses across five productions reflect a consistent deployment of the complex as a sign of Miraflores' consumer culture — a space where lifestyle, status, and spatial spectacle converge in ways that lend themselves equally to celebratory and critical representational framings. Larcomar's architectural syntax — open terraces, ocean views, vertical commercial layering — provides a visual grammar of aspirational modernity that is simultaneously global in its commercial logic and distinctly limeño in its spatial specificity."
      }
    }
  },
  {
    "name": "Plaza Agustín Gutiérrez",
    "address": "Óvalo Gutiérrez, Miraflores 15073, Perú",
    "district": "Miraflores",
    "movies": [
      {
        "title": "No Se Lo Digas a Nadie",
        "year": 1998
      },
      {
        "title": "El embajador y yo",
        "year": 1966
      },
      {
        "title": "Un mundo para Julius",
        "year": 2021
      },
      {
        "title": "Lima 13",
        "year": 2012
      },
      {
        "title": "Utopía",
        "year": 2018
      },
      {
        "title": "Muero por Muriel",
        "year": 2007
      }
    ],
    "descriptions": {
      "young": "Ovalo Gutiérrez is one of Lima's busiest urban intersections, surrounded by bars, restaurants, and nightlife. Six films used it as a setting for stories about Lima's younger and upper-middle-class urban life.",
      "adult": "A busy commercial intersection and plaza connecting Miraflores and San Isidro, associated with nightlife, restaurants, and upper-middle-class social life. It appears in six films exploring Lima's urban social landscape.",
      "professional": "Plaza Agustín Gutiérrez functions as a cinematographic node of upper-middle-class social life in Lima, its location at the intersection of Miraflores and San Isidro making it a spatial marker of class aspiration and leisure as depicted in Lima 13, Utopía, and Muero por Muriel."
    },
    "access": "Public — free access",
    "lat": -12.11031660293372,
    "lng": -77.03690308601313,
    "image": "images/ovalo-gutierrez.webp",
    "cardDescription": {
      "short": "One of Lima's busiest urban intersections — a hub of nightlife and social life between Miraflores and San Isidro.",
      "long": "Ovalo Gutiérrez is the kind of place Lima's younger, urban middle class treats as a living room. Surrounded by bars, restaurants, and coffee shops, it connects two of the city's most affluent districts and serves as a staging ground for the social rituals of night out, first dates, and after-work gatherings. Six films have set scenes here, using the plaza to ground stories in the texture of contemporary Lima — the city of terraces, city noise, and people watching other people."
    },
    "texts": {
      "young": {
        "brief": "One of Lima's busiest intersections — surrounded by bars, restaurants, and the social life of the younger, urban middle class.",
        "mid": "Ovalo Gutiérrez is one of Lima's busiest urban intersections, surrounded by bars, restaurants, and nightlife. Six films used it as a setting for stories about Lima's younger and upper-middle-class urban life.",
        "long": "Ovalo Gutiérrez is one of those intersections that feels like its own ecosystem. It connects Miraflores and San Isidro, sits at the junction of several important streets, and is surrounded by the kind of bars, restaurants, and terraces where Lima's urban middle class spends its evenings. It's busy without being chaotic, social without being formal — the kind of place you end up in on a Tuesday night as much as a Saturday. Six films have used it as a setting, all interested in the social rituals of a particular class of limeño and the way people perform their lives in public, in the city, under neon lights."
      },
      "adult": {
        "brief": "One of Lima's busiest urban intersections — a hub of nightlife and social life between Miraflores and San Isidro.",
        "mid": "A busy commercial intersection and plaza connecting Miraflores and San Isidro, associated with nightlife, restaurants, and upper-middle-class social life. It appears in six films exploring Lima's urban social landscape.",
        "long": "Ovalo Gutiérrez is the kind of place Lima's younger, urban middle class treats as a living room. Surrounded by bars, restaurants, and coffee shops, it connects two of the city's most affluent districts and serves as a staging ground for the social rituals of night out, first dates, and after-work gatherings. Six films have set scenes here, using the plaza to ground stories in the texture of contemporary Lima — the city of terraces, city noise, and people watching other people."
      },
      "professional": {
        "brief": "Plaza Agustín Gutiérrez: a commercial urban node at the Miraflores–San Isidro boundary, functioning as a cinematographic site of class aspiration and leisure.",
        "mid": "Plaza Agustín Gutiérrez functions as a cinematographic node of upper-middle-class social life in Lima, its location at the intersection of Miraflores and San Isidro making it a spatial marker of class aspiration and leisure.",
        "long": "Plaza Agustín Gutiérrez (Ovalo Gutiérrez) functions in Peruvian cinema as a spatial sign of the social rituals of Lima's upper-middle class. Its position at the boundary between Miraflores and San Isidro — the two districts most associated with the city's economic and cultural elite — makes it a productive cinematographic site for films interested in the performance of class and social aspiration. The plaza's commercial environment — characterised by restaurants, bars, and café terraces oriented toward conspicuous sociability — provides a spatial grammar of leisure and status that three productions have deployed to locate their narratives within a specific social and geographic stratum of the city."
      }
    }
  },
  {
    "name": "Bosque El Olivar",
    "address": "Av. Paz Soldán, San Isidro, Lima 15073, Perú",
    "district": [
      "Lima",
      "San Isidro"
    ],
    "movies": [
      {
        "title": "La última tarde",
        "year": 2016
      },
      {
        "title": "Un mundo para Julius",
        "year": 2021
      }
    ],
    "descriptions": {
      "young": "El Olivar is a genuinely peaceful urban forest in San Isidro — ancient olive trees, lakes, winding paths, and a very different mood from the rest of the city. One of those hidden corners of Lima that feels completely out of time.",
      "adult": "A historic park of centuries-old olive trees in San Isidro, offering a quiet, heritage-rich contrast to the surrounding commercial district. It represents the more tranquil and historic face of one of Lima's wealthiest areas.",
      "professional": "Bosque El Olivar constitutes a significant heritage landscape within San Isidro, its olive grove tracing colonial-era agricultural history within a contemporary residential context — a site of historical layering that preserves a trace of Lima's pre-republican landscape within one of the city's most affluent districts."
    },
    "access": "Public — free access",
    "lat": -12.10211544904528,
    "lng": -77.03524796521171,
    "image": "images/bosque-el-olivar.webp",
    "cardDescription": {
      "short": "An ancient grove of olive trees in San Isidro — one of Lima's most peaceful and unexpected corners.",
      "long": "El Olivar is one of Lima's oldest green spaces, planted with olive trees brought from Spain in the 16th century. In the middle of San Isidro's corporate and diplomatic district, the park offers something rare in the capital: genuine quiet, shade, and the feeling of being somewhere that predates the city around it. Its historic and sensory qualities have made it a natural choice for films that need a Lima that feels removed from urban noise — a space that carries time differently from the rest of the city."
    },
    "texts": {
      "young": {
        "brief": "An ancient olive grove in the middle of San Isidro — one of Lima's most peaceful and unexpected places.",
        "mid": "El Olivar is a genuinely peaceful urban forest in San Isidro — ancient olive trees, lakes, winding paths, and a very different mood from the rest of the city. One of those hidden corners of Lima that feels completely out of time.",
        "long": "El Olivar is one of Lima's best-kept secrets, even though it's right in the middle of one of the city's most built-up districts. Ancient olive trees — some of them planted centuries ago, brought from Spain in the colonial era — spread over a park with small lakes, winding paths, and a silence that feels genuinely rare in Lima. It's the kind of place where you go to remember that the city didn't always look the way it does now. Filmmakers have used it as a counterpoint to urban noise — a space that carries a different kind of time, somewhere between history and calm."
      },
      "adult": {
        "brief": "An ancient grove of olive trees in San Isidro — one of Lima's most peaceful and unexpected corners.",
        "mid": "A historic park of centuries-old olive trees in San Isidro, offering a quiet, heritage-rich contrast to the surrounding commercial district. It represents the more tranquil and historic face of one of Lima's wealthiest areas.",
        "long": "El Olivar is one of Lima's oldest green spaces, planted with olive trees brought from Spain in the 16th century. In the middle of San Isidro's corporate and diplomatic district, the park offers something rare in the capital: genuine quiet, shade, and the feeling of being somewhere that predates the city around it. Its historic and sensory qualities have made it a natural choice for films that need a Lima that feels removed from urban noise — a space that carries time differently from the rest of the city."
      },
      "professional": {
        "brief": "Bosque El Olivar: a colonial-era heritage landscape within San Isidro, cinematographically deployed as a space of historical depth and urban contrast.",
        "mid": "Bosque El Olivar constitutes a significant heritage landscape within San Isidro, its olive grove tracing colonial-era agricultural history within a contemporary residential context — a site of historical layering that preserves a trace of Lima's pre-republican landscape.",
        "long": "Bosque El Olivar represents a significant case of colonial agricultural heritage preserved within a contemporary urban context. The park's olive trees — introduced to Peru from Spain in the sixteenth century and cultivated at this site since the colonial period — constitute one of Lima's oldest surviving living landscapes, a trace of the city's pre-republican history embedded within one of its most affluent contemporary districts. The park's cinematic utility lies in precisely this quality of temporal displacement: its spatial atmosphere — shade, silence, the presence of centuries-old trees within a dense urban environment — produces a visual and sensory grammar that differs markedly from the rest of Lima, making it a productive setting for films that require a space of retreat, reflection, or historical depth."
      }
    }
  },
  {
    "name": "Muelle Sur del Callao",
    "address": "Port of Callao, Callao, Peru",
    "district": "Callao",
    "movies": [
      {
        "title": "Django: Sangre de mi sangre",
        "year": 2018
      },
      {
        "title": "Alias \"La Gringa\"",
        "year": 1991
      }
    ],
    "descriptions": {
      "young": "Muelle Sur del Callao is part of the port landscape of Callao and appears in the cinematic geography connected with Django: Sangre de mi sangre .",
      "adult": "Muelle Sur del Callao is part of the port landscape of Callao and appears in the cinematic geography connected with Django: Sangre de mi sangre .",
      "professional": "Muelle Sur del Callao is part of the port landscape of Callao and appears in the cinematic geography connected with Django: Sangre de mi sangre ."
    },
    "access": "Restricted port area — access requires authorization or an organized visit",
    "lat": -12.0554,
    "lng": -77.1506,
    "cardDescription": {
      "short": "Muelle Sur del Callao is part of the port landscape of Callao and appears in the cinematic geography connected with Django: Sangre de mi sangre .",
      "long": "Muelle Sur del Callao is part of the port landscape of Callao and appears in the cinematic geography connected with Django: Sangre de mi sangre ."
    },
    "texts": {
      "young": {
        "brief": "Muelle Sur del Callao is part of the port landscape of Callao and appears in the cinematic geography connected with Django: Sangre de mi sangre .",
        "mid": "Muelle Sur del Callao is part of the port landscape of Callao and appears in the cinematic geography connected with Django: Sangre de mi sangre .",
        "long": "Muelle Sur del Callao is part of the port landscape of Callao and appears in the cinematic geography connected with Django: Sangre de mi sangre . The site is within the Port of Callao. It is an operational and restricted port area, so access requires authorization or an organized visit."
      },
      "adult": {
        "brief": "Muelle Sur del Callao is part of the port landscape of Callao and appears in the cinematic geography connected with Django: Sangre de mi sangre .",
        "mid": "Muelle Sur del Callao is part of the port landscape of Callao and appears in the cinematic geography connected with Django: Sangre de mi sangre .",
        "long": "Muelle Sur del Callao is part of the port landscape of Callao and appears in the cinematic geography connected with Django: Sangre de mi sangre . The site is within the Port of Callao. It is an operational and restricted port area, so access requires authorization or an organized visit."
      },
      "professional": {
        "brief": "Muelle Sur del Callao is part of the port landscape of Callao and appears in the cinematic geography connected with Django: Sangre de mi sangre .",
        "mid": "Muelle Sur del Callao is part of the port landscape of Callao and appears in the cinematic geography connected with Django: Sangre de mi sangre .",
        "long": "Muelle Sur del Callao is part of the port landscape of Callao and appears in the cinematic geography connected with Django: Sangre de mi sangre . The site is within the Port of Callao. It is an operational and restricted port area, so access requires authorization or an organized visit."
      }
    }
  },
  {
    "name": "Calle de las Pizzas",
    "address": "Pasaje San Ramón, Miraflores, Lima",
    "district": "Miraflores",
    "movies": [
      {
        "title": "Arde Lima",
        "year": 2023
      }
    ],
    "descriptions": {
      "young": "Pizza Street, officially known as San Ramón Boulevard, is one of Lima’s best-known pedestrian streets and an iconic part of the Miraflores district. For decades, it has been associated with nightlife, gastronomy, and tourism, serving as a meeting point for both locals and international visitors. Although its identity has evolved over time, the street remains a lively urban setting where restaurants, cafés, bars, and entertainment venues create a vibrant atmosphere. From an audiovisual perspective, it offers an authentic representation of Lima’s contemporary nightlife and commercial culture.",
      "adult": "Pizza Street, officially known as San Ramón Boulevard, is one of Lima’s best-known pedestrian streets and an iconic part of the Miraflores district. For decades, it has been associated with nightlife, gastronomy, and tourism, serving as a meeting point for both locals and international visitors. Although its identity has evolved over time, the street remains a lively urban setting where restaurants, cafés, bars, and entertainment venues create a vibrant atmosphere. From an audiovisual perspective, it offers an authentic representation of Lima’s contemporary nightlife and commercial culture.",
      "professional": "Pizza Street, officially known as San Ramón Boulevard, is one of Lima’s best-known pedestrian streets and an iconic part of the Miraflores district. For decades, it has been associated with nightlife, gastronomy, and tourism, serving as a meeting point for both locals and international visitors. Although its identity has evolved over time, the street remains a lively urban setting where restaurants, cafés, bars, and entertainment venues create a vibrant atmosphere. From an audiovisual perspective, it offers an authentic representation of Lima’s contemporary nightlife and commercial culture."
    },
    "access": "Public pedestrian boulevard — free access",
    "lat": -12.1209,
    "lng": -77.03,
    "cardDescription": {
      "short": "Pizza Street, officially known as San Ramón Boulevard, is one of Lima’s best-known pedestrian streets and an iconic part of the Miraflores district.",
      "long": "Pizza Street, officially known as San Ramón Boulevard, is one of Lima’s best-known pedestrian streets and an iconic part of the Miraflores district. For decades, it has been associated with nightlife, gastronomy, and tourism, serving as a meeting point for both locals and international visitors. Although its identity has evolved over time, the street remains a lively urban setting where restaurants, cafés, bars, and entertainment venues create a vibrant atmosphere. From an audiovisual perspective, it offers an authentic representation of Lima’s contemporary nightlife and commercial culture."
    },
    "texts": {
      "young": {
        "brief": "Pizza Street, officially known as San Ramón Boulevard, is one of Lima’s best-known pedestrian streets and an iconic part of the Miraflores district.",
        "mid": "Pizza Street, officially known as San Ramón Boulevard, is one of Lima’s best-known pedestrian streets and an iconic part of the Miraflores district. For decades, it has been associated with nightlife, gastronomy, and tourism, serving as a meeting point for both locals and international visitors. Although its identity has evolved over time, the street remains a lively urban setting where restaurants, cafés, bars, and entertainment venues create a vibrant atmosphere. From an audiovisual perspective, it offers an authentic representation of Lima’s contemporary nightlife and commercial culture.",
        "long": "Pizza Street, officially known as San Ramón Boulevard, is one of Lima’s best-known pedestrian streets and an iconic part of the Miraflores district. For decades, it has been associated with nightlife, gastronomy, and tourism, serving as a meeting point for both locals and international visitors. Although its identity has evolved over time, the street remains a lively urban setting where restaurants, cafés, bars, and entertainment venues create a vibrant atmosphere. From an audiovisual perspective, it offers an authentic representation of Lima’s contemporary nightlife and commercial culture. Pizza Street is located in the district of Miraflores, Lima, Peru. Officially named San Ramón Boulevard, it is a pedestrian street situated just a few meters from Kennedy Park and Larco Avenue. The boulevard extends for approximately two blocks and is surrounded by restaurants, cafés, bars, hotels, and commercial establishments, making it one of Miraflores’ main entertainment corridors. Although originally famous for its numerous pizzerias, today the boulevard offers a much broader gastronomic experience, including Peruvian cuisine, international restaurants, cocktail bars, and cafés. Its central location allows visitors to easily access nearby attractions such as Kennedy Park, Larcomar, Miraflores Boardwalk, and the district’s shopping and cultural areas."
      },
      "adult": {
        "brief": "Pizza Street, officially known as San Ramón Boulevard, is one of Lima’s best-known pedestrian streets and an iconic part of the Miraflores district.",
        "mid": "Pizza Street, officially known as San Ramón Boulevard, is one of Lima’s best-known pedestrian streets and an iconic part of the Miraflores district. For decades, it has been associated with nightlife, gastronomy, and tourism, serving as a meeting point for both locals and international visitors. Although its identity has evolved over time, the street remains a lively urban setting where restaurants, cafés, bars, and entertainment venues create a vibrant atmosphere. From an audiovisual perspective, it offers an authentic representation of Lima’s contemporary nightlife and commercial culture.",
        "long": "Pizza Street, officially known as San Ramón Boulevard, is one of Lima’s best-known pedestrian streets and an iconic part of the Miraflores district. For decades, it has been associated with nightlife, gastronomy, and tourism, serving as a meeting point for both locals and international visitors. Although its identity has evolved over time, the street remains a lively urban setting where restaurants, cafés, bars, and entertainment venues create a vibrant atmosphere. From an audiovisual perspective, it offers an authentic representation of Lima’s contemporary nightlife and commercial culture. Pizza Street is located in the district of Miraflores, Lima, Peru. Officially named San Ramón Boulevard, it is a pedestrian street situated just a few meters from Kennedy Park and Larco Avenue. The boulevard extends for approximately two blocks and is surrounded by restaurants, cafés, bars, hotels, and commercial establishments, making it one of Miraflores’ main entertainment corridors. Although originally famous for its numerous pizzerias, today the boulevard offers a much broader gastronomic experience, including Peruvian cuisine, international restaurants, cocktail bars, and cafés. Its central location allows visitors to easily access nearby attractions such as Kennedy Park, Larcomar, Miraflores Boardwalk, and the district’s shopping and cultural areas."
      },
      "professional": {
        "brief": "Pizza Street, officially known as San Ramón Boulevard, is one of Lima’s best-known pedestrian streets and an iconic part of the Miraflores district.",
        "mid": "Pizza Street, officially known as San Ramón Boulevard, is one of Lima’s best-known pedestrian streets and an iconic part of the Miraflores district. For decades, it has been associated with nightlife, gastronomy, and tourism, serving as a meeting point for both locals and international visitors. Although its identity has evolved over time, the street remains a lively urban setting where restaurants, cafés, bars, and entertainment venues create a vibrant atmosphere. From an audiovisual perspective, it offers an authentic representation of Lima’s contemporary nightlife and commercial culture.",
        "long": "Pizza Street, officially known as San Ramón Boulevard, is one of Lima’s best-known pedestrian streets and an iconic part of the Miraflores district. For decades, it has been associated with nightlife, gastronomy, and tourism, serving as a meeting point for both locals and international visitors. Although its identity has evolved over time, the street remains a lively urban setting where restaurants, cafés, bars, and entertainment venues create a vibrant atmosphere. From an audiovisual perspective, it offers an authentic representation of Lima’s contemporary nightlife and commercial culture. Pizza Street is located in the district of Miraflores, Lima, Peru. Officially named San Ramón Boulevard, it is a pedestrian street situated just a few meters from Kennedy Park and Larco Avenue. The boulevard extends for approximately two blocks and is surrounded by restaurants, cafés, bars, hotels, and commercial establishments, making it one of Miraflores’ main entertainment corridors. Although originally famous for its numerous pizzerias, today the boulevard offers a much broader gastronomic experience, including Peruvian cuisine, international restaurants, cocktail bars, and cafés. Its central location allows visitors to easily access nearby attractions such as Kennedy Park, Larcomar, Miraflores Boardwalk, and the district’s shopping and cultural areas."
      }
    }
  },
  {
    "name": "Avenida Larco",
    "address": "Avenida José Larco, Miraflores, Lima",
    "district": "Miraflores",
    "movies": [
      {
        "title": "Avenida Larco, la película",
        "year": 2017
      },
      {
        "title": "Gregorio",
        "year": 1984
      }
    ],
    "descriptions": {
      "young": "Larco Avenue is one of the most important commercial, urban, and tourist roads in Miraflores. It connects Kennedy Park and the Miraflores roundabout with the coastal zone and Larcomar. More than a transportation route, Larco Avenue functions as an active urban corridor where commercial activity, tourism, gastronomy, accommodation, entertainment, and public life come together.",
      "adult": "Larco Avenue is one of the most important commercial, urban, and tourist roads in Miraflores. It connects Kennedy Park and the Miraflores roundabout with the coastal zone and Larcomar. More than a transportation route, Larco Avenue functions as an active urban corridor where commercial activity, tourism, gastronomy, accommodation, entertainment, and public life come together.",
      "professional": "Larco Avenue is one of the most important commercial, urban, and tourist roads in Miraflores. It connects Kennedy Park and the Miraflores roundabout with the coastal zone and Larcomar. More than a transportation route, Larco Avenue functions as an active urban corridor where commercial activity, tourism, gastronomy, accommodation, entertainment, and public life come together."
    },
    "access": "Public avenue — free access",
    "lat": -12.126,
    "lng": -77.0304,
    "cardDescription": {
      "short": "Larco Avenue is one of the most important commercial, urban, and tourist roads in Miraflores.",
      "long": "Larco Avenue is one of the most important commercial, urban, and tourist roads in Miraflores. It connects Kennedy Park and the Miraflores roundabout with the coastal zone and Larcomar. More than a transportation route, Larco Avenue functions as an active urban corridor where commercial activity, tourism, gastronomy, accommodation, entertainment, and public life come together."
    },
    "texts": {
      "young": {
        "brief": "Larco Avenue is one of the most important commercial, urban, and tourist roads in Miraflores.",
        "mid": "Larco Avenue is one of the most important commercial, urban, and tourist roads in Miraflores. It connects Kennedy Park and the Miraflores roundabout with the coastal zone and Larcomar. More than a transportation route, Larco Avenue functions as an active urban corridor where commercial activity, tourism, gastronomy, accommodation, entertainment, and public life come together.",
        "long": "Larco Avenue is one of the most important commercial, urban, and tourist roads in Miraflores. It connects Kennedy Park and the Miraflores roundabout with the coastal zone and Larcomar. More than a transportation route, Larco Avenue functions as an active urban corridor where commercial activity, tourism, gastronomy, accommodation, entertainment, and public life come together. Larco Avenue, officially named José A. Larco Avenue, is located in the district of Miraflores, Lima, Peru. It begins near the Óvalo de Miraflores and Kennedy Park and continues south toward Armendáriz Avenue, the Malecón de la Reserva, and Larcomar. The avenue extends for approximately thirteen blocks and crosses some of the busiest commercial and tourist areas of Miraflores. Along its route are hotels, restaurants, cafés, bookstores, banks, shops, galleries, casinos, and offices."
      },
      "adult": {
        "brief": "Larco Avenue is one of the most important commercial, urban, and tourist roads in Miraflores.",
        "mid": "Larco Avenue is one of the most important commercial, urban, and tourist roads in Miraflores. It connects Kennedy Park and the Miraflores roundabout with the coastal zone and Larcomar. More than a transportation route, Larco Avenue functions as an active urban corridor where commercial activity, tourism, gastronomy, accommodation, entertainment, and public life come together.",
        "long": "Larco Avenue is one of the most important commercial, urban, and tourist roads in Miraflores. It connects Kennedy Park and the Miraflores roundabout with the coastal zone and Larcomar. More than a transportation route, Larco Avenue functions as an active urban corridor where commercial activity, tourism, gastronomy, accommodation, entertainment, and public life come together. Larco Avenue, officially named José A. Larco Avenue, is located in the district of Miraflores, Lima, Peru. It begins near the Óvalo de Miraflores and Kennedy Park and continues south toward Armendáriz Avenue, the Malecón de la Reserva, and Larcomar. The avenue extends for approximately thirteen blocks and crosses some of the busiest commercial and tourist areas of Miraflores. Along its route are hotels, restaurants, cafés, bookstores, banks, shops, galleries, casinos, and offices."
      },
      "professional": {
        "brief": "Larco Avenue is one of the most important commercial, urban, and tourist roads in Miraflores.",
        "mid": "Larco Avenue is one of the most important commercial, urban, and tourist roads in Miraflores. It connects Kennedy Park and the Miraflores roundabout with the coastal zone and Larcomar. More than a transportation route, Larco Avenue functions as an active urban corridor where commercial activity, tourism, gastronomy, accommodation, entertainment, and public life come together.",
        "long": "Larco Avenue is one of the most important commercial, urban, and tourist roads in Miraflores. It connects Kennedy Park and the Miraflores roundabout with the coastal zone and Larcomar. More than a transportation route, Larco Avenue functions as an active urban corridor where commercial activity, tourism, gastronomy, accommodation, entertainment, and public life come together. Larco Avenue, officially named José A. Larco Avenue, is located in the district of Miraflores, Lima, Peru. It begins near the Óvalo de Miraflores and Kennedy Park and continues south toward Armendáriz Avenue, the Malecón de la Reserva, and Larcomar. The avenue extends for approximately thirteen blocks and crosses some of the busiest commercial and tourist areas of Miraflores. Along its route are hotels, restaurants, cafés, bookstores, banks, shops, galleries, casinos, and offices."
      }
    }
  },
  {
    "name": "Country Club Lima Hotel",
    "address": "Avenida Los Eucaliptos 590, San Isidro, Lima",
    "district": "San Isidro",
    "movies": [
      {
        "title": "Un mundo para Julius",
        "year": 2021
      },
      {
        "title": "El embajador y yo",
        "year": 1966
      }
    ],
    "descriptions": {
      "young": "Country Club Lima Hotel is one of the most elegant and historically representative buildings in modern Lima. Located in San Isidro, directly opposite Lima Golf Club, it combines luxury, architecture, art, and social history. Its colonial-style façade, spacious halls, gardens, terraces, and carefully preserved interiors make it a high-value location for audiovisual productions.",
      "adult": "Country Club Lima Hotel is one of the most elegant and historically representative buildings in modern Lima. Located in San Isidro, directly opposite Lima Golf Club, it combines luxury, architecture, art, and social history. Its colonial-style façade, spacious halls, gardens, terraces, and carefully preserved interiors make it a high-value location for audiovisual productions.",
      "professional": "Country Club Lima Hotel is one of the most elegant and historically representative buildings in modern Lima. Located in San Isidro, directly opposite Lima Golf Club, it combines luxury, architecture, art, and social history. Its colonial-style façade, spacious halls, gardens, terraces, and carefully preserved interiors make it a high-value location for audiovisual productions."
    },
    "access": "Operating hotel — interior access is available to guests and visitors using hotel services",
    "lat": -12.09797,
    "lng": -77.04902,
    "cardDescription": {
      "short": "Country Club Lima Hotel is one of the most elegant and historically representative buildings in modern Lima.",
      "long": "Country Club Lima Hotel is one of the most elegant and historically representative buildings in modern Lima. Located in San Isidro, directly opposite Lima Golf Club, it combines luxury, architecture, art, and social history. Its colonial-style façade, spacious halls, gardens, terraces, and carefully preserved interiors make it a high-value location for audiovisual productions."
    },
    "texts": {
      "young": {
        "brief": "Country Club Lima Hotel is one of the most elegant and historically representative buildings in modern Lima.",
        "mid": "Country Club Lima Hotel is one of the most elegant and historically representative buildings in modern Lima. Located in San Isidro, directly opposite Lima Golf Club, it combines luxury, architecture, art, and social history. Its colonial-style façade, spacious halls, gardens, terraces, and carefully preserved interiors make it a high-value location for audiovisual productions.",
        "long": "Country Club Lima Hotel is one of the most elegant and historically representative buildings in modern Lima. Located in San Isidro, directly opposite Lima Golf Club, it combines luxury, architecture, art, and social history. Its colonial-style façade, spacious halls, gardens, terraces, and carefully preserved interiors make it a high-value location for audiovisual productions. Country Club Lima Hotel is located at Avenida Los Eucaliptos 590, in the district of San Isidro, Lima, Peru. It was inaugurated on February 8, 1927, during the government of President Augusto B. Leguía. The building was designed by American architect T. J. O’Brien in a Californian colonial architectural style. The property currently operates as a five-star hotel and contains guest rooms, restaurants, bars, event spaces, gardens, and a collection of colonial artworks."
      },
      "adult": {
        "brief": "Country Club Lima Hotel is one of the most elegant and historically representative buildings in modern Lima.",
        "mid": "Country Club Lima Hotel is one of the most elegant and historically representative buildings in modern Lima. Located in San Isidro, directly opposite Lima Golf Club, it combines luxury, architecture, art, and social history. Its colonial-style façade, spacious halls, gardens, terraces, and carefully preserved interiors make it a high-value location for audiovisual productions.",
        "long": "Country Club Lima Hotel is one of the most elegant and historically representative buildings in modern Lima. Located in San Isidro, directly opposite Lima Golf Club, it combines luxury, architecture, art, and social history. Its colonial-style façade, spacious halls, gardens, terraces, and carefully preserved interiors make it a high-value location for audiovisual productions. Country Club Lima Hotel is located at Avenida Los Eucaliptos 590, in the district of San Isidro, Lima, Peru. It was inaugurated on February 8, 1927, during the government of President Augusto B. Leguía. The building was designed by American architect T. J. O’Brien in a Californian colonial architectural style. The property currently operates as a five-star hotel and contains guest rooms, restaurants, bars, event spaces, gardens, and a collection of colonial artworks."
      },
      "professional": {
        "brief": "Country Club Lima Hotel is one of the most elegant and historically representative buildings in modern Lima.",
        "mid": "Country Club Lima Hotel is one of the most elegant and historically representative buildings in modern Lima. Located in San Isidro, directly opposite Lima Golf Club, it combines luxury, architecture, art, and social history. Its colonial-style façade, spacious halls, gardens, terraces, and carefully preserved interiors make it a high-value location for audiovisual productions.",
        "long": "Country Club Lima Hotel is one of the most elegant and historically representative buildings in modern Lima. Located in San Isidro, directly opposite Lima Golf Club, it combines luxury, architecture, art, and social history. Its colonial-style façade, spacious halls, gardens, terraces, and carefully preserved interiors make it a high-value location for audiovisual productions. Country Club Lima Hotel is located at Avenida Los Eucaliptos 590, in the district of San Isidro, Lima, Peru. It was inaugurated on February 8, 1927, during the government of President Augusto B. Leguía. The building was designed by American architect T. J. O’Brien in a Californian colonial architectural style. The property currently operates as a five-star hotel and contains guest rooms, restaurants, bars, event spaces, gardens, and a collection of colonial artworks."
      }
    }
  },
  {
    "name": "Morro Solar",
    "address": "Morro Solar, Chorrillos, Lima",
    "district": "Chorrillos",
    "movies": [
      {
        "title": "Caídos del Cielo",
        "year": 1990
      }
    ],
    "descriptions": {
      "young": "Morro Solar is one of Lima’s most important historical, natural, scientific, and scenic locations. It is situated in Chorrillos, beside the Pacific Ocean, and rises above the southern section of Lima’s coastline. Morro Solar is also a historic battlefield, archaeological area, geological reserve, religious destination, astronomical observation point, and place of urban memory.",
      "adult": "Morro Solar is one of Lima’s most important historical, natural, scientific, and scenic locations. It is situated in Chorrillos, beside the Pacific Ocean, and rises above the southern section of Lima’s coastline. Morro Solar is also a historic battlefield, archaeological area, geological reserve, religious destination, astronomical observation point, and place of urban memory.",
      "professional": "Morro Solar is one of Lima’s most important historical, natural, scientific, and scenic locations. It is situated in Chorrillos, beside the Pacific Ocean, and rises above the southern section of Lima’s coastline. Morro Solar is also a historic battlefield, archaeological area, geological reserve, religious destination, astronomical observation point, and place of urban memory."
    },
    "access": "Outdoor site — prefer daylight hours or an organized visit",
    "lat": -12.169259,
    "lng": -77.035687,
    "cardDescription": {
      "short": "Morro Solar is one of Lima’s most important historical, natural, scientific, and scenic locations.",
      "long": "Morro Solar is one of Lima’s most important historical, natural, scientific, and scenic locations. It is situated in Chorrillos, beside the Pacific Ocean, and rises above the southern section of Lima’s coastline. Morro Solar is also a historic battlefield, archaeological area, geological reserve, religious destination, astronomical observation point, and place of urban memory."
    },
    "texts": {
      "young": {
        "brief": "Morro Solar is one of Lima’s most important historical, natural, scientific, and scenic locations.",
        "mid": "Morro Solar is one of Lima’s most important historical, natural, scientific, and scenic locations. It is situated in Chorrillos, beside the Pacific Ocean, and rises above the southern section of Lima’s coastline. Morro Solar is also a historic battlefield, archaeological area, geological reserve, religious destination, astronomical observation point, and place of urban memory.",
        "long": "Morro Solar is one of Lima’s most important historical, natural, scientific, and scenic locations. It is situated in Chorrillos, beside the Pacific Ocean, and rises above the southern section of Lima’s coastline. Morro Solar is also a historic battlefield, archaeological area, geological reserve, religious destination, astronomical observation point, and place of urban memory. Morro Solar is located in the district of Chorrillos, in Lima, Peru. It is a large rocky formation overlooking the Bay of Chorrillos, the Costa Verde, the Pacific Ocean, and a significant part of the city. The rocky massif reaches approximately 281 meters in height. Its landmarks include the Monument to the Unknown Soldier, the Morro Solar Planetarium and Observatory, the Pope’s Cross, the Sanctuary of the Virgin, and the Cristo del Pacífico."
      },
      "adult": {
        "brief": "Morro Solar is one of Lima’s most important historical, natural, scientific, and scenic locations.",
        "mid": "Morro Solar is one of Lima’s most important historical, natural, scientific, and scenic locations. It is situated in Chorrillos, beside the Pacific Ocean, and rises above the southern section of Lima’s coastline. Morro Solar is also a historic battlefield, archaeological area, geological reserve, religious destination, astronomical observation point, and place of urban memory.",
        "long": "Morro Solar is one of Lima’s most important historical, natural, scientific, and scenic locations. It is situated in Chorrillos, beside the Pacific Ocean, and rises above the southern section of Lima’s coastline. Morro Solar is also a historic battlefield, archaeological area, geological reserve, religious destination, astronomical observation point, and place of urban memory. Morro Solar is located in the district of Chorrillos, in Lima, Peru. It is a large rocky formation overlooking the Bay of Chorrillos, the Costa Verde, the Pacific Ocean, and a significant part of the city. The rocky massif reaches approximately 281 meters in height. Its landmarks include the Monument to the Unknown Soldier, the Morro Solar Planetarium and Observatory, the Pope’s Cross, the Sanctuary of the Virgin, and the Cristo del Pacífico."
      },
      "professional": {
        "brief": "Morro Solar is one of Lima’s most important historical, natural, scientific, and scenic locations.",
        "mid": "Morro Solar is one of Lima’s most important historical, natural, scientific, and scenic locations. It is situated in Chorrillos, beside the Pacific Ocean, and rises above the southern section of Lima’s coastline. Morro Solar is also a historic battlefield, archaeological area, geological reserve, religious destination, astronomical observation point, and place of urban memory.",
        "long": "Morro Solar is one of Lima’s most important historical, natural, scientific, and scenic locations. It is situated in Chorrillos, beside the Pacific Ocean, and rises above the southern section of Lima’s coastline. Morro Solar is also a historic battlefield, archaeological area, geological reserve, religious destination, astronomical observation point, and place of urban memory. Morro Solar is located in the district of Chorrillos, in Lima, Peru. It is a large rocky formation overlooking the Bay of Chorrillos, the Costa Verde, the Pacific Ocean, and a significant part of the city. The rocky massif reaches approximately 281 meters in height. Its landmarks include the Monument to the Unknown Soldier, the Morro Solar Planetarium and Observatory, the Pope’s Cross, the Sanctuary of the Virgin, and the Cristo del Pacífico."
      }
    }
  },
  {
    "name": "Residencial Santa Cruz",
    "address": "Avenida Belén, San Isidro, Lima",
    "district": "San Isidro",
    "movies": [
      {
        "title": "Gen Hi8",
        "year": 2017
      }
    ],
    "descriptions": {
      "young": "The Santa Cruz Residential Complex is one of Lima’s most representative examples of modern collective housing. Located in San Isidro, it was designed during the 1960s as a residential development for middle-class families. The complex combines apartments, gardens, pedestrian circulation, community spaces, and urban planning within a single residential area.",
      "adult": "The Santa Cruz Residential Complex is one of Lima’s most representative examples of modern collective housing. Located in San Isidro, it was designed during the 1960s as a residential development for middle-class families. The complex combines apartments, gardens, pedestrian circulation, community spaces, and urban planning within a single residential area.",
      "professional": "The Santa Cruz Residential Complex is one of Lima’s most representative examples of modern collective housing. Located in San Isidro, it was designed during the 1960s as a residential development for middle-class families. The complex combines apartments, gardens, pedestrian circulation, community spaces, and urban planning within a single residential area."
    },
    "access": "Residential area — public streets and paths are accessible; respect private property",
    "lat": -12.1097,
    "lng": -77.0495,
    "cardDescription": {
      "short": "The Santa Cruz Residential Complex is one of Lima’s most representative examples of modern collective housing.",
      "long": "The Santa Cruz Residential Complex is one of Lima’s most representative examples of modern collective housing. Located in San Isidro, it was designed during the 1960s as a residential development for middle-class families. The complex combines apartments, gardens, pedestrian circulation, community spaces, and urban planning within a single residential area."
    },
    "texts": {
      "young": {
        "brief": "The Santa Cruz Residential Complex is one of Lima’s most representative examples of modern collective housing.",
        "mid": "The Santa Cruz Residential Complex is one of Lima’s most representative examples of modern collective housing. Located in San Isidro, it was designed during the 1960s as a residential development for middle-class families. The complex combines apartments, gardens, pedestrian circulation, community spaces, and urban planning within a single residential area.",
        "long": "The Santa Cruz Residential Complex is one of Lima’s most representative examples of modern collective housing. Located in San Isidro, it was designed during the 1960s as a residential development for middle-class families. The complex combines apartments, gardens, pedestrian circulation, community spaces, and urban planning within a single residential area. The Santa Cruz Residential Complex is located in the district of San Isidro, Lima, near the border with Miraflores. Its main reference location is Avenida Belén, close to Avenida General Córdova, Avenida Pérez Araníbar, and the Huaca Santa Cruz archaeological site. The complex consists of multifamily residential blocks, houses, gardens, plazas, pedestrian paths, internal streets, and community spaces. It contains approximately 20 residential blocks and was originally developed with 446 duplex apartments."
      },
      "adult": {
        "brief": "The Santa Cruz Residential Complex is one of Lima’s most representative examples of modern collective housing.",
        "mid": "The Santa Cruz Residential Complex is one of Lima’s most representative examples of modern collective housing. Located in San Isidro, it was designed during the 1960s as a residential development for middle-class families. The complex combines apartments, gardens, pedestrian circulation, community spaces, and urban planning within a single residential area.",
        "long": "The Santa Cruz Residential Complex is one of Lima’s most representative examples of modern collective housing. Located in San Isidro, it was designed during the 1960s as a residential development for middle-class families. The complex combines apartments, gardens, pedestrian circulation, community spaces, and urban planning within a single residential area. The Santa Cruz Residential Complex is located in the district of San Isidro, Lima, near the border with Miraflores. Its main reference location is Avenida Belén, close to Avenida General Córdova, Avenida Pérez Araníbar, and the Huaca Santa Cruz archaeological site. The complex consists of multifamily residential blocks, houses, gardens, plazas, pedestrian paths, internal streets, and community spaces. It contains approximately 20 residential blocks and was originally developed with 446 duplex apartments."
      },
      "professional": {
        "brief": "The Santa Cruz Residential Complex is one of Lima’s most representative examples of modern collective housing.",
        "mid": "The Santa Cruz Residential Complex is one of Lima’s most representative examples of modern collective housing. Located in San Isidro, it was designed during the 1960s as a residential development for middle-class families. The complex combines apartments, gardens, pedestrian circulation, community spaces, and urban planning within a single residential area.",
        "long": "The Santa Cruz Residential Complex is one of Lima’s most representative examples of modern collective housing. Located in San Isidro, it was designed during the 1960s as a residential development for middle-class families. The complex combines apartments, gardens, pedestrian circulation, community spaces, and urban planning within a single residential area. The Santa Cruz Residential Complex is located in the district of San Isidro, Lima, near the border with Miraflores. Its main reference location is Avenida Belén, close to Avenida General Córdova, Avenida Pérez Araníbar, and the Huaca Santa Cruz archaeological site. The complex consists of multifamily residential blocks, houses, gardens, plazas, pedestrian paths, internal streets, and community spaces. It contains approximately 20 residential blocks and was originally developed with 446 duplex apartments."
      }
    }
  },
  {
    "name": "Residencial San Felipe",
    "address": "Avenida Gregorio Escobedo, Jesús María, Lima",
    "district": "Jesús María",
    "movies": [
      {
        "title": "La Hora Final",
        "year": 2017
      }
    ],
    "descriptions": {
      "young": "Residencial San Felipe is a landmark modernist housing complex in Jesús María. Its towers, duplex apartments, gardens and pedestrian spaces represent an important chapter in Lima's twentieth-century urban development.",
      "adult": "Residencial San Felipe is a landmark modernist housing complex in Jesús María. Its towers, duplex apartments, gardens and pedestrian spaces represent an important chapter in Lima's twentieth-century urban development.",
      "professional": "Residencial San Felipe is a landmark modernist housing complex in Jesús María. Its towers, duplex apartments, gardens and pedestrian spaces represent an important chapter in Lima's twentieth-century urban development."
    },
    "access": "Residential area — public paths are accessible; respect private buildings",
    "lat": -12.09,
    "lng": -77.052,
    "cardDescription": {
      "short": "Residencial San Felipe is a landmark modernist housing complex in Jesús María.",
      "long": "Residencial San Felipe is a landmark modernist housing complex in Jesús María. Its towers, duplex apartments, gardens and pedestrian spaces represent an important chapter in Lima's twentieth-century urban development."
    },
    "texts": {
      "young": {
        "brief": "Residencial San Felipe is a landmark modernist housing complex in Jesús María.",
        "mid": "Residencial San Felipe is a landmark modernist housing complex in Jesús María. Its towers, duplex apartments, gardens and pedestrian spaces represent an important chapter in Lima's twentieth-century urban development.",
        "long": "Residencial San Felipe is a landmark modernist housing complex in Jesús María. Its towers, duplex apartments, gardens and pedestrian spaces represent an important chapter in Lima's twentieth-century urban development. The complex stands between Avenida Gregorio Escobedo and Avenida Salaverry in Jesús María. Built between 1962 and 1966, it contains residential buildings of different heights arranged around public gardens and shared spaces."
      },
      "adult": {
        "brief": "Residencial San Felipe is a landmark modernist housing complex in Jesús María.",
        "mid": "Residencial San Felipe is a landmark modernist housing complex in Jesús María. Its towers, duplex apartments, gardens and pedestrian spaces represent an important chapter in Lima's twentieth-century urban development.",
        "long": "Residencial San Felipe is a landmark modernist housing complex in Jesús María. Its towers, duplex apartments, gardens and pedestrian spaces represent an important chapter in Lima's twentieth-century urban development. The complex stands between Avenida Gregorio Escobedo and Avenida Salaverry in Jesús María. Built between 1962 and 1966, it contains residential buildings of different heights arranged around public gardens and shared spaces."
      },
      "professional": {
        "brief": "Residencial San Felipe is a landmark modernist housing complex in Jesús María.",
        "mid": "Residencial San Felipe is a landmark modernist housing complex in Jesús María. Its towers, duplex apartments, gardens and pedestrian spaces represent an important chapter in Lima's twentieth-century urban development.",
        "long": "Residencial San Felipe is a landmark modernist housing complex in Jesús María. Its towers, duplex apartments, gardens and pedestrian spaces represent an important chapter in Lima's twentieth-century urban development. The complex stands between Avenida Gregorio Escobedo and Avenida Salaverry in Jesús María. Built between 1962 and 1966, it contains residential buildings of different heights arranged around public gardens and shared spaces."
      }
    }
  },
  {
    "name": "Jorge Chávez International Airport",
    "address": "Jorge Chávez International Airport, Callao, Peru",
    "district": "Callao",
    "movies": [
      {
        "title": "El embajador y yo",
        "year": 1966
      }
    ],
    "descriptions": {
      "young": "Jorge Chávez International Airport is Peru’s principal air terminal and one of the country’s most important transportation infrastructures. Located in the Constitutional Province of Callao, next to the city of Lima, it serves as the main national and international gateway to Peru. Its importance goes beyond air transportation. The airport represents travel, migration, tourism, commerce, technological modernization, and Peru’s connection with the rest of the world. Its terminals, runways, control towers, boarding areas, and constant movement of passengers and aircraft give it considerable visual and narrative value for audiovisual productions. Since June 2025, all commercial flights have operated from a new passenger terminal developed as part of the largest airport expansion project in the country’s history. This infrastructure has transformed the airport into a modern complex designed to strengthen Lima’s role as a regional air hub.",
      "adult": "Jorge Chávez International Airport is Peru’s principal air terminal and one of the country’s most important transportation infrastructures. Located in the Constitutional Province of Callao, next to the city of Lima, it serves as the main national and international gateway to Peru. Its importance goes beyond air transportation. The airport represents travel, migration, tourism, commerce, technological modernization, and Peru’s connection with the rest of the world. Its terminals, runways, control towers, boarding areas, and constant movement of passengers and aircraft give it considerable visual and narrative value for audiovisual productions. Since June 2025, all commercial flights have operated from a new passenger terminal developed as part of the largest airport expansion project in the country’s history. This infrastructure has transformed the airport into a modern complex designed to strengthen Lima’s role as a regional air hub.",
      "professional": "Jorge Chávez International Airport is Peru’s principal air terminal and one of the country’s most important transportation infrastructures. Located in the Constitutional Province of Callao, next to the city of Lima, it serves as the main national and international gateway to Peru. Its importance goes beyond air transportation. The airport represents travel, migration, tourism, commerce, technological modernization, and Peru’s connection with the rest of the world. Its terminals, runways, control towers, boarding areas, and constant movement of passengers and aircraft give it considerable visual and narrative value for audiovisual productions. Since June 2025, all commercial flights have operated from a new passenger terminal developed as part of the largest airport expansion project in the country’s history. This infrastructure has transformed the airport into a modern complex designed to strengthen Lima’s role as a regional air hub."
    },
    "access": "Public terminal areas; restricted access beyond security checkpoints",
    "lat": -12.0198,
    "lng": -77.1087,
    "image": "images/imagenes/jorge-chavez-airport.webp",
    "cardDescription": {
      "short": "Jorge Chávez International Airport is Peru’s principal air terminal and one of the country’s most important transportation infrastructures.",
      "long": "Jorge Chávez International Airport is Peru’s principal air terminal and one of the country’s most important transportation infrastructures. Located in the Constitutional Province of Callao, next to the city of Lima, it serves as the main national and international gateway to Peru. Its importance goes beyond air transportation. The airport represents travel, migration, tourism, commerce, technological modernization, and Peru’s connection with the rest of the world. Its terminals, runways, control towers, boarding areas, and constant movement of passengers and aircraft give it considerable visual and narrative value for audiovisual productions. Since June 2025, all commercial flights have operated from a new passenger terminal developed as part of the largest airport expansion project in the country’s history. This infrastructure has transformed the airport into a modern complex designed to strengthen Lima’s role as a regional air hub."
    },
    "texts": {
      "young": {
        "brief": "Jorge Chávez International Airport is Peru’s principal air terminal and one of the country’s most important transportation infrastructures.",
        "mid": "Jorge Chávez International Airport is Peru’s principal air terminal and one of the country’s most important transportation infrastructures. Located in the Constitutional Province of Callao, next to the city of Lima, it serves as the main national and international gateway to Peru. Its importance goes beyond air transportation. The airport represents travel, migration, tourism, commerce, technological modernization, and Peru’s connection with the rest of the world. Its terminals, runways, control towers, boarding areas, and constant movement of passengers and aircraft give it considerable visual and narrative value for audiovisual productions. Since June 2025, all commercial flights have operated from a new passenger terminal developed as part of the largest airport expansion project in the country’s history. This infrastructure has transformed the airport into a modern complex designed to strengthen Lima’s role as a regional air hub.",
        "long": "Jorge Chávez International Airport is Peru’s principal air terminal and one of the country’s most important transportation infrastructures. Located in the Constitutional Province of Callao, next to the city of Lima, it serves as the main national and international gateway to Peru. Its importance goes beyond air transportation. The airport represents travel, migration, tourism, commerce, technological modernization, and Peru’s connection with the rest of the world. Its terminals, runways, control towers, boarding areas, and constant movement of passengers and aircraft give it considerable visual and narrative value for audiovisual productions. Since June 2025, all commercial flights have operated from a new passenger terminal developed as part of the largest airport expansion project in the country’s history. This infrastructure has transformed the airport into a modern complex designed to strengthen Lima’s role as a regional air hub. Jorge Chávez International Airport is located in the Constitutional Province of Callao, west of the historic center of Lima and close to the Pacific coast. Although it serves Lima, the airport is administratively located within Callao. Its international identification code is LIM. The airport receives domestic flights connecting Lima with different regions of Peru, as well as international flights to destinations in South America, North America, Central America, the Caribbean, and Europe. The airport complex occupies approximately 935 hectares. Its modern infrastructure includes a passenger terminal with five levels, two runways, a new air traffic control tower, aircraft platforms, boarding bridges, parking areas, commercial spaces, hotels, logistics facilities, and access roads. The new passenger terminal is approximately three times larger than the former terminal. It was designed to progressively reach a capacity of up to 40 million passengers per year. The airport is operated by Lima Airport Partners, commonly known as LAP. The company began operating the airport in 2001 under a concession granted by the Peruvian State."
      },
      "adult": {
        "brief": "Jorge Chávez International Airport is Peru’s principal air terminal and one of the country’s most important transportation infrastructures.",
        "mid": "Jorge Chávez International Airport is Peru’s principal air terminal and one of the country’s most important transportation infrastructures. Located in the Constitutional Province of Callao, next to the city of Lima, it serves as the main national and international gateway to Peru. Its importance goes beyond air transportation. The airport represents travel, migration, tourism, commerce, technological modernization, and Peru’s connection with the rest of the world. Its terminals, runways, control towers, boarding areas, and constant movement of passengers and aircraft give it considerable visual and narrative value for audiovisual productions. Since June 2025, all commercial flights have operated from a new passenger terminal developed as part of the largest airport expansion project in the country’s history. This infrastructure has transformed the airport into a modern complex designed to strengthen Lima’s role as a regional air hub.",
        "long": "Jorge Chávez International Airport is Peru’s principal air terminal and one of the country’s most important transportation infrastructures. Located in the Constitutional Province of Callao, next to the city of Lima, it serves as the main national and international gateway to Peru. Its importance goes beyond air transportation. The airport represents travel, migration, tourism, commerce, technological modernization, and Peru’s connection with the rest of the world. Its terminals, runways, control towers, boarding areas, and constant movement of passengers and aircraft give it considerable visual and narrative value for audiovisual productions. Since June 2025, all commercial flights have operated from a new passenger terminal developed as part of the largest airport expansion project in the country’s history. This infrastructure has transformed the airport into a modern complex designed to strengthen Lima’s role as a regional air hub. Jorge Chávez International Airport is located in the Constitutional Province of Callao, west of the historic center of Lima and close to the Pacific coast. Although it serves Lima, the airport is administratively located within Callao. Its international identification code is LIM. The airport receives domestic flights connecting Lima with different regions of Peru, as well as international flights to destinations in South America, North America, Central America, the Caribbean, and Europe. The airport complex occupies approximately 935 hectares. Its modern infrastructure includes a passenger terminal with five levels, two runways, a new air traffic control tower, aircraft platforms, boarding bridges, parking areas, commercial spaces, hotels, logistics facilities, and access roads. The new passenger terminal is approximately three times larger than the former terminal. It was designed to progressively reach a capacity of up to 40 million passengers per year. The airport is operated by Lima Airport Partners, commonly known as LAP. The company began operating the airport in 2001 under a concession granted by the Peruvian State."
      },
      "professional": {
        "brief": "Jorge Chávez International Airport is Peru’s principal air terminal and one of the country’s most important transportation infrastructures.",
        "mid": "Jorge Chávez International Airport is Peru’s principal air terminal and one of the country’s most important transportation infrastructures. Located in the Constitutional Province of Callao, next to the city of Lima, it serves as the main national and international gateway to Peru. Its importance goes beyond air transportation. The airport represents travel, migration, tourism, commerce, technological modernization, and Peru’s connection with the rest of the world. Its terminals, runways, control towers, boarding areas, and constant movement of passengers and aircraft give it considerable visual and narrative value for audiovisual productions. Since June 2025, all commercial flights have operated from a new passenger terminal developed as part of the largest airport expansion project in the country’s history. This infrastructure has transformed the airport into a modern complex designed to strengthen Lima’s role as a regional air hub.",
        "long": "Jorge Chávez International Airport is Peru’s principal air terminal and one of the country’s most important transportation infrastructures. Located in the Constitutional Province of Callao, next to the city of Lima, it serves as the main national and international gateway to Peru. Its importance goes beyond air transportation. The airport represents travel, migration, tourism, commerce, technological modernization, and Peru’s connection with the rest of the world. Its terminals, runways, control towers, boarding areas, and constant movement of passengers and aircraft give it considerable visual and narrative value for audiovisual productions. Since June 2025, all commercial flights have operated from a new passenger terminal developed as part of the largest airport expansion project in the country’s history. This infrastructure has transformed the airport into a modern complex designed to strengthen Lima’s role as a regional air hub. Jorge Chávez International Airport is located in the Constitutional Province of Callao, west of the historic center of Lima and close to the Pacific coast. Although it serves Lima, the airport is administratively located within Callao. Its international identification code is LIM. The airport receives domestic flights connecting Lima with different regions of Peru, as well as international flights to destinations in South America, North America, Central America, the Caribbean, and Europe. The airport complex occupies approximately 935 hectares. Its modern infrastructure includes a passenger terminal with five levels, two runways, a new air traffic control tower, aircraft platforms, boarding bridges, parking areas, commercial spaces, hotels, logistics facilities, and access roads. The new passenger terminal is approximately three times larger than the former terminal. It was designed to progressively reach a capacity of up to 40 million passengers per year. The airport is operated by Lima Airport Partners, commonly known as LAP. The company began operating the airport in 2001 under a concession granted by the Peruvian State."
      }
    }
  }
];

const films = [
  {
    "title": "Las Sicodélicas",
    "year": 1968,
    "wikidata_id": "Q5971307",
    "wikidata_url": "https://www.wikidata.org/wiki/Q5971307",
    "director": [
      "Gilberto Martínez Solares"
    ],
    "countries": [
      "México",
      "Perú"
    ],
    "genres": [
      "Comedia negra",
      "Thriller"
    ],
    "cast": [
      "Maura Monti",
      "Amedée Chabot",
      "Isela Vega",
      "Elizabeth Campbell",
      "Rogelio Guerra"
    ],
    "production": [
      "Filmadora Peruana",
      "Producciones Rodríguez"
    ],
    "release_date": "1968-08-29",
    "description": "A group of seemingly sophisticated women are actually part of a criminal network. The story blends dark comedy with intrigue, revealing deception, hidden identities, and crimes within a psychedelic and provocative atmosphere."
  },
  {
    "title": "Tarata",
    "year": 2009,
    "wikidata_id": "Q5843353",
    "wikidata_url": "https://www.wikidata.org/wiki/Q5843353",
    "director": [
      "Fabrizio Aguilar"
    ],
    "countries": [
      "Perú"
    ],
    "genres": [
      "Drama"
    ],
    "cast": [
      "Gisela Valcárcel",
      "Miguel Iza",
      "Ricardo Ota",
      "Silvana Cañote"
    ],
    "production": [
      "Luna Llena Films"
    ],
    "description": "Depicts the impact of the Sendero Luminoso terrorist attack on Tarata Street (Miraflores, 1992), showing how violence disrupts everyday life and exposes the social trauma of the time."
  },
  {
    "title": "Gregorio",
    "year": 1984,
    "wikidata_id": "Q5885314",
    "wikidata_url": "https://www.wikidata.org/wiki/Q5885314",
    "director": [
      "Fernando Espinoza",
      "Stefan Kaspar",
      "Alejandro Legaspi"
    ],
    "countries": [
      "Perú"
    ],
    "genres": [
      "Drama"
    ],
    "cast": [
      "Marino León",
      "Vetzy Pérez",
      "Augusto Varillas"
    ],
    "production": [
      "Grupo Chaski"
    ],
    "description": "Follows an Andean boy who migrates to Lima seeking a better life, only to face poverty, exploitation, and abandonment, portraying the harsh reality of street children."
  },
  {
    "title": "La Hora Final",
    "year": 2017,
    "wikidata_id": "Q33215576",
    "wikidata_url": "https://www.wikidata.org/wiki/Q33215576",
    "director": [
      "Eduardo Mendoza de Echave"
    ],
    "countries": [
      "Perú"
    ],
    "genres": [
      "Drama",
      "Thriller policial"
    ],
    "cast": [
      "Pietro Sibille",
      "Nidia Bermejo",
      "Toño Vega"
    ],
    "production": [
      "DAFO"
    ],
    "description": "Recounts the police operation that led to the capture of Abimael Guzmán, focusing on intelligence work carried out by a special police unit in the 1990s."
  },
  {
    "title": "Palomillas del Rímac",
    "year": 1938,
    "wikidata_id": "Q62778088",
    "wikidata_url": "https://www.wikidata.org/wiki/Q62778088",
    "director": [
      "Sigifredo Salas"
    ],
    "countries": [
      "Perú"
    ],
    "genres": [
      "Comedia",
      "Musical"
    ],
    "cast": [
      "Edmundo Moreau",
      "María Manuela",
      "Jesús Vásquez"
    ],
    "production": [
      "Amauta Films"
    ],
    "description": "A costumbrista comedy portraying popular life in Lima, with Creole characters and humorous situations that reflect traditions, music, and urban culture of the time."
  },
  {
    "title": "¡Asu Mare!",
    "year": 2013,
    "wikidata_id": "Q11679558",
    "wikidata_url": "https://www.wikidata.org/wiki/Q11679558",
    "director": [
      "Ricardo Maldonado"
    ],
    "countries": [
      "Perú"
    ],
    "genres": [
      "Comedia",
      "Biográfico"
    ],
    "cast": [
      "Carlos Alcántara",
      "Emilia Drago",
      "Carlos Carlín"
    ],
    "production": [
      "Tondero Producciones"
    ],
    "description": "Based on the life of comedian Carlos Alcántara, it follows his humble childhood, dreams, and journey to success, combining humor with emotional moments."
  },
  {
    "title": "Juliana",
    "year": 1989,
    "wikidata_id": "Q6307727",
    "wikidata_url": "https://www.wikidata.org/wiki/Q6307727",
    "director": [
      "Fernando Espinoza",
      "Alejandro Legaspi"
    ],
    "countries": [
      "Perú"
    ],
    "genres": [
      "Drama"
    ],
    "cast": [
      "Rosa Isabel Morffino",
      "Julio Vega"
    ],
    "production": [
      "Grupo Chaski"
    ],
    "description": "Tells the story of a girl who disguises herself as a boy to survive on the streets of Lima, facing abuse and exploitation within a gang of working children."
  },
  {
    "title": "Alias \"La Gringa\"",
    "year": 1991,
    "wikidata_id": "Q21044223",
    "wikidata_url": "https://www.wikidata.org/wiki/Q21044223",
    "director": [
      "Alberto Durant"
    ],
    "countries": [
      "Perú",
      "Cuba",
      "España",
      "Reino Unido",
      "Francia"
    ],
    "genres": [
      "Acción",
      "Drama"
    ],
    "cast": [
      "Germán González",
      "Elsa Olivero"
    ],
    "production": [
      "Channel Four Films",
      "ICAIC"
    ],
    "description": "Set in a Peruvian prison, it follows inmates' lives and internal tensions, highlighting corruption, violence, and power dynamics within the penitentiary system."
  },
  {
    "title": "Metal y Melancolía",
    "year": 1993,
    "wikidata_id": "Q1802206",
    "wikidata_url": "https://www.wikidata.org/wiki/Q1802206",
    "director": [
      "Heddy Honigmann"
    ],
    "countries": [
      "Países Bajos",
      "Perú"
    ],
    "genres": [
      "Documental"
    ],
    "production": [
      "Ariel Film Production"
    ],
    "description": "A documentary observing taxi drivers in Lima during an economic crisis, revealing their personal stories, frustrations, and resilience in a chaotic city."
  },
  {
    "title": "Lima 13",
    "year": 2012,
    "wikidata_id": "Q104161925",
    "wikidata_url": "https://www.wikidata.org/wiki/Q104161925",
    "director": [
      "Fabrizio Aguilar"
    ],
    "countries": [
      "Perú"
    ],
    "genres": [
      "Drama"
    ],
    "cast": [
      "Ubaldo Huamán",
      "Norma Martínez"
    ],
    "production": [],
    "description": "A multi-narrative film that follows several characters during one night in Lima, exploring their personal conflicts, excesses, and life-changing decisions."
  },
  {
    "title": "Esta es la U",
    "year": 2024,
    "wikidata_id": "Q131431545",
    "wikidata_url": "https://www.wikidata.org/wiki/Q131431545",
    "director": [
      "Daniel Farfán"
    ],
    "countries": [
      "Perú"
    ],
    "genres": [
      "Documental deportivo"
    ],
    "cast": [],
    "production": [
      "La Gorda Films"
    ],
    "description": "A documentary celebrating the 100th anniversary of Universitario de Deportes, revisiting its history, achievements, and emotional connection with fans."
  },
  {
    "title": "Utopía",
    "year": 2018,
    "wikidata_id": "Q56886991",
    "wikidata_url": "https://www.wikidata.org/wiki/Q56886991",
    "director": [
      "Gino Tassara",
      "Jorge Vilela"
    ],
    "countries": [
      "Perú"
    ],
    "genres": [
      "Drama"
    ],
    "cast": [
      "Renzo Schuller",
      "Natalia Salas"
    ],
    "production": [
      "Sinargollas Producciones"
    ],
    "description": "Recreates the real nightclub fire tragedy in Lima (2002), highlighting negligence, corruption, and the human consequences of the disaster."
  },
  {
    "title": "Caídos del Cielo",
    "year": 1990,
    "wikidata_id": "Q21044241",
    "wikidata_url": "https://www.wikidata.org/wiki/Q21044241",
    "director": [
      "Francisco Lombardi"
    ],
    "countries": [
      "Perú",
      "España"
    ],
    "genres": [
      "Drama"
    ],
    "cast": [
      "Gustavo Bueno",
      "Marisol Palacios"
    ],
    "production": [
      "Inca Films"
    ],
    "description": "Interwoven stories of marginalized characters in Lima, inspired by works of Julio Ramón Ribeyro, exploring loneliness, fate, and existential struggle."
  },
  {
    "title": "La Luz en el Cerro",
    "year": 2016,
    "wikidata_id": "Q123483054",
    "wikidata_url": "https://www.wikidata.org/wiki/Q123483054",
    "director": [
      "Ricardo Velarde"
    ],
    "countries": [
      "Perú"
    ],
    "genres": [
      "Thriller",
      "Misterio"
    ],
    "cast": [
      "Manuel Gold",
      "Emilram Cossío"
    ],
    "production": [
      "Caudal Films"
    ],
    "description": "A group of friends travels to an Andean village where strange events occur, blending mystery, horror, and supernatural elements."
  },
  {
    "title": "Viaje a Tombuctú",
    "year": 2014,
    "wikidata_id": "Q18709394",
    "wikidata_url": "https://www.wikidata.org/wiki/Q18709394",
    "director": [
      "Rossana Díaz Costa"
    ],
    "countries": [
      "Perú",
      "Argentina"
    ],
    "genres": [
      "Drama"
    ],
    "cast": [
      "Andrea Patriau",
      "Jair García"
    ],
    "description": "A woman returns to Peru and revisits her youth in the 1980s, confronting memories, loss, and the passage of time within a complex social context."
  },
  {
    "title": "Muero por Muriel",
    "year": 2007,
    "wikidata_id": "Q123278472",
    "wikidata_url": "https://www.wikidata.org/wiki/Q123278472",
    "director": [
      "Augusto Cabada"
    ],
    "countries": [
      "Perú"
    ],
    "genres": [
      "Drama",
      "Thriller"
    ],
    "cast": [
      "Andrea Montenegro",
      "Diego Bertie"
    ],
    "production": [
      "Iguana Producciones"
    ],
    "description": "A story of romantic obsession where a man becomes involved in an intense relationship that leads to dangerous and emotionally destructive situations."
  },
  {
    "title": "No Se Lo Digas a Nadie",
    "year": 1998,
    "wikidata_id": "Q1439334",
    "wikidata_url": "https://www.wikidata.org/wiki/Q1439334",
    "director": [
      "Francisco Lombardi"
    ],
    "countries": [
      "Perú",
      "España"
    ],
    "genres": [
      "Drama"
    ],
    "cast": [
      "Santiago Magill",
      "Christian Meier"
    ],
    "production": [
      "Inca Films"
    ],
    "description": "Follows a young upper-class man struggling with his identity and sexual orientation in a conservative society."
  },
  {
    "title": "Django: La Otra Cara",
    "year": 2002,
    "wikidata_id": "Q5812025",
    "wikidata_url": "https://www.wikidata.org/wiki/Q5812025",
    "director": [
      "Ricardo Velásquez"
    ],
    "countries": [
      "Perú"
    ],
    "genres": [
      "Acción",
      "Crimen"
    ],
    "cast": [
      "Giovanni Ciccia",
      "Melania Urbina"
    ],
    "description": "Based on real events, it tells the story of a notorious criminal in Lima, portraying crime, marginality, and urban violence."
  },
  {
    "title": "Lady Nazca",
    "year": 2025,
    "wikidata_id": "Q135474677",
    "wikidata_url": "https://www.wikidata.org/wiki/Q135474677",
    "director": [
      "Damien Dorsaz"
    ],
    "countries": [
      "Alemania",
      "Francia",
      "Suiza",
      "Perú"
    ],
    "genres": [
      "Drama histórico",
      "Biográfico"
    ],
    "cast": [
      "Devrim Lingnau",
      "Guillaume Gallienne",
      "Olivia Ross",
      "Javier Valdés"
    ],
    "description": "Based on real events, it tells the story of Maria Reiche, a German mathematician who dedicates her life to studying and preserving the Nazca Lines, highlighting her perseverance, scientific passion, and the cultural importance of this ancient Peruvian heritage."
  },
  {
    "title": "Viejos amigos",
    "year": 2014,
    "wikidata_id": "Q60825921",
    "wikidata_url": "https://www.wikidata.org/wiki/Q60825921",
    "director": [
      "Fernando Villarán Luján"
    ],
    "countries": [
      "Perú"
    ],
    "genres": [
      "Comedia"
    ],
    "cast": [
      "Ricardo Blume",
      "Carlos Gassols",
      "Enrique Victoria Fernández"
    ],
    "production": [
      "Mama Okllo Films"
    ],
    "release_date": "2014-08-14",
    "description": "Viejos amigos is a Peruvian comedy about friendship, old age, memory, football, and Callao. The film combines humor and nostalgia to portray a group of elderly friends who reconnect with their past and with the port identity of their neighborhood."
  },
  {
    "title": "Arde Lima",
    "year": 2023,
    "wikidata_id": "Q123509455",
    "wikidata_url": "https://www.wikidata.org/wiki/Q123509455",
    "director": [
      "Alberto Castro"
    ],
    "countries": [
      "Perú"
    ],
    "genres": [
      "Documental"
    ],
    "cast": [
      "Tany de la Riva",
      "Georgia Hart",
      "La Langosta",
      "Harmonik Minaj"
    ],
    "production": [
      "Arde Lima Cine"
    ],
    "release_date": "2023-11-15",
    "description": "Arde Lima is a documentary about the Peruvian drag scene. It records artistic practices, personal stories, performance spaces, and forms of resistance within a city where diversity often has to fight for visibility."
  },
  {
    "title": "Un mundo para Julius",
    "year": 2021,
    "wikidata_id": "Q110816454",
    "wikidata_url": "https://www.wikidata.org/wiki/Q110816454",
    "director": [
      "Rossana Díaz Costa"
    ],
    "countries": [
      "Perú",
      "Argentina",
      "España"
    ],
    "genres": [
      "Drama"
    ],
    "cast": [
      "Augusto Linares",
      "Rodrigo Barba",
      "Pamela Saco Polini",
      "Fiorella de Ferrari",
      "Mayella Lloclla",
      "Nacho Fresneda",
      "Camila Mac Lennan"
    ],
    "production": [
      "RTVE",
      "VisionaTV",
      "Tombuktú Films",
      "Machaco Films"
    ],
    "release_date": "2021-10-15",
    "description": "Un mundo para Julius is the film adaptation of Alfredo Bryce Echenique's novel. It portrays Lima's upper class through the eyes of a child who gradually becomes aware of the inequalities that structure his family and social world."
  },
  {
    "title": "El embajador y yo",
    "year": 1966,
    "wikidata_id": null,
    "wikidata_url": null,
    "director": [
      "Óscar Kantor"
    ],
    "countries": [
      "Perú"
    ],
    "genres": [
      "Drama"
    ],
    "cast": [
      "Kiko Ledgard",
      "Saby Kamalich",
      "Patricia Aspíllaga",
      "Enrique Victoria Fernández",
      "Manie Rey",
      "Gladys Arista"
    ],
    "production": [],
    "release_date": null,
    "description": "El embajador y yo is a Peruvian film from the 1960s associated with a more elegant and urban image of Lima. Its cast includes figures linked to Peruvian entertainment, television, and popular culture of the period."
  },
  {
    "title": "La última tarde",
    "year": 2016,
    "wikidata_id": "Q80655243",
    "wikidata_url": "https://www.wikidata.org/wiki/Q80655243",
    "director": [
      "Joel Calero"
    ],
    "countries": [
      "Perú",
      "Colombia"
    ],
    "genres": [
      "Drama"
    ],
    "cast": [
      "Katerina D'Onofrio",
      "Lucho Cáceres"
    ],
    "production": [
      "Habanero Films"
    ],
    "release_date": "2016",
    "description": "La última tarde is an intimate Peruvian drama about memory, politics, love, and unresolved emotional wounds. The film is structured around a long conversation between two former partners who meet again after many years."
  },
  {
    "title": "Cholo",
    "year": 1972,
    "wikidata_id": "Q100276603",
    "wikidata_url": "https://www.wikidata.org/wiki/Q100276603",
    "director": [
      "Bernardo Batievsky"
    ],
    "countries": [
      "Perú"
    ],
    "genres": [
      "Película biográfica"
    ],
    "cast": [
      "Hugo Sotil"
    ],
    "production": [
      "Procine S.A."
    ],
    "release_date": "1972",
    "description": "Cholo is a Peruvian biographical film starring footballer Hugo Sotil. It combines sports biography, fiction, and social commentary on migration, racism, and popular success."
  },
  {
    "title": "Las chicas del Jirón de la Unión",
    "year": 1930,
    "wikidata_id": null,
    "wikidata_url": null,
    "director": [
      "Alberto Santana"
    ],
    "countries": [
      "Perú"
    ],
    "genres": [
      "Melodrama",
      "Romance",
      "Película muda"
    ],
    "cast": [
      "Olga Ortega",
      "José Zavala",
      "Jorge Plascencia",
      "Ena Souza",
      "Máximo Serrano"
    ],
    "production": [
      "Patria Film"
    ],
    "release_date": "1930-06-27",
    "description": "Las chicas del Jirón de la Unión is a Peruvian silent romantic melodrama directed by Alberto Santana and released in 1930. The film portrays everyday life on the Jirón de la Unión, one of the most important commercial and social streets in Lima during the early twentieth century."
  },
  {
    "title": "Avenida Larco, la película",
    "year": 2017,
    "wikidata_id": null,
    "wikidata_url": null,
    "director": [
      "Jorge Carmona"
    ],
    "countries": [
      "Perú"
    ],
    "genres": [
      "Musical",
      "Comedia dramática"
    ],
    "cast": [
      "Juan Carlos Rey de Castro",
      "Nicolás Galindo",
      "André Silva",
      "Andrés Salas"
    ],
    "production": [
      "Tondero Producciones"
    ],
    "release_date": "2017-03-30",
    "description": "Avenida Larco, la película is a Peruvian musical drama inspired by the songs and cultural legacy of the rock band Frágil. The film combines music, friendship, romance, and the difficulties faced by young artists who try to build a place for themselves in Lima's creative scene."
  },
  {
    "title": "Gen Hi8",
    "year": 2017,
    "wikidata_id": null,
    "wikidata_url": null,
    "director": [
      "Miguel Miyahira"
    ],
    "countries": [
      "Perú"
    ],
    "genres": [
      "Drama"
    ],
    "cast": [
      "Andrés Mesía",
      "Howard Ruiz",
      "Vasco Rodríguez",
      "Ximena Luna"
    ],
    "production": [
      "La Cueva Films"
    ],
    "release_date": "2017-11-06",
    "description": "Gen Hi8 is a Peruvian independent film associated with youth culture, audiovisual experimentation, and the use of low-cost video technology. Its title refers to the Hi8 format, a medium closely linked to home video, personal recording, and alternative filmmaking during the transition from analog to digital images."
  },
  {
    "title": "Django: Sangre de mi sangre",
    "year": 2018,
    "wikidata_id": null,
    "wikidata_url": null,
    "director": [
      "Aldo Salvini"
    ],
    "countries": [
      "Perú"
    ],
    "genres": [
      "Acción",
      "Crimen",
      "Drama"
    ],
    "cast": [
      "Giovanni Ciccia",
      "Aldo Miyashiro",
      "Melania Urbina",
      "Emanuel Soriano",
      "Tatiana Astengo",
      "Sergio Galliani"
    ],
    "production": [],
    "release_date": "2018",
    "description": "Django: Sangre de mi sangre is the sequel to Django: La Otra Cara. It returns to the character of Django after years in prison and explores the possibility of redemption in a world where violence and crime continue to shape family life."
  }
];
