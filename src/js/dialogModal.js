export const renderDialogModal = () => {
  const menuOpen = document.querySelector('.is-open-menu');
  const menuClose = document.querySelector('.is-close-menu');
  const nav = document.querySelector('.app-navigation');

  function openMenu() {
    // nav.setAttribute('open', 'true');
    nav.open = true;
    // showModal 사용 시 100% 크기로 스타일링이 안됨
    // nav.showModal();
    window.setTimeout(function () {
      nav.classList.add('is-active');
    }, 10);
  }

  function closeMenu() {
    nav.classList.remove('is-active');

    window.setTimeout(function () {
      nav.open = true;
      // nav.close();
    }, 400);
  }

  menuOpen.addEventListener('click', openMenu);
  menuClose.addEventListener('click', closeMenu);
};
