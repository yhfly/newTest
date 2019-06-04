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
var GamePassView = /** @class */ (function (_super) {
    __extends(GamePassView, _super);
    function GamePassView() {
        var _this = _super.call(this) || this;
        _this._skin = new ui.test.PassUI();
        _this.addChild(_this._skin);
        /**
         * 点击replay时,触发onReplay
         */
        _this._skin.play.on(LayaEvent.CLICK, _this, _this.onReplay);
        return _this;
    }
    GamePassView.prototype.onReplay = function () {
        /**
         * 事件GameEvent.REPLAY
         */
        this.event(GameEvent.REPLAY);
    };
    return GamePassView;
}(Laya.Sprite));
//# sourceMappingURL=GamePassView.js.map