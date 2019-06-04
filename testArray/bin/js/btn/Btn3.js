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
* 费马螺线;
*/
var Btn3 = /** @class */ (function (_super) {
    __extends(Btn3, _super);
    function Btn3() {
        var _this = _super.call(this) || this;
        _this.t = 1 / 160;
        _this.a = 50;
        _this.radianUnit = Math.PI / 20;
        _this.posX = 0;
        _this.posY = 0;
        Laya.timer.frameLoop(1, _this, _this.animate3);
        return _this;
        //this.setup();
    }
    // private setup(): void 
    // {
    //     Laya.timer.frameLoop(1, this, this.animate3);
    // }
    Btn3.prototype.stop = function () {
        Laya.timer.clear(this, this.animate3);
    };
    Btn3.prototype.animate3 = function () {
        this.posX = 300 + this.a * (2 * Math.sin(this.t * this.radianUnit) - Math.sin(2 * (this.t * this.radianUnit)));
        this.posY = 300 - this.a * (2 * Math.cos(this.t * this.radianUnit) - Math.cos(2 * (this.t * this.radianUnit)));
        this.t += 0.1;
        this.graphics.drawCircle(this.posX, this.posY, 3, "#FFFFFF");
    };
    return Btn3;
}(Laya.Sprite));
//# sourceMappingURL=Btn3.js.map