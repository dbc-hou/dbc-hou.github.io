const fromAdjectives = [
  {entry: "aequitās",
    latinPart: "aequus, -a, -um",
    meanings: "equity, fairness"},
  {entry: "blandītia",
    latinPart: "blandus, -a, -um",
    meanings: "flattery, fawning"},
  {entry: "calliditās",
    latinPart: "callidus, -a, -um",
    meanings: "cleverness"},
  {entry: "dēnsitās",
    latinPart: "dēnsus, -a, -um",
    meanings: "density, thickness"},
  {entry: "humiditās",
    latinPart: "humidus, -a, -um",
    meanings: "humidity, moisture"},
  {entry: "inīquitās",
    latinPart: "inīquus, -a, -um",
    meanings: "inequity, unfairness"},
  {entry: "pinguitia",
    latinPart: "pinguis, -e",
    meanings: "plumpness"},
  {entry: "plēnitūdō",
    latinPart: "plenus, -a, -um",
    meanings: "fullness, abundance"},
  {entry: "pugnācitās",
    latinPart: "pugnāx, pugnācis",
    meanings: "pugnacity, quarrelsomeness"},
  {entry: "quadrātus",
    latinPart: "quadrātus, -a, -um",
    meanings: "square"},
  {entry: "rapiditās",
    latinPart: "rapidus, -a, -um",
    meanings: "rapidity, swiftness"},
  {entry: "siccitās",
    latinPart: "siccus, -a, -um",
    meanings: "dryness"},
  {entry: "stultitia",
    latinPart: "stultus, -a, -um",
    meanings: "stupidity"},
  {entry: "tarditās",
    latinPart: "tardus, -a, -um",
    meanings: "slowness, sloth"},
  {entry: "tenuitās",
    latinPart: "tenuis, -e",
    meanings: "thinness, delicateness"},
  {entry: "tranquillitās",
    latinPart: "tranquillus, -a, -um",
    meanings: "calmness, peacefulness"},
  {entry: "ūtilitās",
    latinPart: "ūtilis, -e",
    meanings: "usefulness, utility, advantage"},
]

const intoAdjectives = [
  {entry: "agnus/-a",
    latinPart: "agnīnus, -a, -um",
    meanings: "lamb"},
  {entry: "āla",
    latinPart: "ālātus, -a, -um",
    meanings: "wing"},
  {entry: "anās",
    latinPart: "anātīnus",
    meanings: "duck"},
  {entry: "anser",
    latinPart: "anserīnus, -a, -um",
    meanings: "goose"},
  {entry: "aper/apra",
    latinPart: "aprīnus, -a, -um",
    meanings: "boar, wild pig"},
  {entry: "artēria",
    latinPart: "artēriālis, -e",
    meanings: "artery"},
  {entry: "barba",
    latinPart: "barbātus, -a, -um",
    meanings: "beard"},
  {entry: "bracchium",
    latinPart: "bracchiālis, -e",
    meanings: "arm, branch"},
  {entry: "calx",
    latinPart: "calcārius, -a, -um",
    meanings: "heel"},
  {entry: "camelus/-a",
    latinPart: "camelīnus, -a, -um",
    meanings: "camel"},
  {entry: "capillus",
    latinPart: "capillārius, -a, -um",
    meanings: "hair"},
  {entry: "carpus",
    latinPart: "carpālis, -e",
    meanings: "wrist"},
  {entry: "cerēbrum",
    latinPart: "cerebrālis, -e",
    meanings: "brain"},
  {entry: "collum",
    latinPart: "collāris, -e",
    meanings: "neck"},
  {entry: "columba",
    latinPart: "columbīnus, -a, -um",
    meanings: "dove, pigeon"},
  {entry: "corvus/-a",
    latinPart: "corvīnus, -a, -um",
    meanings: "crow, raven"},
  {entry: "cubitum",
    latinPart: "cubitālis, -e",
    meanings: "elbow"},
  {entry: "elephās",
    latinPart: "elephantīnus, -a, -um",
    meanings: "elephant"},
  {entry: "femur",
    latinPart: "femorālis, -e",
    meanings: "thigh"},
  {entry: "humor",
    latinPart: "humidus, -a, -um",
    meanings: "moisture, "},
  {entry: "humus",
    latinPart: "humidus, -a, -um",
    meanings: "soil"},
  {entry: "lābium",
    latinPart: "lābliālis, -e",
    meanings: "lip"},
  {entry: "mentum",
    latinPart: "mentālis, -e",
    meanings: "chin"},
  {entry: "mūlus/-a",
    latinPart: "mūlīnus, -a, -um",
    meanings: "mule/jenny"},
  {entry: "mūsculus",
    latinPart: "mūsculāris, -e",
    meanings: "muscle, little mouse"},
  {entry: "nāsus",
    latinPart: "nasālis, -e",
    meanings: "nose"},
  {entry: "passer",
    latinPart: "passerīnus, -a, -um",
    meanings: "sparrow, songbird"},
  {entry: "pāvō",
    latinPart: "pāvōnīnus, -a, -um",
    meanings: "peacock"},
  {entry: "pellis",
    latinPart: "pellārius, -a, -um",
    meanings: "skin, hide"},
  {entry: "psittacus",
    latinPart: "psittacīnus, -a, -um",
    meanings: "parrot"},
  {entry: "pulmō",
    latinPart: "pulmōnārius, -a, -um",
    meanings: "lung"},
  {entry: "rēn",
    latinPart: "rēnālis, -e",
    meanings: "kidney"},
  {entry: "serpēns",
    latinPart: "serpentīnus, -a, -um",
    meanings: "snake, worm"},
  {entry: "sīmia",
    latinPart: "sīmiānus, -a, -um",
    meanings: "monkey, ape"},
  {entry: "taedium",
    latinPart: "taediōsus, -a, -um",
    meanings: "tedium, boredom"},
  {entry: "tālus",
    latinPart: "tālāris, -e",
    meanings: "ankle"},
  {entry: "tībia",
    latinPart: "tībiālis, -e",
    meanings: "shin"},
  {entry: "tigris",
    latinPart: "tigrīnus, -a, -um",
    meanings: "tiger"},
  {entry: "umerus",
    latinPart: "umerālis, -e",
    meanings: "shoulder"},
  {entry: "unguis",
    latinPart: "unguīnus, -a, -um",
    meanings: "fingernail, toenail, claw, talon"},
  {entry: "ursus/-a",
    latinPart: "ursīnus, -a, -um",
    meanings: "bear"},
  {entry: "uterus",
    latinPart: "uterīnus, -a, -um",
    meanings: "womb"},
  {entry: "vena",
    latinPart: "venōsus, -a, -um",
    meanings: "vein"},
  {entry: "venter",
    latinPart: "ventrālis, -e",
    meanings: "belly"}
]

