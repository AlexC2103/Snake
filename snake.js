function Snake() {
  this.x = 160;
  this.y = 160;
  this.xSpeed = scale * 1;
  this.ySpeed = 0;
  this.foodEaten = 0;
  this.tail = [];

  this.draw = function () {
    ctx.fillStyle = '#25ad00';
    for (var i = 0; i < this.tail.length; ++i) {
      ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
    }

    ctx.fillRect(this.x, this.y, scale, scale);
  };

  this.update = function () {
    for (var i = 0; i < this.tail.length - 1; ++i) {
      this.tail[i] = this.tail[i + 1];
    }

    this.tail[this.foodEaten - 1] =  { x: this.x, y: this.y };
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    if (this.x > canvas.width) {
      this.x = 0;
    }

    if (this.x < 0) {
      this.x = canvas.width;
    }

    if (this.y > canvas.height) {
      this.y = 0;
    }

    if (this.y < 0) {
      this.y = canvas.height;
    }
  };

  this.changeDirection = function (direction) {
    switch (direction) {
      case 'Up':
        this.xSpeed = 0;
        this.ySpeed = -scale * 1;
        break;
      case 'Down':
        this.xSpeed = 0;
        this.ySpeed = scale * 1;
        break;
      case 'Right':
        this.xSpeed = scale * 1;
        this.ySpeed = 0;
        break;
      case 'Left':
        this.xSpeed = -scale * 1;
        this.ySpeed = 0;
        break;
    }
  };

  this.eat = function (food) {
    if (this.x === food.x && this.y === food.y) {
      this.foodEaten++;
      return true;
    }

    return false;
  };
}
