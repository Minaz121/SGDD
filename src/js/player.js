class Player {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        const player1 = game.physics.add.sprite(x, y, 'fox');
        player1.setCollideWorldBounds(true);
        player1.setGravity(0, 600);
        player1.enableBody = true;
        player1.body.checkCollision = true;
        this.sprite = player1;

    }

    leftM() {
        this.sprite.setVelocityX(-100);
         console.log(Math.floor( this.sprite.x));

    }

    rightM() {
     
        this.sprite.setVelocityX(80);
        console.log(Math.floor( this.sprite.x));

    }

    jumpM() {
        this.sprite.setVelocityY(-300);
    }
    neM(){
        this.sprite.setVelocityX(0);
    }

    getXs(){

        return player1.x
    }
}
