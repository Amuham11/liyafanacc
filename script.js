document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.link-card');

    // Smooth reveal animation
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });

    // Optional: Log clicks for basic analytics
    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            console.log(`Navigating to: ${e.target.innerText}`);
        });
    });
});