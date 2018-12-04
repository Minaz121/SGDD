let player1;
let config = {
    type: Phaser.AUTO,
    width: 800,
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
    // Liz Molnar https://raventale.itch.io/nature-tile-set
    this.load.image('Ground','src/assets/Tiles/ground/ground01.png');

    //
    this.load.image('bg1','src/assets/BG/BG.png');

    //
    this.load.image('fox','src/assets/Object/Mushroom_1.png');

}

function create (){

    platforms = this.physics.add.staticGroup();
    platforms.create(30,600,'Ground').refreshBody();
    for(let i =95;i<850;) {
        platforms.create(i, 580, 'Ground').refreshBody();
        i+=65;
    }

    player1 = new Player(40,400);

    this.physics.add.collider(player1.sprite,platforms);
    cursors = this.input.keyboard.createCursorKeys();

    console.log(player1);




}

function update(){

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
        player1.x +0;


    }

    if (cursors.up.isDown)
    {
        player1.jumpM();
    }


}


