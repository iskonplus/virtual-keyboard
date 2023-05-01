const body = document.querySelector(".body");
const main = document.createElement("main");
const textArea =
  '<div class="block_textArea"><textArea class="textArea", rows="10",> </textArea></div>';
const blocKeyboard = '<div class="block_keyboard"></div>';
const blockInfo =
  '<div class="changes_lang"><p>Change keyboard language: Alt+Shift</p><p>Keyboard for Windows OC</p></div>';

body.prepend(main);

let isKeyDown = "";
let isShiftClick = false;
let isAltClick = false;

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
  ["arrowup", "&uarr;"],
  ["shiftRight", "Shift"],
  ["controlLeft", "Ctrl"],
  ["metaLeft", "Win"],
  ["altLeft", "Alt"],
  ["space", "Space"],
  ["altRight", "Alt"],
  ["arrowleft", "&larr;"],
  ["arrowdown", "&darr;"],
  ["arrowright", "&rarr;"],
  ["controlRight", "Ctrl"],
];

const keybRu = [
  ["ё", " "],
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
  ["\\", "/"],
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
  ["arrowup", "&uarr;"],
  ["shiftRight", "Shift"],
  ["controlLeft", "Ctrl"],
  ["metaLeft", "Win"],
  ["altLeft", "Alt"],
  ["space", "Space"],
  ["altRight", "Alt"],
  ["arrowleft", "&larr;"],
  ["arrowdown", "&darr;"],
  ["arrowright", "&rarr;"],
  ["controlRight", "Ctrl"],
];

let oppositeKeyboard;


if (!localStorage.getItem("lang")) {
  localStorage.setItem("lang", "keybEn")
  createKeyboardKeys(keybEn);
} else {
  createKeyboardKeys(localStorage.getItem("lang") === "keybEn" ? keybEn : keybRu);
}


function createKeyboardKeys(keyboard) {
  oppositeKeyboard = keyboard == keybEn ? keybRu : keybEn;
  divKeyboard.innerHTML = "";

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
  if (event.key === "Alt" || event.key === "Tab") {
    event.preventDefault();
    event.key === "Tab" && characterInput("Tab");
  }

  if (event.key === "ArrowDown" || event.key === "ArrowUp" || event.key === "ArrowLeft" || event.key === "ArrowRight") {
    event.preventDefault();
    event.key === "ArrowDown" && characterInput("↓");
    event.key === "ArrowUp" && characterInput("↑");
    event.key === "ArrowLeft" && characterInput("←");
    event.key === "ArrowRight" && characterInput("→");

  }

  if (event.altKey && event.shiftKey) {
    changeLang(oppositeKeyboard);
    isKeyDown = " ";
    clickKey(event);
  } else if (event.shiftKey) {
    isShiftClick = true;
    isKeyDown = " ";
    clickKey(event);
  } else {
    if (event.key !== "CapsLock") {
      isKeyDown = " ";
      clickKey(event);
    } else {
      checkCaps(document.querySelector(".key.capslock"));
    }
  }
});


function changeLang(lang) {
  oppositeKeyboard = lang == keybEn ? keybRu : keybEn;

  [...arrKeyboard].forEach((el, ind) => {
    if (el.children[0].children[0].innerText.length === 1) {
      el.children[0].children[0].innerHTML = `${lang[ind][0].length > 1 ? lang[ind][1] : lang[ind][0]
        }`;

      if (el.children[0].children[1]) {
        el.children[0].children[1].innerHTML = `${lang[ind][1] ? lang[ind][1] : oppositeKeyboard[ind][0]
          }`;
      }
    }
  });

  localStorage.setItem("lang", `${lang === keybEn ? "keybEn" : "keybRu"}`)
}

let arrKeyboard = document.getElementsByClassName("key");
let isCapsOn = false;

body.addEventListener("keyup", (event) => {
  if (event.key !== "CapsLock") {
    isKeyDown = "";
    clickKey(event);
  }
  if (event.key === "Shift") {
    isShiftClick = false;
  }
});


