import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallaryContainer = document.querySelector(".gallery");
const gallaryMarkUp = createGalleryItemsLibrary(galleryItems);

gallaryContainer.insertAdjacentHTML("beforeend", gallaryMarkUp);

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
