const vocab27 = [
  {latin: "Aegyptus",
    english: "Egypt"},
  {latin: "Āfrica",
    english: "Africa",
    notes: "both the continent and the province in the northwestern portion thereof"},
  {latin: "Āsia",
    english: "Asia, Asia Minor",
    notes: "both the continent and the province that became Turkey"},
  {latin: "Corsica",
    english: "Corsica",
    notes: "Mediterranean island, now part of France, north of Sardinia"},
  {latin: "Crēta",
    english: "Crete",
    notes: "Mediterranean island, now part of Greece"},
  {latin: "Cyprus",
    english: "Cyprus",
    notes: "Mediterranean island, now an independent nation (or two)"},
  {latin: "Etrūria",
    english: "Etruria, Tuscany",
    notes: "region of Italy north of Latium"},
  {latin: "Iūdaea",
    english: "Judea",
    notes: "approximately modern Israel"},
  {latin: "Lātium",
    english: "Latium, Lazio",
    notes: "region of Italy where Rome was founded"},
  {latin: "Lusitānia",
    english: "Portugal",
    notes: "western portion of the Iberian peninsula"},
  {latin: "Macedonia",
    english: "Macedonia",
    notes: "area north of Greece, seat of Alexander's empire"},
  {latin: "Mauretānia",
    english: "Mauretania",
    notes: "homeland of the Moors in northwestern Africa"},
  {latin: "Numidia",
    english: "Numidia",
    notes: "province in northwestern Africa, formerly seat of an empire"},
  {latin: "Persia",
    english: "Persia, Iran",
    notes: "seat of the Persian Empire that Alexander the Great defeated"},
  {latin: "Syria",
    english: "Syria",
    notes: "general term for portions of Asia east of Judea"},
  {latin: "Aegyptius",
    english: "Egyptian, from Egypt"},
  {latin: "Āfricānus",
    english: "African, from Africa"},
  {latin: "Āsiānus",
    english: "Asian, from Asia Minor",
    notes: "also Āsiāticus"},
  {latin: "Corsicus",
    english: "Corsican, from Corsica"},
  {latin: "Crēticus",
    english: "Cretan, from Crete"},
  {latin: "Etruscus",
    english: "Etruscan, Tuscan, from Etruria"},
  {latin: "Iūdaeus",
    english: "Judean, from Judea",
    notes: "also refers to the Hebrew people"},
  {latin: "Lātīnus",
    english: "Latin, from Lazio"},
  {latin: "Lusitānus",
    english: "Lusitanian, from Portugal",
    notes: "can be translated as Portuguese, but it doesn't really mean that"},
  {latin: "Macedonus",
    english: "Macedonian"},
  {latin: "Maurus",
    english: "Mauretanian, Moorish"},
  {latin: "Numidiānus",
    english: "Numidian, African"},
  {latin: "Persicus",
    english: "Persian, from Persia",
    notes: "demonym is <strong>Persa</strong> (m.)"},
  {latin: "Syricus",
    english: "Syrian, from Syria",
    notes: "demonym is <strong>Syrus</strong> (m.)"},
  {latin: "albus",
    english: "white, dull white"},
  {latin: "āter",
    english: "black, matte black",
    notes: "stem = <strong>atr-</strong>"},
  {latin: "aurantiacus",
    english: "orange (color)"},
  {latin: "caerūleus",
    english: "blue, sky blue"},
  {latin: "candidus",
    english: "white, shining white",
    notes: "<strong>toga candida</strong> is a gleaming white robe"},
  {latin: "clārus",
    english: "clear, bright, famous"},
  {latin: "flāvus",
    english: "yellow"},
  {latin: "fuscus",
    english: "dark brown, black"},
  {latin: "grīseus",
    english: "gray"},
  {latin: "niger",
    english: "black, shining black"},
  {latin: "obscūrus",
    english: "dark, shadowy, mysterious"},
  {latin: "purpureus",
    english: "purple"},
  {latin: "rōseus",
    english: "pink, rosy"},
  {latin: "ruber",
    english: "red, ruddy",
    note: "stem = <strong>rubr-</strong>"},
  {latin: "cui?",
    english: "to/for whom?",
    notes: "Dative case"},
  {latin: "quem?",
    english: "whom?",
    notes: "Accusative case"},
  {latin: "quid?",
    english: "what?",
    notes: "Nominative and Accusative cases"},
  {latin: "quō?",
    english: "whom?",
    notes: "Ablative case"},
  {latin: "rōsa",
    english: "rose"},
  {latin: "clārō, clārāre",
    english: "to brighten, to clarify, to make known"},
  {latin: "obscūrō, obscūrāre",
    english: "to darken, to conceal"},
  {latin: "offuscō, offuscāre",
    english: "to darken, to become dark"},
  {latin: "altus",
    english: "high, tall, deep"},
  {latin: "calidus",
    english: "hot"},
  {latin: "captīvus",
    english: "captive",
    notes: "often used as a noun"},
  {latin: "cārus",
    english: "dear, precious, expensive"},
  {latin: "falsus",
    english: "false, mistaken"},
  {latin: "frīgidus",
    english: "cold"},
  {latin: "integer",
    english: "whole, complete, intact, unhurt",
    note: "stem = <strong>integr-</strong>"},
  {latin: "līber",
    english: "free, not captive or enslaved",
    note: "stem = <strong>līber-</strong>"},
  {latin: "profundus",
    english: "deep, dense"},
  {latin: "pūrus",
    english: "pure, clean, clear"},
  {latin: "sacer",
    english: "sacred, hallowed",
    note: "stem = <strong>sacr-</strong>"},
  {latin: "sānctus",
    english: "holy, blessed, saint(ly)"},
  {latin: "sordidus",
    english: "dirty"},
  {latin: "tepidus",
    english: "warm, lukewarm"},
  {latin: "vērus",
    english: "true"},
  {latin: "quam",
    english: "how, to what degree, than"},
  {latin: "arbor",
    english: "tree",
    note: "Genitive = <strong>arboris</strong>"},
  {latin: "canis",
    english: "dog",
    note: "Genitive = <strong>canis</strong>"},
  {latin: "coniūnx",
    english: "spouse",
    note: "Genitive = <strong>coniugis</strong>"},
  {latin: "cōnsul",
    english: "consul, executive official",
    note: "Genitive = <strong>cōnsulis</strong>"},
  {latin: "frater",
    english: "brother",
    note: "Genitive = <strong>fratris</strong>"},
  {latin: "mater",
    english: "mother",
    note: "Genitive = <strong>matris</strong>"},
  {latin: "nepōs",
    english: "grandchild, nephew, niece",
    note: "Genitive = <strong>nepōtis</strong>"},
  {latin: "pater",
    english: "father",
    note: "Genitive = <strong>patris</strong>"},
  {latin: "prīnceps",
    english: "chief, prince, emperor",
    note: "Genitive = <strong>prīncipis</strong>"},
  {latin: "senātor/senātrīx",
    english: "senator",
    note: "Genitive = <strong>senātōris/senātrīcis</strong>"},
  {latin: "soror",
    english: "sister",
    note: "Genitive = <strong>sorōris</strong>"},
  {latin: "uxor",
    english: "wife",
    note: "Genitive = <strong>uxōris</strong>"}
]

