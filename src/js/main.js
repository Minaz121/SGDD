let player1;

let config = {
    type: Phaser.AUTO,
    width: 820,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0},
            debug: true
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

let game = new Phaser.Game(config);

function preload (){

    game=this;

    this.load.image('tiles','src/assets/Tiles/wall/wall_1.png');

    // Load tile map
    this.load.tilemapTiledJSON('map','src/assets/Levels/World_2.json');
    //
    this.load.image('bg1','src/assets/BG/BG.png');

    //
    this.load.image('fox','src/assets/Object/Mushroom_1.png');


}

function create (){

    //create player
    player1 = new Player(45,450);

    const map = this.make.tilemap({key:'map'});

    const tileset = map.addTilesetImage('walls_1','tiles');

    const grounds = map.createStaticLayer('Tile Layer 1',tileset,0,0);

   // grounds.setCollision(0);
    grounds.setCollisionByProperty({collides:true});



    this.physics.add.collider(player1.sprite,grounds);

    const debugGraphics = this.add.graphics().setAlpha(0.5);
    grounds.renderDebug(debugGraphics, {
        tileColor: null, // Color of non-colliding tiles
        //collidingTileColor: new Phaser.Display.Color(255, 134, 34, 255), // Color of colliding tiles
        faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Color of colliding face edges
    });




    
    cursors = this.input.keyboard.createCursorKeys();

    console.log(player1);






}

function update(){
    // this.physics.add.collider(player1.sprite,platforms,hitb,null,this);



    if (cursors.left.isDown)
    {
        player1.leftM();

    }
    else if (cursors.right.isDown)
    {
        player1.rightM();



    }
    else
    {
        player1.neM();



    }

    if (cursors.up.isDown && player1.sprite.body.blocked.down)
    {
        player1.jumpM();
        player1.shrinkMe();
        playerColor(player1.sprite);
    }


}

function  hitb(player1,platforms) {
    player1.setTint(0xffff);
    //player1.setVelocityY(-800);
    console.log(player1.y);
}



function playerColor(player1){

    player1.setTint(0xff0000);

}

