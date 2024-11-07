const gallery = document.getElementById('gallery');
let images = [];

async function loadImages(count = 4) {
  const response = await fetch(`https://picsum.photos/v2/list?page=${Math.floor(Math.random() * 10)}&limit=${count}`);
  const newImages = await response.json();
  
  newImages.forEach(imageData => {
    const img = document.createElement('img');
    img.src = imageData.download_url;
    img.alt = "Random Image";
    gallery.appendChild(img);
  });
  
  images = images.concat(newImages);
}

function loadMoreImages() {
  loadImages(4);
}

function clearGallery() {
  gallery.innerHTML = '';
  images = [];
}

function removeLastImage() {
  if (gallery.lastChild) {
    gallery.removeChild(gallery.lastChild);
    images.pop();
  }
}

function reverseGallery() {
  images.reverse();
  gallery.innerHTML = '';
  images.forEach(imageData => {
    const img = document.createElement('img');
    img.src = imageData.download_url;
    img.alt = "Random Image";
    gallery.appendChild(img);
  });
}

window.onload = () => {
  loadImages(4);
};
