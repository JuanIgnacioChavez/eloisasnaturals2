const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", this.window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}

document.querySelectorAll('.navmenu a, .social-icon a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();  // Evita el comportamiento predeterminado

        const targetID = this.getAttribute('href');  // Obtiene el ID del destino del enlace

        // Verifica si el objetivo es el enlace de Instagram
        if (targetID === '#instagram') {
            window.location.href = 'https://www.instagram.com/eloisas.naturals/';
        } else {
            const targetSection = document.querySelector(targetID);  // Selecciona la sección objetivo

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - header.offsetHeight,  // Ajusta el desplazamiento teniendo en cuenta la altura del header
                    behavior: 'smooth'  // Habilita el desplazamiento suave
                });
            }
        }

        // Cierra el menú después de hacer clic en un enlace (si es un menú móvil)
        menu.classList.remove('bx-x');
        navmenu.classList.remove('open');
    });
});

