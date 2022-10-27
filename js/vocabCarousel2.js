const vocab16 = [
  {latin: "cum",
    english: "with",
    notes: "+ Ablative"},
  {latin: "dē",
    english: "from, down from, about, concerning",
    notes: "+ Ablative"},
  {latin: "ē/ex",
    english: "from, out of",
    notes: "+ Ablative"},
  {latin: "prō",
    english: "in front of, in favor of, on behalf of",
    notes: "+ Ablative"},
  {latin: "sine",
    english: "without",
    notes: "+ Ablative"},
  {latin: "sub",
    english: "under, up to",
    notes: "+ Ablative = under; + Accusative = up to"},
  {latin: "super",
    english: "over, concerning, regarding, above, on top of",
    notes: "+ Ablative or Accusative for different meanings"},
  {latin: "ubi?",
    english: "where?"},
  {latin: "hīc",
    english: "here, in this place",
    notes: "antonym = <strong>ibi</strong>"},
  {latin: "ibi",
    english: "there, in that place",
    notes: "antonym = <strong>hīc</strong>"},
  {latin: "ubīque",
    english: "everywhere"},
  {latin: "quō? (adverb)",
    english: "whither? to what place?"},
  {latin: "quõ? (pronoun)",
    english: "whom?",
    notes: "+ Ablative; quōcum = with whom"},
  {latin: "eō (adverb)/illūc",
    english: "thither, to that place",
    notes: "antonym = <strong>hūc</strong>"},
  {latin: "hūc",
    english: "hither, to this place",
    notes: "antonym = <strong>eō/illūc</strong>"},
  {latin: "unde?",
    english: "whence? from where?"},
  {latin: "hinc",
    english: "hence, from this place",
    notes: "antonym = <strong>inde/illinc</strong>"},
  {latin: "inde/illinc",
    english: "thence, from that place",
    notes: "antonym = <strong>hinc</strong>"},
  {latin: "undīque",
    english: "from everywhere"},
  {latin: "ego",
    english: "I",
    notes: "Nominative case"},
  {latin: "meī",
    english: "of me",
    notes: "Genitive case"},
  {latin: "mihi",
    english: "to/for me",
    notes: "Dative case"},
  {latin: "mē",
    english: "me"},
  {latin: "mēcum",
    english: "with me",
    notes: "special Ablative of accompaniment"},
  {latin: "tū",
    english: "thou, you (s.)",
    notes: "Nominative case"},
  {latin: "tuī",
    english: "of you/thee",
    notes: "Genitive case"},
  {latin: "tibi",
    english: "to/for you/thee",
    notes: "Dative case"},
  {latin: "tē",
    english: "you/thee"},
  {latin: "tēcum",
    english: "with you/thee",
    notes: "special Ablative of accompaniment"},
  {latin: "nōs",
    english: "we, us",
    notes: "Nominative and Accusative cases"},
  {latin: "nostrī (pronoun)",
    english: "of us",
    notes: "Genitive case"},
  {latin: "nōbīs",
    english: "us, to/for us",
    notes: "Dative and Ablative cases"},
  {latin: "nōbīscum",
    english: "with us",
    notes: "special Ablative of accompaniment"},
  {latin: "vōs",
    english: "ye, you (pl.), y'all",
    notes: "Nominative and Accusative cases"},
  {latin: "vestrī (pronoun)",
    english: "of you/y'all",
    notes: "Genitive case"},
  {latin: "vōbīs",
    english: "to/for you/y'all",
    notes: "Dative and Ablative cases"},
  {latin: "vōbīscum",
    english: "with you/y'all",
    notes: "special Ablative of accompaniment"},
  {latin: "quis?",
    english: "who?",
    notes: "Nominative case"},
  {latin: "cuius?",
    english: "whose?",
    notes: "Genitive case"},
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
  {latin: "Britānnia",
    english: "(the island of) Britain",
    notes: "<strong>Britānnus/-a/-um</strong> = <em>British, Briton</em>"},
  {latin: "Dācia",
    english: "Dacia, ~Romania",
    notes: "<strong>Dācus/-a/-um</strong> = <em>Dacian</em>"},
  {latin: "Eurōpa",
    english: "Europe",
    notes: "<strong>Eurōpaeus/-a/-um</strong> = <em>European</em>"},
  {latin: "Gallia",
    english: "Gaul, ~France and Belgium",
    notes: "<strong>Gallus/-a/-um</strong> = <em>Gallic</em>"},
  {latin: "Germānia",
    english: "Germany",
    notes: "<strong>Germānus/-a/-um</strong> = <em>German</em>"},
  {latin: "Graecia",
    english: "Greece",
    notes: "<strong>Graecus/-a/-um</strong> = <em>Greek</em>"},
  {latin: "Helvētia",
    english: "Helvetia, ~Switzerland",
    notes: "<strong>Helvētius/-a/-um</strong> = <em>Helvetian, Swiss</em>"},
  {latin: "Hispānia",
    english: "Spain",
    notes: "<strong>Hispānus/-a/-um</strong> = <em>Spanish, Spaniard</em>"},
  {latin: "Īllyria",
    english: "Illyria, ~Croatia",
    notes: "<strong>Īllyrius/-a/-um</strong> = <em>Illyrian</em>"},
  {latin: "Sardinia",
    english: "(the island of) Sardinia",
    notes: "<strong>Sardus/-a/-um</strong> = <em>Sardinian</em>"},
  {latin: "Sicilia",
    english: "(the island of) Sicily",
    notes: "<strong>Siculus/-a/-um</strong> = <em>Sicilian</em>"},
  {latin: "Thrācia",
    english: "Thrace, ~Bulgaria",
    notes: "<strong>Thrāx</strong> (plural <strong>Thrācēs</strong>) = <em>Thracian</em>"},
  {latin: "cēnō, cēnāre",
    english: "to dine"},
  {latin: "dōnō, dōnāre",
    english: "to grant, to bestow"},
  {latin: "formō, formāre",
    english: "to form, to shape"},
  {latin: "locō, locāre",
    english: "to place, to set in place"},
  {latin: "nōminō, nōmināre",
    english: "to name, to nominate, to charge under law"},
  {latin: "faveō, favēre",
    english: "to favor",
    notes: "with Dative object"},
  {latin: "imperō, imperāre",
    english: "to command",
    notes: "with Dative object"},
  {latin: "noceō, nocēre",
    english: "to harm",
    notes: "with Dative object"},
  {latin: "pāreō, pārēre",
    english: "to obey",
    notes: "with Dative object"},
  {latin: "placeō, placēre",
    english: "to please",
    notes: "with Dative object"},
  {latin: "studeō, studēre",
    english: "to study, to be enthused about",
    notes: "with Dative object"},
  {latin: "suadeō, suadēre",
    english: "to persuade, to recommend",
    notes: "with Dative object"},
  {latin: "forma",
    english: "form, shape",
    notes: "Genitive = <strong>formae</strong>; gender = f."},
  {latin: "imperium",
    english: "power, authority, empire",
    notes: "Genitive = <strong>imperiī</strong>; gender = n."},
  {latin: "locus",
    english: "place, location",
    notes: "Genitive = <strong>locī</strong>; gender = m."},
  {latin: "studium",
    english: "enthusiasm, zeal, study",
    notes: "Genitive = <strong>studiī</strong>; gender = n."},
  {latin: "apellō, appellāre",
    english: "to call by name"},
  {latin: "cūrō, cūrāre",
    english: "to care, to take care of"},
  {latin: "doleō, dolēre",
    english: "to hurt, to be hurt, to grieve"},
  {latin: "lavō, lavāre",
    english: "to wash, to bathe"},
  {latin: "oppugnō, oppugnāre",
    english: "to attack"},
  {latin: "pleō, plēre",
    english: "to fill"},
  {latin: "potō, potāre",
    english: "to drink"},
  {latin: "spīrō, spīrāre",
    english: "to breathe"},
  {latin: "taceō, tacēre",
    english: "to be silent"},
  {latin: "temptō, temptāre",
    english: "to try, to test"},
  {latin: "valeō, valēre",
    english: "to be well, to be strong",
    notes: "imperative forms <strong>valē/valēte</strong> = <em>farewell</em>"},
  {latin: "vulnerō, vulnerāre",
    english: "to wound"},
  {latin: "cūra",
    english: "care, concern",
    notes: "Genitive = <strong>cūrae</strong>; gender = f.; often with objective Genitive"},
  {latin: "pugna",
    english: "fight, battle",
    notes: "Genitive = <strong>pugnae</strong>; gender = f."}
]

