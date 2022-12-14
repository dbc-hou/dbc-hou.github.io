function tableOfContents() {
  let html = `<div id="main-page" class="list-group-item intro"><a href="index.html">Main Page</a></div>`;
  html += `<div id="intro-div" class="list-group-item intro" onmouseover="fillContentsBox(introLinks());" onclick="window.location='IntroMain.html';">Introduction</div>`;
  html += `<div id="i-through-vi" class="d-flex row volume-row">`;
  html += `<span id="vol-i-span" class="volume" onmouseover="fillContentsBox(volILinks());" onclick="window.location='VolumeI.html';">I</span>`;
  html += `<span id="vol-ii-span" class="volume" onmouseover="fillContentsBox(volIILinks());" onclick="window.location='VolumeII.html';">II</span>`;
  html += `<span id="vol-iii-span" class="volume" onmouseover="fillContentsBox(volIIILinks());" onclick="window.location='VolumeIII.html';">III</a></span>`;
  html += `<span id="vol-iv-span" class="volume" onmouseover="fillContentsBox(volIVLinks());" onclick="window.location='VolumeIV.html';">IV</a></span>`;
  html += `<span id="vol-v-span" class="volume" onmouseover="fillContentsBox(volVLinks());" onclick="window.location='VolumeV.html';">V</a></span>`;
  html += `<span id="vol-vi-span" class="volume" onmouseover="fillContentsBox(volVILinks());" onclick="window.location='VolumeVI.html';">VI</a></span></div>`;
  html += `<div id="volume-contents"></div>`;
  html += `<div id="vii-through-xii" class="d-flex row volume-row">`;
  html += `<span id="vol-vii-span" class="volume-not-ready" onmouseover="fillContentsBox('This volume is not ready yet.');">VII</span>`;
  html += `<span id="vol-viii-span" class="volume-not-ready" onmouseover="fillContentsBox('This volume is not ready yet.');">VIII</span>`;
  html += `<span id="vol-ix-span" class="volume-not-ready" onmouseover="fillContentsBox('This volume is not ready yet.');">IX</span>`;
  html += `<span id="vol-x-span" class="volume-not-ready" onmouseover="fillContentsBox('This volume is not ready yet.');">X</span>`;
  html += `<span id="vol-xi-span" class="volume-not-ready" onmouseover="fillContentsBox('This volume is not ready yet.');">XI</span>`;
  html += `<span id="vol-xii-span" class="volume-not-ready" onmouseover="fillContentsBox('This volume is not ready yet.');">XII</span></div>`;
  return html
}

function fillContentsBox(contents) {
  $("#volume-contents").html(contents);
}

function introLinks() {
  return `
    <ul id="intro-parts" class="list-group sublist">
      <li id="intro-main" class="list-group-item pl-2 chapter"><a id="intro-main-link" class="chapter-link" href="IntroMain.html">Intro Main</a></li>
      <li id="intro-prae" class="list-group-item pl-2 chapter"><a id="intro-prae-link" class="chapter-link" href="IntroPrae.html">Prael??dium</a></li>
      <li id="intro-a" class="list-group-item pl-2 chapter"><a id="intro-a-link" class="chapter-link" href="IntroA.html">A. Why Latin?</strong></li>
      <li id="intro-b" class="list-group-item pl-2 chapter"><a id="intro-b-link" class="chapter-link" href="IntroB.html">B. Evolution of Latin</a></li>
      <li id="intro-c" class="list-group-item pl-2 chapter"><a id="intro-c-link" class="chapter-link" href="IntroC.html">C. Pronunciation</a></li>
      <li id="intro-d" class="list-group-item pl-2 chapter"><a id="intro-d-link" class="chapter-link" href="IntroD.html">D. Important Facts</a></li>
      <li id="intro-e" class="list-group-item pl-2 chapter"><a id="intro-e-link" class="chapter-link" href="IntroE.html">E. Numbers/Numerals</a></li>
      <li id="intro-f" class="list-group-item pl-2 chapter"><a id="intro-f-link" class="chapter-link" href="IntroF.html">F. Conversation</a></li>
      <li id="intro-g" class="list-group-item pl-2 chapter"><a id="intro-g-link" class="chapter-link" href="IntroG.html">G. Months of the Year</a></li>
      <li id="intro-h" class="list-group-item pl-2 chapter"><a id="intro-h-link" class="chapter-link" href="IntroH.html">H. Days of the Week</a></li>
      <li id="intro-i" class="list-group-item pl-2 chapter"><a id="intro-i-link" class="chapter-link" href="IntroI.html">I. Easy Nouns</a></li>
    </ul>`
}

