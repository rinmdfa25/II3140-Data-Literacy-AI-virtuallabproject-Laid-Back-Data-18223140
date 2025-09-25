const landingpageImages = [
  { src: "./assets/python.png", alt: "Python" },
  { src: "./assets/statistics.png", alt: "Statistics Image" },
  { src: "./assets/ai.png", alt: "AI Image" },
];

let current = 0;
const imgEl = document.getElementById("carousel-image");

setInterval(() => {
  current = (current + 1) % landingpageImages.length;
  imgEl.classList.add("fade-out");
  setTimeout(() => {
    imgEl.src = landingpageImages[current].src;
    imgEl.alt = landingpageImages[current].alt;
    imgEl.classList.remove("fade-out");
    imgEl.classList.add("fade-in");
    setTimeout(() => {
      imgEl.classList.remove("fade-in");
    }, 300);
  }, 300);
}, 2000);
