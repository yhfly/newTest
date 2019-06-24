import WebGL = Laya.WebGL;
import Sprite = Laya.Sprite;
import LayaEvent = Laya.Event;
import Browser = Laya.Browser;
import Handler = Laya.Handler;
import Stage = Laya.Stage;
// import Texture = Laya.Texture;
import Rectangle = Laya.Rectangle;


// 程序入口
class GameMain{
    // private apePath: string = "monkey.png";
    // private ape: Sprite;
    // private dragRegion: Rectangle;
    // private t = 5;
    // private item = new Item();
    constructor()
    {
        Laya.init(1280,720, WebGL);
        Laya.stage.alignV = Stage.ALIGN_MIDDLE;
        Laya.stage.alignH = Stage.ALIGN_CENTER;

        Laya.stage.scaleMode ="noboarder";
        Laya.stage.bgColor = "#232628";

        var guandongzhu = new Guandongzhu();
        // var a = [1,1,1];
        // var b = [1,4,1];
        // console.log(a.sort())
        // console.log(b.sort())
        // console.log(a.sort().toString())
        // console.log(b.sort().toString())
        // console.log(a.sort().toString() == b.sort().toString())
        // var item = new Item();
        // this.setup(item);
        // this.item.setType(0);
        // Laya.stage.addChild(this.item);
        // this.item.on(LayaEvent.MOUSE_DOWN, this, this.drag);
        // this.item.on(LayaEvent.MOUSE_UP, this, this.stopDrag);
        // Laya.timer.loop(1000, this, this.counter;

        // Laya.loader.load(this.apePath, Handler.create(this, this.onLoadComplete));
        // this.onLoadComplete();
        
    }

    // private drag()
    // {
    //     this.item.startDrag(null, false, 0);
    // }
    
    // private stopDrag()
    // {
    //     this.item.stopDrag();
    // }
    // private setup(item:Item):void
    // {
    //     item.setType(0);
    //     Laya.stage.addChild(item);
    //     Laya.timer.loop(1000, this, this.counter,[item]);
    // }
    // private item: Item;
    
    // private counter(item:Item):void
    // {
    //     this.t--;
    //     if(this.t == 0)
    //     {
    //         Laya.stage.removeChild(item);
    //     }
    // }


    // private onLoadComplete(): void {
    //     this.createApe();
    //     this.showDragRegion();
    // }

    // private createApe(): void {
    //     this.ape = new Sprite();
    //     this.ape.loadImage(this.apePath)
    //     // this.ape.texture = Laya.loader.getRes(this.apePath);
    //     // var texture: Texture = Laya.loader.getRes(this.apePath);
    //     // this.ape.width = this.ape.texture.width;
    //     // this.ape.height = this.ape.texture.height;
    //     Laya.stage.addChild(this.ape);

    //     this.ape.pivot(this.ape.width / 2, this.ape.height / 2);
    //     this.ape.x = Laya.stage.width / 2;
    //     this.ape.y = Laya.stage.height / 2;


    //     this.ape.on(LayaEvent.MOUSE_DOWN, this, this.onStartDrag);
    // }

    // private showDragRegion(): void{
    //     var dragWidthLimit: number = 350;
    //     var dragHeightLimit: number = 200;
    //     this.dragRegion = new Rectangle(Laya.stage.width - dragWidthLimit >> 1, Laya.stage.height - dragHeightLimit >> 1, dragWidthLimit, dragHeightLimit);
        
    //     Laya.stage.graphics.drawRect(
    //         this.dragRegion.x, this.dragRegion.y, this.dragRegion.width, this.dragRegion.height, null, "#FFFFFF", 2);

    // }

    // private onStartDrag(e: Event): void {
    //     this.ape.startDrag(this.dragRegion, true, 100);
    // }
}
setTimeout(function() {
new GameMain();
    
}, 500);