
// Toggle hamburger menu
function toggleNavView() {
	var links = document.getElementsByClassName("header-links");
	var hamburger = document.getElementById("hamburger");
	var hamburgerMenu = document.getElementById("hamburger-links");
	
	hamburgerMenu.style.display = "block";
	
	hamburger.innerHTML = "<img src=\"./assets/hamburger-close.svg\" alt=\"hamburger close\">";

}