const vocab30 = [
  {latin: "amor",
    english: "love",
    notes: "+ objective Genitive"},
  {latin: "clāmor",
    english: "shouting, noise"},
  {latin: "favor",
    english: "favor, goodwill"},
  {latin: "timor",
    english: "fear",
    notes: "+ objective Genitive"},
  {latin: "imperātor",
    english: "commander, general, emperor"},
  {latin: "pastor",
    english: "shepherd"},
  {latin: "centuriō",
    english: "centurion, company captain",
    notes: "Genitive = <strong>centuriōnis</strong>"},
  {latin: "lectiō",
    english: "lesson, reading",
    notes: "Genitive = <strong>lectiōnis</strong>"},
  {latin: "legiō",
    english: "legion, army division",
    notes: "Genitive = <strong>legiōnis</strong>"},
  {latin: "leō/leaena",
    english: "lion/lioness",
    notes: "Genitive = <strong>leōnis</strong>"},
  {latin: "ratiō",
    english: "reason, calculation, plan",
    notes: "Genitive = <strong>ratiōnis</strong>"},
  {latin: "regiō",
    english: "region",
    notes: "Genitive = <strong>regiōnis</strong>"},
  {latin: "carō",
    english: "meat",
    notes: "Genitive = <strong>carnis</strong>"},
  {latin: "homō",
    english: "man, person, human being",
    notes: "Genitive = <strong>hominis</strong>"},
  {latin: "ōrdō",
    english: "order, row, rank, social class",
    notes: "Genitive = <strong>ōrdinis</strong>"},
  {latin: "virgō",
    english: "virgin, young girl",
    notes: "Genitive = <strong>virginis</strong>"},
  {latin: "ōrdinō, ōrdināre",
    english: "place in order"},
  {latin: "humānus",
    english: "human"},
  {latin: "leōnīnus",
    english: "lionlike, lion-related"},
  {latin: "cervīx",
    english: "neck",
    notes: "Genitive = <strong>cervīcis</strong>"},
  {latin: "crux",
    english: "cross, crossroads",
    notes: "Genitive = <strong>crucis</strong>"},
  {latin: "dux",
    english: "leader",
    notes: "Genitive = <strong>ducis</strong>"},
  {latin: "grex",
    english: "flock, herd",
    notes: "Genitive = <strong>gregis</strong>"},
  {latin: "lēx",
    english: "law",
    notes: "Genitive = <strong>lēgis</strong>"},
  {latin: "lūx",
    english: "light",
    notes: "Genitive = <strong>lūcis</strong>"},
  {latin: "nix",
    english: "snow",
    notes: "Genitive = <strong>nivis</strong>"},
  {latin: "nux",
    english: "nut",
    notes: "Genitive = <strong>nucix</strong>"},
  {latin: "pāx",
    english: "peace",
    notes: "Genitive = <strong>pācis</strong>"},
  {latin: "radīx",
    english: "root, radish",
    notes: "Genitive = <strong>radīcis</strong>"},
  {latin: "rēx",
    english: "king",
    notes: "Genitive = <strong>rēgis</strong>"},
  {latin: "vōx",
    english: "voice",
    notes: "Genitive = <strong>vōcis</strong>"},
  {latin: "gregō, gregāre",
    english: "to herd, to assemble"},
  {latin: "lūceō, lūcēre",
    english: "to shine, to glow"},
  {latin: "ūnus",
    english: "one",
    notes: "singular-only adjective"}
]

