const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const icon = $(".meanmenu-reveal");
const menu_mobi = $(".main_menu_list-mobi");
const icon_menu = $$(".meanmenu-reveal-click");

icon.addEventListener("click", function () {
  icon.classList.toggle("is-active");
  menu_mobi.classList.toggle("new");
});

icon_menu.forEach((tab, index) => {
  const classed = icon_menu[index];
  tab.onclick = function () {
    classed.classList.toggle("active-click");
  };
});
