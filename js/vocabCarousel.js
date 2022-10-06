const vocab3 = [
  {latin: "-ne?",
  english: "(particle introducing a yes/no question)"},
  {latin: "-que",
    english: "and"},
  {latin: "agricola",
    english: "farmer"},
  {latin: "aurīga",
    english: "charioteer"},
  {latin: "aut",
    english: "or"},
  {latin: "deus/dea",
    english: "god/goddess"},
  {latin: "discipulus/discipula",
    english: "student"},
  {latin: "dominus/domina",
    english: "lord/lady, master/mistress"},
  {latin: "sum, esse",
    english: "to be"},
  {latin: "et",
    english: "and"},
  {latin: "familia",
    english: "family, household"},
  {latin: "fēmina",
    english: "woman"},
  {latin: "fierī",
    english: "to become, to be made"},
  {latin: "fīlius/fīlia",
    english: "son/daughter"},
  {latin: "hīc",
    english: "here, in this place"},
  {latin: "ibi",
    english: "there, in that place"},
  {latin: "incola",
    english: "inhabitant, dweller"},
  {latin: "eō, īre",
    english: "to go"},
  {latin: "magister/magistra",
    english: "teacher, master/mistress"},
  {latin: "nauta",
    english: "sailor"},
  {latin: "nōlō, nōlle",
    english: "not to want, to refuse"},
  {latin: "nōn",
    english: "not"},
  {latin: "nōnne?",
    english: "(introduces a yes/no question expecting a yes answer)"},
  {latin: "num?",
    english: "(introduces a yes/no question expecting a no answer)"},
  {latin: "nunc",
    english: "now, at this time"},
  {latin: "pīrāta",
    english: "pirate"},
  {latin: "poēta",
    english: "poet"},
  {latin: "possum, posse",
    english: "to be able"},
  {latin: "puer/puella",
    english: "child, boy/girl"},
  {latin: "quando?",
    english: "when?"},
  {latin: "quid?",
    english: "what?"},
  {latin: "quis?",
    english: "who?"},
  {latin: "quō",
    english: "whither? to what place?"},
  {latin: "scrība",
    english: "scribe, clerk"},
  {latin: "sed",
    english: "but"},
  {latin: "semper",
    english: "always"},
  {latin: "tum",
    english: "then, at that time"},
  {latin: "ubi?",
    english: "where? in what place?"},
  {latin: "ubique",
    english: "everywhere"},
  {latin: "volō, velle",
    english: "to want"},
  {latin: "vir",
    english: "man"},
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
    iteration += `<span id="translation${j}" class="vocab-span">${shuffledArray[i].english}</span>`;
    iteration += `</div>`;
    html += iteration;
  }
  return html;
}

console.log(displayRandom(vocab3));