function volILinks() {
  return `
    <ul id="vol-i-parts" class="list-group sublist">
      <li id="i-prae" class="list-group-item pl-2 chapter"><a id="vol-i-prae-link" class="chapter-link" href="PraeludiumI.html">Prael??dium I</a></li>
      <li id="lesson01" class="list-group-item pl-2 chapter"><a id="lesson-i-link" class="chapter-link" href="LessonI.html">I. Fam??liae R??m??nae</a></li>
      <li id="lesson02" class="list-group-item pl-2 chapter"><a id="lesson-ii-link" class="chapter-link" href="LessonII.html">II. Forms of Address</a></li>
      <li id="lesson03" class="list-group-item pl-2 chapter"><a id="lesson-iii-link" class="chapter-link" href="LessonIII.html">III. Conjugating Irregular Verbs</a></li>
      <li id="vocab01" class="list-group-item pl-2 chapter vocab-review"><a id="vocab-i-link" class="vocab-link" href="VocabReviewI.html">Vocabulary Review I</a></li>
      <li id="lesson04" class="list-group-item pl-2 chapter"><a id="lesson-iv-link" class="chapter-link" href="LessonIV.html">IV. Conjugation I Verbs</a></li>
      <li id="lesson05" class="list-group-item pl-2 chapter"><a id="lesson-v-link" class="chapter-link" href="LessonV.html">V. Ubi Est?</a></li>
      <li id="lesson06" class="list-group-item pl-2 chapter"><a id="lesson-vi-link" class="chapter-link" href="LessonVI.html">VI. Transitive Verbs and Direct Objects</a></li>
      <li id="vocab02" class="list-group-item pl-2 chapter vocab-review"><a id="vocab-ii-link" class="vocab-link" href="VocabReviewII.html">Vocabulary Review II</a></li>
      <li id="lesson07" class="list-group-item pl-2 chapter"><a id="lesson-vii-link" class="chapter-link" href="LessonVII.html">VII. Conjugation II Verbs</a></li>
      <li id="lesson08" class="list-group-item pl-2 chapter"><a id="lesson-viii-link" class="chapter-link" href="LessonVIII.html">VIII. Place Whence, Place Whither</a></li>
      <li id="lesson09" class="list-group-item pl-2 chapter"><a id="lesson-ix-link" class="chapter-link" href="LessonIX.html">IX. Adjectives</a></li>
      <li id="vocab03" class="list-group-item pl-2 chapter vocab-review"><a id="vocab-iii-link" class="vocab-link" href="VocabReviewIII.html">Vocabulary Review III</a></li>
      <li id="lesson10" class="list-group-item pl-2 chapter"><a id="lesson-x-link" class="chapter-link" href="LessonX.html">X. Neuter Nouns</a></li>
      <li id="lesson11" class="list-group-item pl-2 chapter"><a id="lesson-xi-link" class="chapter-link" href="LessonXI.html">XI. Indirect Objects</a></li>
      <li id="englat01" class="list-group-item pl-2 chapter vocab-review"><a id="vocab-englat1-link" class="vocab-link" href="EngLatReviewI.html">English-Latin Review I</a></li>
      <li id="lesson12" class="list-group-item pl-2 chapter"><a id="lesson-xii-link" class="chapter-link" href="LessonXII.html">XII. Rec??nsus I</a></li>
    </ul>`
}

