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
    translation: "to have used"},
]

let grammarLength = grammarReview5.length;

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
