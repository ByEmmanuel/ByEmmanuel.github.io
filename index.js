function scrollToSection(sectionId) {
    var targetSection = document.getElementById(sectionId);

    // Desplaza la página hacia la sección con animación
    targetSection.scrollIntoView({ behavior: 'smooth' });
}

