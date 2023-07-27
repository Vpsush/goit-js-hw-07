import { galleryItems } from "./gallery-items.js";

// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryMarkUp = createGalleryItemsLibrary(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkUp);

function createGalleryItemsLibrary(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
      <a class="gallery__link" href="${preview}">
         <img class="gallery__image" src="${original}" alt="${description}" />
      </a>
   </li>`;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
