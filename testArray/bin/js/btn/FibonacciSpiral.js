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
* 斐波那契螺线;
*/
var FibonacciSpiral = /** @class */ (function (_super) {
    __extends(FibonacciSpiral, _super);
    function FibonacciSpiral() {
        var _this = _super.call(this) || this;
        _this.t = 0;
        _this.radianUnit = Math.PI / 80;
        _this.play();
        return _this;
    }
    FibonacciSpiral.prototype.play = function () {
        this.t = 0;
        this.radianUnit = Math.PI / 80;
        Laya.timer.frameLoop(1, this, this.animate);
    };
    FibonacciSpiral.prototype.stop = function () {
        Laya.timer.clear(this, this.animate);
        this.graphics.clear();
    };
    FibonacciSpiral.prototype.animate = function () {
        this.posX = 350 + 0.5 * Math.pow(1.618, 2 * this.t * this.radianUnit / Math.PI) * Math.cos(this.t * this.radianUnit);
        this.posY = 500 + 0.5 * Math.pow(1.618, 2 * this.t * this.radianUnit / Math.PI) * Math.sin(this.t * this.radianUnit);
        this.t += 1;
        this.graphics.drawCircle(this.posX, this.posY, 2, "#FFFFFF");
    };
    return FibonacciSpiral;
}(Laya.Sprite));
//# sourceMappingURL=FibonacciSpiral.js.map