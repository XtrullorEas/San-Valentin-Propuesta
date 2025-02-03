"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".buttonsi");
const noButton = document.querySelector(".buttonno");
const finalButton = document.querySelector(".buttonfinal");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "Siiiii Sabia que elegirias esto!! :3";
  //buttonsContainer.classList.add("hidden");
  yesButton.style.display = "none";
  noButton.style.display = "none";
  finalButton.style.display = "flex";
  changeImage("yes");
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "No",
    "¿Estas segura?",
    "Negrita Por Favor",
    "No me hagas esto :(",
    "Me estás rompiendo el corazón",
    "Voy a llorar...",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}