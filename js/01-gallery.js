import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryMarkUp = createGalleryItemsLibrary(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkUp);

function createGalleryItemsLibrary(galleryItems) {
  const gallery = galleryItems
    .map(({ preview, original, description }) => {
      return ` 
        <li class = "pictures">
        <a class="link" 
        href="${original}">
        <img class= "images"
        src="${preview}"
        alt = "${description}"
        height="360"
        width = "360"/>
        </a>
     </li>`;
    })
    .join("");
  console.log(gallery);
}
// console.log(galleryItems);
