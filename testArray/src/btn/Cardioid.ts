/*
* 心形线;
*/
class Cardioid extends Laya.Sprite implements ISpiral{
    private t: number = 1/160;
    private a: number = 50;
    private radianUnit: number = Math.PI / 10;
    private posX: number;
    private posY: number;

    constructor()
    {
        super();
        this.play();
    }
 

    public play(): void 
    {
        this.t = 1/160;
        this.a = 50;
        this.radianUnit = Math.PI / 10;
        this.posX = 0;
        this.posY = 0;
        Laya.timer.frameLoop(1, this, this.animate);
    }

    public stop(): void

    {
        Laya.timer.clear(this, this.animate);
        this.graphics.clear();
    }

    private animate(): void 
    {   
        this.posX = 350 + this.a * (2*Math.sin(this.t * this.radianUnit)-Math.sin(2 * (this.t * this.radianUnit)));
        this.posY = 500 - this.a * (2*Math.cos(this.t * this.radianUnit)-Math.cos(2 * (this.t * this.radianUnit)));
        this.t += 0.1;     
        this.graphics.drawCircle(this.posX, this.posY, 3, "#FFFFFF") 
    }   

}