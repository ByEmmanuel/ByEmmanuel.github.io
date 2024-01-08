function scrollToSection(sectionId) {
    var targetSection = document.getElementById(sectionId);

    // Desplaza la página hacia la sección con animación
    targetSection.scrollIntoView({ behavior: 'smooth' });
}

document.querySelector('.Imagen-portafolio1').addEventListener('mouseenter', function() {
    this.classList.add('show');
});

function mostrarVentana() {
    document.getElementById('ventanaEmergente').style.display = 'flex';
    console.log("Boton mostrar ventana");
}

function cerrarVentana() {
    document.getElementById('ventanaEmergente').style.display = 'none';
    console.log("Boton cerrar ventana");
}
