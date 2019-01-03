var textarea = document.querySelector('.button');
var msg = window.localStorage.getItem('message');

try {
    textarea.value = JSON.stringify(JSON.parse(msg), null, 2);
} catch (e) {}





