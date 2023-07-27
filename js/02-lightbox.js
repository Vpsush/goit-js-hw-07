import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryMarkUp = createGalleryItemsLibrary(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkUp);

function createGalleryItemsLibrary(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
     <a class="gallery__link" href="${original}">
       <img
         class="gallery__image"
         src="${preview}"
         data-source="${original}"
         alt=""${description}"
       />
     </a>
   </li>`;
    })
    .join("");
}
