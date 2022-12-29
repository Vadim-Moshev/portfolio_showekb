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

  // const promise = new Promise((resolve, reject) => {
  //   overlay.style.display = "flex";
  //   setTimeout(() => {
  //     resolve();
  //   }, 1);
  // });

  // promise
  //   .then(() => {
  //     overlay.classList.add("modal-overlay--visible");
  //   })
  //   .then(() => {
  //     popup.classList.add("modal-popup--visible");
  //   });

  overlay.style.display = "flex";
  setTimeout(() => {
    overlay.classList.add("modal-overlay--visible");
    overlay.addEventListener("transitionend", function finishAnimation() {
      popup.classList.add("modal-popup--visible");
      overlay.removeEventListener("transitionend", finishAnimation);
    });
  }, 0);
};

const closePopupHandler = () => {
  popup.classList.remove("modal-popup--visible");
  popup.addEventListener("transitionend", function f() {
    overlay.classList.remove("modal-overlay--visible");
    overlay.addEventListener("transitionend", function finishAnimation() {
      overlay.style.display = "none";

      overlay.removeEventListener("transitionend", finishAnimation);
    });
    popup.removeEventListener("transitionend", f);
  });

  toggleScrollVisibility(true);
};

orderButtonHeader?.addEventListener("click", openPopupHandler);
orderButtonFooter?.addEventListener("click", openPopupHandler);

overlay?.addEventListener("click", closePopupHandler);

popup?.addEventListener("click", (event) => {
  event.stopPropagation();
});

closePopupButon?.addEventListener("click", closePopupHandler);
