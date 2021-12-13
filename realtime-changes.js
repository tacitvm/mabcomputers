const click1 = document.getElementById("button1");
const click2 = document.getElementById("button2");
const click3 = document.getElementById("button3");
const click4 = document.getElementById("button4");
const click5 = document.getElementById("button5");
const click6 = document.getElementById("button6");
let textContainer = document.getElementById("interchangableText");
const defTextDisplayed = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet vulputate nibh. Nam vel dui aliquam, sollicitudin neque eu, mollis lacus. Praesent egestas velit a justo mollis fringilla. Donec ullamcorper luctus urna, et efficitur tellus rutrum non. Ut ultrices varius ante, ut pellentesque erat tristique eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet placerat lacus.';


const soporteTecnico = "Nos encargamos de identificar el problema tanto de software como hardware para brindarte la mejor solución a tu alcance. Reparamos computadoras de escritorio, notebooks y netbooks. Sí tenés un problema de software con algún programa, incluso podemos solucionarlo remotamente. (aca va contacto mas rapido, sea telefono, whatsapp, etc) con un botón CTA";
const seguridadVigilancia = "Trabajamos con equipos de las mejores marcas para darte lo último en tecnología y ofrecerte mayor seguridad y resguardo, en tu hogar, en tu espacio de trabajo o donde lo necesites. Hacemos instalación y configuración de toda la red. Consultanos para asesorarte sobre la mejor opción.";
const mantenimientoActualizacion = "La tecnología avanza a pasos agigantados y esta presente en casi todas las áreas de trabajo y entretenimiento. Te asesoramos en tu próximo paso informático o en el cuidado de tu actual equipo. Ahorrá contratiempos y dolores de cabeza; realizamos chequeos y limpieza en tu computadora para que todo funcione correctamente.";
const backups = "¿Te pasó que perdiste algún archivo de suma importancia? Nunca más. Realizamos copias de seguridad para que tengas disponible siempre todo el material que guardes en tu computadora. Con nuestro sistema de enlace podemos recuperar todos los datos que necesites, cuando los necesites.";
const accesorios = "Tenemos todos los accesorios para tu computadora, teclados, cámaras web, discos externos, pendrives, cables HDMI, adaptadores y muchísimo más. ¡Contactate!";
const lastItem = "¿Querés darle más visibilidad y profesionalidad a tu negocio? Diseñamos páginas web a medida, ETC";


function showText(currentBtn) {
    let toEval = currentBtn.id;
        textContainer.style.transition = 'opacity';
        textContainer.style.transitionDuration = "0.3s";
        textContainer.style.opacity = '0';
    switch (toEval) {
        case 'button1':
            textContainer.innerHTML = soporteTecnico;
            textContainer.style.opacity = '1';
            break;
        case 'button2':
            textContainer.innerHTML = seguridadVigilancia;
            textContainer.style.opacity = '1';
            break;
        case 'button3':
            textContainer.innerHTML = backups;
            textContainer.style.opacity = '1';
            break;
        case 'button4':
            textContainer.innerHTML = mantenimientoActualizacion;
            textContainer.style.opacity = '1';
            break;
        case 'button5':
            textContainer.innerHTML = accesorios;
            textContainer.style.opacity = '1';
            break;
        case 'button6':
            textContainer.innerHTML = lastItem;
            textContainer.style.opacity = '1';
            break;
        default:
            textContainer.innerHTML = defTextDisplayed;
            textContainer.style.opacity = '1';
            break;
}
}

function defText(currentHover) {
    textContainer.style.transition = 'opacity 0.3s';
    textContainer.style.opacity = '0';
    console.log(currentHover);
    switch (currentHover.id){
    case 'button1':
        click2.style.opacity = '1';
        click3.style.opacity = '1';
        click4.style.opacity = '1';
        click5.style.opacity = '1';
        click6.style.opacity = '1';
        break;
    case 'button2':
        click1.style.opacity = '1';
        click3.style.opacity = '1';
        click4.style.opacity = '1';
        click5.style.opacity = '1';
        click6.style.opacity = '1';
        break;
    case 'button3':
        click1.style.opacity = '1';
        click2.style.opacity = '1';
        click4.style.opacity = '1';
        click5.style.opacity = '1';
        click6.style.opacity = '1';
        break;
    case 'button4':
        click1.style.opacity = '1';
        click2.style.opacity = '1';
        click3.style.opacity = '1';
        click5.style.opacity = '1';
        click6.style.opacity = '1';
        break;
    case 'button5':
        click1.style.opacity = '1';
        click2.style.opacity = '1';
        click3.style.opacity = '1';
        click4.style.opacity = '1';
        click6.style.opacity = '1';
        break;
    case 'button6':
        click1.style.opacity = '1';
        click2.style.opacity = '1';
        click3.style.opacity = '1';
        click4.style.opacity = '1';
        click5.style.opacity = '1';

}
}

function changeOpac(hoveredItem) {
    (hoveredItem.id != 'button1') ? click1.style.opacity = '0.5' : '';
    (hoveredItem.id != 'button2') ? click2.style.opacity = '0.5' : '';
    (hoveredItem.id != 'button3') ? click3.style.opacity = '0.5' : '';
    (hoveredItem.id != 'button4') ? click4.style.opacity = '0.5' : '';
    (hoveredItem.id != 'button5') ? click5.style.opacity = '0.5' : '';
    (hoveredItem.id != 'button6') ? click6.style.opacity = '0.5' : '';

}
