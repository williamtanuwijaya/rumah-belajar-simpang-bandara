const heroText = document.querySelector('.hero-text');

window.addEventListener('scroll', function () {
  if (window.scrollY > 100) {
    heroText.style.animationPlayState = 'running';
  }
});

document.addEventListener('DOMContentLoaded', function () {
  let popupBox = document.getElementById('popup-box');
  popupBox.style.display = 'block';
});

function closePopup() {
  let popupBox = document.getElementById('popup-box');
  popupBox.style.display = 'none';
}
