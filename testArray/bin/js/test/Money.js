/*
* name;
*/
var Money = /** @class */ (function () {
    function Money() {
        this.initial();
    }
    Money.prototype.initial = function () {
        this.rate = 1;
        this.type = "rmb";
    };
    Money.prototype.exchange = function (am) {
        this.amount = am;
        var equalAmount = this.amount * this.rate;
        console.log(this.type + " : " + equalAmount);
    };
    return Money;
}());
//# sourceMappingURL=Money.js.map