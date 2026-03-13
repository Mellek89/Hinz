const menuContainer = document.getElementById("menuContainer");
const video = document.getElementById("intro");
const isIndex = window.location.pathname === "/" || window.location.pathname.endsWith("index.html");


if (isIndex) {
video.addEventListener("ended", () => {
  video.style.display = "none"; // Video ausblenden
  menuContainer.style.display = "flex"; // Menü anzeigen
});
}


if (!isIndex) {
  menuContainer.style.display = "flex";
}