const fromVerbs = [
  {entry: "experientia",
    latinPart: "experior, -īrī, expertus sum",
    meanings: "experience"},
  {entry: "experīmentum",
    latinPart: "experior, -īrī, expertus sum",
    meanings: "experiment, test"},
  {entry: "lāpsus",
    latinPart: "lābor, lābī, lāpsus sum",
    meanings: "slip, fall, error in judgment"},
  {entry: "largitiō",
    latinPart: "largior, -īrī, -ītus sum",
    meanings: "bestowal, generosity, largesse"},
  {entry: "mēnsūra",
    latinPart: "mētior, -īrī, mēnsus sum",
    meanings: "measurement, distribution"},
  {entry: "mercātor",
    latinPart: "mercor, -ārī, -ātus sum",
    meanings: "merchant, trader"},
  {entry: "mercātus",
    latinPart: "mercor, -ārī, -ātus sum",
    meanings: "trade, market"},
  {entry: "nātiō",
    latinPart: "nāscor, -ī, nātus sum",
    meanings: "nation, tribe"},
  {entry: "patientia",
    latinPart: "patior, -ī, passus sum",
    meanings: "patience, endurance, suffering"},
  {entry: "questus",
    latinPart: "queror, -ī, questus sum",
    meanings: "complaint"},
  {entry: "ultor",
    latinPart: "ulcīscor, -ī, ultus sum",
    meanings: "avenger"}
]

const intoVerbs = [
  {entry: "arbiter",
    latinPart: "arbitror, -ārī, -ātus sum",
    meanings: "judge, umpire"},
  {entry: "fūr",
    latinPart: "fūror, -ārī, -ātus sum",
    meanings: "thief"},
  {entry: "iocus",
    latinPart: "iocor, -ārī, -ātus sum",
    meanings: "joke"},
  {entry: "īra",
    latinPart: "īrāscor, -ī, īrātus sum",
    meanings: "wrath, anger"},
  {entry: "negōtium",
    latinPart: "negōtior, -ārī, -ātus sum",
    meanings: "business, task"},
  {entry: "oblīvium",
    latinPart: "oblīvīscor, -ī, oblītus sum",
    meanings: "forgetfulness, oblivion"},
  {entry: "ōsculum",
    latinPart: "ōsculor, -ārī, -ātus sum",
    meanings: "kiss"},
  {entry: "ōtium",
    latinPart: "ōtior, -ārī, -ātus sum",
    meanings: "leisure"},
  {entry: "prex",
    latinPart: "precor, -ārī, -ātus sum",
    meanings: "prayer"},
  {entry: "sōrs",
    latinPart: "sortior, -īrī, -ītus sum",
    meanings: "draw lots, share, distribute"},
  {entry: "testis",
    latinPart: "testor, -ārī, -ātus sum",
    meanings: "witness"}
]

