const canvas = document.querySelector('canvas');
const scale = 10;
var ctx = canvas.getContext('2d');

var snake;

(function setup() {
  snake = new Snake();
  food = new Food();

  food.pickRandomLocation();

  window.setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snake.update();
    snake.draw();
    food.draw();

    if (snake.eat(food)) {
      food.pickRandomLocation();
    }
  }, 62.5);
}());

window.addEventListener('keydown', ((event) => {
  var direction = event.key.replace('Arrow', '');
  snake.changeDirection(direction);
}));
