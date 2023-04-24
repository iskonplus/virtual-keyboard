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
  ["1", "!"],
  ["2", "@"],
  ["3", "#"],
  ["4", "$"],
  ["5", "%"],
  ["6", "^"],
  ["7", "&"],
  ["8", "*"],
  ["9", "("],
  ["0", ")"],
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
  ["controlLeft", "Ctrl"],
  ["left_meta", "Win"],
  ["altLeft", "Alt"],
  ["space", "Space"],
  ["right_alt","Alt"],
  ["arrow_left", "&larr;"],
  ["arrow_down", "&darr;"],
  ["arrow_right", "&rarr;"],
  ["right_control", "Ctrl"],
];

const keybRu = [
  ["ё"],
  ["1", "!"],
  ["2", '"'],
  ["3", "№"],
  ["4", ";"],
  ["5", "%"],
  ["6", ":"],
  ["7", "?"],
  ["8", "*"],
  ["9", "("],
  ["0", ")"],
  ["-", "_"],
  ["=", "+"],
  ["backspace", "Backspace"],
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
  ["х"," "],
  ["ъ"," "],
  ["/"],
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
  ["ж"," "],
  ["э"," "],
  ["enter", "Enter"],
  ["left_shift", "Shift"],
  ["я"],
  ["ч"],
  ["с"],
  ["м"],
  ["и"],
  ["т"],
  ["ь"],
  ["б"," "],
  ["ю", " "],
  [".", ","],
  ["arrow_up", "&uarr;"],
  ["right_shift", "Shift"],
  ["controlLeft", "Ctrl"],
  ["left_meta", "Win"],
  ["altLeft", "Alt"],
  ["space", "Space"],
  ["right_alt","Alt"],
  ["arrow_left", "&larr;"],
  ["arrow_down", "&darr;"],
  ["arrow_right", "&rarr;"],
  ["right_control", "Ctrl"],
];

let oppositeKeyboard;

createKeyboardKeys(keybRu);

function createKeyboardKeys(keyboard) {
  oppositeKeyboard = keyboard == keybEn ? keybRu : keybEn;
  divKeyboard.innerHTML = '';

  keyboard.forEach((el, ind) => {

    divKeyboard.insertAdjacentHTML(
      "beforeend",
      `<div class="key${el[0].length < 2 ? "" : ` ${el[0]}`}">
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


// *******************Change lang**********************

body.addEventListener("keydown", (event) => {
  clickKey(event);

  if (event.altKey && event.code === 'ControlLeft') {
    createKeyboardKeys(oppositeKeyboard);
  }

});

let arrKeyboard = document.getElementsByClassName("key");

// TODA: i think it should work differently

function clickKey(event) {

  [...arrKeyboard].forEach(el => {
    if (el.className.toLowerCase() === `key ${event.code.toLowerCase()}`) {
      el.classList.toggle("click");
      setTimeout(() => {
      el.classList.toggle("click");
        
      }, 100);

    }
  })
}
