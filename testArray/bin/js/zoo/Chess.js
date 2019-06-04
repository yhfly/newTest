var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
* name;
*/
var Chess = /** @class */ (function (_super) {
    __extends(Chess, _super);
    function Chess() {
        var _this = _super.call(this) || this;
        _this.number = 70;
        _this._skin = new ui.GameViewUI();
        _this.addChild(_this._skin);
        _this.gameOver = new ui.test.GameoverUI();
        _this.pass = new ui.test.PassUI();
        return _this;
    }
    Chess.prototype.start = function () {
        this.itemArr = [];
        var numArr = new Array();
        var newArr = new Array();
        for (var i = 0; i < 35; i++) {
            var random = Math.floor(Math.random() * 24) + 1;
            var element = new LinkItem();
            element.setType(random);
            this.itemArr.push(element);
            element = new LinkItem();
            element.setType(random);
            this.itemArr.push(element);
        }
        this.itemArr.sort(this.randomSort);
        for (var index = 0; index < 70; index++) {
            var element = this.itemArr[index];
            element.x = 100 * Math.ceil(index % 10);
            element.y = 100 * Math.floor(index / 10) + 100;
            this.addChild(element);
            element.on(LayaEvent.CLICK, this, this.clickItem);
        }
        Laya.timer.loop(100, this, this.changeValue);
    };
    Chess.prototype.changeValue = function () {
        if (this._skin.progressBar.value >= 0 && this.number > 0) {
            this._skin.progressBar.value -= 0.01;
        }
        if (this._skin.progressBar.value <= 0 && this.number > 0) {
            this.removeChild(this._skin);
            this.addChild(this.gameOver);
            this.gameOver.replay.on(LayaEvent.CLICK, this, this.replay);
            Laya.timer.clear(this, this.changeValue);
        }
        if (this._skin.progressBar.value > 0 && this.number == 0) {
            this.removeChild(this._skin);
            this.addChild(this.pass);
            this.pass.replay.on(LayaEvent.CLICK, this, this.replay);
            Laya.timer.clear(this, this.changeValue);
        }
    };
    Chess.prototype.replay = function () {
        this.removeChild(this._skin);
        this.removeChild(this.pass);
        this.removeChild(this.gameOver);
        var chess = new Chess;
        chess.start();
        Laya.stage.addChild(chess);
    };
    Chess.prototype.clickItem = function (e) {
        var linkItem = e.target;
        if (this._preClickItem == null) {
            this._preClickItem = linkItem;
        }
        else {
            if (linkItem != this._preClickItem) {
                if (linkItem.type != this._preClickItem.type) {
                    this._preClickItem = linkItem;
                }
                else {
                    this.removeChild(this._preClickItem);
                    this.number -= 1;
                    this.removeChild(linkItem);
                    this.number -= 1;
                    this._preClickItem = null;
                }
            }
        }
    };
    Chess.prototype.randomSort = function (a, b) { return Math.random() > 0.5 ? -1 : 1; };
    return Chess;
}(Laya.Sprite));
//# sourceMappingURL=Chess.js.map