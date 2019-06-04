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
* 心形线;
*/
var Cardioid = /** @class */ (function (_super) {
    __extends(Cardioid, _super);
    function Cardioid() {
        var _this = _super.call(this) || this;
        _this.t = 1 / 160;
        _this.a = 50;
        _this.radianUnit = Math.PI / 10;
        _this.play();
        return _this;
    }
    Cardioid.prototype.play = function () {
        this.t = 1 / 160;
        this.a = 50;
        this.radianUnit = Math.PI / 10;
        this.posX = 0;
        this.posY = 0;
        Laya.timer.frameLoop(1, this, this.animate);
    };
    Cardioid.prototype.stop = function () {
        Laya.timer.clear(this, this.animate);
        this.graphics.clear();
    };
    Cardioid.prototype.animate = function () {
        this.posX = 350 + this.a * (2 * Math.sin(this.t * this.radianUnit) - Math.sin(2 * (this.t * this.radianUnit)));
        this.posY = 500 - this.a * (2 * Math.cos(this.t * this.radianUnit) - Math.cos(2 * (this.t * this.radianUnit)));
        this.t += 0.1;
        this.graphics.drawCircle(this.posX, this.posY, 3, "#FFFFFF");
    };
    return Cardioid;
}(Laya.Sprite));
//# sourceMappingURL=Cardioid.js.map