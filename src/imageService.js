export async function loadImages(count = 4) {
    try {
      const response = await fetch(`https://picsum.photos/v2/list?page=${Math.floor(Math.random() * 30) + 1}&limit=${count}`);
      return await response.json();
    } catch (error) {
      console.error('Ошибка загрузки картинок:', error);
      return [];
    }
  }

  