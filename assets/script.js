const slides = [
  {
    "image": "slide1.jpg",
    "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
  },
  {
    "image": "slide2.jpg",
    "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
  },
  {
    "image": "slide3.jpg",
    "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
  },
  {
    "image": "slide4.png",
    "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
  }
];

// Get references to the HTML elements
const bannerImage = document.querySelector('.banner-img');
const dots = Array.from(document.querySelectorAll('.dot'));

// Set the initial slide index
let slideIndex = 0;

// Function to show the current slide
function showSlide(index) {
  bannerImage.src = './assets/images/slideshow/' + slides[index].image;
  bannerImage.alt = 'Banner Print-it';
  document.querySelector('#banner p').innerHTML = slides[index].tagLine;

  // Update the active dot
  dots.forEach((dot, dotIndex) => {
    if (dotIndex === index) {
      dot.classList.add('dot_selected');
    } else {
      dot.classList.remove('dot_selected');
    }
  });

  slideIndex = index;
}

// Function to navigate to the previous slide
function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlide(slideIndex);
}

// Function to navigate to the next slide
function nextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}

// Add event listeners to the arrow elements
const arrowLeft = document.querySelector('.arrow_left');
arrowLeft.addEventListener('click', prevSlide, { once: true });

const arrowRight = document.querySelector('.arrow_right');
arrowRight.addEventListener('click', nextSlide, { once: true });

// arrowLeft.addEventListener('click', prevSlide);
// arrowRight.addEventListener('click', nextSlide);

// Add event listeners to the dots
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => showSlide(index), { once: true });
});

// Show the initial slide
showSlide(slideIndex);