const others = [
  {entry: "amita—Acc. pl.",
    latinPart: "amitās",
    meanings: "paternal aunt"},
  {entry: "avia—Gen. s.",
    latinPart: "aviae",
    meanings: "grandmother"},
  {entry: "avunculus—Voc. s.",
    latinPart: "avuncule",
    meanings: "maternal uncle"},
  {entry: "avus—Abl. pl.",
    latinPart: "avīs",
    meanings: "grandfather"},
  {entry: "būbō—Dat. s.",
    latinPart: "būbōnī",
    meanings: "hoot owl"},
  {entry: "cancer—Nom. pl.",
    latinPart: "cancrī",
    meanings: "crab"},
  {entry: "cetus—Gen. pl.",
    latinPart: "cetōrum",
    meanings: "whale, sea monster"},
  {entry: "cōnsobrīnus/-a—Abl. s.",
    latinPart: "cōnsobrīnō/-ā",
    meanings: "maternal first cousin"},
  {entry: "cōnsocer/cōnsocrus—Acc. s.",
    latinPart: "cōnsocrum (both)",
    meanings: "child's parent-in-law"},
  {entry: "falcō—Voc. pl.",
    latinPart: "falcōnēs",
    meanings: "falcon"},
  {entry: "faucēs—Gen. pl.",
    latinPart: "faucium",
    meanings: "jaws, maw, gullet"},
  {entry: "gallus/gallīna—Acc. pl.",
    latinPart: "gallōs/gallīnās",
    meanings: "rooster/hen"},
  {entry: "gena—Dat. pl.",
    latinPart: "genīs",
    meanings: "cheek, eye-socket"},
  {entry: "gener—Dat. s.",
    latinPart: "generō",
    meanings: "son-in-law"},
  {entry: "glōs—Voc. pl.",
    latinPart: "glōrēs",
    meanings: "sister-in-law"},
  {entry: "leopardus—Gen. pl.",
    latinPart: "leopardōrum",
    meanings: "leopard"},
  {entry: "levir—Gen. s.",
    latinPart: "levirī",
    meanings: "brother-in-law"},
  {entry: "matertera—Abl. s.",
    latinPart: "materterā",
    meanings: "maternal aunt"},
  {entry: "nūrus—Nom. pl.",
    latinPart: "nūrūs",
    meanings: "daughter-in-law"},
  {entry: "patruēlis—Acc. s.",
    latinPart: "patruēlem",
    meanings: "paternal first cousin"},
  {entry: "patruus—Dat. pl.",
    latinPart: "patruīs",
    meanings: "paternal uncle"},
  {entry: "penna—Abl. pl.",
    latinPart: "pennīs",
    meanings: "feather"},
  {entry: "rana—Gen. pl.",
    latinPart: "ranārum",
    meanings: "frog"},
  {entry: "rattus—Gen. s.",
    latinPart: "rattī",
    meanings: "rat"},
  {entry: "rōstrum—Acc. pl.",
    latinPart: "rōstra",
    meanings: "beak, pointed lectern, prow of a ship"},
  {entry: "sobrīnus/-a—Dat. s.",
    latinPart: "sobrīnō/-ae",
    meanings: "sororal nephew/niece"},
  {entry: "socer/socrus—Voc. s.",
    latinPart: "socer/socrus",
    meanings: "father-in-law/mother-in-law"},
  {entry: "strīx—Dat. pl.",
    latinPart: "strīgibus",
    meanings: "screech owl"},
  {entry: "strūthiō—Gen. pl.",
    latinPart: "strūthiōnum",
    meanings: "ostrich"},
  {entry: "tergum—Acc. s.",
    latinPart: "tergum",
    meanings: "back, rear surface"}
]


let fromAdjLength = fromAdjectives.length;
let intoAdjLength = intoAdjectives.length;
let fromVerbsLength = fromVerbs.length;
let intoVerbsLength = intoVerbs.length;
let othersLength = others.length;
let part2Length = fromAdjLength + intoAdjLength;
let part3Length = part2Length + fromVerbsLength;
let part4Length = part3Length + intoVerbsLength;
let nounsLength = part4Length + othersLength;

function displayNouns(a,b,c,d) {
  let html = `<ol style="1" start="${a}">`;
  let iteration = "";
  let j = a;
  for (let i = 0; i < c; i++) {
    iteration += `<li>`;
    iteration += `<span id="noun-span-${j}" class="col-6"><strong>${d[i].entry}</strong></span><br/>`;
    iteration += `<span id="form-span-${j}" class="col-6">${b}: </span><input id="input${j}" type="text" size="20" style="margin-left: 1em"><br/>`
    iteration += `<span id="meaning-span-${j}" class="col-6">Meanings: </span><input id="input${j}" type="text" size="30" style="margin-left: 1em"><br/>`
    iteration += `<span id="button-span-${j}" class="col-1"><button id="reveal${j}" class="reveal-vocab btn btn-outline-dark">--></button></span> `;
    iteration += `<span id="vocab${j}" class="vocab-span col-6"><strong>${d[i].latinPart}</strong> | <em>${d[i].meanings}</em></span><hr/></li>`;
    j++;
  }
  html += iteration + "</ol>";
  return html;
}

