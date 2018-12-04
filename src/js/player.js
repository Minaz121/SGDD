class Player {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        const player1 = game.physics.add.sprite(x, y, 'fox');
        player1.setCollideWorldBounds(true);
        player1.setGravity(0, 500);
        player1.enableBody = true;
        player1.body.checkCollision = true;
        this.sprite = player1;
    }

    leftM() {
        this.sprite.x += -3;
    }

    rightM() {
        this.sprite.x += 3;
    }

    jumpM() {
        this.sprite.y += -5;
    }
}