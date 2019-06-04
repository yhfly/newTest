/*
* 费马螺线;
*/
class FermatSpiral extends Laya.Sprite
{
    private r: number = 0;
    private posX: number;
    private posY: number;
    constructor()
    {
        super();
        this.play();
    }

    public play(): void
    {
        this.r = 0;
        Laya.timer.frameLoop(1, this, this.animate);
    }

    public stop(): void
    {
        Laya.timer.clear(this,this.animate);
        this.graphics.clear();
    }

    private animate(): void 
    {   
        this.posX = 20*this.r * Math.cos(this.r * this.r/(2*Math.PI));
        this.posY = 20*this.r * Math.sin(this.r * this.r/(2*Math.PI));
        this.r += 0.1;     
        this.graphics.drawCircle(350+this.posX, 500+this.posY, 3, "#FFFFFF") 
        this.graphics.drawCircle(350-this.posX, 500-this.posY, 3, "#FFFFFF")      
    }  

}