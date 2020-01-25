const box = document.querySelector(".box");

setInterval(setBorderRadius, 200);

function setBorderRadius() {
  box.style.setProperty("--br-effect", generateBorderRadiusValue());
  box.style.setProperty("--br-effect-after", generateBorderRadiusValue());
  box.style.setProperty("--br-effect-before", generateBorderRadiusValue());
}

function generateBorderRadiusValue() {
  return `${getRandomValue()}% ${getRandomValue()}% ${getRandomValue()}% ${getRandomValue()}% / ${getRandomValue()}% ${getRandomValue()}% ${getRandomValue()}%`;
}

function getRandomValue() {
  return Math.floor(Math.random() * 50) + 50;
}
