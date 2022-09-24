const adjectivesReview6 = [
  {entry: "aequus",
    nounToAgree: "ultrīx",
    inflected: "aequa",
    meanings: "fair, just, equal"},
  {entry: "aliēnus",
    nounToAgree: "elephantium",
    inflected: "aliēnōrum (-ārum)",
    meanings: "foreign, someone else's"},
  {entry: "bellicōsus",
    nounToAgree: "sīmiās",
    inflected: "bellicōsās",
    meanings: "prone to fighting"},
  {entry: "blandus",
    nounToAgree: "avuncule",
    inflected: "blande",
    meanings: "pleasant, agreeable, complimentary"},
  {entry: "callidus",
    nounToAgree: "cōnsobrīnā",
    inflected: "callidā",
    meanings: "smart, clever"},
  {entry: "dēnsus",
    nounToAgree: "mūsculō",
    inflected: "dēnsō",
    meanings: "thick, dense"},
  {entry: "humidus",
    nounToAgree: "ōscula",
    inflected: "humida",
    meanings: "wet, moist"},
  {entry: "inīquus",
    nounToAgree: "glōribus",
    inflected: "inīquīs",
    meanings: "unfair, unjust, unequal"},
  {entry: "iocōsus",
    nounToAgree: "socruī",
    inflected: "iocōsae",
    meanings: "funny, joking"},
  {entry: "īrātus",
    nounToAgree: "serpentis",
    inflected: "īrātae",
    meanings: "angry, raging"},
  {entry: "liquidus",
    nounToAgree: "largitiōne",
    inflected: "liquidā",
    meanings: "liquid, flowing"},
  {entry: "loquāx",
    nounToAgree: "psittacōrum",
    inflected: "loquācium",
    meanings: "talkative"},
  {entry: "mentītus",
    nounToAgree: "oblīviī",
    inflected: "mentītī",
    meanings: "lying, deceptive"},
  {entry: "mīrus",
    nounToAgree: "pāvōnem",
    inflected: "mīrum (-am)",
    meanings: "wondrous, marvelous"},
  {entry: "mortuus",
    nounToAgree: "anās",
    inflected: "mortua",
    meanings: "dead"},
  {entry: "nātīvus",
    nounToAgree: "ungue",
    inflected: "nātīvō",
    meanings: "native"},
  {entry: "pinguis",
    nounToAgree: "rattōs",
    inflected: "pinguēs",
    meanings: "fat, portly"},
  {entry: "plānus",
    nounToAgree: "dorsīs",
    inflected: "plānīs",
    meanings: "flat, level"},
  {entry: "plēnus",
    nounToAgree: "cerebrō",
    inflected: "plēnō",
    meanings: "full, abundant"},
  {entry: "pugnāx",
    nounToAgree: "aviam",
    inflected: "pugnācem",
    meanings: "pugnacious, prone to fighting"},
  {entry: "quadrātus",
    nounToAgree: "faucium",
    inflected: "quadrātārum",
    meanings: "square, squared"},
  {entry: "rapidus",
    nounToAgree: "ranā",
    inflected: "rapidā",
    meanings: "rapid, swift"},
  {entry: "rārus",
    nounToAgree: "mercātrīcī",
    inflected: "rārae",
    meanings: "rare, scattered, far apart"},
  {entry: "rotundus",
    nounToAgree: "nāsus",
    inflected: "rotundus",
    meanings: "round"},
  {entry: "siccus",
    nounToAgree: "pulmōne",
    inflected: "siccō",
    meanings: "dry"},
  {entry: "stultus",
    nounToAgree: "mūlum",
    inflected: "stultum",
    meanings: "stupid"},
  {entry: "tacitus",
    nounToAgree: "arbitrōrum",
    inflected: "tacitōrum",
    meanings: "silent"},
  {entry: "taediōsus",
    nounToAgree: "experīmenta",
    inflected: "taeidōsa",
    meanings: "boring"},
  {entry: "tardus",
    nounToAgree: "lāpsum",
    inflected: "tardum",
    meanings: "slow"},
  {entry: "tenuis",
    nounToAgree: "capillō",
    inflected: "tenuī",
    meanings: "slender, thin"},
  {entry: "tranquillus",
    nounToAgree: "nātiō",
    inflected: "tranquilla",
    meanings: "calm, peaceful"},
  {entry: "tūtus",
    nounToAgree: "nurūs",
    inflected: "tūtae, tūtās",
    meanings: "safe, protected"},
  {entry: "ūtilis",
    nounToAgree: "uterī",
    inflected: "ūtilēs, ūtilis",
    meanings: "useful, usable"},
  {entry: "vacuus",
    nounToAgree: "ventrēs",
    inflected: "vacuī, vacuōs",
    meanings: "empty"},
  {entry: "vagus",
    nounToAgree: "fūr",
    inflected: "vague, vage",
    meanings: "wandering, roaming"},
  {entry: "vīvus",
    nounToAgree: "testis (3)",
    inflected: "tūtus, tūte, tūtī",
    meanings: "living, alive"}
]

let adjectivesLength = adjectivesReview6.length;

function displayAdjectives() {
  let j = 1;
  let html = `<ol style="1" start="1">`;
  let iteration = "";

  for (let i = 0; i < adjectivesLength; i++) {
    iteration += `<div id="adjective-item-${j}" class="container-flex"><li id="li-${j}">`;
    iteration += `<div id="top-row-${j}" class="row">`
    iteration += `<span id="latin-span-${j}" style="width: 100%; margin-left: 20px"><strong>${adjectivesReview6[i].entry}: </strong></span><br/>`;
    iteration += `<span id="translation-span-${j}"><input id="meaning-${j}" type="text" size="25" placeholder="(meanings)"></span>`
    iteration += `<span id="meaning-span-${j}" class="vocab-span"><em>${adjectivesReview6[i].meanings}</em></span><br/>`
    iteration += `<span id="agree-span-${j}" style="margin-left: 20px"><strong>${adjectivesReview6[i].nounToAgree}: </strong>`;
    iteration += `<input id="inflected-${j}" type="text" size="25" placeholder="(make it agree)"></span>`
    iteration += `<span id="inflection-span-${j}" class="vocab-span"><strong>${adjectivesReview6[i].inflected}</strong></span><br/>`
    iteration += `<span id="button-span-${j}" class="col-1"><button id="reveal${j}" class="reveal-vocab btn btn-outline-dark" style="margin-top: .5em">--></button></span> `;
    iteration += `</div></li></div><hr/>`;
    j++;
  }


  html += iteration;
  html += "</ol>";
  return html;
}
