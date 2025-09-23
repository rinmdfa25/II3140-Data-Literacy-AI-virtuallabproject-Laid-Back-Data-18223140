const learnImages = [
  { src: "./assets/datamining.png", alt: "Data Mining" },
  { src: "./assets/machinelearning.png", alt: "Machine Learning" },
  { src: "./assets/visualizationdata.png", alt: "Data Visualization" },
];

let current = 0;
const imgEl = document.getElementById("carousel-image");

setInterval(() => {
  current = (current + 1) % learnImages.length;
  imgEl.classList.remove("fade-in");
  imgEl.classList.add("fade-out");
  setTimeout(() => {
    imgEl.src = learnImages[current].src;
    imgEl.alt = learnImages[current].alt;
    imgEl.classList.remove("fade-out");
    imgEl.classList.add("fade-in");
    setTimeout(() => {
      imgEl.classList.remove("fade-in");
    }, 300);
  }, 300);
}, 2000);
