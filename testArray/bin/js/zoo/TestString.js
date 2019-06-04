/*
* name;
*/
var TestString = /** @class */ (function () {
    function TestString(str) {
        this.str1 = " ;s;tri;ng";
        this.setup(str);
        // console.log(this.array)
    }
    // private array:Array<string> = this.str.split(";");
    TestString.prototype.setup = function (str) {
        var arr = this.str1.split(str);
        console.log(arr);
    };
    return TestString;
}());
//# sourceMappingURL=TestString.js.map