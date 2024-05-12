const instrumenSelect = document.getElementById('instrumen');
const otherText = document.getElementById('otherText');

instrumenSelect.addEventListener('change', function () {
  if (instrumenSelect.value === 'other') {
    otherText.style.display = 'block';

    otherText.focus();
  } else {
    otherText.style.display = 'none';
  }
});
