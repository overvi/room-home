let currentImage = 1;

const updateCurrent = (number) => {
  currentImage = number;
  hero.style.background = `url("/images/desktop-image-hero-${currentImage}.jpg")`;
};

const hero = document.querySelector(".hero");

document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".mobile-nav").style.opacity = 1;
  document.querySelector(".inset").style.display = "block";
});

document.querySelector(".close").addEventListener("click", () => {
  document.querySelector(".mobile-nav").style.opacity = 0;
  document.querySelector(".inset").style.display = "none";
});

document.querySelector(".perv").addEventListener("click", () => {
  currentImage !== 1 && updateCurrent(currentImage - 1);
});
document.querySelector(".next").addEventListener("click", () => {
  currentImage !== 3 && updateCurrent(currentImage + 1);
});
