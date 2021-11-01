const container = document.querySelector("#container");

container.addEventListener("click", (event) => {
  if (event.target.nodeName !== "A") {
    window.open(container.dataset.href, "_blank");
  }
});

function main() {
  const carousel = document.querySelector("#carousel");
  const slides = carousel.querySelectorAll("section");

  const externalState = window.state || {};

  const state = {
    autoPlay: window.mode === "production" ? true : false,
    loop: window.mode === "production" ? false : false,
    slideIndex: window.mode === "production" ? -1 : 0,
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
      slide.style.pointerEvents = "none";
    });
    slides[state.slideIndex].style.opacity = "1";
    slides[state.slideIndex].style.pointerEvents = "auto";
    if (!state.autoPlay) return;
    setTimeout(nextSlide, parseInt(slides[state.slideIndex].dataset.timeout));
  }

  window.nextSlide = nextSlide;

  nextSlide();
}

window.main = main;

window.addEventListener("load", main);
