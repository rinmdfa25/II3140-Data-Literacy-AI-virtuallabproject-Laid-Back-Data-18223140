const learnImages = [
  { src: "./assets/data.png", alt: "Data" },
  { src: "./assets/camp.png", alt: "Camp" },
  { src: "./assets/datamining.png", alt: "Data Mining" },
  { src: "./assets/machinelearning.png", alt: "Machine Learning" },
  { src: "./assets/visualizationdata.png", alt: "Data Visualization" },
  { src: "./assets/python.png", alt: "Python" },
  { src: "./assets/sql.png", alt: "SQL" },
  { src: "./assets/numpy.png", alt: "NumPy" },
  { src: "./assets/pandas.png", alt: "Pandas" },
  { src: "./assets/matplotlib.svg", alt: "Matplotlib" },
  { src: "./assets/seaborn.svg", alt: "Seaborn" },
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
    imgEl.style.zIndex = "0";
    setTimeout(() => {
      imgEl.classList.remove("fade-in");
    }, 300);
  }, 300);
}, 1000);
