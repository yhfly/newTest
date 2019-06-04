/*
* 斐波那契螺线;
*/
class FibonacciSpiral extends Laya.Sprite
{
    private t: number = 0;
    private radianUnit: number = Math.PI / 80;
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
        this.radianUnit = Math.PI / 80;
        Laya.timer.frameLoop(1, this, this.animate)
    }

    public stop(): void
    {
        Laya.timer.clear(this, this.animate);
        this.graphics.clear();
    }

    private animate( ): void 
    {   
        this.posX = 350+0.5 * Math.pow(1.618, 2*this.t*this.radianUnit/Math.PI)*Math.cos(this.t*this.radianUnit); 
        this.posY = 500+0.5 * Math.pow(1.618, 2*this.t*this.radianUnit/Math.PI)*Math.sin(this.t*this.radianUnit);
        this.t += 1;     
        this.graphics.drawCircle(this.posX, this.posY,2,"#FFFFFF") 
    }   

}