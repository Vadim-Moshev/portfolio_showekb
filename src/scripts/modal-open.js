const getById = (id) => document.getElementById(id);

const toggleScrollVisibility = (flag) => {
  const str = flag ? "auto" : "hidden";
  document.body.style.overflow = str;
};

const closePopupButon = getById("close-popup");
const overlay = getById("overlay");
const popup = getById("popup");
const orderButtonHeader = getById("order-button-header");
const orderButtonFooter = getById("order-button-footer");

const openPopupHandler = () => {
  toggleScrollVisibility(false);

  overlay.classList.add("modal-overlay--display-flex");
  overlay.addEventListener("transitionend", function finishAnimation() {
    popup.classList.add("modal-popup--visible");
    overlay.removeEventListener("transitionend", finishAnimation);
  });
};

const closePopupHandler = () => {
  popup.classList.remove("modal-popup--visible");

  popup.addEventListener("transitionend", function f() {
    popup.removeEventListener("transitionend", f);

    overlay.classList.remove("modal-overlay--display-flex");

    overlay.addEventListener("transitionend", function finishAnimation() {
      overlay.removeEventListener("transitionend", finishAnimation);
      toggleScrollVisibility(true);
    });
  });
};

orderButtonHeader?.addEventListener("click", openPopupHandler);
orderButtonFooter?.addEventListener("click", openPopupHandler);

overlay?.addEventListener("click", closePopupHandler);

popup?.addEventListener("click", (event) => {
  event.stopPropagation();
});

closePopupButon?.addEventListener("click", closePopupHandler);
