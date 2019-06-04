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
* ButtonChoice;
*/
var ButtonChoice = /** @class */ (function (_super) {
    __extends(ButtonChoice, _super);
    function ButtonChoice() {
        var _this = _super.call(this) || this;
        _this.map = {};
        _this.classMapping = {};
        Laya.loader.load("res/atlas/comp.atlas", new Handler(_this, _this.onLoadComplete), null, Laya.Loader.ATLAS);
        return _this;
    }
    ButtonChoice.prototype.onLoadComplete = function () {
        this.spirals = new ui.test.SpiralsUI();
        Laya.stage.addChild(this.spirals);
        this.classMapping[this.spirals.cardioidBtn.label] = Cardioid;
        this.classMapping[this.spirals.equiangularSpiralBtn.label] = EquiangularSpiral;
        this.classMapping[this.spirals.fermatSpiralBtn.label] = FermatSpiral;
        this.classMapping[this.spirals.roseSpiralBtn.label] = RoseSpiral;
        this.classMapping[this.spirals.fibonacciSpiralBtn.label] = FibonacciSpiral;
        this.classMapping[this.spirals.archimedeanSpiralBtn.label] = ArchimedeanSpiral;
        this.spirals.cardioidBtn.on(LayaEvent.CLICK, this, this.clickButton);
        this.spirals.equiangularSpiralBtn.on(LayaEvent.CLICK, this, this.clickButton);
        this.spirals.fermatSpiralBtn.on(LayaEvent.CLICK, this, this.clickButton);
        this.spirals.roseSpiralBtn.on(LayaEvent.CLICK, this, this.clickButton);
        this.spirals.fibonacciSpiralBtn.on(LayaEvent.CLICK, this, this.clickButton);
        this.spirals.archimedeanSpiralBtn.on(LayaEvent.CLICK, this, this.clickButton);
    };
    ButtonChoice.prototype.clickButton = function (e) {
        for (var i in this.map) {
            this.map[i].stop();
        }
        var sp = this.map[e.target["label"]];
        if (sp == null) {
            sp = new this.classMapping[e.target["label"]];
            this.map[e.target["label"]] = sp;
        }
        sp.play();
        Laya.stage.addChild(sp);
    };
    return ButtonChoice;
}(Laya.Sprite));
//# sourceMappingURL=ButtonChoice.js.map