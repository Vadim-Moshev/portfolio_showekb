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

  overlay.style.display = "flex";
  setTimeout(() => {
    overlay.classList.add("modal-overlay--visible");
  }, 0);
};

const closePopupHandler = () => {
  overlay.classList.remove("modal-overlay--visible");
  overlay.addEventListener("transitionend", function animateOverlayClosing() {
    overlay.style.display = "none";
    toggleScrollVisibility(true);

    overlay.removeEventListener("transitionend", animateOverlayClosing);
  });
};

orderButtonHeader?.addEventListener("click", openPopupHandler);
orderButtonFooter?.addEventListener("click", openPopupHandler);

overlay?.addEventListener("click", closePopupHandler);

popup?.addEventListener("click", (event) => {
  event.stopPropagation();
});

closePopupButon?.addEventListener("click", closePopupHandler);
