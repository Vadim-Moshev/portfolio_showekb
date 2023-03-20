const slidesSwitchItems = document.querySelectorAll(
  ".main-slider__switch-item-radio"
);

const slides = document.querySelector(".main-slider__slides-container");

slidesSwitchItems?.forEach((item) => {
  item.addEventListener("change", (event) => {
    const currentSlide = slides.querySelector(".slide-visible");
    currentSlide.classList.remove("slide-visible");

    const slideToShow = slides.querySelector(`.${event.target.id}`);
    slideToShow.classList.add("slide-visible");
  });
});
