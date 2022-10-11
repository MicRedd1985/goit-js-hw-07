import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(createGalleryItemMarkup(galleryItems));

function createGalleryItemMarkup(galleryItems) {
    return galleryItems
      .map(({ preview, original, description }) => {
        return `
          <div class="gallery__item">
            <a class="gallery__link" href="${original}">
              <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
              />
            </a>
          </div>
        `;
      })
      .join('');
  }

  const galleryContainer = document.querySelector (`.gallery`);
  const galleryMarkup = createGalleryItemMarkup(galleryItems); 
  galleryContainer.insertAdjacentHTML (`beforeend`, galleryMarkup);

  galleryContainer.addEventListener('click', onGalleryContainerClick);
  
  
let modalWindow;
let onCliskClose;
  function onGalleryContainerClick (evt){
    evt.preventDefault();

if(!evt.target.classList.contains('gallery__image')){
    return;
}
modalWindow = basicLightbox.create(
  ` <img src="${evt.target.dataset.source}"/>`
);
modalWindow.show(onCliskClose);


window.addEventListener('keydown', onEscapeClose);

  }

  function onEscapeClose (event){
    modalWindow.close();
  }
  
    
  
  
  
 
  