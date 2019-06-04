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
/**
 * 计算器
 * @author Kang Heng
 */
var Calculator = /** @class */ (function (_super) {
    __extends(Calculator, _super);
    function Calculator() {
        var _this = _super.call(this) || this;
        _this.link = "";
        _this.preLink = "";
        _this.prePreLink = "";
        Laya.loader.load("res/atlas/comp.atlas", new Handler(_this, _this.onLoadComplete), null, Laya.Loader.ATLAS);
        return _this;
    }
    /**
     * 加载UI
     */
    Calculator.prototype.onLoadComplete = function () {
        this.calculatorUI = new ui.test.CalculatorUI();
        this.map = { "1": this.calculatorUI.one, "2": this.calculatorUI.two, "3": this.calculatorUI.three, "4": this.calculatorUI.four, "5": this.calculatorUI.five, "6": this.calculatorUI.six, "7": this.calculatorUI.seven, "8": this.calculatorUI.eight, "9": this.calculatorUI.nine };
        this.signMapping = { "+": this.calculatorUI.plus, "-": this.calculatorUI.minus, "*": this.calculatorUI.multiple, "/": this.calculatorUI.division };
        Laya.stage.addChild(this.calculatorUI);
        this.calculate();
    };
    /**
     * 为每一个按钮添加侦听事件
     */
    Calculator.prototype.calculate = function () {
        this.calculatorUI.clear.on(LayaEvent.CLICK, this, this.clear);
        this.calculatorUI.arrow.on(LayaEvent.CLICK, this, this.clickArrow);
        this.calculatorUI.one.on(LayaEvent.CLICK, this, this.clickNumber);
        this.calculatorUI.two.on(LayaEvent.CLICK, this, this.clickNumber);
        this.calculatorUI.three.on(LayaEvent.CLICK, this, this.clickNumber);
        this.calculatorUI.four.on(LayaEvent.CLICK, this, this.clickNumber);
        this.calculatorUI.five.on(LayaEvent.CLICK, this, this.clickNumber);
        this.calculatorUI.six.on(LayaEvent.CLICK, this, this.clickNumber);
        this.calculatorUI.seven.on(LayaEvent.CLICK, this, this.clickNumber);
        this.calculatorUI.eight.on(LayaEvent.CLICK, this, this.clickNumber);
        this.calculatorUI.nine.on(LayaEvent.CLICK, this, this.clickNumber);
        this.calculatorUI.zero.on(LayaEvent.CLICK, this, this.clickZero);
        this.calculatorUI.plus.on(LayaEvent.CLICK, this, this.clickSign);
        this.calculatorUI.minus.on(LayaEvent.CLICK, this, this.clickSign);
        this.calculatorUI.multiple.on(LayaEvent.CLICK, this, this.clickSign);
        this.calculatorUI.division.on(LayaEvent.CLICK, this, this.clickSign);
        this.calculatorUI.equal.on(LayaEvent.CLICK, this, this.clickEqual);
        this.calculatorUI.decimalPoint.on(LayaEvent.CLICK, this, this.clickDicimalPoint);
    };
    /**
     * 读取按钮上的数字并显示出来
     * @param e 1-9数字按钮被点击的事件
     */
    Calculator.prototype.clickNumber = function (e) {
        for (var i in this.map) {
            if (this.map[i].label == e.target["label"]) {
                this.link += i;
                this.calculatorUI.result.text = this.link;
            }
        }
    };
    /**
     * 清除显示出来的数字或符号并显示数字“0”
     * @param e clear按钮被点击的事件
     */
    Calculator.prototype.clear = function (e) {
        this.calculatorUI.result.text = "0";
        this.link = "";
        this.preLink = "";
        this.result = 0;
    };
    /**
     * 点击箭头，去除末位数字
     * @param e 箭头按钮被点击事件
     */
    Calculator.prototype.clickArrow = function (e) {
        this.link = this.link.substring(0, this.link.length - 1);
        this.calculatorUI.result.text = this.link;
    };
    /**
     * “+”、“-”、“*”、“/”按钮被点击后计算符号前的结果
     * @param e 符号按钮被点击事件
     */
    Calculator.prototype.clickSign = function (e) {
        this.Calcu();
        for (var i in this.signMapping) {
            if (this.signMapping[i].label == e.target["label"]) {
                this.symbol = this.signMapping[i].label;
                this.preLink = this.link;
                this.link = "";
                this.calculatorUI.result.text = this.signMapping[i].label;
            }
        }
    };
    /**
     * 输入"+"、“-”、“*”、“/”运算符号前计算的实现
     */
    Calculator.prototype.Calcu = function () {
        if (this.symbol == "+") {
            if (this.prePreLink == "") {
                this.prePreResult = Number(this.preLink);
            }
            this.prePreResult += Number(this.link);
        }
        if (this.symbol == "-") {
            if (this.prePreLink == "") {
                this.prePreResult = Number(this.preLink);
            }
            this.prePreResult -= Number(this.link);
        }
        if (this.symbol == "*") {
            if (this.prePreLink == "") {
                this.prePreResult = Number(this.preLink);
            }
            this.prePreResult *= Number(this.link);
        }
        if (this.symbol == "/") {
            if (this.link == "0") {
                this.calculatorUI.result.text = "除数不能为0";
            }
            else {
                if (this.prePreLink == "" && this.preLink != "") {
                    this.prePreResult = Number(this.preLink);
                    this.prePreResult /= Number(this.link);
                }
                if (this.prePreLink != "" && this.preLink != "") {
                    this.prePreResult /= Number(this.link);
                }
            }
        }
    };
    /**
     * 点击等号后计算结果
     * @param e 等号按钮被点击的事件
     */
    Calculator.prototype.clickEqual = function (e) {
        var leftNum = 0;
        if (this.prePreResult != null) {
            leftNum = this.prePreResult;
        }
        else {
            if (this.preLink == "") {
                leftNum = this.preResult;
            }
            else {
                leftNum = Number(this.preLink);
                this.result = Number(this.preLink) + Number(this.link);
            }
        }
        switch (this.symbol) {
            case "+":
                {
                    var rightNum = Number(this.link);
                    this.result = leftNum + rightNum;
                    this.calculatorUI.result.text = this.result.toString();
                    break;
                }
            case "-":
                {
                    this.result = leftNum - Number(this.link);
                    this.calculatorUI.result.text = this.result.toString();
                    break;
                }
            case "*":
                {
                    this.result = leftNum * Number(this.link);
                    this.calculatorUI.result.text = this.result.toString();
                    break;
                }
            case "/":
                {
                    if (this.link == "0") {
                        this.calculatorUI.result.text = "除数不能为0";
                    }
                    else {
                        this.result = leftNum / Number(this.link);
                        this.calculatorUI.result.text = this.result.toString();
                    }
                    break;
                }
        }
        this.link = "";
        this.preLink = "";
        this.preResult = this.result;
        this.result = 0;
        this.symbol = "";
    };
    /**
     * "0"被点击后显示出来
     * @param e 按钮“0"被点击事件
     */
    Calculator.prototype.clickZero = function (e) {
        if (this.link[0] != "0" || this.link[0] == "0" && this.link[1] == ".") {
            this.link += "0";
            this.calculatorUI.result.text = this.link;
        }
    };
    /**
     * 小数点按钮被点击后显示出来
     * @param e 小数点按钮被点击的事件
     */
    Calculator.prototype.clickDicimalPoint = function (e) {
        this.link += ".";
        this.calculatorUI.result.text = this.link;
    };
    return Calculator;
}(Laya.Sprite));
//# sourceMappingURL=Calculator.js.map