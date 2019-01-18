let player1;
let grounds;
let audio1 = new audio();

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

    // Load assets

    this.load.image('tiles','src/assets/Tiles/wall/wall_hyro_1.png');

    //Load Player Object
    this.load.image('vertix','src/assets/Object/player.png');


    // Load tile map world
    this.load.tilemapTiledJSON('map1','src/assets/Levels/World_2.json');
    this.load.tilemapTiledJSON('map','src/assets/Levels/World_3.json');

    //
    this.load.image('bg1','src/assets/BG/BG.png');



}

function create (){

    //create player
    player1 = new Player(45,450);

    const map = this.make.tilemap({key:'map'});

    const tileset = map.addTilesetImage('walls_1','tiles');

    grounds = map.createStaticLayer('Tile Layer 1',tileset,0,0);

   // grounds.setCollision(0);
    grounds.setCollisionByProperty({collides:true});

    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.cameras.main.startFollow(player1);

    // this.physics.add.collider(player1.sprite,grounds);

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
    this.physics.add.collider(player1.sprite,grounds);
    


    if (cursors.left.isDown)
    {
        player1.moveLeft();

    }
    else if (cursors.right.isDown)
    {
        player1.moveRight();
        




    }
    else
    {
        player1.neutralMovement();




    }

    if (cursors.up.isDown && player1.sprite.body.blocked.down)
    {
        player1.jumpUp();


    }


}

function collisionHit(){

    player1.sprite.setVelocityX(-500);

}

