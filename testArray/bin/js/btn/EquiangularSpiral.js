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
* 等角螺线;
*/
var EquiangularSpiral = /** @class */ (function (_super) {
    __extends(EquiangularSpiral, _super);
    function EquiangularSpiral() {
        var _this = _super.call(this) || this;
        _this.t = 1 / 160;
        _this.a = 0.05;
        _this.radianUnit = Math.PI / 5;
        _this.play();
        return _this;
    }
    EquiangularSpiral.prototype.play = function () {
        this.t = 1 / 160;
        this.a = 0.05;
        this.radianUnit = Math.PI / 5;
        Laya.timer.frameLoop(1, this, this.animate);
    };
    EquiangularSpiral.prototype.stop = function () {
        Laya.timer.clear(this, this.animate);
        this.graphics.clear();
    };
    EquiangularSpiral.prototype.animate = function () {
        this.posX = 350 + 50 * Math.pow(Math.E, this.a * this.t * this.radianUnit) * Math.cos(this.t * this.radianUnit);
        this.posY = 500 + 50 * Math.pow(Math.E, this.a * this.t * this.radianUnit) * Math.sin(this.t * this.radianUnit);
        this.t += 0.1;
        this.graphics.drawCircle(this.posX, this.posY, 3, "#FFFFFF");
    };
    return EquiangularSpiral;
}(Laya.Sprite));
//# sourceMappingURL=EquiangularSpiral.js.map