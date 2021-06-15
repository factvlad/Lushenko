class Goods {
    constructor(name, amount, image, count) {
      this.name = name;
      this.amount = amount;
      this.image = image;
      this.count = count;
    }
    draw(element) {
      document.querySelector(
        element
      ).innerHTML += `${this.name} <i class="material-icons">${this.image}</i>  ${this.count}`;
    }
  }