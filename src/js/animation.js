// ESC 키로 .visual::before, .visual::after 애니메이션 play-state 토글
(function () {
  let paused = false;
  function setVisualAnimationPlayState(state) {
    // 이미 동적으로 삽입된 style 태그가 있으면 제거
    const prev = document.getElementById("visual-ani-toggle-style");
    if (prev) prev.remove();
    // 새 style 태그 생성
    const style = document.createElement("style");
    style.id = "visual-ani-toggle-style";
    style.textContent = `
      .visual::before, .visual::after {
        animation-play-state: ${state} !important;
      }
    `;
    document.head.appendChild(style);
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      setVisualAnimationPlayState(paused ? "running" : "paused");
      paused = !paused;
    }
  });
})();
