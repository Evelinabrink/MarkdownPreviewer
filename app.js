let textarea = document.querySelector('textarea');
let previewer = document.querySelector('#previewer');

textarea.addEventListener('input', function (event) {
    previewer.innerHTML = marked(event.target.value);
});