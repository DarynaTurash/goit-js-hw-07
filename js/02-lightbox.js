import { galleryItems } from './gallery-items.js';
// Change code below this line
const refs = {
    galleryList: document.querySelector('.gallery'),
};

function makingGalleryMarkUp(galleryItems) {
    return galleryItems.map(({ original, preview, description }) => {
        return `<li class="gallery__item">
                    <a class="gallery__link" href="${original}">
                        <img class="gallery__image" src="${preview}" alt="${description}" />
                    </a>
                </li>`; 
    }).join(' ');
};

refs.galleryList.innerHTML = makingGalleryMarkUp(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: '250' });

console.log(galleryItems);
