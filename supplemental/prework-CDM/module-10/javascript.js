
// Action and event handler for Btn1 - Grow
document.getElementById("Btn1").addEventListener("click", function() {
	document.getElementById("box").style.height = "250px";
	document.getElementById("box").style.width = "250px";
});

// Action and event handler for Btn2 - Blue
document.getElementById("Btn2").addEventListener("click", function() {
	document.getElementById("box").style.backgroundColor = "blue";
});

// Action and event handler for Btn3 - Fade
document.getElementById("Btn3").addEventListener("click", function() {
	document.getElementById("box").style.opacity = "0.5";
});

// Action and event handler for Btn4 - Reset
document.getElementById("Btn4").addEventListener("click", function() {
	document.getElementById("box").style.height = "150px";
	document.getElementById("box").style.width = "150px";
	document.getElementById("box").style.backgroundColor = "orange";
	document.getElementById("box").style.margin = "25px";
	document.getElementById("box").style.opacity = "100";
});