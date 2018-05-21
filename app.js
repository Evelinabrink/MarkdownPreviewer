let textarea = document.querySelector('textarea');
let previewer = document.querySelector('#previewer');

textarea.addEventListener('input', function (event) {
    let text = textarea.value;
    previewer.textContent = text;
});