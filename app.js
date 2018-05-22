let textarea = document.querySelector('textarea');
let previewer = document.querySelector('#previewer');
let editorHeader = document.querySelector('#editorHeader');
let editorDiv = document.querySelector('#editor');
let previewHeader = document.querySelector('#previewHeader');
let previewDiv = document.querySelector('#previewDiv');
let icon = document.querySelector('#icon');
let container = document.querySelector('.container');

let dragEd = false;
let dragPreview = false;

textarea.addEventListener('input', function (event) {
    previewer.innerHTML = marked(event.target.value);
});

// drag and drop the editor window
editorHeader.addEventListener('mousedown', function (event) {
    dragEd = true;
    editorDiv.style.zIndex += 1;
})

window.addEventListener('mouseup', function (){
    dragEd = false;
})

window.addEventListener('mousemove', function (event) {
    if (dragEd) {
        editorDiv.style.left = event.clientX + 'px';
        editorDiv.style.top = event.clientY + 'px';
    }
})


// drag and drop the preview window
previewHeader.addEventListener('mousedown', function (event) {
    dragPreview = true;
    previewDiv.style.zIndex += 1;
})

window.addEventListener('mouseup', function (){
    dragPreview = false;
})

window.addEventListener('mousemove', function (event) {
    if (dragPreview) {
        previewDiv.style.left = event.clientX + 'px';
        previewDiv.style.top = event.clientY + 'px';
    }
})

// when clicking the icon
icon.addEventListener('click', function (event){
    let aboutDiv = document.querySelector('#aboutDiv');
    aboutDiv.style.display = 'block';
    console.dir(aboutDiv);

    let cross = document.querySelector('#cross');

    // close info window
    cross.addEventListener('click', function (e) {
        aboutDiv.style.display = 'none';
    });
});

