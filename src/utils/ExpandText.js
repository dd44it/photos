class ExpandText {
  constructor(collectionSelector, maxHeight = 48, countWord = 80) {
    this.collectionSelector = document.querySelectorAll(collectionSelector);
    this.maxHeight = maxHeight;
    this.countWord = countWord;
    this.showMoreText = "Show more...";
    this.showLessText = "Show less";
  }

  removeEmptySpaces() {
    if (this.collectionSelector && !this.collectionSelector.length || !this.collectionSelector) return;
    this.collectionSelector.forEach( cardElem => cardElem.textContent = cardElem.textContent.trim().replace(/\n/g, ''));
  }

  checkText(){
    this.removeEmptySpaces();
    this.collectionSelector.forEach(cardElem => {
      if (cardElem.clientHeight > this.maxHeight && !cardElem.nextElementSibling ) {
        const copyFullText = cardElem.textContent.slice();
        const copyShortText = cardElem.textContent.slice(0, this.countWord) + "...";
        cardElem.textContent = copyShortText;
        const expandBtn = this.createExpandBtn();
        cardElem.parentElement.append(expandBtn);

        const helperObj = {
          cardElem,
          copyFullText,
          copyShortText
        };
        expandBtn.addEventListener("click", e => { this.expandText(e, helperObj) });
      }
    })
  }

  createExpandBtn(){
    const expandElem = document.createElement("button");
    expandElem.classList.add("btn");
    expandElem.textContent = "Show more...";
    return expandElem
  }

  expandText(e, { cardElem, copyFullText, copyShortText }) {
    const collapseElem = e.target;
    if (!collapseElem.classList.contains("full-text")) {
      cardElem.textContent = copyFullText;
      collapseElem.textContent = this.showLessText;
    } else {
      cardElem.textContent = copyShortText;
      collapseElem.textContent = this.showMoreText;
    }
    collapseElem.classList.toggle("full-text");
  }

}

export default ExpandText;