const vocab20 = [
  {latin: "ante",
    english: "before, in front of",
    notes: "+ Accusative"},
  {latin: "apud",
    english: "among, in the company of, at the home of",
    notes: "+ Accusative"},
  {latin: "circum",
    english: "around",
    notes: "+ Accusative"},
  {latin: "contrā",
    english: "against, next to, opposite",
    notes: "+ Accusative"},
  {latin: "inter",
    english: "between, among, amongst",
    notes: "+ Accusative"},
  {latin: "ob",
    english: "on account of, facing",
    notes: "+ Accusative"},
  {latin: "per",
    english: "through, during",
    notes: "+ Accusative"},
  {latin: "post",
    english: "after, behind",
    notes: "+ Accusative"},
  {latin: "praeter",
    english: "beyond, besides, except",
    notes: "+ Accusative"},
  {latin: "prope",
    english: "near",
    notes: "+ Accusative"},
  {latin: "propter",
    english: "on account of, because of",
    notes: "+ Accusative"},
  {latin: "trāns",
    english: "across, beyond",
    notes: "+ Accusative"},
  {latin: "anteā",
    english: "beforehand",
    notes: "adverb"},
  {latin: "intereā/interim",
    english: "meanwhile, for the time being",
    notes: "adverb"},
  {latin: "posteā",
    english: "afterward",
    notes: "adverb"},
  {latin: "proptereā",
    english: "for this/that/these/those reasons",
    notes: "adverb"},
  {latin: "antequam",
    english: "before",
    notes: "conjunction"},
  {latin: "postquam",
    english: "after",
    notes: "conjunction"},
  {latin: "amīcus",
    english: "friendly",
    notes: "as a noun, <em>friend</em>"},
  {latin: "angustus",
    english: "narrow"},
  {latin: "antīquus",
    english: "ancient, of old",
    notes: "related to <strong>ante</strong>; not used to describe living beings"},
  {latin: "benīgnus",
    english: "kind, pleasant, favorable",
    notes: "related to <strong>bonus</strong>"},
  {latin: "inimīcus",
    english: "unfriendly",
    notes: "as a noun, <em>personal enemy</em>"},
  {latin: "lātus",
    english: "wide, broad"},
  {latin: "longinquus",
    english: "far away",
    notes: "related to <strong>longus</strong>; antonym = <strong>propinquus</strong>"},
  {latin: "longus",
    english: "long, tall",
    notes: "related to <strong>longinquus</strong>"},
  {latin: "novus",
    english: "new, fresh, strange",
    notes: "antonym = <strong>antīquus</strong>"},
  {latin: "propinquus",
    english: "nearby, neighboring",
    notes: "related to <strong>prope</strong>; antonym = <strong>longinquus</strong>"},
  {latin: "pulcher",
    english: "beautiful, handsome",
    notes: "stem = <strong>pulchr-</strong>"},
  {latin: "suus",
    english: "his/her/its/their own",
    notes: "often omitted"},
  {latin: "validus",
    english: "strong, healthy, worthy",
    notes: "related to <strong>valeō/-ēre</strong>"},
  {latin: "amīcitia",
    english: "friendship",
    notes: "related to <strong>amīcus</strong>"},
  {latin: "angustia",
    english: "narrowness",
    notes: "<strong>angustiae</strong> (pl.) = <em>difficulties</em>"},
  {latin: "appropinquō, appropinquāre",
    english: "to approach, to draw near",
    notes: "related to <strong>propinquus</strong>"},
  {latin: "renovō, renovāre",
    english: "renew, refresh, renovate",
    notes: "related to <strong>novus</strong>"},
  {latin: "suī",
    english: "of oneself",
    notes: "Genitive case"},
  {latin: "sibi",
    english: "to/for oneself",
    notes: "Dattive case"},
  {latin: "sē/sēsē",
    english: "oneself, each other",
    notes: "Accusative or Ablative case"},
  {latin: "sēcum",
    english: "with oneself",
    notes: "Ablative of accompaniment"},
  {latin: "audeō, audēre",
    english: "to dare",
    notes: "often used with an infinitive"},
  {latin: "cōgitō, cōgitāre",
    english: "to think, to consider",
    notes: "often used with an indirect statement"},
  {latin: "gaudeō, gaudēre",
    english: "to rejoice, to be glad",
    notes: "often used with an indirect statement"},
  {latin: "negō, negāre",
    english: "to deny",
    notes: "often used with an indirect statement"},
  {latin: "putō, putāre",
    english: "to think, to judge, to deem",
    notes: "often used with an indirect statement"},
  {latin: "respondeō, respondēre",
    english: "to respond, to reply",
    notes: "often used with an indirect statement"},
  {latin: "soleō, solēre",
    english: "to be accustomed",
    notes: "often used with an infinitive"},
  {latin: "spērō, spērāre",
    english: "to hope",
    notes: "often used with an indirect statement"},
  {latin: "decet, decēre",
    english: "to be suitable",
    notes: "impersonal, often used with a Dative and an indirect statement"},
  {latin: "licet, licēre",
    english: "to be allowed",
    notes: "impersonal, often used with a Dative and an infinitive"},
  {latin: "oportet, oportēre",
    english: "to be necessary",
    notes: "impersonal, often used with a Dative and an infinitive"},
  {latin: "audācia",
    english: "boldness, audacity",
    notes: "Genitive = <strong>audāciae</strong>; gender = f."},
  {latin: "decentia",
    english: "decency, suitability",
    notes: "Genitive = <strong>decentiae</strong>; gender = f."},
  {latin: "gaudium",
    english: "joy, gladness",
    notes: "Genitive = <strong>gaudiī</strong>; gender = n."},
  {latin: "licentia",
    english: "license, liberty",
    notes: "Genitive = <strong>licentiae</strong>; gender = f."},
  {latin: "responsum",
    english: "response, answer",
    notes: "Genitive = <strong>responsī</strong>; gender = n."},
  {latin: "laetitia",
    english: "happiness",
    notes: "Genitive = <strong>laetitiae</strong>; gender = f."},
  {latin: "miseria",
    english: "sadness, wretchedness, misery",
    notes: "Genitive = <strong>miseriae</strong>; gender = f."},
  {latin: "aquila",
    english: "eagle",
    notes: "Genitive = <strong>aquilae</strong>; gender = f."},
  {latin: "camera",
    english: "room, chamber",
    notes: "Genitive = <strong>camerae</strong>; gender = f."},
  {latin: "iānua",
    english: "door",
    notes: "Genitive = <strong>iānuae</strong>; gender = f."},
  {latin: "patria",
    english: "homeland, fatherland",
    notes: "Genitive = <strong>patriae</strong>; gender = f."},
  {latin: "pecūnia",
    english: "money",
    notes: "Genitive = <strong>pecūniae</strong>; gender = f."},
  {latin: "porta",
    english: "gate",
    notes: "Genitive = <strong>portae</strong>; gender = f."},
  {latin: "rēgīna",
    english: "queen",
    notes: "Genitive = <strong>rēgīnae</strong>; gender = f."},
  {latin: "sagitta",
    english: "arrow",
    notes: "Genitive = <strong>sagittae</strong>; gender = f."},
  {latin: "sella",
    english: "seat, chair, saddle",
    notes: "Genitive = <strong>sellae</strong>; gender = f."},
  {latin: "silva",
    english: "forest, woods",
    notes: "Genitive = <strong>silvae</strong>; gender = f."}
]

