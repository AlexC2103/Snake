const canvas = document.querySelector('canvas');
const scale = 10;
var ctx = canvas.getContext('2d');
var snake;

setup();
function setup() {
  snake = new Snake();

  window.setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snake.update();
    snake.draw();
  }, 125);
}

window.addEventListener('keydown', ((event) => {
  var direction = event.key.replace('Arrow', '');
  snake.changeDirection(direction);
}));
