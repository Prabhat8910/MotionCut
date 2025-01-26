let currentIndex = 0;
const images = document.querySelectorAll('.slider img');
const thumbnails = document.querySelectorAll('.thumbnails img');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
  thumbnails.forEach((thumb, i) => {
    thumb.classList.toggle('active-thumbnail', i === index);
  });
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    currentIndex = index;
    showImage(currentIndex);
  });
});

setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}, 3000);

showImage(currentIndex);
