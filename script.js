const sortDropdown = document.querySelector('.qr-sort-dropdown');
const sortBtn = document.querySelector('.qr-sort-btn');
const sortItems = document.querySelectorAll('.qr-sort-menu li');

sortBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  sortDropdown.classList.toggle('is-open');
});
document.addEventListener('click', () => {
  sortDropdown.classList.remove('is-open');
});
sortItems.forEach((item) => {
  item.addEventListener('click', () => {
    
    sortItems.forEach((li) => {
      li.classList.remove('active');
    });

    item.classList.add('active');

  });
});

