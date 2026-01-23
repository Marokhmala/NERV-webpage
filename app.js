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
