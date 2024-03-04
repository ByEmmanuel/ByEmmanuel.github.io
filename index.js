function scrollToSection(sectionId) {
    var targetSection = document.getElementById(sectionId);

    // Desplaza la página hacia la sección con animación
    targetSection.scrollIntoView({ behavior: 'smooth' });
    targetSection.scrollTo({sectionId})
    
    scroll({
        top: offsetTop,
        behavior: "smooth"
      });
    
}



function mostrarVentana(numero) {
    switch (numero){
        case 1:
            document.getElementById("PopUp1").style.display = 'flex';
            break;
        case 2:
            document.getElementById("PopUp2").style.display = 'flex';
            break;
        case 3:
            document.getElementById("PopUp3").style.display = 'flex';
            break;
        case 4:
            document.getElementById("PopUp4").style.display = 'flex';
            break;
            default:
                break;
    }
    console.log(numero);
}

function cerrarVentana(numero) {
    document.getElementById('PopUp1').style.display = 'none';
    document.getElementById('PopUp2').style.display = 'none';
    document.getElementById('PopUp3').style.display = 'none';
    document.getElementById('PopUp4').style.display = 'none';
    
    console.log(numero);
}