const vocab23 = [
  {latin: "atque",
    english: "and also, as well as",
    notes: "conjunction"},
  {latin: "atque..atque",
    english: "both...and",
    notes: "paired conjunction"},
  {latin: "autem",
    english: "however",
    notes: "postpositive conjunction"},
  {latin: "ergō",
    english: "therefore, consequently",
    notes: "postpositive conjunction"},
  {latin: "igitur",
    english: "therefore",
    notes: "postpositive conjunction"},
  {latin: "nam",
    english: "for, because",
    notes: "conjunction"},
  {latin: "neque/nec",
    english: "nor, and not",
    notes: "conjunction"},
  {latin: "neque..neque/nec..nec",
    english: "neither..nor",
    notes: "paired conjunction"},
  {latin: "nisi",
    english: "unless, if not, except",
    notes: "conjunction"},
  {latin: "quod",
    english: "because",
    notes: "conjunction"},
  {latin: "sī",
    english: "if",
    notes: "conjunction"},
  {latin: "tamen",
    english: "nevertheless",
    notes: "postpositive conjunction"},
  {latin: "vel",
    english: "or (inclusive)",
    notes: "conjunction"},
  {latin: "vel..vel",
    english: "either..or (inclusive)",
    notes: "paired conjunction"},
  {latin: "asinus/asina",
    english: "donkey, ass"},
  {latin: "auxilium",
    english: "help, aid",
    notes: "plural <strong>auxilia</strong> = <em>auxiliary/reinforcement troops</em>"},
  {latin: "beneficium",
    english: "benefit",
    notes: "related to <strong>bonus (bene)</strong>"},
  {latin: "cervus/cerva",
    english: "deer, stag/doe"},
  {latin: "gladius",
    english: "sword",
    notes: "related to <strong>gladiātor</strong>"},
  {latin: "lectus",
    english: "bed, couch",
    notes: "Genitive = <strong>lectī</strong>; gender = m."},
  {latin: "lupus/lupa",
    english: "wolf"},
  {latin: "modus",
    english: "means, method, measure",
    notes: "Genitive = <strong>modī</strong>; gender = m."},
  {latin: "numerus",
    english: "number, group",
    notes: "Genitive = <strong>numerī</strong>; gender = m."},
  {latin: "nūntius/nūntia",
    english: "messenger, message, news",
    notes: "related to <strong>nūntiō/-āre</strong>"},
  {latin: "populus",
    english: "people, nation",
    notes: "Genitive = <strong>populī</strong>; gender = m."},
  {latin: "scūtum",
    english: "shield",
    notes: "Genitive = <strong>scūtī</strong>; gender = n."},
  {latin: "servus/serva",
    english: "slave",
    notes: "not related to <strong>servō/-āre</strong>"},
  {latin: "numerō, numerāre",
    english: "to count, to reckon",
    notes: "related to <strong>numerus</strong>"},
  {latin: "quōmodo?",
    english: "how? by what means?",
    notes: "related to <strong>modus</strong>"},
  {latin: "asinīnus",
    english: "donkeylike, donkey-related, asinine",
    notes: "related to <strong>asinus</strong>"},
  {latin: "cervīnus",
    english: "deerlike, deer-related",
    notes: "related to <strong>cervus</strong>"},
  {latin: "lupīnus",
    english: "wolflike, wolf-related",
    notes: "related to <strong>lupus</strong>"},
  {latin: "aquilīnus",
    english: "eagle-like, eagle-related",
    notes: "related to <strong>aquila</strong>"},
  {latin: "caprīnus",
    english: "goatlike, goat-related",
    notes: "related to <strong>caper</strong>"},
  {latin: "equīnus",
    english: "horselike, horse-related",
    notes: "related to <strong>equus</strong>"},
  {latin: "taurīnus",
    english: "bull-like, bull-related",
    notes: "related to <strong>taurus</strong>"},
  {latin: "vaccīnus",
    english: "cowlike, cow related",
    notes: "related to <strong>vacca</strong>"},
  {latin: "absum, abesse",
    english: "to be away, to be absent"},
  {latin: "adsum, adesse",
    english: "to be near, to be present"},
  {latin: "intersum, interesse",
    english: "to be between, to make a difference"},
  {latin: "praesum, praeesse",
    english: "to be before, to be in charge",
    notes: "often used with a Dative object"},
  {latin: "augeō, augēre",
    english: "to increase, to enlarge"},
  {latin: "cēlō, cēlāre",
    english: "to hide, to conceal"},
  {latin: "horreō, horrēre",
    english: "to tremble, to shiver, to dread"},
  {latin: "iubeō, iubēre",
    english: "to order, to bid",
    notes: "often used with a direct object and an infinitive"},
  {latin: "iūrō, iūrāre",
    english: "to swear, to take an oath",
    notes: "impersonal, often used with an indirect statement"},
  {latin: "nēcō, nēcāre",
    english: "to kill, to murder"},
  {latin: "properō, properāre",
    english: "to hurry"},
  {latin: "rogō, rogāre",
    english: "to ask, to inquire",
    notes: "often used with a direct object and an infinitive"},
  {latin: "superō, superāre",
    english: "to overcome, to defeat"},
  {latin: "vetō, vetāre",
    english: "to forbid",
    notes: "often used with a direct object and an infinitive"}
]

