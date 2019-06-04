/*
* name;
*/
var ConNumToDic = /** @class */ (function () {
    function ConNumToDic(arr) {
        this.dic = {};
        this.initial(arr);
    }
    ConNumToDic.prototype.initial = function (arr) {
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var obj = arr_1[_i];
            this.dic[obj] = obj;
        }
        console.log(this.dic);
    };
    return ConNumToDic;
}());
//# sourceMappingURL=ConNumToDic.js.map