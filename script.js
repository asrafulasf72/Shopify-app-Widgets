const sortDropdown = document.querySelector('.qr-sort-dropdown');
const sortBtn = document.querySelector('.qr-sort-btn');
const sortItems = document.querySelectorAll('.qr-sort-menu li');

sortBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  sortDropdown.classList.toggle('is-open');
});

