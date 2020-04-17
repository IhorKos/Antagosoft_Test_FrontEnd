const list = document.querySelector('.comments');
const text = document.querySelector('textarea');

function addMessage(text) {
  const comment = `<div class="comments__comment"><div class="comments__head"><h3 class="comments__author">Your name</h3><span class="comments__date">${Date().slice(4, 15)}</span></div><div class="comments__text"><p>${text}</p></div></div>`
  list.innerHTML = list.innerHTML + comment;
};

function validAddMessage() {
  event.preventDefault();

  if (!text.value.length) {
    alert("поле должно быть заполнено!")
  } else {
    addMessage(text.value)
  };

  text.value = '';
}
const form = document.querySelector('.form');

document.body.addEventListener(
  'submit',
  function (event) {  
    validAddMessage();  
  } 
);

text.onkeydown = function(e) {
    e = e || window.event;
    if (e.ctrlKey && e.keyCode == 13) {
      validAddMessage();
    }
    return true;
}