function volIILinks() {
  return `
    <ul id="vol-ii-parts" class="list-group sublist">
      <li id="ii-prae" class="list-group-item pl-2 chapter"><a id="vol-ii-prae-link" class="chapter-link" href="PraeludiumII.html">Prael??dium II</a></li>
      <li id="lesson13" class="list-group-item pl-2 chapter"><a id="lesson-xiii-link" class="chapter-link" href="LessonXIII.html">XIII. Accompaniment</a></li>
      <li id="lesson14" class="list-group-item pl-2 chapter"><a id="lesson-xiv-link" class="chapter-link" href="LessonXIV.html">XIV. Ego et T??, Br??te</a></li>
      <li id="lesson15" class="list-group-item pl-2 chapter"><a id="lesson-xv-link" class="chapter-link" href="LessonXV.html">XV. Dative Objects</a></li>
      <li id="lesson16" class="list-group-item pl-2 chapter"><a id="lesson-xvi-link" class="chapter-link" href="LessonXVI.html">XVI. Imperative Verb Forms</a></li>
      <li id="vocab04" class="list-group-item pl-2 chapter vocab-review"><a id="vocab-iv-link" class="vocab-link" href="VocabReviewIV.html">Vocabulary Review IV</a></li>
      <li id="lesson17" class="list-group-item pl-2 chapter"><a id="lesson-xvii-link" class="chapter-link" href="LessonXVII.html">XVII. Preposition Power</a></li>
      <li id="lesson18" class="list-group-item pl-2 chapter"><a id="lesson-xviii-link" class="chapter-link" href="LessonXVII.html">XVIII. Dative with Adjectives</a></li>
      <li id="lesson19" class="list-group-item pl-2 chapter"><a id="lesson-xix-link" class="chapter-link" href="LessonXIX.html">XIX. Fun with Infinitives</a></li>
      <li id="lesson20" class="list-group-item pl-2 chapter"><a id="lesson-xx-link" class="chapter-link" href="LessonXX.html">XX. Imperfect Tense (I was/were verbing)</a></li>
      <li id="vocab05" class="list-group-item pl-2 chapter vocab-review"><a id="vocab-v-link" class="vocab-link" href="VocabReviewV.html">Vocabulary Review V</a></li>
      <li id="lesson21" class="list-group-item pl-2 chapter"><a id="lesson-xxi-link" class="chapter-link" href="LessonXXI.html">XXI. Future Tense (I will verb)</a></li>
      <li id="lesson22" class="list-group-item pl-2 chapter"><a id="lesson-xxii-link" class="chapter-link" href="LessonXXII.html">XXII. Irregular Imperfect and Future</a></li>
      <li id="lesson23" class="list-group-item pl-2 chapter"><a id="lesson-xxiii-link" class="chapter-link" href="LessonXXIII.html">XXIII. Passive Voice Endings (I am verbed)</a></li>
      <li id="vocab06" class="list-group-item pl-2 chapter vocab-review"><a id="vocab-vi-link" class="vocab-link" href="VocabReviewVI.html">Vocabulary Review VI</a></li>
      <li id="englat02" class="list-group-item pl-2 chapter vocab-review"><a id="vocab-englat2-link" class="vocab-link" href="EngLatReviewII.html">English-Latin Review II</a></li>
      <li id="lesson24" class="list-group-item pl-2 chapter"><a id="lesson-xxiv-link" class="chapter-link" href="LessonXXIV.html">XXIV. Rec??nsus II</a></li>
    </ul>`
}

