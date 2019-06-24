var WebGL = Laya.WebGL;
var Sprite = Laya.Sprite;
var LayaEvent = Laya.Event;
var Browser = Laya.Browser;
var Handler = Laya.Handler;
var Stage = Laya.Stage;
// import Texture = Laya.Texture;
var Rectangle = Laya.Rectangle;
// 程序入口
var GameMain = /** @class */ (function () {
    // private apePath: string = "monkey.png";
    // private ape: Sprite;
    // private dragRegion: Rectangle;
    // private t = 5;
    // private item = new Item();
    function GameMain() {
        Laya.init(1280, 720, WebGL);
        Laya.stage.alignV = Stage.ALIGN_MIDDLE;
        Laya.stage.alignH = Stage.ALIGN_CENTER;
        Laya.stage.scaleMode = "noboarder";
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
    return GameMain;
}());
setTimeout(function () {
    new GameMain();
}, 500);
//# sourceMappingURL=LayaSample.js.map