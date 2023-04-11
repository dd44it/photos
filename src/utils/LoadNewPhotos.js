import ExpandText from "./ExpandText.js";

class LoadNewPhotos {
  constructor(touchSelector, parentSelector) {
    this.touchSelector = touchSelector;
    this.parentSelector = document.querySelector(parentSelector);
  }

  begin() {
    const touchElem = document.querySelector(this.touchSelector); 
    const observer = new IntersectionObserver((entries, observer) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          this.loadPhotos();
        }
      }
    });
    observer.observe(touchElem);
  }

  loadPhotos() {
    const url = "https://picsum.photos/v2/list?page=1&limit=9";
    fetch(url)
      .then((data) => data.json())
      .then((data) => this.renderNewCards(data, this.parentSelector))
      .catch((err) => console.log(err));
  }

  renderNewCards(data, parentWrapper) {
    if (data && !data.length || !data) return;
    data.forEach((item) => {
      const cardTemplate = `
      <div class="col-10 col-md-5 card photo-card p-0">
        <img src=${item.download_url} class="card-img-top" alt="">
        <div class="card-body px-4">
            <h3 class="card-title fw-bold">Heading</h3>
            <p class="card-description">And here full text doesn’t fit, and at the very end of it we should show a Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, similique quasi nam praesentium voluptas, animi quidem consequatur eveniet nobis vel magni veniam natus et nulla eligendi labore ducimus rerum soluta!</p>
        </div>
        <div class="card-footer p-3 bg-white">
            <button class="btn fw-bold btn-primary me-3">Save to collection</button>
            <button class="btn fw-bold btn-secondary">Share</button>
        </div>
      </div>`;
  
      parentWrapper.insertAdjacentHTML("beforeend", cardTemplate);
      const cardCollection = new ExpandText(".card-description");
      cardCollection.checkText();
    });
  }

}

export default LoadNewPhotos;