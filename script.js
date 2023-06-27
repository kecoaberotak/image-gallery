const container = document.querySelector('.container');
const imageSelected = container.querySelector('.image-selected');
const imageThumb = container.querySelectorAll('.thumbnail-image');

container.addEventListener('click', function(image){
  if(image.target.className === 'thumbnail-image'){
    // ada dua cara nangkepnya, sama aja
    // imageSelected.src = image.target.src;
    imageSelected.setAttribute('src', image.target.src);

    imageSelected.classList.add('fade');
    setTimeout(function(){
      imageSelected.classList.remove('fade');
    }, 500);
  }
});