const getById = (id) => document.getElementById(id);

const toggleScrollVisibility = (flag) => {
  const str = flag ? "auto" : "hidden";
  document.body.style.overflow = str;
};

const closePopupButon = getById("close-popup");
const overlay = getById("overlay");

const closePopupHandler = () => {
  overlay.classList.remove("modal-overlay--visible");
  toggleScrollVisibility(true);
};

closePopupButon?.addEventListener("click", closePopupHandler);
