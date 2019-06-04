var Hello = /** @class */ (function () {
    function Hello() {
        this.helloString = "World";
        this.sayHello();
    }
    Hello.prototype.sayHello = function () {
        console.log("Hello " + this.helloString + " !");
    };
    return Hello;
}());
//# sourceMappingURL=Hello.js.map