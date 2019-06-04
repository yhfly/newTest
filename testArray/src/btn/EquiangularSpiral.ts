/*
* 等角螺线;
*/
class EquiangularSpiral extends Laya.Sprite
{
    private t: number = 1/160;
    private a: number = 0.05;
    private radianUnit: number = Math.PI / 5;
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
        this.a = 0.05;
        this.radianUnit = Math.PI / 5;
        Laya.timer.frameLoop(1, this, this.animate);
    }

     public stop(): void
    {
        Laya.timer.clear(this, this.animate);
        this.graphics.clear();
    }

     private animate( ): void 
    {   
        this.posX = 350 + 50*Math.pow(Math.E , this.a*this.t*this.radianUnit)*Math.cos(this.t*this.radianUnit);
        this.posY = 500 + 50*Math.pow(Math.E , this.a*this.t*this.radianUnit)*Math.sin(this.t*this.radianUnit);
        this.t += 0.1;     
        this.graphics.drawCircle(this.posX, this.posY,3,"#FFFFFF")  
    }   

}