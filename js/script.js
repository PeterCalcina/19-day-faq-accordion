let accordion = document.querySelector('.accordion');
let items = accordion.querySelectorAll('.accordion__item');

items.forEach(item => {
  let icon_active = item.querySelector('.img_icon');

  item.addEventListener('click', function() {
    if (item.classList.contains('active')) {
      item.classList.remove('active');    
      icon_active.src = 'images/icon-plus.svg';
    } else {
      items.forEach(child => { 
        child.classList.remove('active') 
        child.querySelector('.img_icon').src = 'images/icon-plus.svg';
      });
      
      item.classList.add('active');
      icon_active.src = 'images/icon-minus.svg';
    }
  });
});

// Navegar por el accordeon con el teclado

window.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    let active = document.querySelector('.accordion__item.active');
    let next = active.nextElementSibling;
    let prev = active.previousElementSibling;

    let icon_active = active.querySelector('.img_icon');
    let icon_next = next.querySelector('.img_icon');
    let icon_prev = null;
    if (prev) {
      icon_prev = prev.querySelector('.img_icon');
    }

    if (e.key === 'ArrowDown' && next) {
      active.classList.remove('active');
      icon_active.src = 'images/icon-plus.svg';
      next.classList.add('active');
      icon_next.src = 'images/icon-minus.svg';
    } else if (e.key === 'ArrowUp' && prev) {
      active.classList.remove('active');
      icon_active.src = 'images/icon-plus.svg';
      prev.classList.add('active');
      icon_prev.src = 'images/icon-minus.svg';
    }
  }
});
