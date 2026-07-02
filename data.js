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
        "title": "Tarata",
        "year": 2009
      },
      {
        "title": "¡Asu Mare!",
        "year": 2013
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
        "title": "Viaje a Tombuctú",
        "year": 2014
      }
    ],
    "descriptions": {
      "young": "Kennedy Park is the beating heart of Miraflores — always alive with street artists, cats wandering around, and people from all walks of life. Five Peruvian films have been shot here, and it's easy to see why: it's just unmistakably Lima.",
      "adult": "A central public park in Miraflores, known for cultural activity, street artists, and as a social gathering point. It has served as a backdrop for five Peruvian films, representing the vitality and everyday rhythm of modern Lima.",
      "professional": "Parque John F. Kennedy functions as a primary cinematographic reference for the Miraflores district, its sociological significance as a site of intersection between tourism, informal commerce, and everyday social practice making it a recurring spatial motif in contemporary Peruvian cinema."
    },
    "access": "Public — free access",
    "lat": -12.121701218863464,
    "lng": -77.0303628643947,
    "cardDescription": {
      "short": "Kennedy Park is the beating heart of Miraflores — always alive with street artists, wandering cats, and people from all walks of life.",
      "long": "Few places in Lima feel as alive as Kennedy Park. Street artists, musicians, and people from every corner of the city converge here daily, making it one of the most socially layered public spaces in the capital. Five Peruvian films have used it as a backdrop — not for any single event, but for what it represents: the pulse of modern Lima, where the traditional and the contemporary coexist naturally."
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
    "image": "images/Plaza_Mayor_de_Lima-1.jpg",
    "cardDescription": {
      "short": "One of Lima's most iconic historic squares, surrounded by republican-era architecture that has anchored the city's identity for over a century.",
      "long": "Plaza San Martín is the formal heart of Lima's Centro Histórico — grand colonnaded buildings, open sky, and the constant movement of city life below. It has appeared in Peruvian cinema since the 1930s, used across nearly a century to represent downtown Lima at different political and social moments. From populist comedies of the 1930s to the socially critical dramas of the 1990s, the square has remained a consistent visual shorthand for the city's civic memory."
    }
  },
  {
    "name": "Malecon de Miraflores",
    "address": "Mal. de la Reserva 275, Miraflores 15074, Perú",
    "district": "Miraflores",
    "movies": [
      {
        "title": "Tarata",
        "year": 2009
      },
      {
        "title": "Metal y Melancolía",
        "year": 1993
      },
      {
        "title": "No Se Lo Digas a Nadie",
        "year": 1998
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
    "image": "images/limashore.jpg",
    "cardDescription": {
      "short": "A clifftop walkway above the Pacific — one of Lima's most cinematic and melancholic views.",
      "long": "The Malecón stretches along the edge of Miraflores, with the Pacific Ocean far below and paragliders drifting overhead. It's both beautiful and bittersweet — a boundary between the prosperous district behind it and the vastness of the sea. Filmmakers have used it to represent the aspirational, modern face of Lima, but also its loneliness. It appears in films spanning political drama, intimate personal stories, and documentary portraits of the city."
    }
  },
  {
    "name": "Muelle Sur del Callao",
    "address": "Constitución 340, Callao 07021, Perú",
    "district": "Callao",
    "movies": [
      {
        "title": "Alias \"La Gringa\"",
        "year": 1991
      },
      {
        "title": "Django: La Otra Cara",
        "year": 2002
      }
    ],
    "descriptions": {
      "young": "The port of Callao has this raw, industrial energy that makes it perfect for gritty films. It's appeared in crime and action movies as the rough, working-class side of Lima that contrasts sharply with the tourist spots.",
      "adult": "A port and industrial maritime area linked to commercial activity, crime narratives, and Callao's distinctive urban atmosphere. It has served as backdrop for films exploring social marginality and criminal worlds.",
      "professional": "The Muelle Sur del Callao constitutes a cinematographic space of economic and social marginality, its industrial port infrastructure serving as a visual counterpoint to Lima's affluent districts in films that engage with themes of crime, survival, and institutional corruption."
    },
    "access": "Restricted — port authority area, authorization required",
    "lat": -12.055384127368942,
    "lng": -77.1506180858518,
    "cardDescription": {
      "short": "The industrial port of Callao — raw, working-class, and far removed from the polished image of Miraflores.",
      "long": "Callao's southern pier is where Lima's maritime economy operates, away from tourist routes and upscale neighborhoods. Its warehouses, loading docks, and working waterfront have made it a natural setting for films exploring crime, social marginality, and the rougher edges of the city. The port represents a Lima that rarely makes it into postcard images — gritty, functional, and deeply tied to the lives of those who work the docks."
    }
  },
  {
    "name": "Playa Agua Dulce",
    "address": "RXPF+R55, Chorrillos, Perú",
    "district": "Chorrillos",
    "movies": [
      {
        "title": "¡Asu Mare!",
        "year": 2013
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
    "image": "images/Mercado_de_Magdalena.jpg",
    "cardDescription": {
      "short": "A traditional neighborhood market where Lima's everyday life — food, noise, color, and community — plays out in full.",
      "long": "Mercado de Magdalena is the kind of place that tells you more about how Lima works than any tourist itinerary could. Vendors, fresh produce, street food, and the constant negotiation of daily commerce fill its narrow aisles. Two films by Grupo Chaski — the collective known for their unflinching portraits of Lima's working-class and marginalized communities — used this market to frame stories about child poverty and life on the street, grounding fiction in the textures of real urban life."
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
    "image": "images/calle_tarata.jpg",
    "cardDescription": {
      "short": "A quiet Miraflores street marked forever by the 1992 Sendero Luminoso bombing that killed 25 civilians.",
      "long": "Calle Tarata looks like many other residential streets in Miraflores — until you know its history. On the night of July 16, 1992, a car bomb planted by Sendero Luminoso exploded here, killing 25 people and injuring hundreds more. The attack became one of the defining events of Peru's internal conflict. Fabrizio Aguilar's 2009 film takes the street's name as its title, reconstructing that night to examine the human cost of political violence on ordinary lives."
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
        "title": "La Hora Final",
        "year": 2017
      },
      {
        "title": "¡Asu Mare!",
        "year": 2013
      },
      {
        "title": "Metal y Melancolía",
        "year": 1993
      },
      {
        "title": "Django: La Otra Cara",
        "year": 2002
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
    "image": "images/avenida_brasil.jpg",
    "cardDescription": {
      "short": "A major Lima avenue that crosses the city like a vein — busy, unglamorous, and completely alive.",
      "long": "Avenida Brasil doesn't appear in films for its beauty. It appears because it feels true. Running through Breña, Jesús María, and Pueblo Libre, it carries the traffic and daily rhythms of middle Lima — the Lima of buses and corner shops and people always somewhere to be. Across documentary, comedy, and crime genres, filmmakers have used it as a spatial connector, a slice of urban motion that locates stories firmly in the real geography of the city."
    }
  },
  {
    "name": "Jirón de la Unión",
    "address": "Jirón de la Unión, Lima 15001, Perú",
    "district": "Lima",
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
        "title": "Juliana",
        "year": 1989
      },
      {
        "title": "Metal y Melancolía",
        "year": 1993
      },
      {
        "title": "Caídos del Cielo",
        "year": 1990
      }
    ],
    "descriptions": {
      "young": "Jirón de la Unión is Lima's main pedestrian street downtown — full of shops, street sellers, and people from all over the country. Five films used it from the 1960s to the 1990s, showing how the street has always been the pulse of the city.",
      "adult": "Lima's historic pedestrian thoroughfare, central to commercial and social life in the Centro Histórico. It has served as a backdrop for five films spanning three decades, consistently used to represent the movement, diversity, and contradictions of downtown Lima.",
      "professional": "Jirón de la Unión represents one of Lima's most persistently cinematographic urban spaces. Its pedestrian character and demographic diversity render it a productive site for representing social heterogeneity and urban tension, with cinematic uses spanning from the transgressive comedies of the late 1960s to the socially critical dramas of the 1990s."
    },
    "access": "Public — free access",
    "lat": -12.04958142862287,
    "lng": -77.03413897419874,
    "image": "images/jiron_de_la_union.jpg",
    "cardDescription": {
      "short": "Lima's main pedestrian street — the commercial and social spine of the Centro Histórico.",
      "long": "Jirón de la Unión has been the pulse of downtown Lima for generations. Lined with shops, food stalls, street sellers, and passersby from every part of the country, it concentrates the movement and contradictions of the Centro Histórico in a single walkable artery. Five films across three decades have used it — from the social comedies of the 1960s to the urban dramas of the 1990s — consistently returning to this street as a visual index of how the city's center has changed, and what has stayed the same."
    }
  },
  {
    "name": "Parque de las Leyendas",
    "address": "Av. Parque de las Leyendas 580, San Miguel 15088, Perú",
    "district": "San Miguel",
    "movies": [],
    "descriptions": {
      "young": "Part zoo, part archaeological site — Parque de las Leyendas is genuinely unique. You can see llamas and ancient Peruvian ruins in the same afternoon. Very Lima.",
      "adult": "A large public park combining a zoo with pre-Columbian archaeological remains, showcasing Peru's biodiversity and Andean heritage within the city of Lima.",
      "professional": "Parque de las Leyendas occupies a distinctive position in Lima's urban landscape as a site that superimposes archaeological heritage upon contemporary recreational infrastructure, reflecting broader tensions between conservation, accessibility, and the popularization of pre-Columbian history."
    },
    "access": "Public — paid entry required",
    "lat": -12.066965354455284,
    "lng": -77.08691083427522,
    "cardDescription": {
      "short": "Part zoo, part archaeological site — one of Lima's most genuinely unusual public spaces.",
      "long": "Parque de las Leyendas combines a zoo with the pre-Columbian ruins of the Maranga complex, creating a public space unlike anything else in the city. Families come for the animals; the grounds hold centuries of Andean history beneath them. It represents the layered nature of Lima itself — a modern city built over and alongside ancient civilization, where children can encounter llamas and Inca walls in the same afternoon."
    }
  },
  {
    "name": "Institución Educativa 3004 España",
    "address": "XX7F+855, Rímac 15093, Perú",
    "district": "Rimac",
    "movies": [
      {
        "title": "La hora final",
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
    }
  },
  {
    "name": "Rio Rimac - Rimac River",
    "address": "Rímac, Lima, Perú",
    "district": "Lima",
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
        "title": "Metal y Melancolía",
        "year": 1993
      },
      {
        "title": "Caídos del Cielo",
        "year": 1990
      },
      {
        "title": "Django: La Otra Cara",
        "year": 2002
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
    "image": "images/rio_rimac.jpg",
    "cardDescription": {
      "short": "Lima's ancient river — geographically central, socially divided, and cinematically charged.",
      "long": "The Rímac gives the city one of its oldest names and one of its sharpest social boundaries. Historically, crossing the river meant crossing into a different Lima — one associated with marginality, poverty, and the urban struggles that more prosperous districts preferred not to see. Five films have used the river to explore exactly that divide: the Rímac as a threshold between two cities that exist side by side but rarely look at each other."
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
    "image": "images/El_Fronton.jpg",
    "cardDescription": {
      "short": "A decommissioned island prison off Callao — the site of a 1986 massacre and a symbol of state violence.",
      "long": "El Frontón was one of Peru's most feared maximum-security prisons, housing Shining Path and MRTA prisoners during the country's internal conflict. In June 1986, during a coordinated prison uprising, Peruvian security forces stormed the island and killed hundreds of inmates. The event became one of the defining human rights scandals of the period. In Alias La Gringa, the island frames the story of a man released from Frontón who must navigate a city that has no place for him."
    }
  },
  {
    "name": "Lima Golf Club",
    "address": "Av. Camino Real 770, San Isidro 15073, Perú",
    "district": "San Isidro",
    "movies": [
      {
        "title": "¡Asu Mare!",
        "year": 2013
      },
      {
        "title": "No Se Lo Digas a Nadie",
        "year": 1998
      },
      {
        "title": "Muero por Muriel",
        "year": 2007
      }
    ],
    "descriptions": {
      "young": "The Lima Golf Club in San Isidro is where the most exclusive side of Lima plays. Its use in films — from a biographical comedy to a psychological thriller — shows how filmmakers use elite spaces to explore class and identity.",
      "adult": "An exclusive private golf club in San Isidro, representing Lima's upper-class lifestyle and elite social spaces. It has appeared in three films exploring class dynamics, personal identity, and social aspiration.",
      "professional": "The Lima Golf Club functions as a cinematographic sign of Lima's upper-class habitus, its spatial exclusivity making it a productive site for exploring tensions of class, sexuality, and social performance across ¡Asu Mare!, No Se Lo Digas a Nadie, and Muero por Muriel."
    },
    "access": "Private — members and guests only",
    "lat": -12.101500033881788,
    "lng": -77.03853518755118,
    "image": "images/Lima_Golf_Club.jpg",
    "cardDescription": {
      "short": "San Isidro's exclusive golf club — a symbol of Lima's upper-class social world.",
      "long": "The Lima Golf Club sits in the center of San Isidro, the capital's financial and diplomatic heart, surrounded by embassies and corporate towers. Its manicured fairways represent a Lima of privilege and social closure that rarely appears in film without being scrutinized. Three films have used it to explore class dynamics, social aspiration, and the particular rituals of Lima's elite — from biographical comedy to psychological thriller."
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
      }
    ],
    "descriptions": {
      "young": "The Estadio Lolo Fernández is home to Universitario de Deportes — Peru's most famous football club. The 2024 documentary Esta es la U was shot here to celebrate the club's 100th anniversary.",
      "adult": "The historic stadium of Universitario de Deportes, one of Peru's most beloved football clubs. It served as a primary location for Esta es la U (2024), a documentary marking the club's centenary.",
      "professional": "Estadio Lolo Fernández constitutes a significant site of popular cultural memory in Lima, its association with Universitario de Deportes — a club with deep roots in Peruvian national identity — making it a space where sports, emotion, and collective history converge in documentary form."
    },
    "access": "Restricted — event-based access",
    "lat": -12.04958142862287,
    "lng": -77.03413897419874,
    "image": "images/estadio_lol_fernandez.jpg",
    "cardDescription": {
      "short": "The home of Universitario de Deportes — Peru's most beloved football club and a symbol of national sporting identity.",
      "long": "Estadio Lolo Fernández carries over a century of football history. Home to 'La U', one of Peru's most supported clubs, it is a space of collective memory, passion, and community for fans across the country. The 2024 documentary Esta es la U was filmed here in full to mark the club's centenary — a celebration of not just sporting achievement, but of what football means to Peruvian cultural identity."
    }
  },
  {
    "name": "Residencial San Felipe",
    "address": "Jesús María District, 15076, Perú",
    "district": "Jesús María",
    "movies": [
      {
        "title": "La Hora Final",
        "year": 2017
      }
    ],
    "descriptions": {
      "young": "Residencial San Felipe is one of the most recognizable modernist housing complexes in Lima — a big, planned neighborhood from the 1960s that represents a certain vision of urban progress. It appears in La Hora Final as part of the film's portrait of Lima in the early 1990s.",
      "adult": "A notable modernist residential complex in Jesús María, built in the 1960s as part of Lima's urban modernization program. It appears in La Hora Final as a setting for the clandestine police operations portrayed in the film.",
      "professional": "Residencial San Felipe represents a significant monument of Lima's mid-twentieth-century urban modernism, its planned residential architecture reflecting developmentalist ideals of the era. Its use in La Hora Final (2017) invests its domestic architecture with political significance as a backdrop for the clandestine counter-terrorism operations of the early 1990s."
    },
    "access": "Semi-public — residential area, respect private zones",
    "lat": -12.089083634210999,
    "lng": -77.0546443877374,
    "image": "images/Residencial_San_Felipe.jpg",
    "cardDescription": {
      "short": "A landmark modernist housing complex from the 1960s — an emblem of Lima's mid-century urban ambitions.",
      "long": "Built between 1960 and 1972, Residencial San Felipe was one of Lima's boldest urban planning experiments: a large-scale modernist residential complex in Jesús María, designed to house a new professional middle class. Its distinctive brutalist architecture remains recognizable across the city's skyline. In La Hora Final, the complex serves as a setting for the clandestine police operations of the early 1990s — its rationalist geometry providing a cold backdrop for the film's portrait of state violence."
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
    "image": "images/UNMSM.jpg",
    "cardDescription": {
      "short": "The oldest university in the Americas, founded in 1551 — a historic center of Peruvian intellectual and political life.",
      "long": "San Marcos is not just a university; it is an institution that has shaped Peruvian history for nearly five centuries. During the internal conflict of the 1980s and 1990s, its campus was a focal point of political tension, associated with radical student movements and state surveillance. La Hora Final draws on this history directly, using UNMSM as a location tied to the political violence of the era. The university has also appeared in films about Peruvian sports culture, reflecting the breadth of its public significance."
    }
  },
  {
    "name": "Pontificia Universidad Católica del Perú",
    "address": "Av. Universitaria 1801, San Miguel 15088, Perú",
    "district": "San Miguel",
    "movies": [
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
    "image": "images/Universidad_Catolica.jpg",
    "cardDescription": {
      "short": "One of Peru's most prestigious private universities — a setting that evokes Lima's educated middle class and the 1980s.",
      "long": "PUCP has shaped Lima's intellectual and professional landscape for over a century. Its leafy campus in San Miguel represents a particular social world — that of Lima's educated, urban middle class, with its cultural references, political debates, and social codes. In Viaje a Tombuctú, the university appears as part of a personal geography: the Lima a woman remembers from her youth in the 1980s, before leaving and building another life elsewhere."
    }
  },
  {
    "name": "Larcomar",
    "address": "Mal. de la Reserva 610, Miraflores 15074, Perú",
    "district": "Miraflores",
    "movies": [
      {
        "title": "¡Asu Mare!",
        "year": 2013
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
        "title": "No Se Lo Digas a Nadie",
        "year": 1998
      }
    ],
    "descriptions": {
      "young": "Larcomar is literally a mall built into the edge of a cliff overlooking the Pacific — only in Lima. It's appeared in four films, often as the symbol of the aspirational, consumerist side of Miraflores life.",
      "adult": "A modern shopping and entertainment center built into the Miraflores coastal cliffs, offering ocean views and associated with Lima's commercial and nightlife culture. It appears in four films spanning the late 1990s to the 2010s.",
      "professional": "Larcomar occupies a distinctive position in Lima's urban geography, its cliff-edge architecture integrating commercial infrastructure with spectacular coastal scenery. Its repeated cinematic use — across comedy, drama, and thriller — reflects its function as a symbol of Lima's aspirational consumer modernity and its associated social contradictions."
    },
    "access": "Public — free access",
    "lat": -12.1318722790964,
    "lng": -77.03047475216545,
    "image": "images/Larcomar.jpg",
    "cardDescription": {
      "short": "A shopping mall built into the cliffs of Miraflores — literally cantilevered over the Pacific.",
      "long": "Larcomar is Lima doing something only Lima would do: carving a commercial center into the coastal cliffs, with ocean views from every terrace. Since opening in 1998, it has become a symbol of Miraflores' aspirational lifestyle — glamorous, slightly surreal, and undeniably spectacular. Four films have used it as a location, repeatedly deploying its architecture to represent the consumerist and upper-class social culture of the district, sometimes admiringly, sometimes critically."
    }
  },
  {
    "name": "Plaza Agustín Gutiérrez",
    "address": "Óvalo Gutiérrez, Miraflores 15073, Perú",
    "district": "Miraflores",
    "movies": [
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
      "young": "Ovalo Gutiérrez is one of Lima's busiest urban intersections, surrounded by bars, restaurants, and nightlife. Three films used it as a setting for stories about Lima's younger and upper-middle-class urban life.",
      "adult": "A busy commercial intersection and plaza connecting Miraflores and San Isidro, associated with nightlife, restaurants, and upper-middle-class social life. It appears in three films exploring Lima's urban social landscape.",
      "professional": "Plaza Agustín Gutiérrez functions as a cinematographic node of upper-middle-class social life in Lima, its location at the intersection of Miraflores and San Isidro making it a spatial marker of class aspiration and leisure as depicted in Lima 13, Utopía, and Muero por Muriel."
    },
    "access": "Public — free access",
    "lat": -12.11031660293372,
    "lng": -77.03690308601313,
    "image": "images/ovalo_gutierrez.jpg",
    "cardDescription": {
      "short": "One of Lima's busiest urban intersections — a hub of nightlife and social life between Miraflores and San Isidro.",
      "long": "Ovalo Gutiérrez is the kind of place Lima's younger, urban middle class treats as a living room. Surrounded by bars, restaurants, and coffee shops, it connects two of the city's most affluent districts and serves as a staging ground for the social rituals of night out, first dates, and after-work gatherings. Three films have set scenes here, using the plaza to ground stories in the texture of contemporary Lima — the city of terraces, city noise, and people watching other people."
    }
  },
  {
    "name": "Bosque El Olivar",
    "address": "Av. Paz Soldán, San Isidro, Lima 15073, Perú",
    "district": [
      "Lima",
      "San Isidro"
    ],
    "movies": [],
    "descriptions": {
      "young": "El Olivar is a genuinely peaceful urban forest in San Isidro — ancient olive trees, lakes, winding paths, and a very different mood from the rest of the city. One of those hidden corners of Lima that feels completely out of time.",
      "adult": "A historic park of centuries-old olive trees in San Isidro, offering a quiet, heritage-rich contrast to the surrounding commercial district. It represents the more tranquil and historic face of one of Lima's wealthiest areas.",
      "professional": "Bosque El Olivar constitutes a significant heritage landscape within San Isidro, its olive grove tracing colonial-era agricultural history within a contemporary residential context — a site of historical layering that preserves a trace of Lima's pre-republican landscape within one of the city's most affluent districts."
    },
    "access": "Public — free access",
    "lat": -12.10211544904528,
    "lng": -77.03524796521171,
    "image": "images/bosque_el_olivar.jpg",
    "cardDescription": {
      "short": "An ancient grove of olive trees in San Isidro — one of Lima's most peaceful and unexpected corners.",
      "long": "El Olivar is one of Lima's oldest green spaces, planted with olive trees brought from Spain in the 16th century. In the middle of San Isidro's corporate and diplomatic district, the park offers something rare in the capital: genuine quiet, shade, and the feeling of being somewhere that predates the city around it. Its historic and sensory qualities have made it a natural choice for films that need a Lima that feels removed from urban noise — a space that carries time differently from the rest of the city."
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
  }
];
