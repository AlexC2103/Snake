function Food() {
  this.x;
  this.y;

  var rows = canvas.width / scale;
  var columns = canvas.height / scale;

  this.pickRandomLocation = function () {
    this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
    this.y = (Math.floor(Math.random() * columns - 1) + 1) * scale;
  };

  this.draw = function () {
    ctx.fillStyle = '#ff4d00';
    ctx.fillRect(this.x, this.y, scale, scale);
  };
}
