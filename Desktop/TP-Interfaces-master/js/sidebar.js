const sidebar = document.createElement("sidebar");
sidebar.innerHTML = `
    <div class="sidebar" id="sidebar">
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="socios.html">Socios</a></li>
            <li><a href="actividades.html">Actividades</a></li>
            <li><a href="contacto.html">Contacto</a></li>
            <li><a href="galeria.html">Galería</a></li>
            <li><a href="noticias.html">Noticias</a></li>
        </ul>
    </div>`;

    document.addEventListener("DOMContentLoaded", () => {
        const sidebarContainer = document.getElementById("sidebar-container");
        sidebarContainer.appendChild(sidebar);
    });