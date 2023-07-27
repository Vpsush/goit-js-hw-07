import { galleryItems } from "./gallery-items.js";
// Change code below this line

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

const instance = basicLightbox.create(
  `<img width = "1280"
height = "auto"
data-source="${original}"
>`
);

instance.show();
// document.querySelector("gallery__link").onclick = () => {
//   basicLightbox
//     .create(
//       `
// 		<img width="1400" height="900" data-source="${original}">
// 	`
//     )
//     .show();
// };
