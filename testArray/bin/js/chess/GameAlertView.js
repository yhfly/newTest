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
var GameAlertView = /** @class */ (function (_super) {
    __extends(GameAlertView, _super);
    function GameAlertView() {
        var _this = _super.call(this) || this;
        _this._skin = new ui.test.AlertUI();
        _this.addChild(_this._skin);
        _this._skin.okBtn.on(LayaEvent.CLICK, _this, _this.onOKBtn);
        return _this;
    }
    GameAlertView.prototype.onOKBtn = function () {
        this.event(GameEvent.RANDOM);
    };
    return GameAlertView;
}(Laya.Sprite));
//# sourceMappingURL=GameAlertView.js.map