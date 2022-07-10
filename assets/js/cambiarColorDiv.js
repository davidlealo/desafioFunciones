var a = 'aquamarine';
var s = 'blueviolet';
var d = 'chocolate';


function cambiarColor(elementId) {
    elemento = document.querySelector('#' + elementId);
    document.addEventListener('keydown', function (event) {
        if (event.key === 'a') {
            elemento.style.backgroundColor = a;
        } else if (event.key === 's') {
            elemento.style.backgroundColor = s;
        } else if (event.key === 'd'){
            elemento.style.backgroundColor = d;
        }})
    }