const menuContainer = document.getElementById("menuContainer");
const video = document.getElementById("intro");
const isIndex = window.location.pathname === "/" || window.location.pathname.endsWith("index.html");
const welcome = document.getElementById("welcome");
const welcomeText = document.getElementById("welcomeText");

const nav = document.getElementById("nav");
if (isIndex) {
video.addEventListener("ended", () => {
  video.style.display = "none"; 
  welcome.style.display = "none";
  menuContainer.style.display = "flex"; 
  welcomeText.style.display = "flex"; 
  nav.style.display = "flex"; // Menü anzeigen

});
}


if (!isIndex) {
  menuContainer.style.display = "flex";
    nav.style.display = "flex"; // Menü anzeigen
}

