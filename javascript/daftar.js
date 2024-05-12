// const instrumenSelect = document.getElementById('instrumen');
// const otherText = document.getElementById('otherText');

// instrumenSelect.addEventListener('change', function () {
//   if (instrumenSelect.value === 'other') {
//     otherText.style.display = 'block';

//     otherText.focus();
//   } else {
//     otherText.style.display = 'none';
//   }
// });

const scriptURL = 'https://script.google.com/macros/s/AKfycbwC2l75axeHSqBF3AQm_RkSL8WV8rl91I2JcVEvujpvCE8RNgEoWutePPt-42TZsUBS/exec';

const form = document.forms['daftar'];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => alert('Thank you! your form is submitted successfully'))
    .then(() => {
      window.location.reload();
    })
    .catch(error => console.error('Error!', error.message))
});
