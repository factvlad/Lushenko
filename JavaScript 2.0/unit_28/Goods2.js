class Goods2 extends Goods {
  constructor(name, amount, image, count, sale) {
    super(name, amount, image, count);
    this.sale = sale;
  }

  draw(element) {
    super.draw(element);
    document.querySelector(element).innerHTML += ` ${this.sale}`;
  }
}
