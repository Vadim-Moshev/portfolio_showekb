import initFadeSlider from "./utils/fade-slider.js";

const slidesContainer = document.querySelector(
  ".events-slider__slides-container"
);
const slidesSwitchItems = document.querySelectorAll(".events-slider__radio");

initFadeSlider(slidesContainer, slidesSwitchItems);
