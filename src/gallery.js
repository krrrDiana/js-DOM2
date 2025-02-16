export function renderGallery(container, images) {
    container.innerHTML = '';
    images.forEach(image => {
      const imgElement = document.createElement('img');
      imgElement.src = image.download_url;
      imgElement.alt = 'Random image';
      container.appendChild(imgElement);
    });
  }
  