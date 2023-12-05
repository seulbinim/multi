import { renderDialogModal } from './dialogModal.js';

const header = document.querySelector('.app-header');
const dialog = document.querySelector('dialog.app-navigation');

const mobileNav = `
  <dialog
    class="app-navigation"
    aria-labelledby="mainMenu"
    aria-modal="true"
  >
    <h2 class="sr-only" id="mainMenu">메인 메뉴</h2>
    <ul>
      <li><a href="/views/.html">로그인</a></li>
      <li><a href="/views/.html">회원가입</a></li>
      <li><a href="/views/.html">이디야 음료</a></li>
      <li><a href="/views/.html">이디야 뉴스</a></li>
      <li><a href="/views/.html">매장 찾기</a></li>
    </ul>

    <button
      type="button"
      class="button-none button-close is-close-menu"
      title="메뉴 닫기"
      aria-label="메뉴 닫기"
    >
      <span class="close" aria-hidden="true">×</span>
    </button>
  </dialog>
`;

const desktopNav = `
  <nav class="app-navigation" aria-label="메인 메뉴">
    <ul>
      <li><a href="/views/.html">로그인</a></li>
      <li><a href="/views/.html">회원가입</a></li>
      <li><a href="/views/.html">이디야 음료</a></li>
      <li><a href="/views/.html">이디야 뉴스</a></li>
      <li><a href="/views/.html">매장 찾기</a></li>
    </ul>

    <button
      type="button"
      class="button-none button-close is-close-menu"
      title="메뉴 닫기"
      aria-label="메뉴 닫기"
    >
      <span class="close" aria-hidden="true">×</span>
    </button>
  </nav>
`;

function render() {
  if (window.matchMedia('(max-width: 767px)').matches) {
    header.insertAdjacentHTML('beforeend', mobileNav);
  } else {
    header.insertAdjacentHTML('beforeend', desktopNav);
  }
  renderDialogModal();
}

render();
window.addEventListener('resize', render);
