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
var GameOver = /** @class */ (function (_super) {
    __extends(GameOver, _super);
    function GameOver() {
        var _this = _super.call(this) || this;
        _this._skin = new ui.test.GameoverUI();
        _this.addChild(_this._skin);
        _this._skin.replay.on(LayaEvent.CLICK, _this, _this.replay);
        return _this;
    }
    GameOver.prototype.replay = function () {
        //事件GameEvent.REPLAY
        this.event(GameEvent.REPLAY);
    };
    return GameOver;
}(Laya.Sprite));
//# sourceMappingURL=GameOver.js.map