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
var RoseSpiral = /** @class */ (function (_super) {
    __extends(RoseSpiral, _super);
    function RoseSpiral() {
        var _this = _super.call(this) || this;
        _this.t = 0;
        _this.n = 6;
        _this.a = 200;
        _this.radianUnit = Math.PI / 40;
        _this.play();
        return _this;
    }
    RoseSpiral.prototype.play = function () {
        this.t = 0;
        this.n = 6;
        this.a = 200;
        this.radianUnit = Math.PI / 40;
        Laya.timer.frameLoop(1, this, this.animate);
    };
    RoseSpiral.prototype.stop = function () {
        Laya.timer.clear(this, this.animate);
        this.graphics.clear();
    };
    RoseSpiral.prototype.animate = function () {
        this.posX = 350 + this.a * Math.sin(this.n * this.t * this.radianUnit) * Math.cos(this.t * this.radianUnit);
        this.posY = 600 + this.a * Math.sin(this.n * this.t * this.radianUnit) * Math.sin(this.t * this.radianUnit);
        this.t += 0.1;
        this.graphics.drawCircle(this.posX, this.posY, 3, "#FFFFFF");
    };
    return RoseSpiral;
}(Laya.Sprite));
//# sourceMappingURL=RoseSpiral.js.map