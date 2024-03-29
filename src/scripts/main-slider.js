import initFadeSlider from "./utils/fade-slider.js";

const slidesContainer = document.querySelector(
  ".main-slider__slides-container"
);
const slidesSwitchItems = document.querySelectorAll(
  ".main-slider__switch-item-radio"
);

initFadeSlider(slidesContainer, slidesSwitchItems);
