const sortDropdown = document.querySelector('.qr-sort-dropdown');
const sortBtn = document.querySelector('.qr-sort-btn');
const sortBtnText = document.querySelector('.qr-sort-btn-text');
const sortItems = document.querySelectorAll('.qr-sort-menu li');

const savedSort = sessionStorage.getItem('selectedSort');

if (savedSort) {
  sortItems.forEach((item) => {
    if (item.dataset.sort === savedSort) {
      item.classList.add('active');
      sortBtnText.textContent = `Sort by: ${item.textContent.trim()}`;
    }
  });
}

