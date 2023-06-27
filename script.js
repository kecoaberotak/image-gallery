const container = document.querySelector('.container');
const imageSelected = container.querySelector('.image-selected');
const imageThumb = container.querySelectorAll('.thumbnail-image');

container.addEventListener('click', function(image){
  if(image.target.className === 'thumbnail-image'){
    imageSelected.setAttribute('src', image.target.src);
  }
});