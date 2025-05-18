const text = `Jo 💖

I know you're not mine, and maybe you'll never be...
But that doesn't stop my heart from loving you — every single day.

You're the love of my life, and even if you're far,
I’ll always be your Shan from a distance.

Happy Birthday 💫
`;

const output = document.getElementById("finalMessage");
let i = 0;
const speed = 40;

function typeText() {
if (i < text.length) {
output.innerHTML += text.charAt(i);
i++;
setTimeout(typeText, speed);
}
}

window.addEventListener("click", () => {
const music = document.getElementById("bgMusic");
if (music && music.paused) {
music.play();
}
});

window.onload = () => {
typeText();
};
const container = document.getElementById('effects-container');

function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.top = Math.random() * 100 + 'vh';
  container.appendChild(heart);

  setTimeout(() => heart.remove(), 3000);
}

function createRaindrop() {
  const drop = document.createElement('div');
  drop.className = 'raindrop';
  drop.style.left = Math.random() * 100 + 'vw';
  drop.style.top = '-10px';
  container.appendChild(drop);

  setTimeout(() => drop.remove(), 1500);
}

setInterval(createHeart, 500); // Hearts pop up
setInterval(createRaindrop, 100); // Rain
