/*
* 阿基米德螺线;
*/
class ArchimedeanSpiral extends Laya.Sprite
{
    private t: number = 0;
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
        this.radianUnit = Math.PI / 40;
        Laya.timer.frameLoop(1,this, this.animate);
    }

    public stop(): void
    {
        Laya.timer.clear(this, this.animate);
        this.graphics.clear();
    }

    private animate(): void 
    {
        this.t += 1;
        this.posX = 350 + 5*this.t * this.radianUnit * Math.cos(this.t*this.radianUnit);
        this.posY = 500 + 5*this.t * this.radianUnit * Math.sin(this.t*this.radianUnit);      
        this.graphics.drawCircle(this.posX, this.posY,3,"#FFFFFF")
    }   

}