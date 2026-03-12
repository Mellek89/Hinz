const menuContainer = document.getElementById("menuContainer");
const video = document.getElementById("intro");


video.addEventListener("ended", () => {
  video.style.display = "none"; // Video ausblenden
  menuContainer.style.display = "flex"; // Menü anzeigen
});