function volIIILinks() {
  return `
    <ul id="vol-iii-parts" class="list-group sublist">
      <li id="iii-prae" class="list-group-item pl-2 chapter"><a id="vol-i-prae-link" class="chapter-link" href="PraeludiumIII.html">Prael??dium III</a></li>
      <li id="lesson25" class="list-group-item pl-2 chapter"><a id="lesson-xxv-link" class="chapter-link" href="LessonXXV.html">XXV. Col??r??s</a></li>
      <li id="lesson26" class="list-group-item pl-2 chapter"><a id="lesson-xxvi-link" class="chapter-link" href="LessonXXVI.html">XXVI. Superlative Adjectives</a></li>
      <li id="lesson27" class="list-group-item pl-2 chapter"><a id="lesson-xxvii-link" class="chapter-link" href="LessonXXVII.html">XXVII. Declension III (Regular)</a></li>
      <li id="vocab07" class="list-group-item pl-2 chapter vocab-review"><a id="vocab-vii-link" class="vocab-link" href="VocabReviewVII.html">Vocabulary Review VII</a></li>
      <li id="lesson28" class="list-group-item pl-2 chapter"><a id="lesson-xxviii-link" class="chapter-link" href="LessonXXVIII.html">XXVIII. -or, -??ris Nouns</a></li>
      <li id="lesson29" class="list-group-item pl-2 chapter"><a id="lesson-xxix-link" class="chapter-link" href="LessonXXIX.html">XXIX. -??, -??nis Nouns</a></li>
      <li id="lesson30" class="list-group-item pl-2 chapter"><a id="lesson-xxx-link" class="chapter-link" href="LessonXXX.html">XXX. -x, -cis/-gis Nouns</a></li>
      <li id="vocab08" class="list-group-item pl-2 chapter vocab-review"><a id="vocab-viii-link" class="vocab-link" href="VocabReviewVIII.html">Vocabulary Review VIII</a></li>
      <li id="lesson31" class="list-group-item pl-2 chapter"><a id="lesson-xxxi-link" class="chapter-link" href="LessonXXXI.html">XXXI. Declension III-i, Part I</a></li>
      <li id="lesson32" class="list-group-item pl-2 chapter"><a id="lesson-xxxii-link" class="chapter-link" href="LessonXXXII.html">XXXII. Declension III-i, Part II</a></li>
      <li id="lesson33" class="list-group-item pl-2 chapter"><a id="lesson-xxxiii-link" class="chapter-link" href="LessonXXXIII.html">XXXIII. Declension III-Neuter</a></li>
      <li id="vocab09" class="list-group-item pl-2 chapter vocab-review"><a id="vocab-ix-link" class="vocab-link" href="VocabReviewIX.html">Vocabulary Review IX</a></li>
      <li id="lesson34" class="list-group-item pl-2 chapter"><a id="lesson-xxxiv-link" class="chapter-link" href="LessonXXXIV.html">XXXIV. Declension III Adjectives</a></li>
      <li id="lesson35" class="list-group-item pl-2 chapter"><a id="lesson-xxxv-link" class="chapter-link" href="LessonXXXV.html">XXXV. More Declension III Adjectives</a></li>
      <li id="vocab10" class="list-group-item pl-2 chapter vocab-review"><a id="vocab-x-link" class="vocab-link" href="VocabReviewX.html">Vocabulary Review X</a></li>
      <li id="englat03" class="list-group-item pl-2 chapter vocab-review"><a id="vocab-englat3-link" class="vocab-link" href="EngLatReviewIII.html">English-Latin Review III</a></li>
      <li id="lesson36" class="list-group-item pl-2 chapter"><a id="lesson-xxxvi-link" class="chapter-link" href="LessonXXXVI.html">XXXVI. Rec??nsus III</a></li>
    </ul>`
}

