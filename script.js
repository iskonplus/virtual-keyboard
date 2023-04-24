const body = document.querySelector('.body');
const main = document.createElement("main");
const textArea = '<div class="block_textArea"><textArea class = "textArea" , rows = "10",> </textArea></div>';
const blocKeyboard = '<div class = "block_keyboard" ></div>';
const blockInfo = '<div class="changes_lang"><p> Changing the keyboard language: Alt + Ctrl</p><p>Keyboard for Windows OC</p></div >';

body.prepend(main);

[textArea, blocKeyboard, blockInfo].forEach(el => {
  main.insertAdjacentHTML("beforeend", el);
});