const vocab33 = [
  {latin: "auris",
    english: "ear",
    notes: "Genitive forms = <strong>auris, aurium</strong>"},
  {latin: "avis",
    english: "bird",
    notes: "Genitive forms = <strong>avis, avium</strong>"},
  {latin: "cīvis",
    english: "citizen",
    notes: "Genitive forms = <strong>cīvis, cīvium</strong>"},
  {latin: "classis",
    english: "group, fleet",
    notes: "Genitive forms = <strong>classis, classium</strong>"},
  {latin: "clāvis",
    english: "key",
    notes: "Genitive forms = <strong>clāvis, clāvium</strong>"},
  {latin: "collis",
    english: "hill",
    notes: "Genitive forms = <strong>collis, collium</strong>"},
  {latin: "hostis",
    english: "enemy",
    notes: "Genitive forms = <strong>hostis, hostium</strong>"},
  {latin: "ignis",
    english: "fire",
    notes: "Genitive forms = <strong>ignis, ignium</strong>"},
  {latin: "nāvis",
    english: "ship",
    notes: "Genitive forms = <strong>nāvis, nāvium</strong>"},
  {latin: "ovis",
    english: "sheep, ewe",
    notes: "Genitive forms = <strong>ovis, ovium</strong>"},
  {latin: "pānis",
    english: "bread, loaf of bread",
    notes: "Genitive forms = <strong>pānis, pānium</strong>"},
  {latin: "piscis",
    english: "fish",
    notes: "Genitive forms = <strong>piscis, piscium</strong>"},
  {latin: "fēlēs",
    english: "cat",
    notes: "Genitive forms = <strong>fēlis, fēlium</strong>"},
  {latin: "vallēs",
    english: "valley",
    notes: "Genitive forms = <strong>vallis, vallium</strong>"},
  {latin: "vulpēs",
    english: "fox",
    notes: "Genitive forms = <strong>vulpis, vulpium</strong>"},
  {latin: "piscīna",
    english: "fish pond, swimming pool"},
  {latin: "ārs",
    english: "art, skill",
    notes: "Genitive forms = <strong>artis, artium</strong>"},
  {latin: "cohors",
    english: "cohort, crew, battlion",
    notes: "Genitive forms = <strong>cohortis, cohortium</strong>"},
  {latin: "dēns",
    english: "tooth",
    notes: "Genitive forms = <strong>dentis, dentium</strong>"},
  {latin: "fōns",
    english: "fountain, spring",
    notes: "Genitive forms = <strong>fontis, fontium</strong>"},
  {latin: "gēns",
    english: "clan, tribe",
    notes: "Genitive forms = <strong>gentis, gentium</strong>"},
  {latin: "īnfāns",
    english: "child, infant",
    notes: "Genitive forms = <strong>īnfantis, īnfantium</strong>"},
  {latin: "lēns",
    english: "lentil",
    notes: "Genitive forms = <strong>lentis, lentium</strong>"},
  {latin: "mēns",
    english: "mind",
    notes: "Genitive forms = <strong>mentis, mentium</strong>"},
  {latin: "mōns",
    english: "mountain",
    notes: "Genitive forms = <strong>montis, montium</strong>"},
  {latin: "mors",
    english: "death",
    notes: "Genitive forms = <strong>mortis, mortium</strong>"},
  {latin: "nōx",
    english: "night",
    notes: "Genitive forms = <strong>noctis, noctium</strong>"},
  {latin: "pārs",
    english: "part, direction, political party",
    notes: "Genitive forms = <strong>partis, partium</strong>"},
  {latin: "pōns",
    english: "bridge",
    notes: "Genitive forms = <strong>pontis, pontium</strong>"},
  {latin: "urbs",
    english: "city",
    notes: "Genitive forms = <strong>urbis, urbium</strong>"},
  {latin: "ambō",
    english: "both",
    notes: "plural/dual only"},
  {latin: "duo",
    english: "two",
    notes: "plural/dual only"},
  {latin: "abdōmen",
    english: "belly",
    notes: "Genitive = <strong>abdōminis</strong>"},
  {latin: "carmen",
    english: "song, poem",
    notes: "Genitive = <strong>carminis</strong>"},
  {latin: "flūmen",
    english: "river",
    notes: "Genitive = <strong>flūminis</strong>"},
  {latin: "lūmen",
    english: "light",
    notes: "Genitive = <strong>lūminis</strong>"},
  {latin: "nōmen",
    english: "name, clan name",
    notes: "Genitive = <strong>nōminis</strong>"},
  {latin: "praenōmen",
    english: "first name, given name",
    notes: "Genitive = <strong>praenōminis</strong>"},
  {latin: "cognōmen",
    english: "nickname, family branch name",
    notes: "Genitive = <strong>cognōminis</strong>"},
  {latin: "agnōmen",
    english: "earned additional nickname",
    notes: "Genitive = <strong>agnōminis</strong>"},
  {latin: "volūmen",
    english: "scroll, volume",
    notes: "Genitive = <strong>volūminis</strong>"},
  {latin: "corpus",
    english: "body",
    notes: "Genitive = <strong>corporis</strong>"},
  {latin: "genus",
    english: "kind, type",
    notes: "Genitive = <strong>generis</strong>"},
  {latin: "latus",
    english: "side",
    notes: "Genitive = <strong>lateris</strong>"},
  {latin: "pectus",
    english: "chest, breast",
    notes: "Genitive = <strong>pectoris</strong>"},
  {latin: "tempus",
    english: "time",
    notes: "Genitive = <strong>temporis</strong>"},
  {latin: "vulnus",
    english: "wound",
    notes: "Genitive = <strong>vulneris</strong>"},
  {latin: "caput",
    english: "head",
    notes: "Genitive = <strong>capitis</strong>"},
  {latin: "cor",
    english: "hear",
    notes: "Genitive = <strong>cordis</strong>"},
  {latin: "crūs",
    english: "leg",
    notes: "Genitive = <strong>crūris</strong>"},
  {latin: "iter",
    english: "journey, route, march",
    notes: "Genitive = <strong>itineris</strong>"},
  {latin: "lac",
    english: "milk",
    notes: "Genitive = <strong>lactis</strong>"},
  {latin: "ōs",
    english: "mouth, opening, countenance",
    notes: "Genitive = <strong>ōris</strong>"}
]

