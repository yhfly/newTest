/*
* name;
*/
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.say = function (words) {
        console.log(this.name + " says:" + words);
    };
    Animal.prototype.sun = function () {
        console.log("我是" + this.name + " 在晒太阳");
    };
    return Animal;
}());
//# sourceMappingURL=Animal.js.map