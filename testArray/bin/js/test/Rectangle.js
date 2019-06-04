/*
* name;
*/
var Rectangle = /** @class */ (function () {
    function Rectangle(lengthNum, widthNum) {
        this.length = lengthNum;
        this.width = widthNum;
        this.calArea();
    }
    Rectangle.prototype.calArea = function () {
        var area = this.length * this.width;
        console.log(area);
    };
    return Rectangle;
}());
//# sourceMappingURL=Rectangle.js.map