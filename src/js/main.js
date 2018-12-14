let player1;
let enemey;


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

   
    this.load.image('tiles','src/assets/Tiles/ground/ground_02.png');

    this.load.image('mt','src/assets/Levels/mario.png');

    // Load tile map
    this.load.tilemapTiledJSON('map','src/assets/Levels/Level_1.json');
    //
    this.load.image('bg1','src/assets/BG/BG.png');

    //
    this.load.image('fox','src/assets/Object/Mushroom_1.png');

    //



}

function create (){

//     //
//     const level = [
//     [],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],
//     [],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],
    
//     [ 39,  39,  39,  39,  39,  39,  39,  39,  39,  40,  40, 39 ],
//     [ 39,  39,  39,  39,  39,  39,  39,  39,  39,  40,  40, 39 ]
// ];

    // parse


    // var map = this.make.tilemap({data:level,tileWidth:16,tileHeight:16});
    // var tiles = map.addTilesetImage('mt');
    // var layer = map.createStaticLayer(0,tiles,0,0);

   const map = this.make.tilemap({key:'map'});
   const tileset = map.addTilesetImage('ground_01','tiles');
   this.Groundlayer = map.createDynamicLayer('Tile Layer 1', tileset, 0, 0);
   this.Groundlayer.setCollision(0);
   this.Groundlayer.setCollisionByProperty({collides:true});

    




   //below.setCollision(1,true,'Tile Layer 1');



    platforms = this.physics.add.staticGroup();

    // platforms.create(30,600,'Ground').refreshBody();
    // for(let i =95;i<9000;) {
    //     platforms.create(i, 580, 'Ground').refreshBody();
    //     i+=65;
    // }


    player1 = new Player(35,450);
    enemey = new Enemey();


    cursors = this.input.keyboard.createCursorKeys();

    console.log(player1);

     




}

function update(){

    // this.physics.add.collider(player1.sprite,platforms,hitb,null,this);
    this.physics.add.collider(player1.sprite,this.Groundlayer);
   

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

    if (cursors.up.isDown && player1.sprite.body.touching.down)
    {
        player1.jumpM();
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

