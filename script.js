const body = document.getElementsByTagName("body");
const main = document.createElement("main");
const textArea = '<div class="block_textArea"><textArea class = "textArea" , rows = "10",> </textArea></div>';
const div = '<div class = "block_keyboard" ></div>';
const divInfo = '<div class="changes_lang"><p> Changing the keyboard language: Alt + Ctrl</p><p>Keyboard for Windows OC</p></div >';


body[0].prepend(main);
const bodyMain = document.querySelector("main");

bodyMain.insertAdjacentHTML("afterbegin", textArea);
bodyMain.insertAdjacentHTML("beforeend", div);
bodyMain.insertAdjacentHTML('beforeend',divInfo);


const divKeyboard = document.querySelector(".block_keyboard");
const textAreaBlock = document.querySelector(".block_textArea");


const keybEng = [['', '`', '~', " ", " "], ['', 1, "!", " ", " "], ['', 2, "@", " ", " "], ['', 3, "#", " ", " "],
  ['', 4, "$", " ", " "], ['', 5, "%", " ", " "], ['', 6, "^", " ", " "], ['', 7, "&", " ", " "], ['', 8, "*", " ", " "],
  ['', 9, "(", " ", " "], ['', 0, ")", " ", " "], ['', '-', "_", " ", " "], ['', '=', "+", " ", " "],
  ['backspace', 'Backspace', " ", " ", " "], ['tab', 'Tab', " ", " ", " "], ['', 'q', " ", 'й', " "], ['', 'w', " ", 'ц', " "],
  ['', 'e', " ", 'у', " "], ['', 'r', " ", 'к', " "], ['', 't', " ", 'е', " "], ['', 'y', " ", 'н', " "], ['', 'u', " ", 'г', " "],
  ['', 'i', " ", 'ш', " "], ['', 'o', " ", 'щ', " "], ['', 'p', " ", 'з', " "], ['', '[', '{', 'х', " "], ['', ']', '}', 'ъ', " "],
  ['slash', '\\', '|', " ", " "], ['del', 'Delete', " ", " ", " "], ['capslock', 'CapsLock', " ", " ", " "], ['', 'a', " ", 'ф', " "],
  ['', 's', " ", 'ы', " "], ['', 'd', " ", 'в', " "], ['', 'f', " ", 'а', " "], ['', 'g', " ", 'п', " "], ['', 'h', " ", 'р', " "],
  ['', 'j', " ", 'о', " "], ['', 'k', " ", 'л', " "], ['', 'l', " ", 'д', " "], ['', ';', ':', 'ж', " "], ['', '\'', '"', 'э', " "],
  ['enter', 'Enter', " ", " ", " "], ['left_shift', 'Shift', " ", " ", 'ShiftLeft'], ['', 'z', " ", 'я', " "], ['', 'x', " ", 'ч', " "],
  ['', 'c', " ", 'с', " "], ['', 'v', " ", 'м', " "], ['', 'b', " ", 'и', " "], ['', 'n', " ", 'т', " "], ['', 'm', " ", 'ь', " "],
  ['', ',', '<', 'б', " "], ['', '.', '>', 'ю', " "], ['', '/', '?', '.', " "], ['arrow_up', '&uarr;', ' ', " ", 'ArrowUp'],
  ['right_shift', 'Shift', " ", " ", 'ShiftRight'], ['left_control', 'CTRL', " ", " ","ControlLeft"], ['left_meta', 'Win', " ", " ", "MetaLeft"],
  ['left_alt', 'Alt', " ", " ", 'AltLeft'], ['space', '', " ", " ", 'Space'], ['right_alt', 'Alt', " ", " ", 'AltRight'], ['arrow_left', '&larr;', " ", " ", "ArrowLeft"],
['arrow_down', '&darr;', " ", " ", "ArrowDown"], ['arrow_right', '&rarr;', " ", " ", "ArrowRight"], ['right_control', 'CTRL', " "," ", 'ControlRight']];


keybEng.map(el => {
    divKeyboard.insertAdjacentHTML('beforeend',
        `<div class = "keyboard ${el[0]}">
        <div>
        <p class="last_p">${el[1]}</p>
         ${el[2] ? `<p class="first_p">${el[2]}</p>` : ""}
         ${el[3] ? `<p class="ru_p">${el[3]}</p>` : ""}
         ${el[4] ? `<p class="none">${el[4]}</p>` : ""}
        </div>
        </div>`);
});


const divKeyboardAll = document.querySelectorAll(".keyboard ");


body[0].addEventListener("keydown", (event) => {
    listener(1);
    event.key === "Alt" && alt(1);
    (event.key === "Control" && altPlus) && rusLang();

})

let altPlus = 0;

body[0].addEventListener("keyup", (event) => {
    event.key === "CapsLock" && up(1);
    event.key === "Alt" && alt(0);
    listener(0);
});

function alt(n) {
    defaults ();
    altPlus = n;
}

function listener(keyUpOrDown) {              

    event.key === "Shift" && up();
    event.key === "Tab" && defaults ();
    
    divKeyboardAll.forEach(el => {
        let keyHtml0 = el.children[0].children[0].innerText;
        let keyHtml1 = el.children[0].children[1].innerText;
        let keyHtmlRu = el.children[0].children[2].innerText;
        let keyCode = el.children[0].children[3].innerText;
        
        let key = keyCode !== " " ? event.code : event.key; 
        
        let cheks = keyCode !== " "            
            ? key === keyCode 
            : key === keyHtml0 || key === keyHtml1 || key === keyHtmlRu;

        if (cheks) {
            !!keyUpOrDown
                ? el.classList.add("click") :
                el.classList.remove("click");
        }
    });
};


function up(testRegist) {
    divKeyboardAll.forEach(el => {
        let keyHtml0 = el.children[0].children[0].innerText;
        let keyHtml = el.children[0].children[0]
        let keyHtml1 = el.children[0].children[1].innerText;
        let keyHtmlO = el.children[0].children[1]
        let elLenght = el.children[0].children[0].innerText.length;

        if (!!testRegist) {
            elLenght === 1 && el.classList.toggle("caps");

        } else {
            elLenght === 1 && el.classList.toggle("caps")

            let checkAll = !!localStorage.getItem("leng","ru") ? (/^[A-Za-zа-яА-Я{}[\/?;:'",<.>→↑↓←]/) : (/^[A-Za-zа-яА-Я→↓←↑]/);

            !checkAll.test(keyHtml0) && keyHtml.classList.toggle("key_up")
            !checkAll.test(keyHtml1) && keyHtmlO.classList.toggle("key_up")
        }
    })
};


function rusLang(check) {

    !localStorage.getItem("leng") ? localStorage.setItem("leng","ru") : localStorage.clear();

    divKeyboardAll.forEach(el => {

        let keyHtml2 = el.children[0].children[2].innerText;
        let keyHtmlRu = el.children[0].children[2];
        let keyHtml = el.children[0].children[0];

        if (/^[A-Za-zа-яА-Я.]/.test(keyHtml2)) {
            keyHtmlRu.classList.toggle("key_up");
            keyHtml.classList.toggle("ru_p");
        }
    })

    check && localStorage.setItem("leng", "ru");
}

function defaults () {
    event.preventDefault();    
}

//------------------------click------------------

divKeyboard.addEventListener ("click", (event) => {
    let key = event.target.innerText;

    event.target.classList.toggle("click");
    textAreaBlock.children[0].value += key;
    setTimeout(() => {
    event.target.classList.toggle("click");        
    }, 100);
})


// ----localStorage----

localStorage.getItem("leng") && rusLang(1);