function clickKey(event) {
  [...arrKeyboard].forEach((el) => {
    let keyValue =
      el.classList[1] &&
        el.classList[1] !== "click" &&
        el.classList[1] !== "uppercase"
        ? el.classList[1].toLowerCase()
        : isShiftClick
          ? /^[а-яА-ЯёЁa-zA-Z]/.test(el.children[0].children[0].innerText)
            ? el.children[0].children[0].innerText.toLowerCase()
            : el.children[0].children[1].innerText.toLowerCase()
          : el.children[0].children[0].innerText.toLowerCase();

    let eventKey = event.key.toLowerCase();
    let eventCode = event.code.toLowerCase();

    if (keyValue === eventCode || keyValue === eventKey) {
      togglClassClick(el);
    }
  });
}

function togglClassClick(el) {
  isKeyDown ? el.classList.add("click") : el.classList.remove("click");
}

// *******************Click virtual keyboard**********************

let textAreaDom = document.querySelector(".textArea");
let index;

[...arrKeyboard].forEach((el, ind, arr) =>
  el.addEventListener("click", () => {
    let key;

    !isShiftClick
      ? (key = el.children[0].children[0].innerText)
      : (key = /^[а-яА-ЯёЁa-zA-Z←↑↓→]/.test(el.children[0].children[0].innerText)
        ? el.children[0].children[0].innerText
        : el.children[0].children[1].innerText);

    if (key === "Caps") {
      checkCaps(el);

    }else if (key === "Shift" && !isAltClick && !isShiftClick) {
      index = ind;
      checkShift(el);

    }else if (key === "Alt" && !!isAltClick ) {
      togglClassClick(el);
      setTimeout(() => {
        togglClassClick(el);
      }, 100);
      isKeyDown = "";
      isAltClick = false;
      togglClassClick(arr[index]);

    } else if (key === "Alt" && !isShiftClick ) {
      checkAlt(el);
      index = ind;

    }else if (key === "Shift" && !!isAltClick) {
      togglClassClick(el);
      checkAlt(arr[index]);
      setTimeout(() => {
        togglClassClick(el);
      }, 100);

    } else {
      isKeyDown = " ";
      togglClassClick(el);

      if (isShiftClick ) {
        checkShift(arr[index]);
      }

      if (!!isAltClick) {
        isKeyDown = "";
      isAltClick = false;
      togglClassClick(arr[index]);
      }

      setTimeout(() => {
        togglClassClick(el);
      }, 100);
      isKeyDown = "";

    }
    characterInput(key);
  })
);


function checkAlt(el) {
  if (!isAltClick) {
    isAltClick = true;
    isKeyDown = " ";
    togglClassClick(el);
  } else if (isAltClick) {
    isKeyDown = "";
    isAltClick = false;  
    togglClassClick(el);
    changeLang(oppositeKeyboard);
  }
}

function checkShift(el) {
  if (!isShiftClick) {
    isShiftClick = true;
    isKeyDown = " ";
    togglClassClick(el);
    keyValueUpperCase();
  } else if (isShiftClick) {
    isKeyDown = "";
    isShiftClick = false;
    togglClassClick(el);
    keyValueUpperCase();
  }
}

function checkCaps(el) {
  if (!isCapsOn) {
    isCapsOn = true;
    isKeyDown = " ";
    togglClassClick(el);
    keyValueUpperCase();
  } else if (isCapsOn) {
    isKeyDown = "";
    isCapsOn = false;
    togglClassClick(el);
    keyValueUpperCase();
  }
}


function keyValueUpperCase() {
  [...arrKeyboard].forEach((el) => {
    if (el.children[0].children[0].innerText.length === 1) {
      el.classList.toggle("uppercase");
    }
  });
}


function characterInput(key) {
  if (key === "Del") {
    key = textAreaDom.value.substring(1);
    textAreaDom.value = "";
  }
  key === "Win" && (key = "");
  key === "Alt" && (key = "");
  key === "Ctrl" && (key = "");
  key === "Shift" && (key = "");
  key === "Caps" && (key = "");
  key === "Space" && (key = " ");
  key === "Enter" && (key = "\r\n");
  key === "Tab" && (key = "\t");
  key === "Backspace"
    ? (textAreaDom.value = textAreaDom.value.slice(0, -1))
    : (textAreaDom.value += key);
}
