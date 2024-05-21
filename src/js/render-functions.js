import { gallery } from "../main"
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

new SimpleLightbox('.gallery-card a', { /* options */ });

export function loadingWait() {
    gallery.innerHTML = "<p>Loading images, please wait...</p>"
}

export function galleryRender(photos) {
    let innerHTML = '';
    photos.hits.forEach(elem => {
        innerHTML +=
            `<div class="gallery-card">
                <a href="${elem.largeImageURL}"><img src="${elem.webformatURL}" width="360px" alt="${elem.tags}"></a>
                <ul class="card-list">
                    <li><p>Likes:</p><p>${elem.likes}</p></li>
                    <li><p>Views:</p><p>${elem.views}</p></li>
                    <li><p>Comments:</p><p>${elem.comments}</p></li>
                    <li><p>Downloads:</p><p>${elem.downloads}</p></li>
                </ul>
            </div>`;
    });
    gallery.innerHTML = innerHTML;

}