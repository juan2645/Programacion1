const header = document.createElement("header");
header.innerHTML = `
<header class="header">
    <img class="logo" src="images/encabezado.jpg" alt="logo">
    <div class="redes">
        <a href="https://www.facebook.com/sociedadfomento.marianomoreno.14?locale=es_LA"> <img src="images/LogoFacebook.png" alt=""></a>
        <a href="https://www.instagram.com/explore/locations/2031832467057111/club-mariano-moreno-olavarria/"> <img src="images/LogoInstagram.png" alt=""></a>
        <a href="https://www.youtube.com/watch?v=cNnMPwy-WLU"><img src="images/LogoYoutube.png" alt=""></a>
    </div>  
</header>
`;

document.addEventListener("DOMContentLoaded", () => {
  const headerContainer = document.getElementById("header-container");
  headerContainer.appendChild(header);
});