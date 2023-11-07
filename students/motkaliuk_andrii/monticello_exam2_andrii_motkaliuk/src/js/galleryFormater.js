const seeMoreButton = document.querySelector('.gallery__btn');
const galleryAdvancedGrid = document.querySelectorAll('.gallery-grid');

let galleryAdvancedGridFalse = true;
seeMoreButton.addEventListener('click', function (event) {
    event.preventDefault();

    if (galleryAdvancedGridFalse) {
        galleryAdvancedGrid.forEach(item => {
            item.classList.add('gallery-grid_advanced');
        });
    } else {
        galleryAdvancedGrid.forEach(item => {
            item.classList.remove('gallery-grid_advanced');
        });
    }

    galleryAdvancedGridFalse = !galleryAdvancedGridFalse;
});
