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
* 对数螺线;
*/
var Btn5 = /** @class */ (function (_super) {
    __extends(Btn5, _super);
    function Btn5() {
        var _this = _super.call(this) || this;
        _this.t = 1 / 160;
        _this.a = 1.1;
        _this.radianUnit = Math.PI / 50;
        _this.posX = 300;
        _this.posY = 300;
        _this.setup();
        return _this;
    }
    Btn5.prototype.setup = function () {
        Laya.timer.clearAll(this);
        Laya.timer.frameLoop(1, this, this.animate);
    };
    Btn5.prototype.animate = function () {
        this.posX = 300 + 5 * Math.pow(this.a, this.t * this.radianUnit) * Math.cos(this.t * this.radianUnit);
        this.posY = 300 + 5 * Math.pow(this.a, this.t * this.radianUnit) * Math.sin(this.t * this.radianUnit);
        this.t += 1;
        this.graphics.drawCircle(this.posX, this.posY, 1, "#FFFFFF");
    };
    return Btn5;
}(Laya.Sprite));
//# sourceMappingURL=Btn5.js.map