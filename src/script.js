import ExpandText from "./utils/ExpandText.js";
import LoadNewPhotos from "./utils/LoadNewPhotos.js";

document.addEventListener("DOMContentLoaded", load);

function load() {
  const cardCollection = new ExpandText(".card-description");
  cardCollection.checkText();

  const loadPhotos = new LoadNewPhotos(".footer", ".cards");
  loadPhotos.begin();

}
