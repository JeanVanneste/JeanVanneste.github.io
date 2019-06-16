class GameArea {
    constructor(width, height, interval) {
        this.canvas = document.getElementById('canvas');
        this.width = width;
        this.height = height;
        this.interval = interval;
        this.ennemyBulletCount = 0;
        this.playerBulletCount = 0;
        this.score = new Score(20, 'Consolas', this.width - 230);
        this.points = 0;
    }
    start() {
        this.canvas.width = areaWidth;
        this.canvas.height = areaHeight;
        this.context = this.canvas.getContext('2d');
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, this.interval);
        this.frame = 0;
        // this.leftBtn = new Button(30, 30, 10, 440);
        // this.rightBtn = new Button(30,30, 230, 440);

        this.playerShip = new UserShip(100);
        this.ennemyShip = new EnnemyShip(50, 30, 100, 30);
        this.ennemyBullets = new Map();
        this.playerBullets = new Map();

        window.addEventListener('touchmove', function(e) {
            this.x = e.touches[0].screenX;
            this.y = e.touches[0].screenY;
        });
    }
    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    stop() {
        clearInterval(this.interval);
    }
    unpause() {
        this.interval = setInterval(updateGameArea, this.interval);
    }
    gameOver() {
        this.stop();
        // this.context.clearRect(0, 0, areaWidth, areaHeight);
        this.context.fillStyle = 'black';
        this.context.fillText('Game Over', 70, 240);
        this.context.fillText('Score : ' + this.points, 74, 270);
    }
}

class Score {
    constructor(size, font, x) {
        this.font = size + 'px ' + font;
        this.x = x;
        this.y = size + 5;
        this.color = 'black';
        this.text = 'Score: 0';
    }
    setText(score) {
        this.text = 'Score: ' + score;
    }
    update() {
        gameArea.context.font = this.font;
        this.setText(gameArea.points);
        gameArea.context.fillStyle = this.color;
        gameArea.context.fillText(this.text, this.x, this.y);
    }
}