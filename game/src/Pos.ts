/*
* name;
*/
class Pos{
    constructor()
    {
        this.itemPos();
        this.ranPos();
    }
    public itemPos():void
    {
        Arrays.bbqArr[0].x = 50;
        Arrays.bbqArr[0].y = 50;
        Arrays.bbqArr[1].x = 50;
        Arrays.bbqArr[1].y = 250;
        Arrays.bbqArr[2].x = 50;
        Arrays.bbqArr[2].y = 450;
        Laya.stage.addChild(Arrays.bbqArr[0]);
        Laya.stage.addChild(Arrays.bbqArr[1]);
        Laya.stage.addChild(Arrays.bbqArr[2]);
    }

    public ranPos():void
    {
        Arrays.ranArr[0].x = 300;
        Arrays.ranArr[0].y = 600;
        Arrays.ranArr[1].x = 500
        Arrays.ranArr[1].y = 600;
        Arrays.ranArr[2].x = 700;
        Arrays.ranArr[2].y = 600;
        Laya.stage.addChild(Arrays.ranArr[0]);
        Laya.stage.addChild(Arrays.ranArr[1]);
        Laya.stage.addChild(Arrays.ranArr[2]);
    }
}