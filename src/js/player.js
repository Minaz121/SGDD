class Player {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        const player1 = game.physics.add.sprite(x, y, 'fox');
        player1.enableBody = true;
        player1.setCollideWorldBounds(true);
        player1.setGravity(0, 500);
        player1.body.setSize(40,30);
        this.sprite = player1;

    }

    leftM() {
        this.sprite.setVelocityX(-100);
         console.log(Math.floor( this.sprite.x));

    }

    rightM() {

        this.sprite.setVelocityX(100);
        console.log(Math.floor( this.sprite.x));

    }

    jumpM() {
        this.sprite.setVelocityY(-400);
    }
    neM(){
        this.sprite.setVelocityX(0);
    }


    shrinkMe(){
      this.sprite.setScale(0.5);
    }

    getXs(){

        return player1.x
    }
}
