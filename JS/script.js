const projectBoxes = document.querySelectorAll('.project-box');

projectBoxes.forEach((box) => {
  box.addEventListener('click', () => {
    box.classList.add('project-box-clicked');
  });
});


const followMe = document.querySelector('.followMe');

followMe.addEventListener('click', () => {
  window.open('https://www.linkedin.com/in/zmariux/', '_blank');
});




const openButtonUser = document.querySelector('.open-buttonUser');
const popupUser = document.querySelector('.popupUser');
const overlayUser = document.querySelector('.overlayUser');
const closeButtonUser = document.querySelector('.closeUser');

openButtonUser.addEventListener('click', () => {
  popupUser.style.display = 'block';
  overlayUser.style.display = 'block';
});

closeButtonUser.addEventListener('click', () => {
  popupUser.style.display = 'none';
  overlayUser.style.display = 'none';
});

overlayUser.addEventListener('click', () => {
  popupUser.style.display = 'none';
  overlayUser.style.display = 'none';
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    popupUser.style.display = 'none';
    overlayUser.style.display = 'none';
  }
});
