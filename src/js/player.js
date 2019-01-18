class Player {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        const player1 = game.physics.add.sprite(x, y, 'vertix');
        player1.enableBody = true;
        player1.setCollideWorldBounds(true);
        player1.setGravity(0, 800);
        player1.body.setSize(50,37);
        player1.setScale(0.7);
        this.sprite = player1;

    }

    moveLeft() {
        this.sprite.setVelocityX(-100);
         console.log(Math.floor( this.sprite.x));

    }

    moveRight() {

        this.sprite.setVelocityX(100);
        console.log(Math.floor( this.sprite.x));

    }

    jumpUp() {
        this.sprite.setVelocityY(-500);
    }

    neutralMovement(){
        this.sprite.setVelocityX(0);
    }

    shrinkDown(){
        this.sprite.setScale(0.1);

            }



   
}
