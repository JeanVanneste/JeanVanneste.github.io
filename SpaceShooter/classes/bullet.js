class Bullet {
    constructor(x, y, speedX, speedY) {
        this.speedX = speedX;
        this.speedY = speedY;
        this.x = x;
        this.y = y;
        this.radius = 5;
    }
    update() {
        this.newPos();
        this.draw();
    }
    newPos() {
        this.x = this.x + this.speedX;
        this.y = this.y + this.speedY;
    }
    draw() {
        gameArea.context.beginPath();
        gameArea.context.ellipse(this.x, this.y, 5, 5, 0, 0, 2 * Math.PI);
        gameArea.context.closePath();
        gameArea.context.fillStyle = this.color;
        gameArea.context.fill();
    }
}

class PlayerBullet extends Bullet {
    constructor(x, y, speedX, speedY) {
        super(x, y, speedX, speedY);
        this.identifier = gameArea.playerBulletCount;
        this.color = 'purple';
    }
}

class EnnemyBullet extends Bullet {
    constructor(x, y, damage, speedX, speedY) {
        super(x, y, speedX, speedY);
        this.damage = damage;
        this.identifier = gameArea.ennemyBulletCount;
        this.color = 'red';
    }
}