// Close the mobile menu after a link is chosen, or when Escape is pressed.
document.querySelectorAll('.slab__menu').forEach((menu) => {
  menu.addEventListener('click', (e) => { if (e.target.closest('a')) menu.removeAttribute('open'); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.open) { menu.removeAttribute('open'); menu.querySelector('summary').focus(); }
  });
});
