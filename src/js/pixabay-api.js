import { gallery, searchBar, searchInput } from "../main";
import { galleryRender, loader, } from "./render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

searchBar.addEventListener('submit', e => {
    e.preventDefault();
    if (searchInput.value == '' || searchInput.value == ' ') {
        iziToast.error({
            position: 'topRight',
            message: 'Search bar is empty!'
        });
        return;
    }
    loader();

    const params = new URLSearchParams({
        key: '44001471-3db462177f0e91bc0a7989cfe',
        q: searchInput.value,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'safe'
    });

    fetch(`https://pixabay.com/api/?${params}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
        .then((photos) => {
            if (photos.hits.length == 0) {
                iziToast.error({
                    position: 'topRight',
                    message: "Sorry, there are no images matching your search query. Please try again!"
                });
            }
            galleryRender(photos);
        })
        .catch((error) => {
            console.log(error);
        });
    e.currentTarget.reset()
});