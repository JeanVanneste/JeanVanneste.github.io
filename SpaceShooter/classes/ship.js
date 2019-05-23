class Ship {
    constructor(color, width, height, x, y) {
        this.color = color;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.speedX = 0;
        this.baseSpeed = 2;
    }
    update() {
        this.newPos();
        gameArea.context.fillStyle = this.color
        gameArea.context.fillRect(this.x, this.y, this.width, this.height)
    }
    newPos() {
        if (this.x < 0 && this.speedX < 0) {
            this.x = 0;
        }
        else if (this.x >= areaWidth -26 && this.speedX > 0) {
            this.x = areaWidth-26;
        }
        else {
            this.x += this.speedX;
        }
    }
    moveLeft() {
        this.speedX -= this.baseSpeed;
    }
    moveRight() {
        this.speedX += this.baseSpeed;
    }
    stop() {
        this.speedX = 0;
    }

}

class UserShip extends Ship {
    constructor(healthPoint) {
        super("blue", 25, 25, areaWidth/2 -12, areaHeight-25 -5);
        this.healthPoint = healthPoint;
        this.shotPeriod = gameArea.interval*12;
    }
}

class EnnemyShip extends Ship {
    constructor (width, height, x, y) {
        super("red", width, height, x, y);
        this.shotPeriod = gameArea.interval*25;
        this.shotStart = 5;
    }
}