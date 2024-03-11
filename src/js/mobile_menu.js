const mobMenuBtn = document.querySelector('.mob_menu_btn');
const headerNavList = document.querySelector('.header_nav_list');

mobMenuBtn.addEventListener('click', mobileMenu);

function mobileMenu() {
  mobMenuBtn.classList.toggle('active');
  headerNavList.classList.toggle('active');
}

const navLink = document.querySelectorAll('.header_nav_list_item_link');

navLink.forEach(n => n.addEventListener('click', closeMenu));

function closeMenu() {
  mobMenuBtn.classList.remove('active');
  headerNavList.classList.remove('active');
}
