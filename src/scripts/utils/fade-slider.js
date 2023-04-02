const initFadeSlider = (slidesContainer, slidesSwitchItems) => {
  slidesSwitchItems?.forEach((item) => {
    item.addEventListener("change", (event) => {
      const currentSlide = slidesContainer.querySelector(".slide-visible");
      currentSlide.classList.remove("slide-visible");

      const slideToShow = slidesContainer.querySelector(`.${event.target.id}`);
      slideToShow.classList.add("slide-visible");
    });
  });
};

export default initFadeSlider;
