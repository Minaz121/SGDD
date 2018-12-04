class entity{

    constructor(x,y,speed,maxHealth,damage){
       this.x=x;
       this.y=y;
       this.speed=speed;
       this.maxHealth=maxHealth;
       this.damage=damage;
    }

    setX(x){
        this.x=x;
    }
    getX(){
        return this.x;
    }

    setY(y){
        this.y=y;

    }

    setSpeed(speed) {
        this.speed = speed;
    }
}