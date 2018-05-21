let textarea = document.querySelector('textarea');
let previewer = document.querySelector('#previewer');
let editorHeader = document.querySelector('#editorHeader');
let editorDiv = document.querySelector('#editor');

let dragging = false;

textarea.addEventListener('input', function (event) {
    previewer.innerHTML = marked(event.target.value);
});

editorHeader.addEventListener('mousedown', function (event) {
    dragging = true;
})

window.addEventListener('mouseup', function (){
    dragging = false;
})

window.addEventListener('mousemove', function (event) {
    if (dragging) {
        editorDiv.style.left = event.clientX + 'px';
        editorDiv.style.top = event.clientY + 'px';
    }
})