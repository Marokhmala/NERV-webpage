// Carousel functionality
document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".carousel-track");
  const cards = document.querySelectorAll(".product-card");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");

  if (!track || !cards.length) return;

  let currentIndex = 0;
  const cardWidth = cards[0].offsetWidth + 30; // width + gap

  function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }

  nextBtn.addEventListener("click", function () {
    if (currentIndex < cards.length - 3) {
      currentIndex++;
      updateCarousel();
    }
  });

  prevBtn.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  // Handle window resize
  window.addEventListener("resize", function () {
    cardWidth = cards[0].offsetWidth + 30;
    updateCarousel();
  });
});




// Burger menu functionality
document.addEventListener('DOMContentLoaded', function() {
  const burgerMenu = document.querySelector('.burger-menu');
  const navWrapper = document.querySelector('.nav-wrapper');
  
  if (!burgerMenu || !navWrapper) return;
  
  burgerMenu.addEventListener('click', function() {
    // Toggle active class on burger menu
    this.classList.toggle('active');
    
    // Toggle active class on navigation wrapper
    navWrapper.classList.toggle('active');
    
    // Prevent body scrolling when menu is open
    document.body.style.overflow = navWrapper.classList.contains('active') ? 'hidden' : '';
  });
  
  // Close menu when clicking on a link
  const navLinks = document.querySelectorAll('.nav-wrapper a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      burgerMenu.classList.remove('active');
      navWrapper.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
  
  // Close menu when clicking outside on mobile
  document.addEventListener('click', function(event) {
    if (window.innerWidth <= 768 && 
        !navWrapper.contains(event.target) && 
        !burgerMenu.contains(event.target) &&
        navWrapper.classList.contains('active')) {
      burgerMenu.classList.remove('active');
      navWrapper.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});

// this is made by ai, not me, i dont know that much js :)
