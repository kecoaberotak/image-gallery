const container = document.querySelector('.container');
const imageSelected = container.querySelector('.image-selected');
const imageThumb = container.querySelectorAll('.thumbnail-image');

imageThumb.forEach(function(image){
  image.addEventListener('click', function(e){
    imageSelected.setAttribute('src', e.target.src);
    console.log(e);
  });
});