const body = document.querySelector(".body");
const main = document.createElement("main");
const textArea =
  '<div class="block_textArea"><textArea class="textArea", rows="10",> </textArea></div>';
const blocKeyboard = '<div class="block_keyboard"></div>';
const blockInfo =
  '<div class="changes_lang"><p>Changing the keyboard language: Alt + Ctrl</p><p>Keyboard for Windows OC</p></div>';

body.prepend(main);

[textArea, blocKeyboard, blockInfo].forEach((el) => {
  main.insertAdjacentHTML("beforeend", el);
});

const divKeyboard = document.querySelector(".block_keyboard");

const keybEn = [
  ["`", "~"],
  [1, "!"],
  [2, "@"],
  [3, "#"],
  [4, "$"],
  [5, "%"],
  [6, "^"],
  [7, "&"],
  [8, "*"],
  [9, "("],
  [0, ")"],
  ["-", "_"],
  ["=", "+"],
  ["backspace", "Backspace"],
  ["tab", "Tab"],
  ["q"],
  ["w"],
  ["e"],
  ["r"],
  ["t"],
  ["y"],
  ["u"],
  ["i"],
  ["o"],
  ["p"],
  ["[", "{"],
  ["]", "}"],
  ["\\", "|"],
  ["del", "Del"],
  ["capslock", "Caps"],
  ["a"],
  ["s"],
  ["d"],
  ["f"],
  ["g"],
  ["h"],
  ["j"],
  ["k"],
  ["l"],
  [";", ":"],
  ["'", '"'],
  ["enter", "Enter"],
  ["left_shift", "Shift"],
  ["z"],
  ["x"],
  ["c"],
  ["v"],
  ["b"],
  ["n"],
  ["m"],
  [",", "<"],
  [".", ">"],
  ["/", "?"],
  ["arrow_up", "&uarr;"],
  ["right_shift", "Shift"],
  ["left_control", "Ctrl"],
  ["left_meta", "Win"],
  ["left_alt", "Alt"],
  ["space", "Space"],
  ["right_alt","Alt"],
  ["arrow_left", "&larr;"],
  ["arrow_down", "&darr;"],
  ["arrow_right", "&rarr;"],
  ["right_control", "Ctrl"],
];

const keybRu = [
  ["ё"],
  [1, "!"],
  [2, '"'],
  [3, "№"],
  [4, ";"],
  [5, "%"],
  [6, ":"],
  [7, "?"],
  [8, "*"],
  [9, "("],
  [0, ")"],
  ["-", "_"],
  ["=", "+"],
  ["backspace", "backspace"],
  ["tab", "Tab"],
  ["й"],
  ["ц"],
  ["у"],
  ["к"],
  ["е"],
  ["н"],
  ["г"],
  ["ш"],
  ["щ"],
  ["з"],
  ["х"],
  ["ъ"],
  ["slash"],
  ["del", "Del"],
  ["capslock", "Caps"],
  ["ф"],
  ["ы"],
  ["в"],
  ["а"],
  ["п"],
  ["р"],
  ["о"],
  ["л"],
  ["д"],
  ["ж"],
  ["э"],
  ["enter", "Enter"],
  ["left_shift", "Shift"],
  ["я"],
  ["ч"],
  ["с"],
  ["м"],
  ["и"],
  ["т"],
  ["ь"],
  ["б"],
  ["ю", " "],
  [".", ","],
  ["arrow_up", "&uarr;"],
  ["right_shift", "Shift"],
  ["left_control", "Ctrl"],
  ["left_meta", "Win"],
  ["left_alt", "Alt"],
  ["space", "Space"],
  ["right_alt","Alt"],
  ["arrow_left", "&larr;"],
  ["arrow_down", "&darr;"],
  ["arrow_right", "&rarr;"],
  ["right_control", "Ctrl"],
];

createKeyboardKeys(keybEn);

function createKeyboardKeys(keyboard) {
  let oppositeKeyboard = keyboard == keybEn ? keybRu : keybEn;
  keyboard.forEach((el, ind) => {
    divKeyboard.insertAdjacentHTML(
      "beforeend",
      `<div class="key ${el[0].length < 2 ? "" : el[0]}">
        <div>
         <p class="key_active">${el[0].length > 1 ? el[1] : el[0]}</p>
         ${
           el[0].length > 1
             ? ""
             : el[1]
             ? `<p class="key_second">${el[1]}</p>`
             : `<p class="key_second">${oppositeKeyboard[ind][0]}</p>`
         }
        </div>
        </div>`
    );
  });
}

