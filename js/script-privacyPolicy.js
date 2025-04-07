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