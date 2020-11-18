var loginLink = document.querySelector(".main-contacts-link");
var loginPopup = document.querySelector(".writeus");
var loginClose = loginPopup.querySelector(".writeus-close");
var loginForm = loginPopup.querySelector(".writeus-form");
var loginLogin = loginPopup.querySelector(".writeus-input-name");
var loginEmail = loginPopup.querySelector(".writeus-input-email");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

loginLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.add("modal-show");

  if (storage) {
    loginLogin.value = storage;
    loginEmail.focus();
  } else {
    loginLogin.focus();
  }
});

loginClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.remove("modal-show");
  loginPopup.classList.remove("modal-error");
});

loginForm.addEventListener("submit", function (evt) {
  if (!loginLogin.value || !loginEmail.value) {
    evt.preventDefault();
    loginPopup.classList.remove("modal-error");
    loginPopup.offsetWidth = loginPopup.offsetWidth;
    loginPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", loginLogin.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    if (loginPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      loginPopup.classList.remove("modal-show");
      loginPopup.classList.remove("modal-error");
    }
  }
});

var mapLink = document.querySelector(".option-contacts-company-img");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-map-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    evt.preventDefault();
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
    }
  }
});
