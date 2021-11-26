const hover1 = document.getElementById("button1");
const hover2 = document.getElementById("button2");
const hover3 = document.getElementById("button3");
const hover4 = document.getElementById("button4");
const hover5 = document.getElementById("button5");
const hover6 = document.getElementById("button6");
let textContainer = document.getElementById("interchangableText");
const defTextDisplayed = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet vulputate nibh. Nam vel dui aliquam, sollicitudin neque eu, mollis lacus. Praesent egestas velit a justo mollis fringilla. Donec ullamcorper luctus urna, et efficitur tellus rutrum non. Ut ultrices varius ante, ut pellentesque erat tristique eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet placerat lacus.';


const soporteTecnico = "Brindamos soporte tecnico tanto a empresas como a particulares, ... ";
const seguridadVigilancia = "Segurida y vigilancia blablablablablablablabla blablablablablablablabla blablablablablablablabla blablablablablablablabla blablablablablablablabla";
const mantenimientoActualizacion = "Holaaaaaaaaaaaaaaaaaaaaaaaaaaa a a a a a";
const backups = "Backups backups aaa backups a a a blablablablablablablabla";
const accesorios = "accesorios";
const lastItem = "Este item falta rellenarlo, posiblemente vaya dise;o web o algun otro punto te interes";


function hoverText(currentBtn) {
    let toEval = currentBtn.id;
    switch (toEval) {
        case 'button1':
            textContainer.innerHTML = soporteTecnico; break;
        case 'button2':
           textContainer.innerHTML = seguridadVigilancia; break;
        case 'button3':
            textContainer.innerHTML = mantenimientoActualizacion; break;
        case 'button4':
            textContainer.innerHTML = backups; break;
        case 'button5':
            textContainer.innerHTML = accesorios; break;
        case 'button6':
            textContainer.innerHTML = lastItem; break;
        default:
            textContainer.innerHTML = defTextDisplayed; break;
}
}

function defText() {
    textContainer.innerHTML = defTextDisplayed;
}
