var redSquare;

function startGame(){
    myGameArea.start();
    redSquare = new component(25, 25, "red", 115, 2);
}

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.v = 1;
    this.update = function(){
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        if (this.y > (480-this.height)){this.v = - this.v}
        if (this.y < 0){this.v = -this.v}
    }
}

function updateGameArea(){
    myGameArea.clear();
    redSquare.y += redSquare.v;
    redSquare.update();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function(){
        this.canvas.width = 270;
        this.canvas.height = 480;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}