const vocab35 = [
  {latin: "ācer",
    english: "sharp, bitter, fierce",
    notes: "f. = <strong>ācris</strong>, n. = <strong>ācre</strong>"},
  {latin: "celer",
    english: "swift, fast",
    notes: "f. = <strong>celeris</strong>, n. = <strong>celere</strong>"},
  {latin: "brevis",
    english: "short, brief"},
  {latin: "difficilis",
    english: "difficult",
    notes: "superlative = <strong>difficillimus</strong>"},
  {latin: "dissimilis",
    english: "unlike, dissimilar",
    notes: "often with a Dative; superlative = <strong>dissimillimus</strong>"},
  {latin: "dulcis",
    english: "sweet"},
  {latin: "facilis",
    english: "easy",
    notes: "superlative = <strong>facillimus</strong>"},
  {latin: "fidēlis",
    english: "faithful, loyal, trustworthy",
    notes: "often with a Dative"},
  {latin: "fortis",
    english: "strong, brave"},
  {latin: "gravis",
    english: "heavy, serious"},
  {latin: "humilis",
    english: "low, lowly, humble",
    notes: "superlative = <strong>humillimus</strong>"},
  {latin: "iuvenis",
    english: "young"},
  {latin: "levis",
    english: "light, trivial, merry"},
  {latin: "similis",
    english: "like, similar",
    notes: "often with a Dative; superlative = <strong>simillimus</strong>"},
  {latin: "trīstis",
    english: "sad, melancholy"},
  {latin: "animal",
    english: "animal",
    notes: "neuter; plural = <strong>animālia</strong>"},
  {latin: "mare",
    english: "sea, large lake",
    notes: "neuter; plural = <strong>maria</strong>"},
  {latin: "audāx",
    english: "bold",
    notes: "stem = <strong>audāc-</strong>"},
  {latin: "dīves",
    english: "wealthy",
    notes: "stem = <strong>dīvit-</strong>"},
  {latin: "fēlīx",
    english: "happy, fortunate",
    notes: "stem = <strong>fēlīc-</strong>"},
  {latin: "pār",
    english: "equal",
    notes: "stem = <strong>pār-</strong>"},
  {latin: "pauper",
    english: "poor, lacking wealth",
    notes: "stem = <strong>pauper-</strong>"},
  {latin: "potēns",
    english: "powerful, strong, capable",
    notes: "stem = <strong>potent-</strong>"},
  {latin: "sapiēns",
    english: "wise, knowing",
    notes: "stem = <strong>sapient-</strong>"},
  {latin: "senex",
    english: "old, aged",
    notes: "stem = <strong>sen-</strong>"},
  {latin: "vēlōx",
    english: "fast, speedy",
    notes: "stem = <strong>vēlōc-</strong>"},
  {latin: "vetus",
    english: "old, longstanding",
    notes: "stem = <strong>veter-</strong>; superlative = <strong>vetustissimus</strong>"},
  {latin: "omnis",
    english: "all, every"},
  {latin: "trēs",
    english: "three",
    notes: "plural only; neuter = <strong>tria</strong>"},
  {latin: "turpis",
    english: "ugly, shameful"},
  {latin: "viridis",
    english: "green"}
]

