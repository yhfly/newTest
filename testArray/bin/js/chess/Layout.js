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
        this.initChess();
        if (this.lianliankan.parent) {
            Laya.stage.removeChild(this.lianliankan);
        }
        this.chess.start();
        Laya.stage.addChild(this.chess);
    };
    Layout.prototype.initChess = function () {
        this.chess = new Chess();
        this.chess.on(GameEvent.WIN, this, this.onWin);
        this.chess.on(GameEvent.LOST, this, this.lost);
        this.chess.on(GameEvent.RANDOM, this, this.onRandom);
    };
    Layout.prototype.onRandom = function () {
        if (this._randomView == null) {
            this._randomView = new GameAlertView();
            this._randomView.on(GameEvent.RANDOM, this, this.doRandom);
        }
        Laya.stage.addChild(this._randomView);
    };
    Layout.prototype.doRandom = function () {
        Laya.stage.removeChild(this._randomView);
        this.chess.timeResume();
    };
    /**
     * 赢啦
     */
    Layout.prototype.onWin = function () {
        if (this._passView == null) {
            this._passView = new GamePassView();
            this._passView.on(GameEvent.REPLAY, this, this.onNextRound);
        }
        Laya.stage.removeChild(this.chess);
        Laya.stage.addChild(this._passView);
    };
    /**
     * 输啦
     */
    Layout.prototype.lost = function () {
        this.chess.lineBox.graphics.clear();
        if (this._gameoverView == null) {
            this._gameoverView = new GameOver();
            this._gameoverView.on(GameEvent.REPLAY, this, this.onReplay);
        }
        Laya.stage.removeChild(this.chess);
        Laya.stage.addChild(this._gameoverView);
    };
    Layout.prototype.onReplay = function () {
        Laya.stage.removeChild(this._gameoverView);
        this.chess.rePlay();
        Laya.stage.addChild(this.chess);
    };
    Layout.prototype.onNextRound = function () {
        Laya.stage.removeChild(this._passView);
        this.chess.nextRound();
        Laya.stage.addChild(this.chess);
    };
    return Layout;
}());
//# sourceMappingURL=Layout.js.map