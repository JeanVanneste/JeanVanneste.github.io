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
        this.shot();
        gameArea.context.fillStyle = this.color;
        gameArea.context.fillRect(this.x, this.y, this.width, this.height);
    }
    newPos() {
        if (this.x < 0 && this.speedX < 0) {
            this.x = 0;
        }
        else if (this.x >= areaWidth - 26 && this.speedX > 0) {
            this.x = areaWidth - 26;
        }
        else {
            this.x += this.speedX;
        }
        // this.y += 1;
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
    isIn(x, y) {
        if (x > this.x && x < (this.x + this.width) && y > this.y && y < (this.y + this.height)) {
            return true;
        }
        else { return false; }
    }
}

class UserShip extends Ship {
    constructor(healthPoint) {
        super('blue', 25, 25, areaWidth / 2 - 12, areaHeight - 25 - 5);
        this.healthPoint = healthPoint;
        this.shotPeriod = gameArea.interval * 2;
    }
    newPos() {
        if (this.x < 0 && this.speedX < 0) {
            this.x = 0;
        }
        else if (this.x >= areaWidth - 26 && this.speedX > 0) {
            this.x = areaWidth - 26;
        }
        else {
            this.x += this.speedX;
        }
    }
    shot() {
        if (gameArea.frame % this.shotPeriod == 0) {
            gameArea.playerBulletCount++;
            let shotSpeed = 5;
            const bullet = new PlayerBullet(this.x + this.width / 2, this.y, 0, -shotSpeed);
            gameArea.playerBullets.set(gameArea.playerBulletCount, bullet);
        }
    }
}

class EnnemyShip extends Ship {
    constructor(width, height, x, y) {
        super('green', width, height, x, y);
        this.shotPeriod = 100;
        this.shotStart = 5;
        this.direction = 'right';
        this.frameStart = gameArea.frame;
        this.speedX = 2;
    }
    /*
    shot() {
        if ((gameArea.frame % this.shotPeriod) == this.frameStart + this.shotStart) {
            gameArea.ennemyBulletCount++;
            const bullet = new EnnemyBullet(this.x + this.width / 2, this.y + this.height, 1, 0, 1);
            gameArea.ennemyBullets.set(gameArea.ennemyBulletCount, bullet);
        }
    }
    */
    shot() {
        if ((gameArea.frame >= this.frameStart + this.shotStart) && (Math.random() >= 0.975)) {
            gameArea.ennemyBulletCount++;
            let shotSpeed = Math.round((gameArea.frame / 500) + 0.5);
            const bullet = new EnnemyBullet(this.x + this.width / 2, this.y + this.height, 1, 0, shotSpeed);
            gameArea.ennemyBullets.set(gameArea.ennemyBulletCount, bullet);
        }
    }
    newPos() {
        if (this.x < 0 && this.speedX < 0) {
            this.x = 0;
            this.speedX = 2;
        }
        else if (this.x >= areaWidth - this.width && this.speedX > 0) {
            this.x = areaWidth - this.width;
            this.speedX = -2;
        }
        else {
            this.x += this.speedX;
        }
    }
}
