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
* Choose Button;
*/
var ChooseBtn = /** @class */ (function (_super) {
    __extends(ChooseBtn, _super);
    function ChooseBtn() {
        var _this = _super.call(this) || this;
        Laya.loader.load("res/atlas/comp.atlas", new Handler(_this, _this.onLoadComplete), null, Laya.Loader.ATLAS);
        return _this;
    }
    ChooseBtn.prototype.onLoadComplete = function () {
        this.spirals = new ui.test.SpiralsUI();
        Laya.stage.addChild(this.spirals);
        this.spirals.btn3.on(LayaEvent.CLICK, this, this.setup3);
        this.spirals.btn4.on(LayaEvent.CLICK, this, this.setup4);
    };
    ChooseBtn.prototype.setup3 = function (e) {
        if (this.dengjiao) {
            this.dengjiao.stop();
            this.dengjiao.graphics.clear();
        }
        this.xinxing = new Xinxing();
        Laya.stage.addChild(this.xinxing);
    };
    ChooseBtn.prototype.setup4 = function (e) {
        if (this.xinxing) {
            this.xinxing.stop();
            this.xinxing.graphics.clear();
        }
        this.dengjiao = new Dengjiao();
        Laya.stage.addChild(this.dengjiao);
    };
    return ChooseBtn;
}(Laya.Sprite));
//# sourceMappingURL=ChooseBtn.js.map