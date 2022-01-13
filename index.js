const dropDownContainer = document.querySelector('.drop-container');
dropDownContainer.addEventListener('mouseenter', () => {
  const menu = document.querySelector('.drop-down');
  menu.classList.remove('d-none');
});
dropDownContainer.addEventListener('mouseleave', () => {
  const menu = document.querySelector('.drop-down');
  menu.classList.add('d-none');
});

// sticky nav positioning
const header = document.querySelector('.main-header');
const nav1 = document.querySelector('.nav1');
const nav2 = document.querySelector('.nav3');
window.addEventListener('scroll', () => {
  const scrollHeight = window.scrollY;
  const navHeight = header.offsetHeight;
  if (scrollHeight > navHeight - 20) {
    nav1.classList.add('sticky');

    nav2.classList.add('sticky');
  } else {
    nav1.classList.remove('sticky');
    nav2.classList.remove('sticky');
  }
});
