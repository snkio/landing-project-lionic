const burgerMenu = document.getElementById("burger");
const headerList = document.getElementById("headertoggle");
const headerLink = document.querySelectorAll(".header__link");

burgerMenu.addEventListener("click", () => {
  headerList.classList.toggle("active");
});

headerLink.forEach((i) => {
  i.addEventListener("click", () => {
    headerList.classList.remove("active");
  });
});
