/*
* name;
*/
class Region{
    private dragHeight = 200;
    private dragWidth = 200
    constructor(){
        this.showRegion();
    }
    private showRegion()
    {
        Laya.stage.graphics.drawRect(300, 200, this.dragWidth, this.dragHeight, null, "#FFFFFF", 2);
        Laya.stage.graphics.drawRect(600, 200, this.dragWidth, this.dragHeight, null, "#FFFFFF", 2);
        Laya.stage.graphics.drawRect(900, 200, this.dragWidth, this.dragHeight, null, "#FFFFFF", 2);
        Laya.stage.graphics.drawCircle(1100, 600, 100, null, "#FF0000", 5)
    }
}