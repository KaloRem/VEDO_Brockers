// I option
// When the user scrolls the page, execute myFunction
// window.onscroll = function () {
//   fixedFunction();
// };

// var header = document.querySelector('.header');
// var sticky = header.offsetTop;

// function fixedFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add('fixed');
//   } else {
//     header.classList.remove('fixed');
//   }
// }

// II option
// window.addEventListener('scroll', function () {
//   // console.log(window.scrollY);
//   let navbar = document.getElementById('header');
//   if (window.scrollY >= 100) {
//     navbar.classList.add('fixed');
//   } else {
//     navbar.classList.remove('fixed');
//   }
// });

// III option
// const header = document.querySelector('.header');

// window.addEventListener('scroll', () => {
//   const scrollX = window.scrollX || window.pageXOffset;
//   const scrollY = window.scrollY || window.pageYOffset;

//   if (scrollY > 0) {
//     header.classList.add('fixed');
//   } else {
//     header.classList.remove('fixed');
//   }
// });
