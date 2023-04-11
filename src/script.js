import ExpandText from "./utils/ExpandText.js";
import LoadNewPhotos from "./utils/LoadNewPhotos.js";
import Theme from "./utils/Theme.js"

document.addEventListener("DOMContentLoaded", load);

function load() {
  const cardCollection = new ExpandText(".card-description");
  cardCollection.checkText();

  const loadPhotos = new LoadNewPhotos(".footer", ".cards");
  loadPhotos.begin();

  const theme = new Theme('.btn-switch-theme');
  theme.toggleTheme();

}
