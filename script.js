const body = document.querySelector(".body");
const main = document.createElement("main");
const textArea =
  '<div class="block_textArea"><textArea class="textArea", rows="10",> </textArea></div>';
const blocKeyboard = '<div class="block_keyboard"></div>';
const blockInfo =
  '<div class="changes_lang"><p>Changing the keyboard language: Alt + Ctrl</p><p>Keyboard for Windows OC</p></div>';

body.prepend(main);

let isKeyDown = "";


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
  ["delete", "Del"],
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
  ["shiftLeft", "Shift"],
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
  ["shiftRight", "Shift"],
  ["controlLeft", "Ctrl"],
  ["metaLeft", "Win"],
  ["altLeft", "Alt"],
  ["space", "Space"],
  ["altRight", "Alt"],
  ["arrow_left", "&larr;"],
  ["arrow_down", "&darr;"],
  ["arrow_right", "&rarr;"],
  ["controlRight", "Ctrl"],
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
  ["х", " "],
  ["ъ", " "],
  ["/"],
  ["delete", "Del"],
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
  ["ж", " "],
  ["э", " "],
  ["enter", "Enter"],
  ["shiftLeft", "Shift"],
  ["я"],
  ["ч"],
  ["с"],
  ["м"],
  ["и"],
  ["т"],
  ["ь"],
  ["б", " "],
  ["ю", " "],
  [".", ","],
  ["arrow_up", "&uarr;"],
  ["shiftRight", "Shift"],
  ["controlLeft", "Ctrl"],
  ["metaLeft", "Win"],
  ["altLeft", "Alt"],
  ["space", "Space"],
  ["altRight", "Alt"],
  ["arrow_left", "&larr;"],
  ["arrow_down", "&darr;"],
  ["arrow_right", "&rarr;"],
  ["controlRight", "Ctrl"],
];

let oppositeKeyboard;

createKeyboardKeys(keybEn);

function createKeyboardKeys(keyboard) {
  oppositeKeyboard = keyboard == keybEn ? keybRu : keybEn;
  divKeyboard.innerHTML = '';

  keyboard.forEach((el, ind) => {

    divKeyboard.insertAdjacentHTML(
      "beforeend",
      `<div class="key${el[0].length < 2 ? "" : ` ${el[0]}`}">
        <div>
         <p class="key_active">${el[0].length > 1 ? el[1] : el[0]}</p>
         ${el[0].length > 1
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

  isKeyDown = " ";
  clickKey(event);

  if (event.key === "Alt" || event.key === "Tab") {
    event.preventDefault();
  }

  if (event.key === "Alt" && event.code === 'ControlLeft') {
    createKeyboardKeys(oppositeKeyboard);
  }

});


let arrKeyboard = document.getElementsByClassName("key");


body.addEventListener("keyup", (event) => {
  isKeyDown = "";
  clickKey(event);
});


function clickKey(event) {
  [...arrKeyboard].forEach(el => {
    let keyValue = el.classList[1] && el.classList[1] !== "click" ? el.classList[1].toLowerCase() : el.children[0].children[0].innerText.toLowerCase();
    let eventKey = event.key.toLowerCase();
    let eventCode = event.code.toLowerCase();

    if (keyValue === eventCode || keyValue === eventKey) {
      togglClassClick(el);
    }
  });

}


function togglClassClick(el) {
  isKeyDown ?
    el.classList.add("click") :
    el.classList.remove("click");
}


// *******************Click virtual keyboard**********************

let textAreaDom = document.querySelector(".textArea");

[...arrKeyboard].forEach(el => el.addEventListener("click", () => {

  console.log(el.children[0].children[0].innerText);
  let key = el.children[0].children[0].innerText;

  isKeyDown = " ";
  togglClassClick(el);

  setTimeout(() => {
    togglClassClick(el);
  }, 100);
  isKeyDown = "";

  characterInput(key);

}));

function characterInput(key) {

  key === "Space" && (key = " ");
  key === "Backspace" ?
    (textAreaDom.value = textAreaDom.value.slice(0, -1)) :
    textAreaDom.value += key;
}


