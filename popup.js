// popup.js
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.category-button');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-category');
      localStorage.setItem('selectedCategory', category);
      window.location.href = 'detail.html';
    });
  });
});
