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
* 阿基米德螺线;
*/
var ArchimedeanSpiral = /** @class */ (function (_super) {
    __extends(ArchimedeanSpiral, _super);
    function ArchimedeanSpiral() {
        var _this = _super.call(this) || this;
        _this.t = 0;
        _this.radianUnit = Math.PI / 40;
        _this.play();
        return _this;
    }
    ArchimedeanSpiral.prototype.play = function () {
        this.t = 0;
        this.radianUnit = Math.PI / 40;
        Laya.timer.frameLoop(1, this, this.animate);
    };
    ArchimedeanSpiral.prototype.stop = function () {
        Laya.timer.clear(this, this.animate);
        this.graphics.clear();
    };
    ArchimedeanSpiral.prototype.animate = function () {
        this.t += 1;
        this.posX = 350 + 5 * this.t * this.radianUnit * Math.cos(this.t * this.radianUnit);
        this.posY = 500 + 5 * this.t * this.radianUnit * Math.sin(this.t * this.radianUnit);
        this.graphics.drawCircle(this.posX, this.posY, 3, "#FFFFFF");
    };
    return ArchimedeanSpiral;
}(Laya.Sprite));
//# sourceMappingURL=ArchimedeanSpiral.js.map