function volIVLinks() {
  return `
    <ul id="vol-iv-parts" class="list-group sublist">
      <li id="iv-prae-a" class="list-group-item pl-2 chapter"><a id="vol-iv-prae-link-a" class="chapter-link" href="PraeludiumIVa.html">Prael??dium IV.A: Principal Parts of Verbs</a></li>
      <li id="iv-prae-b" class="list-group-item pl-2 chapter"><a id="vol-iv-prae-link-b" class="chapter-link" href="PraeludiumIVb.html">Prael??dium IV.B: Verbs into Nouns</a></li>
      <li id="iv-prae-c" class="list-group-item pl-2 chapter"><a id="vol-iv-prae-link-c" class="chapter-link" href="PraeludiumIVc.html">Prael??dium IV.C: Verbs into Adjectives</a></li>
      <li id="iv-prae-d" class="list-group-item pl-2 chapter"><a id="vol-iv-prae-link-d" class="chapter-link" href="PraeludiumIVd.html">Prael??dium IV.D: Adjectives into Nouns</a></li>
      <li id="vocab11" class="list-group-item pl-2 chapter vocab-review"><a id="vocab-xi-link" class="vocab-link" href="VocabReviewXI.html">Vocabulary Review XI</a></li>
      <li id="vocab12" class="list-group-item pl-2 chapter vocab-review"><a id="vocab-xii-link" class="vocab-link" href="VocabReviewXII.html">Vocabulary Review XII</a></li>
      <li id="lesson37" class="list-group-item pl-2 chapter"><a id="lesson-xxxvii-link" class="chapter-link" href="LessonXXXVII.html">XXXVII. Timely Nouns</a></li>
      <li id="lesson38" class="list-group-item pl-2 chapter"><a id="lesson-xxxviii-link" class="chapter-link" href="LessonXXXVIII.html">XXXVIII. Timely Adverbs</a></li>
      <li id="vocab13" class="list-group-item pl-2 chapter vocab-review"><a id="vocab-xiii-link" class="vocab-link" href="VocabReviewXIII.html">Vocabulary Review XIII</a></li>
      <li id="lesson39" class="list-group-item pl-2 chapter"><a id="lesson-xxxix-link" class="chapter-link" href="LessonXXXIX.html">XXXIX. Conjugation IV</a></li>
      <li id="lesson40" class="list-group-item pl-2 chapter"><a id="lesson-xl-link" class="chapter-link" href="LessonXL.html">XL. Conjugation III (Regular)</a></li>
      <li id="lesson41" class="list-group-item pl-2 chapter"><a id="lesson-xli-link" class="chapter-link" href="LessonXLI.html">XLI. Perfect Tense, Active</a></li>
      <li id="lesson42" class="list-group-item pl-2 chapter"><a id="lesson-xlii-link" class="chapter-link" href="LessonXLII.html">XLII. Conjugation III-i</a></li>
      <li id="vocab14" class="list-group-item pl-2 chapter vocab-review"><a id="vocab-xiv-link" class="vocab-link" href="VocabReviewXIV.html">Vocabulary Review XIV</a></li>
      <li id="lesson43" class="list-group-item pl-2 chapter"><a id="lesson-xliii-link" class="chapter-link" href="LessonXLIII.html">XLIII. Pluperfect and Future Perfect Tenses, Active</a></li>
      <li id="lesson44" class="list-group-item pl-2 chapter"><a id="lesson-xliv-link" class="chapter-link" href="LessonXLIV.html">XLIV. Comparative Adjectives</a></li>
      <li id="lesson45" class="list-group-item pl-2 chapter"><a id="lesson-xlv-link" class="chapter-link" href="LessonXLV.html">XLV. More Declension III-Neuter Nouns</a></li>
      <li id="lesson46" class="list-group-item pl-2 chapter"><a id="lesson-xlvi-link" class="chapter-link" href="LessonXLVI.html">XLVI. Comparative and Superlative Locations</a></li>
      <li id="lesson47" class="list-group-item pl-2 chapter"><a id="lesson-xlvii-link" class="chapter-link" href="LessonXLVII.html">XLVII. Asking for Directions</a></li>
      <li id="vocab15" class="list-group-item pl-2 chapter vocab-review"><a id="vocab-xv-link" class="vocab-link" href="VocabReviewXV.html">Vocabulary Review XV</a></li>
      <li id="englat04" class="list-group-item pl-2 chapter vocab-review"><a id="vocab-englat4-link" class="vocab-link" href="EngLatReviewIV.html">English-Latin Review IV</a></li>
      <li id="lesson48" class="list-group-item pl-2 chapter"><a id="lesson-xlviii-link" class="chapter-link" href="LessonXLVIII.html">XLVIII. Rec??nsus IV</a></li>
    </ul>`
}

function volVLinks() {
  return `
    <ul id="vol-v-parts" class="list-group sublist">
      <li id="v-prae" class="list-group-item pl-2 chapter"><a id="vol-v-prae-link" class="chapter-link" href="PraeludiumV.html">Prael??dium V</a></li>
      <li id="lesson49" class="list-group-item pl-2 chapter"><a id="lesson-xlix-link" class="chapter-link" href="LessonXLIX.html">XLIX. Declension IV</a></li>
      <li id="lesson50" class="list-group-item pl-2 chapter"><a id="lesson-l-link" class="chapter-link" href="LessonL.html">L. Declension IV Neuter and Verbal Nouns</a></li>
      <li id="lesson51" class="list-group-item pl-2 chapter"><a id="lesson-li-link" class="chapter-link" href="LessonLI.html">LI. Declension V</a></li>
      <li id="lesson52" class="list-group-item pl-2 chapter"><a id="lesson-lii-link" class="chapter-link" href="LessonLII.html">LII. In Exercit?? Nunc Es</a></li>
      <li id="vocab16" class="list-group-item pl-2 chapter vocab-review"><a id="vocab-xvi-link" class="vocab-link" href="VocabReviewXVI.html">Vocabulary Review XVI</a></li>
      <li id="lesson53" class="list-group-item pl-2 chapter"><a id="lesson-liii-link" class="chapter-link" href="LessonLIII.html">LIII. Perfect System, Passive Voice</a></li>
      <li id="lesson54" class="list-group-item pl-2 chapter"><a id="lesson-liv-link" class="chapter-link" href="LessonLIV.html">LIV. Complex Compounds</a></li>
      <li id="lesson55" class="list-group-item pl-2 chapter"><a id="lesson-lv-link" class="chapter-link" href="LessonLV.html">LV. More Compounds and a Complex Pronoun</a></li>
      <li id="vocab17" class="list-group-item pl-2 chapter vocab-review"><a id="vocab-xvii-link" class="vocab-link" href="VocabReviewXVII.html">Vocabulary Review XVII</a></li>
      <li id="lesson56" class="list-group-item pl-2 chapter"><a id="lesson-lvi-link" class="chapter-link" href="LessonLVI.html">LVI. Pronominal Declension</a></li>
      <li id="lesson57" class="list-group-item pl-2 chapter"><a id="lesson-lvii-link" class="chapter-link" href="LessonLVII.html">LVII. -dex, -fex, -spex, and -tas Nouns</a></li>
      <li id="lesson58" class="list-group-item pl-2 chapter"><a id="lesson-lviii-link" class="chapter-link" href="LessonLVIII.html">LVIII. The Magical s Termination</a></li>
      <li id="lesson59" class="list-group-item pl-2 chapter"><a id="lesson-lix-link" class="chapter-link" href="LessonLIX.html">LIX. Nouns Having Been Verbed</a></li>
      <li id="vocab18" class="list-group-item pl-2 chapter vocab-review"><a id="vocab-xviii-link" class="vocab-link" href="VocabReviewXVIII.html">Vocabulary Review XVIII</a></li>
      <li id="englat05" class="list-group-item pl-2 chapter vocab-review"><a id="vocab-englat5-link" class="vocab-link" href="EngLatReviewV.html">English-Latin Review V</a></li>
      <li id="lesson60" class="list-group-item pl-2 chapter"><a id="lesson-lx-link" class="chapter-link" href="LessonLX.html">LX. Rec??nsus V</a></li>
    </ul>`
}

