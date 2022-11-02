function changeScreen(newScreen) {
    pages = document.getElementsByTagName("section");
    for (let i = 0; i < 6; i++) {
        pages[i].setAttribute("style", "visibility: hidden;");
    }
    document.getElementById(newScreen).setAttribute("style", "visibility: visible;");
    document.getElementById('navIcon').setAttribute("style", "visibility: visible;");
    
}
function showMenu() {
    document.getElementById('popout').setAttribute("style", "visibility: visible;");
    document.getElementById('navIcon').setAttribute("style", "visibility: hidden;");
}
function closeMenu() {
    document.getElementById('popout').setAttribute("style", "visibility: hidden;");
    document.getElementById('navIcon').setAttribute("style", "visibility: visible;");
}