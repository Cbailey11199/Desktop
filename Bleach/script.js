document.addEventListener('DOMContentLoaded', () => {
    // Page switching functionality
    window.changePage = (pageId) => {
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => {
            if (page.id === pageId) {
                page.classList.add('active');
            } else {
                page.classList.remove('active');
            }
        });
    };

    // Card tilt effect for character cards
    const characterCards = document.querySelectorAll('.character-card');
    characterCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the element.
            const y = e.clientY - rect.top;  // y position within the element.

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (centerY - y) / 10;
            const rotateY = (x - centerX) / 10;

            card.querySelector('.card-inner').style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.querySelector('.card-inner').style.transform = `rotateX(0) rotateY(0)`;
        });
    });
});
