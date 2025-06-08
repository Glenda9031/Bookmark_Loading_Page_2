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

    
})
