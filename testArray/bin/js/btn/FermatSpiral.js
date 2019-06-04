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
var FermatSpiral = /** @class */ (function (_super) {
    __extends(FermatSpiral, _super);
    function FermatSpiral() {
        var _this = _super.call(this) || this;
        _this.r = 0;
        _this.play();
        return _this;
    }
    FermatSpiral.prototype.play = function () {
        this.r = 0;
        Laya.timer.frameLoop(1, this, this.animate);
    };
    FermatSpiral.prototype.stop = function () {
        Laya.timer.clear(this, this.animate);
        this.graphics.clear();
    };
    FermatSpiral.prototype.animate = function () {
        this.posX = 20 * this.r * Math.cos(this.r * this.r / (2 * Math.PI));
        this.posY = 20 * this.r * Math.sin(this.r * this.r / (2 * Math.PI));
        this.r += 0.1;
        this.graphics.drawCircle(350 + this.posX, 500 + this.posY, 3, "#FFFFFF");
        this.graphics.drawCircle(350 - this.posX, 500 - this.posY, 3, "#FFFFFF");
    };
    return FermatSpiral;
}(Laya.Sprite));
//# sourceMappingURL=FermatSpiral.js.map