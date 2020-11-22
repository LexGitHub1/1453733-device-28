'use strict';

const loginLink = document.querySelector(`.main-contacts-link`);
const loginPopup = document.querySelector(`.writeus`);
const loginClose = loginPopup.querySelector(`.writeus-close`);
const loginForm = loginPopup.querySelector(`.writeus-form`);
const loginLogin = loginPopup.querySelector(`.writeus-input-name`);
const loginEmail = loginPopup.querySelector(`.writeus-input-email`);
const mapLink = document.querySelector(`.option-contacts-company-img`);
const mapPopup = document.querySelector(`.modal-map`);
const mapClose = mapPopup.querySelector(`.modal-map-close`);
const promoSlides = document.querySelectorAll(`.slider-container`);
const promoSliderButtons = document.querySelectorAll(`.slider-button`);
const servicesSlides = document.querySelectorAll(`.services-container`);
const servicesSliderButtons = document.querySelectorAll(`.main-services-buttons-item`);

let isStorageSupport = true;
let storage = {};

try {
  storage = localStorage.getItem(`login`);
} catch (err) {
  isStorageSupport = false;
}

loginLink.addEventListener(`click`, function (evt) {
  evt.preventDefault();
  loginPopup.classList.add(`modal-show`);

  if (storage) {
    loginLogin.value = storage;
    loginEmail.focus();
  } else {
    loginLogin.focus();
  }
});

loginClose.addEventListener(`click`, function (evt) {
  evt.preventDefault();
  loginPopup.classList.remove(`modal-show`);
  loginPopup.classList.remove(`modal-error`);
});

loginForm.addEventListener(`submit`, function (evt) {
  if (!loginLogin.value || !loginEmail.value) {
    evt.preventDefault();
    loginPopup.classList.remove(`modal-error`);
    loginPopup.offsetWidth = loginPopup.offsetWidth;
    loginPopup.classList.add(`modal-error`);
  } else {
    if (isStorageSupport) {
      localStorage.setItem(`login`, loginLogin.value);
    }
  }
});

window.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Escape`) {
    if (loginPopup.classList.contains(`modal-show`)) {
      evt.preventDefault();
      loginPopup.classList.remove(`modal-show`);
      loginPopup.classList.remove(`modal-error`);
    }
  }
});

mapLink.addEventListener(`click`, function (evt) {
  evt.preventDefault();
  mapPopup.classList.add(`modal-show`);
});

mapClose.addEventListener(`click`, function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove(`modal-show`);
});

window.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Escape`) {
    evt.preventDefault();
    if (mapPopup.classList.contains(`modal-show`)) {
      mapPopup.classList.remove(`modal-show`);
    }
  }
});

function sliderPromo(sliderItem, controlsItem) {
  controlsItem.forEach(function (item, index) {
    item.addEventListener(`click`, function (evt) {
      evt.preventDefault();
      item.classList.add(`current`);
      sliderItem[index].classList.add(`slider-container-current`);
      for (let i = 0; i < controlsItem.length; i++) {
        if (i !== index) {
          sliderItem[i].classList.remove(`slider-container-current`);
          controlsItem[i].classList.remove(`current`);
        }
      }
    });
  });
};

function sliderServices(sliderItem, controlsItem) {
  controlsItem.forEach(function (item, index) {
    item.addEventListener(`click`, function (evt) {
      evt.preventDefault();
      item.classList.add(`current`);
      sliderItem[index].classList.add(`services-container-current`);
      for (let i = 0; i < controlsItem.length; i++) {
        if (i !== index) {
          sliderItem[i].classList.remove(`services-container-current`);
          controlsItem[i].classList.remove(`current`);
        }
      }
    });
  });
};

sliderPromo(promoSlides, promoSliderButtons);
sliderServices(servicesSlides, servicesSliderButtons);
