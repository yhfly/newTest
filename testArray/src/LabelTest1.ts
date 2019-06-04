/*
* 玫瑰线;
*/
class LabelTest1 extends Laya.Sprite{
    private t: number = 0;
    private n: number = 6;
    private a: number = 100;
    private radianUnit: number = Math.PI / 80;
    private posX: number = 0;
    private posY: number = 0;
    constructor(){
        super();
        this.setup();
    }

     private setup(): void 
    {
        Laya.timer.frameLoop(1, this, this.animate);
    }

    private animate( ): void 
    {   
        this.posX = 300 + this.a * Math.sin(this.n*this.t*this.radianUnit) * Math.cos(this.t * this.radianUnit);
        this.posY = 300 + this.a * Math.sin(this.n*this.t*this.radianUnit) * Math.sin(this.t * this.radianUnit);
        this.t += 0.1;     
        Laya.stage.graphics.drawCircle(this.posX, this.posY, 3, "#FFFFFF")  
    }   

}