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
var Replay = /** @class */ (function (_super) {
    __extends(Replay, _super);
    function Replay() {
        return _super.call(this) || this;
    }
    Replay.prototype.replay = function () {
        this.removeChild(this._skin);
        this.removeChild(this.pass);
        this.removeChild(this.gameOver);
        var chess = new Chess;
        chess.start();
        Laya.stage.addChild(chess);
    };
    return Replay;
}(Laya.Sprite));
//# sourceMappingURL=Replay.js.map