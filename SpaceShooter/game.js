const areaWidth = 270;
const areaHeight = 480;

function updateGameArea() {
    gameArea.frame++;
    gameArea.clear();
    if (gameArea.x && gameArea.y) {
        gameArea.playerShip.x = gameArea.x;
        gameArea.playerShip.y = gameArea.y;
    }
    // gameArea.leftBtn.update();
    // gameArea.rightBtn.update();
    gameArea.playerShip.update();
    gameArea.ennemyShip.update();
    for (const [id, bullet] of gameArea.ennemyBullets) {
        bullet.update();
        if (gameArea.playerShip.isIn(bullet.x, bullet.y)) {
            return gameArea.gameOver();
        }
        if (bullet.y > gameArea.height) {
            gameArea.ennemyBullets.delete(id);
        }
    }
    for (const [id, bullet] of gameArea.playerBullets) {
        bullet.update();
        if (gameArea.ennemyShip.isIn(bullet.x, bullet.y)) {
            console.log(gameArea.playerBullets.delete(id));
            gameArea.points = gameArea.points + 100;
        }
        if (bullet.y < 0) {
            gameArea.playerBullets.delete(id);
        }
    }
    gameArea.points++;
    gameArea.score.update();
    // console.clear();
    // console.log(gameArea.frame);
}

function startGame() {
    gameArea = new GameArea(areaWidth, areaHeight, 20);
    gameArea.start();
}
