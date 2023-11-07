const seeMoreButton = document.querySelector('.gallery__btn');
const galleryOpenItems = document.querySelectorAll('.gallery-item__hidden');

let galleryOpenVisible = true;
seeMoreButton.addEventListener('click', function (event) {
    event.preventDefault();

    if (galleryOpenVisible) {
        galleryOpenItems.forEach(item => {
            item.classList.remove('gallery-item__hidden-on');
        });
    } else {
        galleryOpenItems.forEach(item => {
            item.classList.add('gallery-item__hidden-on');
        });
    }

    galleryOpenVisible = !galleryOpenVisible;
});
