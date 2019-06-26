/*
* name;
*/
var Region = /** @class */ (function () {
    function Region() {
        this.dragHeight = 200;
        this.dragWidth = 200;
        this.showRegion();
    }
    Region.prototype.showRegion = function () {
        Laya.stage.graphics.drawRect(300, 200, this.dragWidth, this.dragHeight, null, "#FFFFFF", 2);
        Laya.stage.graphics.drawRect(600, 200, this.dragWidth, this.dragHeight, null, "#FFFFFF", 2);
        Laya.stage.graphics.drawRect(900, 200, this.dragWidth, this.dragHeight, null, "#FFFFFF", 2);
        Laya.stage.graphics.drawCircle(1100, 600, 100, null, "#FF0000", 5);
    };
    return Region;
}());
//# sourceMappingURL=Region.js.map