const allVolumeIIIVocab = [
  {latin: "Aegyptus, -ī",
    english: "Egypt"},
  {latin: "Āfrica, -ae",
    english: "Africa"},
  {latin: "Āsia, -ae",
    english: "Asia, Asia Minor"},
  {latin: "Corsica, -ae",
    english: "Corsica"},
  {latin: "Crēta, -ae",
    english: "Crete"},
  {latin: "Cyprus, -ī",
    english: "Cyprus"},
  {latin: "Etrūria, -ae",
    english: "Etruria, Tuscany"},
  {latin: "Iūdaea, -ae",
    english: "Judea"},
  {latin: "Lātium, -ī",
    english: "Latium, Lazio"},
  {latin: "Lusitānia, -ae",
    english: "Portugal"},
  {latin: "Macedonia, -ae",
    english: "Macedonia"},
  {latin: "Mauretānia, -ae",
    english: "Mauretania"},
  {latin: "Numidia, -ae",
    english: "Numidia"},
  {latin: "Persia, -ae",
    english: "Persia, Iran"},
  {latin: "Syria, -ae",
    english: "Syria"},
  {latin: "Aegyptius, -a, -um",
    english: "Egyptian, from Egypt"},
  {latin: "Āfricānus, -a, -um",
    english: "African, from Africa"},
  {latin: "Āsiānus (or Āsiāticus), -a, -um",
    english: "Asian, from Asia Minor"},
  {latin: "Corsicus, -a, -um",
    english: "Corsican, from Corsica"},
  {latin: "Crēticus, -a, -um",
    english: "Cretan, from Crete"},
  {latin: "Etruscus, -a, -um",
    english: "Etruscan, Tuscan, from Etruria"},
  {latin: "Iūdaeus, -a, -um",
    english: "Judean, from Judea"},
  {latin: "Lātīnus, -a, -um",
    english: "Latin, from Lazio"},
  {latin: "Lusitānus, -a, -um",
    english: "Lusitanian, from Portugal"},
  {latin: "Macedonus, -a, -um",
    english: "Macedonian"},
  {latin: "Maurus, -a, -um",
    english: "Mauretanian, Moorish"},
  {latin: "Numidiānus, -a, -um",
    english: "Numidian, African"},
  {latin: "Persicus, -a, -um",
    english: "Persian, from Persia"},
  {latin: "Syricus, -a, -um",
    english: "Syrian, from Syria"},
  {latin: "albus, -a, -um",
    english: "white, dull white"},
  {latin: "āter, ātra, ātrum",
    english: "black, matte black"},
  {latin: "aurantiacus, -a, -um",
    english: "orange (color)"},
  {latin: "caerūleus, -a, -um",
    english: "blue, sky blue"},
  {latin: "candidus, -a, -um",
    english: "white, shining white"},
  {latin: "clārus, -a, -um",
    english: "clear, bright, famous"},
  {latin: "flāvus, -a, -um",
    english: "yellow"},
  {latin: "fuscus, -a, -um",
    english: "dark brown, black"},
  {latin: "grīseus, -a, -um",
    english: "gray"},
  {latin: "niger, nigra, nigrum",
    english: "black, shining black"},
  {latin: "obscūrus, -a, -um",
    english: "dark, shadowy, mysterious"},
  {latin: "purpureus, -a, -um",
    english: "purple"},
  {latin: "rōseus, -a, -um",
    english: "pink, rosy"},
  {latin: "ruber, rubra, rubrum",
    english: "red, ruddy"},
  {latin: "rōsa, -ae",
    english: "rose"},
  {latin: "clārō, clārāre",
    english: "to brighten, to clarify, to make known"},
  {latin: "obscūrō, obscūrāre",
    english: "to darken, to conceal"},
  {latin: "offuscō, offuscāre",
    english: "to darken, to become dark"},
  {latin: "altus, -a, -um",
    english: "high, tall, deep"},
  {latin: "calidus, -a, -um",
    english: "hot"},
  {latin: "captīvus, -a, -um",
    english: "captive"},
  {latin: "cārus, -a, -um",
    english: "dear, precious, expensive"},
  {latin: "falsus, -a, -um",
    english: "false, mistaken"},
  {latin: "frīgidus, -a, -um",
    english: "cold"},
  {latin: "integer, -gra, -grum",
    english: "whole, complete, intact, unhurt"},
  {latin: "līber, lībera, līberum",
    english: "free, not captive or enslaved"},
  {latin: "profundus, -a, -um",
    english: "deep, dense"},
  {latin: "pūrus, -a, -um",
    english: "pure, clean, clear"},
  {latin: "sacer, sacra, sacrum",
    english: "sacred, hallowed"},
  {latin: "sānctus, -a, -um",
    english: "holy, blessed, saint(ly)"},
  {latin: "sordidus, -a, -um",
    english: "dirty"},
  {latin: "tepidus, -a, -um",
    english: "warm, lukewarm"},
  {latin: "vērus, -a, -um",
    english: "true"},
  {latin: "quam",
    english: "how, to what degree, than"},
  {latin: "arbor, arboris",
    english: "tree"},
  {latin: "canis, canis",
    english: "dog"},
  {latin: "coniūnx, coniugis",
    english: "spouse"},
  {latin: "cōnsul, cōnsulis",
    english: "consul, executive official"},
  {latin: "frater, fratris",
    english: "brother"},
  {latin: "mater, matris",
    english: "mother"},
  {latin: "nepōs, nepōtis",
    english: "grandchild, nephew, niece"},
  {latin: "pater, patris",
    english: "father"},
  {latin: "prīnceps, prīncipis",
    english: "chief, prince, emperor"},
  {latin: "soror, sorōris",
    english: "sister"},
  {latin: "uxor, uxōris",
    english: "wife"},
  {latin: "amor, amōris",
    english: "love"},
  {latin: "clāmor, clāmōris",
    english: "shouting, noise"},
  {latin: "favor, favōris",
    english: "favor, goodwill"},
  {latin: "timor, timōris",
    english: "fear"},
  {latin: "imperātor, imperātōris",
    english: "commander, general, emperor"},
  {latin: "pastor, pastōris",
    english: "shepherd"},
  {latin: "centuriō, centuriōnis",
    english: "centurion, company captain"},
  {latin: "lectiō, lectiōnis",
    english: "lesson, reading"},
  {latin: "legiō, legiōnis",
    english: "legion, army division"},
  {latin: "leō, leōnis",
    english: "lion"},
  {latin: "leaena, -ae",
    english: "lioness"},
  {latin: "ratiō, ratiōnis",
    english: "reason, calculation, plan"},
  {latin: "regiō, regiōnis",
    english: "region"},
  {latin: "carō, carnis",
    english: "meat"},
  {latin: "homō, hominis",
    english: "man, person, human being"},
  {latin: "ōrdō, ōrdinis",
    english: "order, row, rank, social class"},
  {latin: "virgō, virginis",
    english: "virgin, young girl"},
  {latin: "ōrdinō, ōrdināre",
    english: "place in order"},
  {latin: "humānus, -a, -um",
    english: "human"},
  {latin: "leōnīnus, -a, -um",
    english: "lionlike, lion-related"},
  {latin: "cervīx, cervīcis",
    english: "neck"},
  {latin: "crux, crucis",
    english: "cross, crossroads"},
  {latin: "dux, ducis",
    english: "leader"},
  {latin: "grex, gregis",
    english: "flock, herd"},
  {latin: "lēx, lēgis",
    english: "law"},
  {latin: "lūx, lūcis",
    english: "light"},
  {latin: "nix, nivis",
    english: "snow"},
  {latin: "nux, nucis",
    english: "nut"},
  {latin: "pāx, pācis",
    english: "peace"},
  {latin: "radīx, radīcis",
    english: "root, radish"},
  {latin: "rēx, rēgis",
    english: "king"},
  {latin: "vōx, vōcis",
    english: "voice"},
  {latin: "gregō, gregāre",
    english: "to herd, to assemble"},
  {latin: "lūceō, lūcēre",
    english: "to shine, to glow"},
  {latin: "ūnus, -a, -um",
    english: "one"},
  {latin: "auris, auris (-ium)",
    english: "ear"},
  {latin: "avis, avis, (-ium)",
    english: "bird"},
  {latin: "cīvis, cīvis, (-ium)",
    english: "citizen"},
  {latin: "classis, classis, (-ium)",
    english: "group, fleet"},
  {latin: "clāvis, clāvis, (-ium)",
    english: "key"},
  {latin: "collis, collis, (-ium)",
    english: "hill"},
  {latin: "hostis, hostis, (-ium)",
    english: "enemy"},
  {latin: "ignis, ignis, (-ium)",
    english: "fire"},
  {latin: "nāvis, nāvis, (-ium)",
    english: "ship"},
  {latin: "ovis, ovis, (-ium)",
    english: "sheep, ewe"},
  {latin: "pānis, pānis, (-ium)",
    english: "bread, loaf of bread"},
  {latin: "piscis, piscis, (-ium)",
    english: "fish"},
  {latin: "fēlēs, fēlis, (-ium)",
    english: "cat"},
  {latin: "vallēs, vallis, (-ium)",
    english: "valley"},
  {latin: "vulpēs, vulpis, (-ium)",
    english: "fox"},
  {latin: "piscīna, -ae",
    english: "fish pond, swimming pool"},
  {latin: "ārs, artis, (-ium)",
    english: "art, skill"},
  {latin: "cohors, cohortis, (-ium)",
    english: "cohort, crew, battlion"},
  {latin: "dēns, dentis, (-ium)",
    english: "tooth"},
  {latin: "fōns, fontis, (-ium)",
    english: "fountain, spring"},
  {latin: "gēns, gentis, (-ium)",
    english: "clan, tribe"},
  {latin: "īnfāns, īnfantis, (-ium)",
    english: "child, infant"},
  {latin: "lēns, lentis, (-ium)",
    english: "lentil"},
  {latin: "mēns, mentis, (-ium)",
    english: "mind"},
  {latin: "mōns, montis, (-ium)",
    english: "mountain"},
  {latin: "mors, mortis, (-ium)",
    english: "death"},
  {latin: "nōx, noctis, (-ium)",
    english: "night"},
  {latin: "pārs, partis, (-ium)",
    english: "part, direction, political party"},
  {latin: "pōns, pontis, (-ium)",
    english: "bridge"},
  {latin: "urbs, urbis, (-ium)",
    english: "city"},
  {latin: "ambō, -ae, -ō",
    english: "both"},
  {latin: "duo, -ae, -o",
    english: "two"},
  {latin: "abdōmen, abdōminis",
    english: "belly"},
  {latin: "carmen, carminis",
    english: "song, poem"},
  {latin: "flūmen, flūminis",
    english: "river"},
  {latin: "lūmen, lūminis",
    english: "light"},
  {latin: "nōmen, nōminis",
    english: "name, clan name"},
  {latin: "praenōmen, praenōminis",
    english: "first name, given name"},
  {latin: "cognōmen, cognōminis",
    english: "nickname, family branch name"},
  {latin: "agnōmen, agnōminis",
    english: "earned additional nickname"},
  {latin: "volūmen, volūminis",
    english: "scroll, volume"},
  {latin: "corpus, corporis",
    english: "body"},
  {latin: "genus, generis",
    english: "kind, type"},
  {latin: "latus, lateris",
    english: "side"},
  {latin: "pectus, pectoris",
    english: "chest, breast"},
  {latin: "tempus, temporis",
    english: "time"},
  {latin: "vulnus, vulneris",
    english: "wound"},
  {latin: "caput, capitis",
    english: "head"},
  {latin: "cor, cordis",
    english: "hear"},
  {latin: "crūs, crūris",
    english: "leg"},
  {latin: "iter, itineris",
    english: "journey, route, march"},
  {latin: "lac, lactis",
    english: "milk"},
  {latin: "ōs, ōris",
    english: "mouth, opening, countenance"},
  {latin: "ācer, ācris, ācre",
    english: "sharp, bitter, fierce"},
  {latin: "celer, celeris, celere",
    english: "swift, fast"},
  {latin: "brevis, -e",
    english: "short, brief"},
  {latin: "difficilis, -e",
    english: "difficult"},
  {latin: "dissimilis, -e",
    english: "unlike, dissimilar"},
  {latin: "dulcis, -e",
    english: "sweet"},
  {latin: "facilis, -e",
    english: "easy"},
  {latin: "fidēlis, -e",
    english: "faithful, loyal, trustworthy"},
  {latin: "fortis, -e",
    english: "strong, brave"},
  {latin: "gravis, -e",
    english: "heavy, serious"},
  {latin: "humilis, -e",
    english: "low, lowly, humble"},
  {latin: "iuvenis, -e",
    english: "young"},
  {latin: "levis, -e",
    english: "light, trivial, merry"},
  {latin: "similis, -e",
    english: "like, similar"},
  {latin: "trīstis, -e",
    english: "sad, melancholy"},
  {latin: "animal, animālis",
    english: "animal"},
  {latin: "mare, maris",
    english: "sea, large lake"},
  {latin: "audāx, audācis",
    english: "bold"},
  {latin: "dīves, dīvitis",
    english: "wealthy"},
  {latin: "fēlīx, fēlīcis",
    english: "happy, fortunate"},
  {latin: "pār, pāris",
    english: "equal"},
  {latin: "pauper, pauperis",
    english: "poor, lacking wealth"},
  {latin: "potēns, potentis",
    english: "powerful, strong, capable"},
  {latin: "sapiēns, sapientis",
    english: "wise, knowing"},
  {latin: "senex, senis",
    english: "old, aged"},
  {latin: "vēlōx, vēlōcis",
    english: "fast, speedy"},
  {latin: "vetus, veteris",
    english: "old, longstanding"},
  {latin: "omnis, -e",
    english: "all, every"},
  {latin: "trēs, tria",
    english: "three"},
  {latin: "turpis, -e",
    english: "ugly, shameful"},
  {latin: "viridis, -e",
    english: "green"}
]

