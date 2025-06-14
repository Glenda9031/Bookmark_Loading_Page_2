"use strict";

// tab
const tabItem = document.querySelectorAll(".tab-header-item");
const tabHeader = document.querySelector(".tab-header");
const tabContent = document.querySelectorAll(".tab-content-item");

tabHeader.addEventListener("click", function (e) {
  const clicked = e.target.closest(".tab-header-item");

  if (!clicked) return;

  // remove active class
  tabItem.forEach((t) => t.classList.remove("active"));
  tabContent.forEach((a) => a.classList.remove("active"));

  //   activate tab heading
  clicked.classList.add("active");

  //   activate content
  document
    .querySelector(`.tab-content-${clicked.dataset.tab}`)
    .classList.add("active");
});

// ============================================================

// faq accordion
const faqContainer = document.querySelector(".faq-list");
const faqItem = document.querySelectorAll(".faq-item");

faqContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".faq-header");
  if (!clicked) return;

  //   activate faq item
  clicked.parentElement.classList.toggle("active");
});

// =============================================================

// mobile navigation
const mobileMenu = document.querySelector(".mobile-navigation");
const headerContent = document.querySelector(".header-content");

headerContent.addEventListener("click", function (e) {
  const clicked = e.target.closest(".mobile-navigation");

  if (!clicked) return;
  clicked.parentElement.classList.toggle("active");
});

// form input
const inputField = document.querySelector(".newsletter-email");
const form = document.querySelector(".newsletter-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  emailValidation();
});

const isValidEmail = (input) => {
  const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return reg.test(String(input).toLocaleLowerCase());
};

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const displayError = inputControl.querySelector(".messages");

  inputControl.classList.add("error");
  inputControl.classList.remove("success");
  displayError.textContent = message;
  element.texContent = "";
};

const setSuccess = (element, message) => {
  const inputControl = element.parentElement;
  const displayError = inputControl.querySelector(".messages");

  inputControl.classList.add("success");
  inputControl.classList.remove("error");
  displayError.textContent = message;
  element.texContent = "";
};

const emailValidation = () => {
  let inputValue = inputField.value.trim();

  if (inputValue === "") {
    setError(inputField, "Whoops, email can't be empty");
  } else if (!isValidEmail(inputValue)) {
    setError(inputField, "Whoops, make sure it's an email");
  } else {
    setSuccess(inputField, "Success");
  }

  timerMessage();
};

// ======================================================================

const timerMessage = () => {
  let time = 3;

  const timer = setInterval(function () {
    time--;

    if (time === 0) {
      clearInterval(timer);
      if (inputField.parentElement.classList.contains("error")) {
        inputField.parentElement.classList.remove("error");
      }
      if (inputField.parentElement.classList.contains("success")) {
        inputField.parentElement.classList.remove("success");
      }
    }
  }, 1000);
};

// ===================================================================================

// scroll to top
const topButton = document.querySelector(".to-top");

// when scroll show button
window.onscroll = () => {
  scroll();
};

const scroll = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
};

// when user click the button

topButton.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});