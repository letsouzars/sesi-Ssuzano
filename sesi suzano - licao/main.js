
function mostrarMenu() {
    var menu = document.getElementById('menu-header');
    var icone = document.getElementById('icone');

    if (getComputedStyle(menu).display == 'none') {
        menu.style.display = "flex";
        icone.classList.remove("fa-bars");
        icone.classList.add("fa-time");
    } else {
        menu.style.display = "none";
        icone.classList.remove("fa-time");
        icone.classList.add("fa-bars");
    }
}