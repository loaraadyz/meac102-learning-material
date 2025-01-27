document.addEventListener('DOMContentLoaded', () => {
    const figures = document.querySelectorAll('.image-gallery figure img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox .close');

    // Open lightbox on figure click
    figures.forEach(figure => {
        figure.addEventListener('click', () => {
            lightboxImg.src = figure.src;
            lightbox.style.display = 'flex';
        });
    });

    // Close lightbox on close button click
    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    // Close lightbox on outside click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});
