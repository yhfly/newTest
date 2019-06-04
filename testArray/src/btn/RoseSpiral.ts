/*
* 玫瑰线;
*/
class RoseSpiral extends Laya.Sprite
{
    
    private t: number = 0;
    private n: number = 6;
    private a: number = 200;
    private radianUnit: number = Math.PI / 40;
    private posX: number;
    private posY: number;

    constructor()
    {
        super();
        this.play();
    }

    public play(): void 
    {
        this.t = 0;
        this.n = 6;
        this.a = 200;
        this.radianUnit = Math.PI / 40;
        Laya.timer.frameLoop(1, this, this.animate);
    }

    public stop(): void
    {
        Laya.timer.clear(this, this.animate);
        this.graphics.clear();
    }

    
    private animate(): void 
    {   
        this.posX = 350+this.a*Math.sin(this.n*this.t*this.radianUnit)*Math.cos(this.t*this.radianUnit);
        this.posY = 600+this.a*Math.sin(this.n*this.t*this.radianUnit)*Math.sin(this.t*this.radianUnit);
        this.t += 0.1;     
        this.graphics.drawCircle(this.posX, this.posY,3,"#FFFFFF")  
    }   

}