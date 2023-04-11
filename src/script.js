import ExpandText from "./utils/ExpandText.js";

document.addEventListener("DOMContentLoaded", load);

function load() {
  const cardCollection = new ExpandText(".card-description");
  cardCollection.checkText();
}
