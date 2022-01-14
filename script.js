var song = document.getElementById("music");
function playMusic() {
    song.play();
}
function pauseMusic() {
    song.pause();
}

function EasyChange(btn) {
}
function onoff() {
}
function showDiv() {
    document.getElementById('specialelements').style.display = 'block';
}
window.addEventListener("load", function () {
	setTimeout(
		function open(event){
			document.querySelector(".popup").style.display = "block";
		},
		1 
	)
});
document.querySelector("#close").addEventListener("click", function(){
	document.querySelector(".popup").style.display = "none";
});