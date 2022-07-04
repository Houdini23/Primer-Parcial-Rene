var menuHamburger = document.getElementById("idMenu");
var btnHome = document.getElementById("btnHome");
var btnContactanos = document.getElementById("btnContactanos");
var btnMapa = document.getElementById("btnMapa");
var btnPerfil = document.getElementById("btnPerfil");

menuHamburger.addEventListener("click", () => {
    var navMenu = document.getElementById("menu");
    if (navMenu.className == "noVisible") {
        navMenu.classList.remove("noVisible");
        navMenu.classList.add("siVisible");
  
    } else {
        navMenu.classList.remove("siVisible");
        navMenu.classList.add("noVisible");

    }
})

btnHome.addEventListener("click", () => {
    var navMenu = document.getElementById("Home");
    if (navMenu.className == "noVisibleMain") {
        navMenu.classList.remove("noVisibleMain");
        navMenu.classList.add("siVisibleMain");
        document.getElementById("Contactanos").classList.remove("siVisibleMain");
        document.getElementById("Contactanos").classList.add("noVisibleMain");
        document.getElementById("Mapa").classList.remove("siVisibleMain");
        document.getElementById("Mapa").classList.add("noVisibleMain");
        document.getElementById("MiPerfil").classList.remove("siVisibleMain");
        document.getElementById("MiPerfil").classList.add("noVisibleMain");
    } 
})

btnContactanos.addEventListener("click", () => {
    var navMenu = document.getElementById("Contactanos");
    if (navMenu.className == "noVisibleMain") {
        navMenu.classList.remove("noVisibleMain");
        navMenu.classList.add("siVisibleMain");
        document.getElementById("Home").classList.remove("siVisibleMain");
        document.getElementById("Home").classList.add("noVisibleMain");
        document.getElementById("Mapa").classList.remove("siVisibleMain");
        document.getElementById("Mapa").classList.add("noVisibleMain");
        document.getElementById("MiPerfil").classList.remove("siVisibleMain");
        document.getElementById("MiPerfil").classList.add("noVisibleMain");
    }
})

btnMapa.addEventListener("click", () => {
    var navMenu = document.getElementById("Mapa");
    if (navMenu.className == "noVisibleMain") {
        navMenu.classList.remove("noVisibleMain");
        navMenu.classList.add("siVisibleMain");
        document.getElementById("Contactanos").classList.remove("siVisibleMain");
        document.getElementById("Contactanos").classList.add("noVisibleMain");
        document.getElementById("Home").classList.remove("siVisibleMain");
        document.getElementById("Home").classList.add("noVisibleMain");
        document.getElementById("MiPerfil").classList.remove("siVisibleMain");
        document.getElementById("MiPerfil").classList.add("noVisibleMain");
    }
})

btnPerfil.addEventListener("click", () => {
    var navMenu = document.getElementById("MiPerfil");
    if (navMenu.className == "noVisibleMain") {
        navMenu.classList.remove("noVisibleMain");
        navMenu.classList.add("siVisibleMain");
        document.getElementById("Contactanos").classList.remove("siVisibleMain");
        document.getElementById("Contactanos").classList.add("noVisibleMain");
        document.getElementById("Mapa").classList.remove("siVisibleMain");
        document.getElementById("Mapa").classList.add("noVisibleMain");
        document.getElementById("Home").classList.remove("siVisibleMain");
        document.getElementById("Home").classList.add("noVisibleMain");
    }
})