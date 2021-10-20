window.addEventListener("load", () => {
  const carousel = document.querySelector("#carousel");
  const slides = carousel.querySelectorAll("section");

  const externalState = window.state || {};

  const state = {
    autoPlay: window.mode === "production" ? true : false,
    loop: window.mode === "production" ? false : false,
    slideIndex: window.mode === "production" ? -1 : -1,
    ...externalState,
  };

  function nextSlide() {
    state.slideIndex++;
    if (!slides[state.slideIndex]) {
      if (!state.loop) return;
      state.slideIndex = 0;
    }
    carousel.dataset.slideIndex = state.slideIndex;
    slides.forEach((slide) => {
      slide.style.opacity = "0";
    });
    slides[state.slideIndex].style.opacity = "1";
    if (!state.autoPlay) return;
    setTimeout(nextSlide, parseInt(slides[state.slideIndex].dataset.timeout));
  }

  window.nextSlide = nextSlide;

  nextSlide();
});
