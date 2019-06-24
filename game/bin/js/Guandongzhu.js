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
var Guandongzhu = /** @class */ (function (_super) {
    __extends(Guandongzhu, _super);
    function Guandongzhu() {
        var _this = _super.call(this) || this;
        _this.bbqArr = [];
        _this.ranArr = [];
        _this.resArr = [];
        _this.recArr = [];
        _this.t0 = 5;
        _this.t1 = 5;
        _this.t2 = 5;
        _this.appear = 0;
        _this.ranNum = [];
        _this.resNum = [];
        _this.createItem();
        _this.itemPos();
        _this.createRandom();
        _this.ranPos();
        // this.showRegion();
        var layout = new Layout();
        _this.drag();
        return _this;
    }
    Guandongzhu.prototype.createItem = function () {
        for (var i = 0; i < 3; i++) {
            if (this.bbqArr[i] == null) {
                var item = new Item();
                item.setType(i);
                this.bbqArr[i] = item;
            }
        }
    };
    Guandongzhu.prototype.drag = function () {
        this.bbqArr[0].on(LayaEvent.MOUSE_DOWN, this, this.onStartDrag);
        this.bbqArr[1].on(LayaEvent.MOUSE_DOWN, this, this.onStartDrag);
        this.bbqArr[2].on(LayaEvent.MOUSE_DOWN, this, this.onStartDrag);
        this.bbqArr[0].on(LayaEvent.MOUSE_UP, this, this.inRectangle);
        this.bbqArr[1].on(LayaEvent.MOUSE_UP, this, this.inRectangle);
        this.bbqArr[2].on(LayaEvent.MOUSE_UP, this, this.inRectangle);
    };
    // private showRegion():void
    // {
    //     var dragHeight = 200;
    //     var dragWidth = 200;
    //     Laya.stage.graphics.drawRect(300, 200, dragWidth, dragHeight, null, "#FFFFFF", 2);
    //     Laya.stage.graphics.drawRect(600, 200, dragWidth, dragHeight, null, "#FFFFFF", 2);
    //     Laya.stage.graphics.drawRect(900, 200, dragWidth, dragHeight, null, "#FFFFFF", 2);
    //     Laya.stage.graphics.drawCircle(1100, 600, 100, null, "#FF0000", 5)
    // }
    Guandongzhu.prototype.onStartDrag = function (e) {
        var target = e.target;
        target.startDrag(null, false, 0);
    };
    Guandongzhu.prototype.itemPos = function () {
        this.bbqArr[0].x = 50;
        this.bbqArr[0].y = 50;
        this.bbqArr[1].x = 50;
        this.bbqArr[1].y = 250;
        this.bbqArr[2].x = 50;
        this.bbqArr[2].y = 450;
        Laya.stage.addChild(this.bbqArr[0]);
        Laya.stage.addChild(this.bbqArr[1]);
        Laya.stage.addChild(this.bbqArr[2]);
    };
    Guandongzhu.prototype.createRandom = function () {
        for (var i = 0; i < 3; i++) {
            var item = new Item();
            var random = Math.floor(Math.random() * 3);
            item.setType(random);
            this.ranArr[i] = item;
            this.ranNum.push(random);
        }
    };
    Guandongzhu.prototype.ranPos = function () {
        this.ranArr[0].x = 300;
        this.ranArr[0].y = 600;
        this.ranArr[1].x = 500;
        this.ranArr[1].y = 600;
        this.ranArr[2].x = 700;
        this.ranArr[2].y = 600;
        Laya.stage.addChild(this.ranArr[0]);
        Laya.stage.addChild(this.ranArr[1]);
        Laya.stage.addChild(this.ranArr[2]);
    };
    Guandongzhu.prototype.inRectangle = function (e) {
        var item = e.target;
        // item.stopDrag();
        // item= item;
        // console.log(this.bbqArr[item.type].x)
        // console.log(this.bbqArr[item.type].y)
        this.bbqArr[item.type] = null;
        this.createItem();
        this.itemPos();
        this.drag();
        if (item.x > 300 && item.x < 450 && item.y > 200 && item.y < 350 || item.x > 600 && item.x < 750 && item.y > 200 && item.y < 350 || item.x > 900 && item.x < 1050 && item.y > 200 && item.y < 350) {
            this.appear += 1;
            if (this.appear % 3 == 1) {
                this.counter0(item);
            }
            if (this.appear % 3 == 2) {
                this.counter1(item);
            }
            if (this.appear % 3 == 0) {
                this.counter2(item);
            }
        }
        else {
            Laya.stage.removeChild(item);
        }
    };
    Guandongzhu.prototype.counter0 = function (item) {
        if (this.t0 == 5) {
            Laya.timer.loop(1000, this, this.clock0, [item]);
        }
    };
    Guandongzhu.prototype.counter1 = function (item) {
        if (this.t1 == 5) {
            Laya.timer.loop(1000, this, this.clock1, [item]);
        }
    };
    Guandongzhu.prototype.counter2 = function (item) {
        if (this.t2 == 5) {
            Laya.timer.loop(1000, this, this.clock2, [item]);
        }
    };
    Guandongzhu.prototype.clock0 = function (item) {
        this.t0--;
        if (this.t0 == 2) {
            // console.log(0)
            item.on(LayaEvent.MOUSE_DOWN, this, this.onDragAgainD0, [item]);
            item.on(LayaEvent.MOUSE_UP, this, this.onDragAgainU0, [item]);
        }
        if (this.t0 == 0) {
            Laya.stage.removeChild(item);
            this.t0 = 5;
            Laya.timer.clear(this, this.clock0);
        }
    };
    Guandongzhu.prototype.clock1 = function (item) {
        this.t1--;
        if (this.t1 == 2) {
            // console.log(1)
            item.on(LayaEvent.MOUSE_DOWN, this, this.onDragAgainD1, [item]);
            item.on(LayaEvent.MOUSE_UP, this, this.onDragAgainU1, [item]);
        }
        if (this.t1 == 0) {
            Laya.stage.removeChild(item);
            this.t1 = 5;
            Laya.timer.clear(this, this.clock1);
        }
    };
    Guandongzhu.prototype.clock2 = function (item) {
        this.t2--;
        if (this.t2 == 2) {
            // console.log(2)
            item.on(LayaEvent.MOUSE_DOWN, this, this.onDragAgainD2, [item]);
            item.on(LayaEvent.MOUSE_UP, this, this.onDragAgainU2, [item]);
        }
        if (this.t2 == 0) {
            Laya.stage.removeChild(item);
            this.t2 = 5;
            Laya.timer.clear(this, this.clock2);
        }
    };
    Guandongzhu.prototype.onDragAgainD0 = function (item, e) {
        Laya.timer.clear(this, this.clock0);
        item.startDrag(null, false, 0);
        // console.log("000")
        console.log(this.t0);
        console.log(this.t1);
        console.log(this.t2 + "D0//");
    };
    Guandongzhu.prototype.onDragAgainU0 = function (item, e) {
        if (item.x > 1000 && item.x < 1300 && item.y > 500 && item.y < 800) {
            Laya.stage.addChild(item);
            this.resNum.push(item.type);
            this.resArr.push(item);
            console.log(this.t0);
            console.log(this.t1);
            console.log(this.t2 + "U0//");
            if (this.resArr.length == 3) {
                this.check();
            }
            // console.log("00")
        }
        else {
            Laya.stage.removeChild(item);
        }
        this.t0 = 5;
    };
    Guandongzhu.prototype.onDragAgainD1 = function (item, e) {
        item.startDrag(null, false, 0);
        Laya.timer.clear(this, this.clock1);
        // console.log("111")
        console.log(this.t0);
        console.log(this.t1);
        console.log(this.t2 + "D1//");
    };
    Guandongzhu.prototype.onDragAgainU1 = function (item, e) {
        if (item.x > 1100 && item.x < 1200 && item.y > 600 && item.y < 700) {
            Laya.stage.addChild(item);
            this.resArr.push(item);
            this.resNum.push(item.type);
            console.log(this.t0);
            console.log(this.t1);
            console.log(this.t2 + "U1//");
            if (this.resArr.length == 3) {
                this.check();
            }
            // console.log("11")
        }
        else {
            Laya.stage.removeChild(item);
        }
        this.t1 = 5;
    };
    Guandongzhu.prototype.onDragAgainD2 = function (item, e) {
        item.startDrag(null, false, 0);
        Laya.timer.clear(this, this.clock2);
        console.log(this.t0);
        console.log(this.t1);
        console.log(this.t2 + "D2//");
        // console.log("222")
    };
    Guandongzhu.prototype.onDragAgainU2 = function (item, e) {
        if (item.x > 1100 && item.x < 1200 && item.y > 600 && item.y < 700) {
            Laya.stage.addChild(item);
            this.resArr.push(item);
            this.resNum.push(item.type);
            console.log(this.t0);
            console.log(this.t1);
            console.log(this.t2 + "U2//");
            if (this.resArr.length == 3) {
                this.check();
            }
            // console.log("22")
        }
        else {
            Laya.stage.removeChild(item);
        }
        this.t2 = 5;
    };
    Guandongzhu.prototype.check = function () {
        if (this.ranNum.sort().toString() == this.resNum.sort().toString()) {
            console.log("速度真快");
        }
        else {
            console.log("这不是我想要的");
        }
        this.nextGroup();
    };
    Guandongzhu.prototype.nextGroup = function () {
        this.resNum = [];
        this.ranNum = [];
        this.resArr = [];
        Laya.stage.removeChild(this.resArr[0]);
        Laya.stage.removeChild(this.resArr[1]);
        Laya.stage.removeChild(this.resArr[2]);
        Laya.stage.removeChild(this.ranArr[0]);
        Laya.stage.removeChild(this.ranArr[1]);
        Laya.stage.removeChild(this.ranArr[2]);
        this.createRandom();
        this.ranPos();
    };
    return Guandongzhu;
}(Laya.Sprite));
//# sourceMappingURL=Guandongzhu.js.map