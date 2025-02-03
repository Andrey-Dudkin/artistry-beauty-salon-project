// * burger menu
const burgerBtn = document.querySelector(".burger-menu__btn");
const burgerIcon = document.querySelector(".burger-menu__icon");
const navbar = document.querySelector(".navbar")
burgerBtn.addEventListener("click", function(){
	burgerIcon.classList.toggle("burger-menu__icon--active");
	navbar.classList.toggle("navbar--open");
});

// * tabs
const tabButtons = document.querySelectorAll('.services-tabs__button');
const tabContent = document.querySelectorAll('.services-tabs__content');
tabButtons.forEach(btn => {
  btn.addEventListener('click', function () {
    let currentBtn = btn;
    let tabId = currentBtn.getAttribute('data-tab');
    let currentTab = document.querySelector(tabId);
    tabButtons.forEach(btn => {
      btn.classList.remove('services-tabs__button--active');
    });
    tabContent.forEach(tab => {
      tab.classList.remove('services-tabs__content--active');
    });
    currentBtn.classList.add('services-tabs__button--active');
    currentTab.classList.add('services-tabs__content--active');
  })
});

// *slider
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});