document.addEventListener('DOMContentLoaded', () => {

  document.querySelectorAll('[id^="shopify-section-"]').forEach(section => {

    const slider = section.querySelector('#rightSlider');
    const pagination = section.querySelector('#rightPagination');
    if (!slider || !pagination) return;

    const slides = slider.querySelectorAll('.slide');
    const totalSlides = slides.length;

    let currentIndex = 0;
    let isDragging = false;
    let startX = 0;
    let currentX = 0;
    const threshold = 60;
    const dragDetectThreshold = 5;
    let didDrag = false;

    /* =========================
       READ SETTINGS
    ========================= */
    const autoSlide = slider.dataset.autoSlide === 'true';
    const autoSpeed = (parseInt(slider.dataset.autoSpeed, 10) || 5) * 1000;

    /* =========================
       PAGINATION
    ========================= */
    pagination.innerHTML = '';
    slides.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.className = 'dot' + (index === 0 ? ' active' : '');
      dot.addEventListener('click', () => goToSlide(index));
      pagination.appendChild(dot);
    });

    const dots = pagination.querySelectorAll('.dot');

    function updateDots() {
      dots.forEach(d => d.classList.remove('active'));
      dots[currentIndex].classList.add('active');
    }

    function goToSlide(index) {
      currentIndex = index;
      slider.style.transition = 'transform 0.4s ease';
      slider.style.transform = `translateX(-${index * 100}%)`;
      updateDots();
    }

    /* =========================
       MOUSE DRAG
    ========================= */
    slider.addEventListener('mousedown', (e) => {
      isDragging = true;
      didDrag = false;
      startX = e.clientX;
      slider.classList.add('dragging');
      slider.style.transition = 'none';
    });

    slider.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      
      currentX = e.clientX - startX;

      if (Math.abs(currentX) > dragDetectThreshold) {
        didDrag = true;
      }

      slider.style.transform =
        `translateX(calc(-${currentIndex * 100}% + ${currentX}px))`;
    });

    slider.addEventListener('mouseup', endDrag);
    setTimeout(() => {
      didDrag = false;
    }, 0);
    slider.addEventListener('mouseleave', () => isDragging && endDrag());

    slider.addEventListener('click', (e) => {
      if (didDrag && e.target.closest('a')) {
        e.preventDefault();
        e.stopPropagation();
      }
    });

    /* =========================
       TOUCH DRAG
    ========================= */
    slider.addEventListener('touchstart', (e) => {
      isDragging = true;
      startX = e.touches[0].clientX;
      slider.style.transition = 'none';
    });

    slider.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      currentX = e.touches[0].clientX - startX;
      slider.style.transform =
        `translateX(calc(-${currentIndex * 100}% + ${currentX}px))`;
    });

    slider.addEventListener('touchend', endDrag);

    function endDrag() {
      slider.classList.remove('dragging');
      slider.style.transition = 'transform 0.4s ease';

      if (currentX > threshold && currentIndex > 0) currentIndex--;
      else if (currentX < -threshold && currentIndex < totalSlides - 1) currentIndex++;

      goToSlide(currentIndex);
      isDragging = false;
      currentX = 0;
    }

    /* =========================
       AUTO SLIDE
    ========================= */
    if (autoSlide) {
      setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        goToSlide(currentIndex);
      }, autoSpeed);
    }


    slider.querySelectorAll('.slide-link').forEach(link => {
      link.addEventListener('click', (e) => {
        if (isDragging) {
          e.preventDefault();
          e.stopPropagation();
        }
      });

      link.addEventListener('dragstart', e => e.preventDefault());
      });
  });
});
