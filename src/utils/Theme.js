class Theme {
  constructor(selectorButton) {
    this.buttonTheme = document.querySelector(selectorButton);
  }

  toggleTheme() {
    if (!this.buttonTheme) return;
    const body = document.querySelector("body");
    body.classList.add("day");
    this.buttonTheme.addEventListener("click", () => {
      if (this.buttonTheme.classList.contains("sun")) {
        this.buttonTheme.classList.remove("sun");
        this.buttonTheme.classList.add("moon");
        body.classList.remove("day");
        body.classList.add("night");
      } else {
        this.buttonTheme.classList.remove("moon");
        this.buttonTheme.classList.add("sun");

        body.classList.remove("night");
        body.classList.add("day");
      }
    });
  }
}

export default Theme;
