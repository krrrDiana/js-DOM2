const gallery = document.getElementById('gallery');
let currentImages = [];

// Функция для загрузки картинок
async function loadImages(count = 4) {
  try {
    const response = await fetch(`https://picsum.photos/v2/list?page=${Math.floor(Math.random() * 30) + 1}&limit=${count}`);
    const images = await response.json();
    currentImages = currentImages.concat(images); // добавляем новые изображения в массив текущих
    renderGallery();
  } catch (error) {
    console.error('Ошибка загрузки картинок:', error);
  }
}

// Функция для отображения галереи
function renderGallery() {
  gallery.innerHTML = ''; // очищаем галерею перед рендерингом
  currentImages.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = image.download_url;
    imgElement.alt = 'Random image';
    gallery.appendChild(imgElement);
  });
}

// Функция для загрузки еще 4 картинок
function loadMoreImages() {
  loadImages();
}

// Функция для очистки галереи
function clearGallery() {
  currentImages = [];
  gallery.innerHTML = '';
}

// Функция для удаления последней картинки
function removeLastImage() {
  currentImages.pop();
  renderGallery();
}

// Функция для переворота галереи
function reverseGallery() {
  currentImages.reverse();
  renderGallery();
}

// Загружаем 4 картинки при первой загрузке страницы
loadImages();
