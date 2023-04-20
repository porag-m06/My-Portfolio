// -------- mobile menu navigation STARTS --------
const navMenu = document.querySelector('.menu-desk');
const menuIcon = document.querySelector('.menu-icon');
const menuLinks = document.querySelectorAll('.mlink');

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

for (let i = 0; i < menuLinks.length; i += 1) {
  menuLinks[i].addEventListener('click', () => {
    navMenu.setAttribute('item-visibility', 'false');
    menuIcon.setAttribute('cancle-visibility', 'false');
  });
}
// -------- mobile menu navigation ENDS --------

// -------- Data Preservation in browser START--------
// -------- Data Preservation in browser END--------
