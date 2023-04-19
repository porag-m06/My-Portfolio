const navMenu = document.querySelector('.menu-desk');
const menuIcon = document.querySelector('.menu-icon');

const menuLinkHome = document.querySelector('.mlinkH');
const menuLinkAbout = document.querySelector('.mlinkA');
const menuLinkContact = document.querySelector('.mlinkC');

menuIcon.addEventListener('click', () => {
  const visibilityMenu = navMenu.getAttribute('item-visibility');
  const visibilityIcon = menuIcon.getAttribute('cancle-visibility');

  if (visibilityMenu === 'false' && visibilityIcon === 'false') {
    navMenu.setAttribute('item-visibility', 'true');
    menuIcon.setAttribute('cancle-visibility', 'true');
  } else {
    navMenu.setAttribute('item-visibility', 'false');
    menuIcon.setAttribute('cancle-visibility', 'false');
  }
});

menuLinkHome.addEventListener('click', () => {
  navMenu.setAttribute('item-visibility', 'false');
  menuIcon.setAttribute('cancle-visibility', 'false');
});
menuLinkAbout.addEventListener('click', () => {
  navMenu.setAttribute('item-visibility', 'false');
  menuIcon.setAttribute('cancle-visibility', 'false');
});
menuLinkContact.addEventListener('click', () => {
  navMenu.setAttribute('item-visibility', 'false');
  menuIcon.setAttribute('cancle-visibility', 'false');
});