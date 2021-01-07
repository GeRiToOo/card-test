window.addEventListener('DOMContentLoaded', () => {
  console.log('ready');
});

const card = document.querySelector('.card');
const buttonFront = document.querySelector('.buttonFront');
const buttonBack = document.querySelector('.buttonBack');

buttonFront.addEventListener('click', () => {
  card.classList.toggle('flipCard');
});

buttonBack.addEventListener('click', () => {
  card.classList.toggle('flipCard');
});
