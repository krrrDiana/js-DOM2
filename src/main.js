import { renderGallery } from './gallery.js';
import { loadImages } from './imageService.js';

const gallery = document.getElementById('gallery');
let currentImages = [];

async function initGallery(count = 4) {
  const newImages = await loadImages(count);
  currentImages = currentImages.concat(newImages);
  renderGallery(gallery, currentImages);
}

function loadMoreImages() {
  initGallery();
}

function clearGallery() {
  currentImages = [];
  gallery.innerHTML = '';
}

function removeLastImage() {
  currentImages.pop();
  renderGallery(gallery, currentImages);
}

function reverseGallery() {
  currentImages.reverse();
  renderGallery(gallery, currentImages);
}

// Инициализация галереи при загрузке
initGallery();

// Привязка кнопок (если есть)
document.getElementById('loadMoreBtn')?.addEventListener('click', loadMoreImages);
document.getElementById('clearGalleryBtn')?.addEventListener('click', clearGallery);
document.getElementById('removeLastImageBtn')?.addEventListener('click', removeLastImage);
document.getElementById('reverseGalleryBtn')?.addEventListener('click', reverseGallery);
