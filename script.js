"use strict";

// tab
const tabItem = document.querySelectorAll(".tab-header-item");
const tabHeader = document.querySelector(".tab-header");
const tabContent = document.querySelectorAll(".tab-content-item");

tabHeader.addEventListener("click", function (e) {
    const clicked = e.target.closet(".tab-header-item");

    if (!clicked) return;
    tabItem.forEach((t) => t.classList.remove("active"));
    tabContent.forEach((a) => a.classList.remove("active"));

    tabHeader.addEventListener("click", function (e) {
    const clicked = e.target.closest(".tab-header-item");

    if (!clicked) return;
    clicked.classList.add("active");

    tabItem.forEach((t) => t.classList.remove("active"));
    tabContent.forEach((a) => a.classList.remove("active"));
    clicked.classList.add("active");

    document
        .querySelector(`.tab-content-item[data-tab="${clicked.dataset.tab}"]`)
        .classList.add("active");
    });

    const faqContainer = document.querySelector(".faq-list");
    const faqItem = document.querySelectorAll(".faq-item");

    faqContainer.addEventListener("click", function (e) {
        const clicked = e.target.closest(".faq-header");
        if (!clicked) return;

        clicked.parentElement.classList.toggle("active");
    });

    
})
