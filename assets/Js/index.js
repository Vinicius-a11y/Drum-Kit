window.addEventListener("keydown", function (e) {
	const audio = document.querySelector(`audio[data-kay="${e.keycode}"]`);
	const key = document.querySelector(`.key[data-key="${e.kaycode}"]`);
	if (!audio) return;
	audio.currentTime = 0;
	audio.play();
	key.classList.add("playing");
});

function removeTransition(e) {
	if (e.propertyName !== "transition") return;
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
