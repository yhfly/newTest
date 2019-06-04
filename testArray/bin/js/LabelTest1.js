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
* 玫瑰线;
*/
var LabelTest1 = /** @class */ (function (_super) {
    __extends(LabelTest1, _super);
    function LabelTest1() {
        var _this = _super.call(this) || this;
        _this.t = 0;
        _this.n = 6;
        _this.a = 100;
        _this.radianUnit = Math.PI / 80;
        _this.posX = 0;
        _this.posY = 0;
        _this.setup();
        return _this;
    }
    LabelTest1.prototype.setup = function () {
        Laya.timer.frameLoop(1, this, this.animate);
    };
    LabelTest1.prototype.animate = function () {
        this.posX = 300 + this.a * Math.sin(this.n * this.t * this.radianUnit) * Math.cos(this.t * this.radianUnit);
        this.posY = 300 + this.a * Math.sin(this.n * this.t * this.radianUnit) * Math.sin(this.t * this.radianUnit);
        this.t += 0.1;
        Laya.stage.graphics.drawCircle(this.posX, this.posY, 3, "#FFFFFF");
    };
    return LabelTest1;
}(Laya.Sprite));
//# sourceMappingURL=LabelTest1.js.map