import { loader } from "./js/render-functions";
import { request } from "./js/pixabay-api";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

export const gallery = document.querySelector('.gallery');
export const searchBar = document.querySelector('.search-bar');
export const searchInput = document.querySelector('.search-bar input');

searchBar.addEventListener('submit', e => {
    e.preventDefault();
    if (searchInput.value == '' || searchInput.value == ' ') {
        return;
    }
    loader();
    request();

    e.currentTarget.reset();
});