function volVILinks() {
  return `
    <ul id="vol-vi-parts" class="list-group sublist">
      <li id="vi-prae" class="list-group-item pl-2 chapter"><a id="vol-vi-prae-link" class="chapter-link" href="PraeludiumVI.html">Prael??dium VI</a></li>
      <li id="lesson61" class="list-group-item pl-2 chapter"><a id="lesson-lxi-link" class="chapter-link" href="LessonLXI.html">LXI. Adjectives in Review</a></li>
      <li id="lesson62" class="list-group-item pl-2 chapter"><a id="lesson-lxii-link" class="chapter-link" href="LessonLXII.html">LXII. Adjectives in Antonymic Pairs</a></li>
      <li id="lesson63" class="list-group-item pl-2 chapter"><a id="lesson-lxiii-link" class="chapter-link" href="LessonLXIII.html">LXIII. Deponent Verbs, Conjugation I</a></li>
      <li id="lesson64" class="list-group-item pl-2 chapter"><a id="lesson-lxiv-link" class="chapter-link" href="LessonLXIV.html">LXIV. Gerunds and Gerundives</a></li>
      <li id="lesson65" class="list-group-item pl-2 chapter"><a id="lesson-lxv-link" class="chapter-link" href="LessonLXV.html">LXV. Deponent Verbs, Conjungations II and III</a></li>
      <li id="lesson66" class="list-group-item pl-2 chapter"><a id="lesson-lxvi-link" class="chapter-link" href="LessonLXVI.html">LXVI. Deponent Verbs, Conjungations III-i and IV</a></li>
      <li id="lesson67" class="list-group-item pl-2 chapter"><a id="lesson-lxvii-link" class="chapter-link" href="LessonLXVII.html">LXVII. Body Parts, Part I
      <li id="lesson68" class="list-group-item pl-2 chapter"><a id="lesson-lxviii-link" class="chapter-link" href="LessonLXVIII.html">LXVIII. Body Parts, Part II</a></li>
      <li id="lesson69" class="list-group-item pl-2 chapter"><a id="lesson-lxix-link" class="chapter-link" href="LessonLXIX.html">LXIX. Le??n??s, Tigr??sque, Urs??que! ?? M??!</a></li>
      <li id="lesson70" class="list-group-item pl-2 chapter"><a id="lesson-lxx-link" class="chapter-link" href="LessonLXX.html">LXX. Av??s</a></li>
      <li id="lesson71" class="list-group-item pl-2 chapter"><a id="lesson-lxxi-link" class="chapter-link" href="LessonLXXI.html">LXXI. Fam??lia Extenta</a></li>
      <li id="lesson72" class="list-group-item pl-2 chapter"><a id="lesson-lxxii-link" class="chapter-link" href="LessonLXXII.html">LXXII. Rec??nsus VI</a></li>
    </ul>`
}
