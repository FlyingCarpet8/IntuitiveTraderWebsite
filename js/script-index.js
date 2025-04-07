// JavaScript for Slideshow
        let slideIndex = 0;
        const slides = document.querySelector('.slides');
        const totalSlides = slides.children.length;

        function showSlide(index) {
            if (index >= totalSlides) slideIndex = 0;
            if (index < 0) slideIndex = totalSlides - 1;
            slides.style.transform = `translateX(${-slideIndex * 100}%)`;
        }

        function moveSlide(n) {
            slideIndex += n;
            showSlide(slideIndex);
        }

        // Auto-play the slideshow
        setInterval(() => {
            slideIndex++;
            showSlide(slideIndex);
        }, 15000); // Change slide every 5 seconds

        // JavaScript to hide/show header on scroll
        let lastScroll = 0;
        const header = document.querySelector('.top-footer');

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll > lastScroll) {
                // Scroll down: hide header
                header.classList.add('hide');
            } else {
                // Scroll up: show header
                header.classList.remove('hide');
            }

            lastScroll = currentScroll;
        });