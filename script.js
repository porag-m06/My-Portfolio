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

// -------- contact email validation STARTS --------

const form = document.querySelector('form');
const eInput = document.querySelector("#emil");
let isLower;

eInput.addEventListener("input", (event) => {
  if(eInput.value === eInput.value.toLowerCase()){
    eInput.classList.remove("warn");
    document.getElementById("demo").innerHTML = "";
  }
})

form.addEventListener("submit", (event) => {
  isLower = eInput.value === eInput.value.toLowerCase();

  if (!isLower) {
    event.preventDefault();
    eInput.className = 'warn';
    document.getElementById("demo").innerHTML = "Email address must be in lowercase!";
  }
});

// -------- contact email validation STARTS --------