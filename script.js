document.addEventListener('DOMContentLoaded', function() {
    // Obtiene el botón para cambiar el modo oscuro
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    // Obtiene el elemento del body y la barra de navegación
    const body = document.body;
    const navbar = document.querySelector('.navbar');

    // Verifica si el usuario tiene configurado un modo oscuro en su navegador
    const darkModeEnabled = localStorage.getItem('darkMode') === 'enabled';

    // Si el modo oscuro está activado, lo aplica
    if (darkModeEnabled) {
        body.classList.add('dark-mode');
        navbar.classList.add('dark-mode');
    }

    // Event listener para cambiar el modo oscuro al hacer clic en el botón
    darkModeToggle.addEventListener('click', function() {
        const isDarkMode = body.classList.contains('dark-mode');

        if (isDarkMode) {
            // Si ya está en modo oscuro, lo desactiva
            body.classList.remove('dark-mode');
            navbar.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'disabled');
        } else {
            // Si no está en modo oscuro, lo activa
            body.classList.add('dark-mode');
            navbar.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled');
        }
    });
});
