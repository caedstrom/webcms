export default function() {
  const subnav = document.querySelectorAll('.menu--main .menu__subnav');
  subnav.forEach((menu, index) => {
    menu.setAttribute('hidden', true);
    const button = menu.previousElementSibling;
    if (button.classList.contains('usa-nav__link')) {
      const id = `extended-nav-section-${index}`;
      menu.id = id;
      button.setAttribute('aria-controls', id);
    }
  });
}
