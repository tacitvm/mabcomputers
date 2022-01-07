const click1 = document.getElementById("button1");
const click2 = document.getElementById("button2");
const click3 = document.getElementById("button3");
const click4 = document.getElementById("button4");
const click5 = document.getElementById("button5");
const click6 = document.getElementById("button6");
let textContainer = document.getElementById("interchangableText");
const soporteTecnico = "Nos encargamos de identificar el problema tanto de software como hardware para brindarte la mejor solución a tu alcance. Reparamos computadoras de escritorio, notebooks y netbooks. Sí tenés un problema de software con algún programa, incluso podemos solucionarlo remotamente.";
const seguridadVigilancia = "Trabajamos con equipos de las mejores marcas para darte lo último en tecnología y ofrecerte mayor seguridad y resguardo, en tu hogar, en tu espacio de trabajo o donde lo necesites. Hacemos instalación y configuración de toda la red. Consultanos para asesorarte sobre la mejor opción.";
const mantenimientoActualizacion = "La tecnología avanza a pasos agigantados y esta presente en casi todas las áreas de trabajo y entretenimiento. Te asesoramos en tu próximo paso informático o en el cuidado de tu actual equipo. Ahorrá contratiempos y dolores de cabeza; realizamos chequeos y limpieza en tu computadora para que todo funcione correctamente.";
const backups = "¿Te pasó que perdiste algún archivo de suma importancia? Nunca más. Realizamos copias de seguridad para que tengas disponible siempre todo el material que guardes en tu computadora. Con nuestro sistema de enlace podemos recuperar todos los datos que necesites, cuando los necesites.";
const accesorios = "Tenemos todos los accesorios para tu computadora, teclados, cámaras web, discos externos, pendrives, cables HDMI, adaptadores y muchísimo más.";
const lastItem = "¿Querés darle más visibilidad y profesionalidad a tu negocio? Diseñamos páginas web a medida.";


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

const mobItemClick1 = document.getElementById("mob-btn-1");
const mobItemClick2 = document.getElementById("mob-btn-2");
const mobItemClick3 = document.getElementById("mob-btn-3");
const mobItemClick4 = document.getElementById("mob-btn-4");
const mobItemClick5 = document.getElementById("mob-btn-5");
const mobItemClick6 = document.getElementById("mob-btn-6");

counter1 = 0;
counter2 = 0;
counter3 = 0;
counter4 = 0;
counter5 = 0;
counter6 = 0;


mobItemClick1.onclick = function(){
    if (counter1 === 0 ) {
            descriptionContainer1 = document.createElement('div');
            descriptionText1 = document.createElement('p');
            descriptionContainer1.appendChild(descriptionText1);
            descriptionText1.innerHTML = soporteTecnico;
            descriptionText1.setAttribute('CLASS', 'removableButton');
            descriptionText1.setAttribute('ID', 'removable1Button');
            this.insertAdjacentHTML('afterend', descriptionContainer1.innerHTML);
            counter1++;
    } else {
        removableButton1 = document.getElementById('removable1Button');
        removableButton1.remove();
        counter1--;
    }
};

mobItemClick2.onclick = function(){
    if (counter2 === 0 ) {
            descriptionContainer2 = document.createElement('div');
            descriptionText2 = document.createElement('p');
            descriptionContainer2.appendChild(descriptionText2);
            descriptionText2.innerHTML = seguridadVigilancia;
            descriptionText2.setAttribute('CLASS', 'removableButton');
            descriptionText2.setAttribute('ID', 'removable2Button');
            this.insertAdjacentHTML('afterend', descriptionContainer2.innerHTML);
            counter2++;
    } else {
        removableButton2 = document.getElementById('removable2Button');
        removableButton2.remove();
        counter2--;
    }
};

mobItemClick3.onclick = function(){
    if (counter3 === 0 ) {
            descriptionContainer3 = document.createElement('div');
            descriptionText3 = document.createElement('p');
            descriptionContainer3.appendChild(descriptionText3);
            descriptionText3.innerHTML = backups;
            descriptionText3.setAttribute('CLASS', 'removableButton');
            descriptionText3.setAttribute('ID', 'removable3Button');
            this.insertAdjacentHTML('afterend', descriptionContainer3.innerHTML);
            counter3++;
    } else {
        removableButton3 = document.getElementById('removable3Button');
        removableButton3.remove();
        counter3--;
    }
};

mobItemClick4.onclick = function(){
    if (counter4 === 0 ) {
            descriptionContainer4 = document.createElement('div');
            descriptionText4 = document.createElement('p');
            descriptionContainer4.appendChild(descriptionText4);
            descriptionText4.innerHTML = mantenimientoActualizacion;
            descriptionText4.setAttribute('CLASS', 'removableButton');
            descriptionText4.setAttribute('ID', 'removable4Button');
            this.insertAdjacentHTML('afterend', descriptionContainer4.innerHTML);
            counter4++;
    } else {
        removableButton4 = document.getElementById('removable4Button');
        removableButton4.remove();
        counter4--;
    }
};

mobItemClick5.onclick = function(){
    if (counter5 === 0 ) {
            descriptionContainer5 = document.createElement('div');
            descriptionText5 = document.createElement('p');
            descriptionContainer5.appendChild(descriptionText5);
            descriptionText5.innerHTML = accesorios;
            descriptionText5.setAttribute('CLASS', 'removableButton');
            descriptionText5.setAttribute('ID', 'removable5Button');
            this.insertAdjacentHTML('afterend', descriptionContainer5.innerHTML);
            counter5++;
    } else {
        removableButton5 = document.getElementById('removable5Button');
        removableButton5.remove();
        counter5--;
    }
};

mobItemClick6.onclick = function(){
    if (counter6 === 0 ) {
            descriptionContainer6 = document.createElement('div');
            descriptionText6 = document.createElement('p');
            descriptionContainer6.appendChild(descriptionText6);
            descriptionText6.innerHTML = lastItem;
            descriptionText6.setAttribute('CLASS', 'removableButton');
            descriptionText6.setAttribute('ID', 'removable6Button');
            this.insertAdjacentHTML('afterend', descriptionContainer6.innerHTML);
            counter6++;
    } else {
        removableButton6 = document.getElementById('removable6Button');
        removableButton6.remove();
        counter6--;
    }
};





