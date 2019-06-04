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
* name;
*/
var LinkItem = /** @class */ (function (_super) {
    __extends(LinkItem, _super);
    function LinkItem() {
        var _this = _super.call(this) || this;
        _this._type = 0;
        _this.isEat = false;
        return _this;
    }
    LinkItem.prototype.setType = function (type) {
        this._type = type;
        this.loadImage("lianliankan/" + type + ".png");
    };
    Object.defineProperty(LinkItem.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    return LinkItem;
}(Laya.Sprite));
//# sourceMappingURL=LinkItem.js.map