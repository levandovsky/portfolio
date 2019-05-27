class Bird {
  constructor(x, y, src, img) {
    this.x = x;
    this.y = y;
    this.src = src;
    this.img = img;
  }

  draw() {
    this.img = new Image();

    this.img.src = this.src;

    ctx.drawImage(this.img, this.x, this.y);
  }

  fall() {
    this.y += gForce;
  }
}