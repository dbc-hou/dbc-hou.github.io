const miscReview4 = [
  {entry: "antequam",
    meanings: "before",
    partOfSpeech: "conjunction"},
  {entry: "cīs",
    meanings: "on this side",
    partOfSpeech: "preposition"},
  {entry: "cotīdiē",
    meanings: "every day",
    partOfSpeech: "adverb"},
  {entry: "crās",
    meanings: "tomorrow",
    partOfSpeech: "adverb"},
  {entry: "dum",
    meanings: "while, until",
    partOfSpeech: "conjunction"},
  {entry: "extrā",
    meanings: "outside",
    partOfSpeech: "preposition"},
  {entry: "herī",
    meanings: "yesterday",
    partOfSpeech: "adverb"},
  {entry: "hōdiē",
    meanings: "today",
    partOfSpeech: "adverb"},
  {entry: "iam",
    meanings: "now, already",
    partOfSpeech: "adverb"},
  {entry: "infrā",
    meanings: "beneath, below",
    partOfSpeech: "preposition"},
  {entry: "interim",
    meanings: "meanwhile",
    partOfSpeech: "adverb"},
  {entry: "mane",
    meanings: "in the morning, tomorrow morning",
    partOfSpeech: "adverb"},
  {entry: "mox",
    meanings: "soon",
    partOfSpeech: "adverb"},
  {entry: "nōn iam",
    meanings: "no longer",
    partOfSpeech: "adverb"},
  {entry: "nūper",
    meanings: "recently",
    partOfSpeech: "adverb"},
  {entry: "nūperius",
    meanings: "more recently, quite recently",
    partOfSpeech: "adverb"},
  {entry: "nūperrimē",
    meanings: "most recently, very recently",
    partOfSpeech: "adverb"},
  {entry: "ōlim",
    meanings: "once upon a time, formerly",
    partOfSpeech: "adverb"},
  {entry: "postquam",
    meanings: "after",
    partOfSpeech: "conjunction"},
  {entry: "postrīdiē",
    meanings: "the next day, the day after",
    partOfSpeech: "adverb"},
  {entry: "prae",
    meanings: "before",
    partOfSpeech: "preposition"},
  {entry: "prīdiē",
    meanings: "the day before, the previous day",
    partOfSpeech: "adverb"},
  {entry: "quondam",
    meanings: "at one time, formerly",
    partOfSpeech: "adverb"},
  {entry: "saepe",
    meanings: "often",
    partOfSpeech: "adverb"},
  {entry: "saepius",
    meanings: "more often, quite often, too often",
    partOfSpeech: "adverb"},
  {entry: "saepissimē",
    meanings: "most often, very often",
    partOfSpeech: "adverb"},
  {entry: "sērō",
    meanings: "late",
    partOfSpeech: "adverb"},
  {entry: "sērius",
    meanings: "later, quite late, too late",
    partOfSpeech: "adverb"},
  {entry: "sērissimē",
    meanings: "latest, very late",
    partOfSpeech: "adverb"},
  {entry: "simul",
    meanings: "at the same time, as soon as",
    partOfSpeech: "adverb"},
  {entry: "simul atque",
    meanings: "at the same time as/that",
    partOfSpeech: "adverb"},
  {entry: "statim",
    meanings: "immediately, right away",
    partOfSpeech: "adverb"},
  {entry: "subitō",
    meanings: "suddenly",
    partOfSpeech: "adverb"},
  {entry: "suprā",
    meanings: "above",
    partOfSpeech: "preposition"},
  {entry: "ultrā",
    meanings: "beyond, on the far side",
    partOfSpeech: "preposition"},
]

let miscLength = miscReview4.length;

function displayMisc() {
  let j = 1;
  let html = `<ol style="1" start="${j}">`;
  let iteration = "";

  for (let i = 0; i < miscLength; i++) {
    iteration += `<div id="misc-item-${j}" class="container-flex"><li id="li-${j}">`;
    iteration += `<div id="top-row-${j}" class="row">`
    iteration += `<span id="latin-span-${j}" style="width: 20%; margin-left: 20px"><strong>${miscReview4[i].entry}</strong></span>`;
    iteration += `<input id="translation${j}" type="text" size="30"><br/>`
    iteration += `<button id="reveal${j}" class="reveal-answer btn btn-outline-dark mt-2" onclick="$('#answer${j}').toggle()">Answer</button> `
    iteration += `<span id="answer${j}" style="display: none; margin-left: 1em"><em>${miscReview4[i].meanings}</em> (${miscReview4[i].partOfSpeech})</span>`;
    iteration += `</div></li></div><hr/>`;
    j++;
  }


  html += iteration;
  html += "</ol>";
  return html;
}
