var audio = document.createElement('audio');
audio.setAttribute('src', 'sound.mp3');
audio.loop=true;

function startSound() {
    audio.play();
};

document.addEventListener("click", startSound, {once: true});
document.addEventListener("keydown", startSound, {once: true});