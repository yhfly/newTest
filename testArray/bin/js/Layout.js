/*
* name;
*/
var Layout = /** @class */ (function () {
    function Layout() {
        Laya.loader.load("res/atlas/comp.atlas", new Handler(this, this.onLoadComplete), null, Laya.Loader.ATLAS);
    }
    Layout.prototype.onLoadComplete = function () {
        this.lianliankan = new ui.test.LianliankanUI();
        this.lianliankan.play.on(LayaEvent.CLICK, this, this.clickPlay);
        Laya.stage.addChild(this.lianliankan);
    };
    Layout.prototype.clickPlay = function (e) {
        var chess = new Chess();
        if (this.lianliankan.parent) {
            Laya.stage.removeChild(this.lianliankan);
        }
        chess.start();
        Laya.stage.addChild(chess);
    };
    return Layout;
}());
//# sourceMappingURL=Layout.js.map