const allVolumeIIVocab = [
  {latin: "cum (+ Abl.)",
    english: "with"},
  {latin: "dē (+ Abl.)",
    english: "from, down from"},
  {latin: "dē (+ Abl.)",
    english: "about, concerning"},
  {latin: "ē/ex (+ Abl.)",
    english: "from, out of"},
  {latin: "prō (+ Abl.)",
    english: "in front of, in favor of, on behalf of"},
  {latin: "sine (+ Abl.)",
    english: "without"},
  {latin: "sub (+ Abl.)",
    english: "under"},
  {latin: "sub (+ Acc.)",
    english: "up to"},
  {latin: "super (+ Abl.)",
    english: "over, concerning, regarding"},
  {latin: "super (+ Acc.)",
    english: "above, on top of"},
  {latin: "ubi?",
    english: "where?"},
  {latin: "hīc",
    english: "here, in this place"},
  {latin: "ibi",
    english: "there, in that place"},
  {latin: "ubīque",
    english: "everywhere"},
  {latin: "quō?",
    english: "whither? to what place?"},
  {latin: "quōcum?",
    english: "with whom?"},
  {latin: "eō (adverb)/illūc",
    english: "thither, to that place"},
  {latin: "hūc",
    english: "hither, to this place"},
  {latin: "unde?",
    english: "whence? from where?"},
  {latin: "hinc",
    english: "hence, from this place"},
  {latin: "inde/illinc",
    english: "thence, from that place"},
  {latin: "undīque",
    english: "from everywhere"},
  {latin: "ego",
    english: "I"},
  {latin: "meī",
    english: "of me"},
  {latin: "mihi",
    english: "to/for me"},
  {latin: "mē",
    english: "me"},
  {latin: "mēcum",
    english: "with me"},
  {latin: "tū",
    english: "thou, you (s.)"},
  {latin: "tuī",
    english: "of you/thee"},
  {latin: "tibi",
    english: "to/for you/thee"},
  {latin: "tē",
    english: "you/thee"},
  {latin: "tēcum",
    english: "with you/thee"},
  {latin: "nōs",
    english: "we, us"},
  {latin: "nostrī (pronoun)",
    english: "of us"},
  {latin: "nōbīs",
    english: "us, to/for us"},
  {latin: "nōbīscum",
    english: "with us"},
  {latin: "vōs",
    english: "ye, you (pl.), y'all"},
  {latin: "vestrī (pronoun)",
    english: "of you/y'all"},
  {latin: "vōbīs",
    english: "to/for you/y'all"},
  {latin: "vōbīscum",
    english: "with you/y'all"},
  {latin: "Britānnia",
    english: "Britain"},
  {latin: "Britānnī",
    english: "the British"},
  {latin: "Dācia",
    english: "Dacia, ~Romania"},
  {latin: "Dācī",
    english: "the Dacians"},
  {latin: "Eurōpa",
    english: "Europe"},
  {latin: "Eurōpaeī",
    english: "the Europeans"},
  {latin: "Gallia",
    english: "Gaul, ~France and Belgium"},
  {latin: "Gallī",
    english: "the Gauls"},
  {latin: "Germānia",
    english: "Germany"},
  {latin: "Germānī",
    english: "the Germans"},
  {latin: "Graecia",
    english: "Greece"},
  {latin: "Graecī",
    english: "the Greeks"},
  {latin: "Helvētia",
    english: "Helvetia, ~Switzerland"},
  {latin: "Helvētiī",
    english: "the Helvetians, the Swiss"},
  {latin: "Hispānia",
    english: "Spain"},
  {latin: "Hispānī",
    english: "the Spanish"},
  {latin: "Īllyria",
    english: "Illyria, ~Croatia"},
  {latin: "Īllyriī",
    english: "the Illyrians"},
  {latin: "Sardinia",
    english: "Sardinia"},
  {latin: "Sardus",
    english: "the Sardinians"},
  {latin: "Sicilia",
    english: "Sicily"},
  {latin: "Siculī",
    english: "the Sicilians"},
  {latin: "Thrācia",
    english: "Thrace"},
  {latin: "Thrācēs",
    english: "the Thracians"},
  {latin: "cēnō, cēnāre",
    english: "to dine"},
  {latin: "dōnō, dōnāre",
    english: "to grant, to bestow"},
  {latin: "formō, formāre",
    english: "to form, to shape"},
  {latin: "locō, locāre",
    english: "to place, to set in place"},
  {latin: "nōminō, nōmināre",
    english: "to name, to nominate, to charge under law"},
  {latin: "faveō, favēre (+ Dat.)",
    english: "to favor"},
  {latin: "imperō, imperāre (+ Dat.)",
    english: "to command"},
  {latin: "noceō, nocēre (+ Dat.)",
    english: "to harm"},
  {latin: "pāreō, pārēre (+ Dat.)",
    english: "to obey"},
  {latin: "placeō, placēre (+ Dat.)",
    english: "to please"},
  {latin: "studeō, studēre (+ Dat.)",
    english: "to study, to be enthused about"},
  {latin: "suadeō, suadēre (+ Dat.)",
    english: "to persuade, to recommend"},
  {latin: "forma",
    english: "form, shape"},
  {latin: "imperium",
    english: "power, authority, empire"},
  {latin: "locus",
    english: "place, location"},
  {latin: "studium",
    english: "enthusiasm, zeal, study"},
  {latin: "apellō, appellāre",
    english: "to call by name"},
  {latin: "cūrō, cūrāre",
    english: "to care, to take care of"},
  {latin: "doleō, dolēre",
    english: "to hurt, to be hurt, to grieve"},
  {latin: "lavō, lavāre",
    english: "to wash, to bathe"},
  {latin: "oppugnō, oppugnāre",
    english: "to attack"},
  {latin: "pleō, plēre",
    english: "to fill"},
  {latin: "potō, potāre",
    english: "to drink"},
  {latin: "spīrō, spīrāre",
    english: "to breathe"},
  {latin: "taceō, tacēre",
    english: "to be silent"},
  {latin: "temptō, temptāre",
    english: "to try, to test"},
  {latin: "valeō, valēre",
    english: "to be well, to be strong"},
  {latin: "vulnerō, vulnerāre",
    english: "to wound"},
  {latin: "cūra",
    english: "care, concern"},
  {latin: "pugna",
    english: "fight, battle"},
  {latin: "ante (+ Acc.)",
    english: "before, in front of (preposition)"},
  {latin: "apud (+ Acc.)",
    english: "among, in the company of, at the home of"},
  {latin: "circum (+ Acc.)",
    english: "around"},
  {latin: "contrā (+ Acc.)",
    english: "against, next to, opposite"},
  {latin: "inter (+ Acc.)",
    english: "between, among, amongst"},
  {latin: "ob (+ Acc.)",
    english: "on account of, facing"},
  {latin: "per (+ Acc.)",
    english: "through, during"},
  {latin: "post (+ Acc.)",
    english: "after, behind (preposition)"},
  {latin: "praeter (+ Acc.)",
    english: "beyond, besides, except"},
  {latin: "prope (+ Acc.)",
    english: "near"},
  {latin: "propter (+ Acc.)",
    english: "on account of, because of"},
  {latin: "trāns (+ Acc.)",
    english: "across, beyond"},
  {latin: "anteā",
    english: "beforehand"},
  {latin: "intereā/interim",
    english: "meanwhile, for the time being"},
  {latin: "posteā",
    english: "afterward"},
  {latin: "proptereā",
    english: "for this/that/these/those reasons"},
  {latin: "antequam",
    english: "before (conjunction)"},
  {latin: "postquam",
    english: "after (conjunction)"},
  {latin: "amīcus",
    english: "friendly"},
  {latin: "angustus",
    english: "narrow"},
  {latin: "antīquus",
    english: "ancient, of old"},
  {latin: "benīgnus",
    english: "kind, pleasant, favorable"},
  {latin: "inimīcus",
    english: "unfriendly"},
  {latin: "lātus",
    english: "wide, broad"},
  {latin: "longinquus",
    english: "far away"},
  {latin: "longus",
    english: "long, tall"},
  {latin: "novus",
    english: "new, fresh, strange"},
  {latin: "propinquus",
    english: "nearby, neighboring"},
  {latin: "pulcher",
    english: "beautiful, handsome"},
  {latin: "suus",
    english: "his/her/its/their own"},
  {latin: "validus",
    english: "strong, healthy, worthy"},
  {latin: "amīcitia",
    english: "friendship"},
  {latin: "angustia",
    english: "narrowness"},
  {latin: "angustiae",
    english: "difficulties"},
  {latin: "appropinquō, appropinquāre",
    english: "to approach, to draw near"},
  {latin: "renovō, renovāre",
    english: "renew, refresh, renovate"},
  {latin: "suī",
    english: "of oneself"},
  {latin: "sibi",
    english: "to/for oneself"},
  {latin: "sē/sēsē",
    english: "oneself, each other"},
  {latin: "sēcum",
    english: "with oneself"},
  {latin: "audeō, audēre",
    english: "to dare"},
  {latin: "cōgitō, cōgitāre",
    english: "to think, to consider"},
  {latin: "gaudeō, gaudēre",
    english: "to rejoice, to be glad"},
  {latin: "negō, negāre",
    english: "to deny"},
  {latin: "putō, putāre",
    english: "to think, to judge, to deem"},
  {latin: "respondeō, respondēre",
    english: "to respond, to reply"},
  {latin: "soleō, solēre",
    english: "to be accustomed"},
  {latin: "spērō, spērāre",
    english: "to hope"},
  {latin: "decet, decēre",
    english: "to be suitable"},
  {latin: "licet, licēre",
    english: "to be allowed"},
  {latin: "oportet, oportēre",
    english: "to be necessary"},
  {latin: "audācia",
    english: "boldness, audacity"},
  {latin: "decentia",
    english: "decency, suitability"},
  {latin: "gaudium",
    english: "joy, gladness"},
  {latin: "licentia",
    english: "license, liberty"},
  {latin: "responsum",
    english: "response, answer"},
  {latin: "laetitia",
    english: "happiness"},
  {latin: "miseria",
    english: "sadness, wretchedness, misery"},
  {latin: "aquila",
    english: "eagle"},
  {latin: "camera",
    english: "room, chamber"},
  {latin: "iānua",
    english: "door"},
  {latin: "patria",
    english: "homeland, fatherland"},
  {latin: "pecūnia",
    english: "money"},
  {latin: "porta",
    english: "gate"},
  {latin: "rēgīna",
    english: "queen"},
  {latin: "sagitta",
    english: "arrow"},
  {latin: "sella",
    english: "seat, chair, saddle"},
  {latin: "silva",
    english: "forest, woods"},
  {latin: "atque",
    english: "and also, as well as"},
  {latin: "atque..atque",
    english: "both...and"},
  {latin: "autem",
    english: "however"},
  {latin: "ergō",
    english: "therefore, consequently"},
  {latin: "igitur",
    english: "therefore"},
  {latin: "nam",
    english: "for, because"},
  {latin: "neque/nec",
    english: "nor, and not"},
  {latin: "neque..neque/nec..nec",
    english: "neither..nor"},
  {latin: "nisi",
    english: "unless, if not, except"},
  {latin: "quod",
    english: "because"},
  {latin: "sī",
    english: "if"},
  {latin: "tamen",
    english: "nevertheless"},
  {latin: "vel",
    english: "or (inclusive)"},
  {latin: "vel..vel",
    english: "either..or (inclusive)"},
  {latin: "asinus/asina",
    english: "donkey, ass"},
  {latin: "auxilium",
    english: "help, aid"},
  {latin: "beneficium",
    english: "benefit, act of kindness"},
  {latin: "cervus/cerva",
    english: "deer, stag/doe"},
  {latin: "gladius",
    english: "sword"},
  {latin: "lectus",
    english: "bed, couch"},
  {latin: "lupus/lupa",
    english: "wolf"},
  {latin: "modus",
    english: "means, method, measure"},
  {latin: "numerus",
    english: "number, group"},
  {latin: "nūntius/nūntia",
    english: "messenger, message, news"},
  {latin: "populus",
    english: "people, nation"},
  {latin: "scūtum",
    english: "shield"},
  {latin: "servus/serva",
    english: "slave"},
  {latin: "numerō, numerāre",
    english: "to count, to reckon"},
  {latin: "quōmodo?",
    english: "how? by what means?"},
  {latin: "asinīnus",
    english: "donkeylike, donkey-related, asinine"},
  {latin: "cervīnus",
    english: "deerlike, deer-related"},
  {latin: "lupīnus",
    english: "wolflike, wolf-related"},
  {latin: "aquilīnus",
    english: "eagle-like, eagle-related"},
  {latin: "caprīnus",
    english: "goatlike, goat-related"},
  {latin: "equīnus",
    english: "horselike, horse-related"},
  {latin: "taurīnus",
    english: "bull-like, bull-related"},
  {latin: "vaccīnus",
    english: "cowlike, cow related"},
  {latin: "absum, abesse",
    english: "to be away, to be absent"},
  {latin: "adsum, adesse",
    english: "to be near, to be present"},
  {latin: "intersum, interesse",
    english: "to be between, to make a difference"},
  {latin: "praesum, praeesse",
    english: "to be before, to be in charge"},
  {latin: "augeō, augēre",
    english: "to increase, to enlarge"},
  {latin: "cēlō, cēlāre",
    english: "to hide, to conceal"},
  {latin: "horreō, horrēre",
    english: "to tremble, to shiver, to dread"},
  {latin: "iubeō, iubēre",
    english: "to order, to bid"},
  {latin: "iūrō, iūrāre",
    english: "to swear, to take an oath"},
  {latin: "nēcō, nēcāre",
    english: "to kill, to murder"},
  {latin: "properō, properāre",
    english: "to hurry"},
  {latin: "rogō, rogāre",
    english: "to ask, to inquire"},
  {latin: "superō, superāre",
    english: "to overcome, to defeat"},
  {latin: "vetō, vetāre",
    english: "to forbid"},
  {latin: "licentia",
    english: "license, liberty"},
  {latin: "responsum",
    english: "response, answer"},
  {latin: "laetitia",
    english: "happiness"},
  {latin: "miseria",
    english: "sadness, wretchedness, misery"},
  {latin: "aquila",
    english: "eagle"},
  {latin: "camera",
    english: "room, chamber"},
  {latin: "iānua",
    english: "door"},
  {latin: "patria",
    english: "homeland, fatherland"},
  {latin: "pecūnia",
    english: "money"},
  {latin: "porta",
    english: "gate"},
  {latin: "rēgīna",
    english: "queen"},
  {latin: "sagitta",
    english: "arrow"},
  {latin: "sella",
    english: "seat, chair, saddle"},
  {latin: "silva",
    english: "forest, woods"}
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