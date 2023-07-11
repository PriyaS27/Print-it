const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

const bannerImage = document.querySelector('.banner-img');
const dots = document.querySelectorAll('.dot');


// Set the initial slide index
let slideIndex = 0;

// Function to show the current slide
function showSlide(index) {
  bannerImage.src = './assets/images/slideshow/' + slides[index].image;
  bannerImage.alt = 'Banner Print-it';
  document.querySelector('#banner p').innerHTML = slides[index].tagLine;

//Function for dots


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

// Add event listeners to the arrow images
arrowLeft.addEventListener('click', prevSlide);
arrowRight.addEventListener('click', nextSlide);



// Show the initial slide
showSlide(slideIndex);














