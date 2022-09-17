const grammarReview5 = [
  {entry: "sectum est",
    translation: "it has been (cut off/divided)"},
  {entry: "inventa",
    translation: "(having been) discovered"},
  {entry: "tortum esse",
    translation: "to have been twisted"},
  {entry: "incipientēs",
    translation: "(beginning/taking on)"},
  {entry: "exercitūrus",
    translation: "about to (train, exercise)"},
  {entry: "iūdicātī erant",
    translation: "they had been (judged/examined)"},
  {entry: "levātūrum esse",
    translation: "to be about to lift"},
  {entry: "persuāsus",
    translation: "(having been) persuaded"},
  {entry: "cēnsus erō",
    translation: "I shall have been counted"},
  {entry: "coitūrōs",
    translation: "about to (assemble/go together)"},
  {entry: "instructa es",
    translation: "you have been instructed"},
  {entry: "rabitūra est",
    translation: "she is about to go mad"},
  {entry: "dēfēcisse",
    translation: "to have (depleted/exhausted/forsaken)"},
  {entry: "cognita erunt",
    translation: "they will have been recognized"},
  {entry: "interfectī",
    translation: "(having been) killed"},
  {entry: "vastāvisse",
    translation: "to have destroyed"},
  {entry: "caesō",
    translation: "(having been) cut"},
  {entry: "prōscrībentia",
    translation: "publishing/outlawing"},
  {entry: "cōniectam esse",
    translation: "to have been (hurled/flung)"},
  {entry: "occāsūrum",
    translation: "about to (fall/die/happen)"},
  {entry: "impedientibus",
    translation: "(impeding/hindering/obstructing"},
  {entry: "commissūrae estis",
    translation: "y'all are about to (commit/begin/carry on)"},
  {entry: "cōnstituisse",
    translation: "to have (decided/determined/set up)"},
  {entry: "vincientis",
    translation: "(binding/fettering/fastening)"},
  {entry: "fīsus",
    translation: "having trusted"},
  {entry: "nātūrus",
    translation: "about to be born"},
  {entry: "ūsum esse",
    translation: "to have used"}
]

const absolutes5 = [
  {entry: "When the battle line had been built...",
    translation: "aciē instructā"},
  {entry: "When the guests were persuaded...",
    translation: "hospitibus persuāsīs"},
  {entry: "While the cattle are resting...",
    translation: "bōbus (re)quiescentibus"},
  {entry: "Because someone was about to destroy us...",
    translation: "aliquō nōs vastātūrō"},
  {entry: "When his deeds were understood...",
    translation: "factīs eius intellectīs"},
  {entry: "As she is hurling the flowers...",
    translation: "eā flōrēs coniciente..."},
  {entry: "Although no laughter was heard...",
    translation: "nūllō rīsū audītō"},
  {entry: "While the only priest was standing...",
    translation: "sōlō sacerdōte stante..."},
  {entry: "As the other soldiers were watching...",
    translation: "aliīs mīlitibus spectantibus"},
  {entry: "Many houses having been build...",
    translation: "multīs domibus (aedificātīs/constructīs"},
  {entry: "With a row of pines about to grow...",
    translation: "seriē (pīnuum/pīnōrum crētūrā"},
  {entry: "While all the horses are hungering...",
    translation: "omnibus equīs ēsūrientibus"},
  {entry: "With these magistrates paying the penalty...",
    translation: "hīs magistrātibus poenam dantibus"},
  {entry: "The day being frosty...",
    translation: "illō diē gelidō"},
  {entry: "When the danger was lightened...",
    translation: "perīculō levātō"},
  {entry: "When the chains had been broken...",
    translation: "vinculīs frāctīs"},
  {entry: "Because Aulus was a spiritual craftsman...",
    translation: "Aulō opifice spīritualī"},
  {entry: "While the mice are beginning to play...",
    translation: "mūribus lūdere incipientibus"},
  {entry: "The knights being about to ostruct our journey...",
    translation: "equitibus nostrum iter impedītūrīs"},
  {entry: "All the lances having been bound...",
    translation: "omnibus hastīs vīnctīs"},
  {entry: "Since we had faith in the lieutenant...",
    translation: "nōbīs lēgātō fīsīs"},
  {entry: "Caelia being older by five years...",
    translation: "Caeliā quīnque annīs māiore nātū"},
  {entry: "Calpurnius having been born in Britain...",
    translation: "Calpurniō in Britānniā nātō"},
  {entry: "When those artisans had used all their tools...",
    translation: "illīs artificibus omnēs apparātūs ūsīs"},
  {entry: "With those artisans about to use all their tools...",
    translation: "illīs artificibus omnēs apparātūs ūsūrīs"}
]

let grammarLength = grammarReview5.length;
let abAbsLength = absolutes5.length;

function displayGrammar() {
  let j = 1;
  let html = `<ol style="1" start="${j}">`;
  let iteration = "";

  for (let i = 0; i < grammarLength; i++) {
    iteration += `<div id="grammar-item-${j}" class="container-flex"><li id="li-${j}">`;
    iteration += `<div id="top-row-${j}" class="row">`;
    iteration += `<span id="latin-span-${j}" style="width: 100%; margin-left: 20px"><strong>${grammarReview5[i].entry}</strong> = `;
    iteration += `<input id="translation-${j}" type="text" size="25"></span> `
    iteration += `<span id="button-span-${j}" class="col-1"><button id="reveal${j}" class="reveal-vocab btn btn-outline-dark" style="margin-top: .5em">--></button> </span>`;
    iteration += `<span id="answer-span-${j}" style="display: none; margin-top: .5em; margin-left: .5em"><em>${grammarReview5[i].translation}</em> `;
    iteration += `</div></li></div><hr/>`;
    j++;
  }

  html += iteration;
  html += "</ol>";
  return html;
}

function displayAbsolutes() {
  let j = 1;
  let html = `<ol style="1" start="${j}">`;
  let iteration = "";

  for (let i = 0; i < abAbsLength; i++) {
    iteration += `<div id="grammar-item-${j}" class="container-flex"><li id="li-${j}">`;
    iteration += `<div id="top-row-${j}" class="row">`;
    iteration += `<span id="latin-span-${j}" style="width: 100%; margin-left: 20px">${absolutes5[i].entry}<br/> `;
    iteration += `<input id="translation-${j}" type="text" size="35"></span> `
    iteration += `<span id="button-span-${j}" class="col-1"><button id="reveal${j}" class="reveal-vocab btn btn-outline-dark" style="margin-top: .5em">--></button> </span>`;
    iteration += `<span id="answer-span-${j}" style="display: none; margin-top: .5em; margin-left: .5em"><strong>${absolutes5[i].translation}</strong> `;
    iteration += `</div></li></div><hr/>`;
    j++;
  }

  html += iteration;
  html += "</ol>";
  return html;
}
