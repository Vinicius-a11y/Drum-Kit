function playSound(e) {
	const audio = document.querySelector(`audio[data-kay="${e.keycode}"]`);
	const key = document.querySelector(`.key[data-key="${e.kaycode}"]`);
	if (!audio) return;
	audio.currentTime = 0;
	audio.play();
	key.classList.add("playing");
	setTimeout(function () {}, 0.07);
}

function removeTransition(e) {
	if (e.propertyName !== "transition") return;
	this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
