const wordBox = [
  "agnum",
  "avō",
  "avunculō",
  "bellicosō",
  "camelā",
  "cetum",
  "eius",
  "eōrum",
  "fābulantibus",
  "fūrātīs",
  "glōre",
  "iocīs",
  "īrātā",
  "iūstō",
  "labiīs",
  "mē",
  "meā",
  "mentītō",
  "mercātōre",
  "minantibus",
  "mūlīs",
  "mūsculis",
  "neptibus",
  "nōs",
  "nostrīs",
  "nurū",
  "omnibus",
  "ortūrō",
  "ōsculātūrà",
  "patruō",
  "pavōne",
  "pugnācī",
  "questū",
  "rānam",
  "sequentibus",
  "sicciōribus",
  "suā",
  "suō",
  "tigrīs",
  "tuīs",
  "ultō",
  "ursō",
  "ūsā",
  "ūtilī",
  "vestrō",
  "vetere"
]
let wordBoxLength = wordBox.length;

function displayWordBoxList() {
  let iteration = "";

  for (let i = 0; i < wordBoxLength; i++) {
    iteration += `<span class="word-box-item" draggable="true"><strong>${wordBox[i]}</strong></span> `;
    console.log(iteration);
  }

  return iteration;
}
