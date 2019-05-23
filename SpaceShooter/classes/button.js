class Button {
    constructor(width, height, x, y) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
    }
    update() {
        gameArea.context.fillstyle = "green";
        gameArea.context.fillRect(this.x, this.y, this.width, this.height);
    }
}