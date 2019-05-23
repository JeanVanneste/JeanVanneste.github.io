const areaWidth=270;
const areaHeight=480;

function updateGameArea() {
    gameArea.clear();
    //gameArea.leftBtn.update();
    //gameArea.rightBtn.update();
    gameArea.playerShip.update();
}

function startGame(){
    gameArea = new GameArea(areaWidth, areaHeight, 20);
    gameArea.start();
}
