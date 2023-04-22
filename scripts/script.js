import projects from './projectInfo.js';

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

// -------- details popup  window STARTS --------
const cardDiv = document.querySelector('.works');
const popupContainer = document.querySelector('.popup-container');

const setPopup = (project, index) => {
  const popupDiv = document.createElement('div');

  let descriptionText = '';
  if (window.innerWidth > 767) {
    descriptionText = project.Description_lg;
  } else {
    descriptionText = project.Description_sm;
  }

  popupDiv.className = 'popup';
  popupDiv.innerHTML = `<img class="cancle-btn cancle-btn-${index}" src="./assets/mobile/CancleS.svg" alt="cancle button">
  <div class="primary-textblock">
      <h1 class="text-title">${project.titleText}</h1>
          <div class="short-description">
              <h3 class="client zero">${project.shortInfoDes[0]}</h3>
              <img src="./assets/port-snaps/Counter.svg" alt="counter icon">
              <h4 class="client-tech zero">${project.shortInfoDes[1]}</h4>
              <img src="./assets/port-snaps/Counter.svg" alt="counter icon">
              <h4 class="client-tech zero">${project.shortInfoDes[2]}</h4>
          </div>
  </div>

  <div class="snap-1">
      <img class="portfolio-snap" src=${project.projectImgSrc} alt="portfolio info image">
  </div>

  <div class="pop-detail">
      <p class="primary-block-text2 zero">${descriptionText}</p>

      <div class="pop-detail-left">
          <ul class="tags zero">
              <li class="tech-tag">${project.techTags[0]}</li>
              <li class="tech-tag">${project.techTags[1]}</li>
              <li class="tech-tag">${project.techTags[2]}</li>
          </ul>

          <div class="pop-btn-div">
              <a href="${project.liveVersionLink}" class="action-btn">See live <img src="assets/social/round-btn-icon.svg" alt=""></a>
              <a href="${project.sourceLink}" class="action-btn">See source <img src="assets/social/git-btn-icon.svg" alt=""></a>
          </div>

      </div>
  </div>`;
  popupContainer.appendChild(popupDiv);
  document.querySelector(`.cancle-btn-${index}`).addEventListener('click', () => {
    if (popupContainer.getAttribute('showPopup') === 'true') {
      popupContainer.setAttribute('showPopup', 'false');
      popupContainer.removeChild(popupDiv);
    }
  });
};

for (let i = 0; i < projects.length; i += 1) {
  const div = document.createElement('div');
  div.className = 'cardwork';
  div.id = `card-${i + 1}`;
  div.innerHTML = `<div class="snap-${i + 1}">
                <img class="portfolio-snap" src=${projects[i].projectImgSrc} alt="portfolio info image">
            </div>
            <div class="left-block">
                <div class="primary-textblock">
                    <h1 class="text-title">${projects[i].titleText}</h1>
                    <div class="short-description">
                        <h3 class="client zero">${projects[i].shortInfoDes[0]}</h3>
                        <img src="../assets/port-snaps/Counter.svg" alt="counter icon">
                        <h4 class="client-tech zero">${projects[i].shortInfoDes[1]}</h4>
                        <img src="../assets/port-snaps/Counter.svg" alt="counter icon">
                        <h4 class="client-tech zero">${projects[i].shortInfoDes[2]}</h4>
                    </div>
                </div>
                <p class="primary-block-text2 zero">${projects[i].DescriptionIntro}</p>
                <ul class="tags zero">
                    <li class="tech-tag">${projects[i].techTags[0]}</li>
                    <li class="tech-tag">${projects[i].techTags[1]}</li>
                    <li class="tech-tag">${projects[i].techTags[2]}</li>
                </ul>
                <div class="action">
                    <a href="#card-${i + 1}" class="action-btn ${`action-btn-${i + 1}`}">See project</a>
                </div>
            </div>`;
  cardDiv.append(div);

  document.querySelector(`.action-btn-${i + 1}`).addEventListener('click', () => {
    setPopup(projects[i], i);
    if (popupContainer.getAttribute('showPopup') === 'false') {
      popupContainer.setAttribute('showPopup', 'true');
    }
  });
}

// -------- details popup  window ENDS --------

// -------- contact email validation STARTS --------

const form = document.querySelector('form');
const eInput = document.querySelector('#emil');
let isLower;

eInput.addEventListener('input', () => {
  if (eInput.value === eInput.value.toLowerCase()) {
    eInput.classList.remove('warn');
    document.getElementById('demo').innerHTML = '';
  }
});

form.addEventListener('submit', (event) => {
  isLower = eInput.value === eInput.value.toLowerCase();

  if (!isLower) {
    event.preventDefault();
    eInput.className = 'warn';
    document.getElementById('demo').innerHTML = 'Email address must be in lowercase!';
  }
});

// -------- contact email validation ENDS --------

// -------- save data in browser's local storage STARTS --------
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('emil');
const messageInput = document.getElementById('message');
const formChild = document.querySelectorAll('.form-child');

const storeAndPopulateData = () => {
  let fromData = {
    userName: nameInput.value,
    userEmail: emailInput.value,
    userText: messageInput.value
  }
  localStorage.setItem("fromData", JSON.stringify(fromData));
}

const populateData = () => {
  const storedData = JSON.parse(localStorage.getItem("fromData"));
  nameInput.value = storedData.userName;
  emailInput.value = storedData.userEmail;
  messageInput.value = storedData.userText;
}

for (let i = 0; i < formChild.length; i += 1) {
  formChild[i].addEventListener('focusout', ()=>{
    storeAndPopulateData();
  })
}

populateData();
// -------- save data in browser's local storage ENDS --------