function shuffle(array) {
  let k = []
  for (let i = array.length - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
    k.push(array[i]);
  }
  return k;
}

function displayRandom(array) {
  let j = 1
  let iteration = ""
  let shuffledArray = shuffle(array);
  let html = `<div class="carousel-item active"><h6 class="latin-span">${shuffledArray[0].latin}</h6>
    <span id="translation${j}" class="vocab-span">${shuffledArray[0].english}</span></div>`
  for (let i = 1; i < array.length - 1; i++) {
    j++;
    iteration = `<div class="carousel-item">`;
    iteration += `<h6 class="latin-span">${shuffledArray[i].latin}</h6>`;
    iteration += `<p id="translation${j}" class="vocab-span" style="display: none">${shuffledArray[i].english}</p>`;
    if (shuffledArray[i].notes != null) {
      iteration += `<p id="notes${j}" class="notes-span" style="display: none">${shuffledArray[i].notes}</p>`;
    }
    iteration += `</div>`;
    html += iteration;
  }
  return html;
}

function displayRandomEngLat(array) {
  let j = 1
  let iteration = ""
  let shuffledArray = shuffle(array);
  let html = `<div class="carousel-item active"><h6 class="latin-span">${shuffledArray[0].english}</h6>
    <span id="translation${j}" class="vocab-span" style="display: none">${shuffledArray[0].latin}</span></div>`
  for (let i = 1; i < array.length - 1; i++) {
    j++;
    iteration = `<div class="carousel-item">`;
    iteration += `<h6 class="latin-span">${shuffledArray[i].english}</h6>`;
    iteration += `<p id="translation${j}" class="vocab-span">${shuffledArray[i].latin}</p>`;
    iteration += `</div>`;
    html += iteration;
  }
  return html;
}

console.log(allVolumeIIVocab.length);
