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
  alert("хай!");
};

const closePopupHandler = () => {
  overlay.classList.remove("modal-overlay--visible");
  toggleScrollVisibility(true);
};

orderButtonHeader?.addEventListener("click", openPopupHandler);
orderButtonFooter?.addEventListener("click", openPopupHandler);

overlay?.addEventListener("click", closePopupHandler);

popup?.addEventListener("click", (event) => {
  event.stopPropagation();
});

closePopupButon?.addEventListener("click", closePopupHandler);
