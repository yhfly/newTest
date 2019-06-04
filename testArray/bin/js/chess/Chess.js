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
var Chess = /** @class */ (function (_super) {
    __extends(Chess, _super);
    function Chess() {
        var _this = _super.call(this) || this;
        _this.MAX_ITEM = 10;
        _this.itemArr = [];
        _this._leftItem = _this.MAX_ITEM;
        _this._leftTime = 0;
        _this.round = 1;
        _this.chessPos = new Array();
        _this.linkLine1 = new Sprite();
        _this.linkLine2 = new Sprite();
        _this.linkLine3 = new Sprite();
        _this.lineBox = new Sprite();
        _this.layoutLink = false;
        _this.randomEnable = false;
        _this.poolArr = [];
        _this._skin = new ui.GameViewUI();
        _this.addChild(_this._skin);
        _this._skin.randomBtn.on(LayaEvent.CLICK, _this, _this.onRandomBtnClick);
        return _this;
    }
    Chess.prototype.countDown = function () {
        this._leftTime = 20;
        Laya.timer.loop(1000, this, this.counter);
        if (this._leftTime == 20) {
            this._skin.timeLeft.text = "剩余" + this._leftTime + "秒";
        }
    };
    Chess.prototype.counter = function () {
        this._leftTime--;
        if (this._leftTime == 0) {
            Laya.timer.clear(this, this.counter);
            if (this._leftItem > 0) {
                this.event(GameEvent.LOST);
            }
        }
        else if (this._leftItem <= 0) {
            Laya.timer.clear(this, this.counter);
            this._leftTime = 20;
        }
        this._skin.timeLeft.text = "剩余" + this._leftTime + "秒";
    };
    Chess.prototype.start = function () {
        this.chessPos[0] = [0, 0, 0, 0, 0, 0, 0];
        this.chessPos[1] = [0, 1, 1, 1, 1, 1, 0];
        this.chessPos[2] = [0, 1, 1, 1, 1, 1, 0];
        this.chessPos[3] = [0, 0, 0, 0, 0, 0, 0];
        this.createItem();
        this.setType();
        this.randomPos();
        this.checkLayout();
        this.setLayout();
        this.countDown();
        Laya.timer.loop(1, this, this.changeValue);
        this.randomEnable = false;
        this._skin.round.text = "第 1 关";
        this.round++;
    };
    Chess.prototype.setLayout = function () {
        for (var index = 0; index < 10; index++) {
            this.random();
            if (this.checkLayout()) {
                break;
            }
        }
        this.randomEnable = false;
    };
    Chess.prototype.checkLayout = function () {
        this.layoutLink = false;
        for (var i = 0; i < this.MAX_ITEM; i++) {
            var item = this.itemArr[i];
            {
                if (item.isEat == false) {
                    if (this.checkLink(this.itemArr[i]) == true) {
                        this.layoutLink = true;
                        return true;
                    }
                }
            }
        }
        if (this.layoutLink == false) {
            this.randomEnable = true;
        }
        return false;
    };
    Chess.prototype.setType = function () {
        for (var i = 0; i < this.MAX_ITEM / 2; i++) {
            var random = Math.floor(Math.random() * 24) + 1;
            this.itemArr[i].setType(random);
            this.itemArr[i + this.MAX_ITEM / 2].setType(random);
        }
    };
    Chess.prototype.nextRound = function () {
        this.MAX_ITEM += 10;
        this.chessPos[0] = [0, 0, 0, 0, 0, 0, 0];
        for (var i = 1; i < this.chessPos.length; i++) {
            this.chessPos[i] = [0, 1, 1, 1, 1, 1, 0];
        }
        this.chessPos.push([0, 1, 1, 1, 1, 1, 0]);
        this.chessPos.push([0, 0, 0, 0, 0, 0, 0]);
        this.clearLine();
        this.createItem();
        this.setType();
        this.randomPos();
        this.checkLayout();
        this.setLayout();
        this.countDown();
        this._leftItem = this.MAX_ITEM;
        this._skin.progressBar.value = 1;
        Laya.timer.loop(1, this, this.changeValue);
        this._skin.round.text = "第 " + this.round + " 关";
        this.round++;
    };
    Chess.prototype.createItem = function () {
        this.itemArr.length = 0;
        for (var i = 0; i < this.MAX_ITEM; i++) {
            var item = this.poolArr[i];
            if (item == null) {
                item = new LinkItem();
                item.on(LayaEvent.CLICK, this, this.clickItem);
                this.poolArr.push(item);
            }
            item.isEat = false;
            this.itemArr.push(item);
        }
    };
    Chess.prototype.drawline = function (x1, y1, x2, y2, linkLine) {
        Laya.stage.addChild(linkLine);
        linkLine.graphics.drawLine(x1 + 97 / 2, y1 + 97 / 2, x2 + 97 / 2, y2 + 97 / 2, "#ff0000", 3);
    };
    Chess.prototype.checkLink = function (linkItem) {
        for (var i = 0; i < this.MAX_ITEM; i++) {
            var item = this.itemArr[i];
            if (item.isEat == false && item != linkItem) {
                if (linkItem.type == item.type) {
                    var link = this.zeroCorner(linkItem.x, linkItem.y, item.x, item.y) || this.oneCorner(linkItem.x, linkItem.y, item.x, item.y) || this.twoCorners(linkItem.x, linkItem.y, item.x, item.y);
                    if (link) {
                        return true;
                    }
                }
            }
        }
        return false;
    };
    Chess.prototype.zeroCorner = function (x1, y1, x2, y2) {
        if (y1 == y2) {
            if (x1 < x2) {
                var count = 0;
                for (var i = x1 / 100 + 1; i < x2 / 100; i++) {
                    if (this.chessPos[(y1 - 200) / 100][i] == 0) {
                        count++;
                    }
                }
            }
            else {
                var count = 0;
                for (var i = x1 / 100 - 1; i > x2 / 100; i--) {
                    if (this.chessPos[(y1 - 200) / 100][i] == 0) {
                        count++;
                    }
                }
            }
            if (count == Math.abs(x1 - x2) / 100 - 1) {
                return Math.abs(x1 - x2);
            }
        }
        if (x1 == x2) {
            if (y1 < y2) {
                var count = 0;
                for (var i = (y1 - 200) / 100 + 1; i < (y2 - 200) / 100; i++) {
                    if (this.chessPos[i][x1 / 100] == 0) {
                        count++;
                    }
                }
            }
            else {
                var count = 0;
                for (var i = (y1 - 200) / 100 - 1; i > (y2 - 200) / 100; i--) {
                    if (this.chessPos[i][x1 / 100] == 0) {
                        count++;
                    }
                }
            }
            if (count == Math.abs(y1 - y2) / 100 - 1) {
                return Math.abs(y1 - y2);
            }
        }
    };
    Chess.prototype.oneCorner = function (x1, y1, x2, y2) {
        if (this.chessPos[(y1 - 200) / 100][x2 / 100] == 0 && this.zeroCorner(x1, y1, x2, y1) && this.zeroCorner(x2, y2, x2, y1)) {
            return [x2, y1];
        }
        if (this.chessPos[(y2 - 200) / 100][x1 / 100] == 0 && this.zeroCorner(x1, y1, x1, y2) && this.zeroCorner(x2, y2, x1, y2)) {
            return [x1, y2];
        }
    };
    Chess.prototype.twoCorners = function (x1, y1, x2, y2) {
        var a = 1000000000;
        var arrA;
        var b = 1000000000;
        var arrB;
        for (var i = 0; i < this.chessPos.length * 6; i++) {
            var j = i % 7;
            var k = Math.floor(i / 6);
            var linkPointX = 100 * j;
            var linkPointY = 100 * k + 200;
            if (this.chessPos[k][j] == 0 && this.zeroCorner(x1, y1, linkPointX, linkPointY) && this.oneCorner(linkPointX, linkPointY, x2, y2)) {
                var dist = Math.abs(x1 - linkPointX) + Math.abs(y1 - linkPointY) + Math.abs(linkPointX - this.oneCorner(linkPointX, linkPointY, x2, y2)[0]) + Math.abs(linkPointY - this.oneCorner(linkPointX, linkPointY, x2, y2)[1]) + Math.abs(this.oneCorner(linkPointX, linkPointY, x2, y2)[0] - x2) + Math.abs(this.oneCorner(linkPointX, linkPointY, x2, y2)[1] - y2);
                if (dist < a) {
                    a = dist;
                    arrA = [x1, y1, linkPointX, linkPointY, this.oneCorner(linkPointX, linkPointY, x2, y2)[0], this.oneCorner(linkPointX, linkPointY, x2, y2)[1], x2, y2];
                }
            }
            if (this.chessPos[k][j] == 0 && this.oneCorner(x1, y1, linkPointX, linkPointY) && this.zeroCorner(linkPointX, linkPointY, x2, y2)) {
                var dist = Math.abs(x1 - this.oneCorner(x1, y1, linkPointX, linkPointY)[0]) + Math.abs(y1 - this.oneCorner(x1, y1, linkPointX, linkPointY)[1]) + Math.abs(this.oneCorner(x1, y1, linkPointX, linkPointY)[0] - linkPointX) + Math.abs(this.oneCorner(x1, y1, linkPointX, linkPointY)[1] - linkPointY) + Math.abs(linkPointX - x2) + Math.abs(linkPointY - y2);
                if (dist < b) {
                    b = dist;
                    arrB = [x1, y1, this.oneCorner(x1, y1, linkPointX, linkPointY)[0], this.oneCorner(x1, y1, linkPointX, linkPointY)[1], linkPointX, linkPointY, x2, y2];
                }
            }
        }
        if (a <= b) {
            return arrA;
        }
        else {
            return arrB;
        }
    };
    Chess.prototype.clearLine = function () {
        if (this.linkLine1) {
            this.linkLine1.graphics.clear();
        }
        if (this.linkLine2) {
            this.linkLine2.graphics.clear();
        }
        if (this.linkLine3) {
            this.linkLine3.graphics.clear();
        }
    };
    Chess.prototype.rePlay = function () {
        this.clearLine();
        this.chessPos[0] = [0, 0, 0, 0, 0, 0, 0];
        for (var i = 1; i < this.chessPos.length - 1; i++) {
            this.chessPos[i] = [0, 1, 1, 1, 1, 1, 0];
        }
        this.chessPos.splice(this.chessPos.length - 1, 1);
        this.chessPos.push([0, 0, 0, 0, 0, 0, 0]);
        this._clickX = null;
        this._clickY = null;
        this._preClickX = null;
        this._preClickY = null;
        for (var i = 0; i < this.MAX_ITEM / 2; i++) {
            var random = Math.floor(Math.random() * 24) + 1;
            this.itemArr[i].setType(random);
            this.itemArr[i].isEat = false;
            this.itemArr[i + this.MAX_ITEM / 2].setType(random);
            this.itemArr[i + this.MAX_ITEM / 2].isEat = false;
        }
        this.randomPos();
        this.checkLayout();
        this.setLayout();
        this._leftItem = this.MAX_ITEM;
        this._skin.progressBar.value = 1;
        Laya.timer.loop(1, this, this.changeValue);
        this.countDown();
    };
    Chess.prototype.randomPos = function () {
        this.itemArr.sort(this.randomSort);
        for (var index = 0; index < this.MAX_ITEM; index++) {
            var element = this.itemArr[index];
            element.x = 100 * Math.ceil(index % 5) + 100;
            element.y = 100 * Math.floor(index / 5) + 300;
            // if(!element.isEat)
            // {
            this.addChild(element);
            // }
        }
        this.clearLine();
        this.lineBox.graphics.clear();
    };
    Chess.prototype.changeValue = function () {
        if (this._skin.progressBar.value >= 0 && this._leftItem > 0) {
            this._skin.progressBar.value -= 1 / 1200;
        }
        if (this._skin.progressBar.value <= 0) {
            Laya.timer.clear(this, this.changeValue);
            if (this._leftItem > 0) {
                this.event(GameEvent.LOST);
            }
            else {
                this.event(GameEvent.WIN);
            }
            this.clearLine();
            this._preClickItem = null;
        }
    };
    Chess.prototype.clickItem = function (e) {
        if (this.randomEnable == false) {
            var linkItem = e.target;
            if (this._preClickItem == null) {
                this._preClickItem = linkItem;
                this.clearLine();
                this.lineBox.graphics.drawLines(this._preClickItem.x, this._preClickItem.y, [0, 0, 97, 0, 97, 97, 0, 97, 0, 0, 97, 0], "#00ffff", 5);
                this.stage.addChild(this.lineBox);
            }
            else {
                if (linkItem != this._preClickItem) {
                    this.lineBox.graphics.clear();
                    if (linkItem.type != this._preClickItem.type) {
                        this._preClickItem = linkItem;
                        this.lineBox.graphics.drawLines(this._preClickItem.x, this._preClickItem.y, [0, 0, 97, 0, 97, 97, 0, 97, 0, 0, 97, 0], "#00ffff", 5);
                        this.stage.addChild(this.lineBox);
                    }
                    else {
                        this._clickX = (linkItem.y - 300) / 100 + 1;
                        this._clickY = (linkItem.x - 100) / 100 + 1;
                        this._preClickX = (this._preClickItem.y - 300) / 100 + 1;
                        this._preClickY = (this._preClickItem.x - 100) / 100 + 1;
                        var zeroCorner = this.zeroCorner(this._preClickItem.x, this._preClickItem.y, linkItem.x, linkItem.y);
                        var oneCorner = this.oneCorner(this._preClickItem.x, this._preClickItem.y, linkItem.x, linkItem.y);
                        var twoCorners = this.twoCorners(this._preClickItem.x, this._preClickItem.y, linkItem.x, linkItem.y);
                        if (zeroCorner || oneCorner || twoCorners) {
                            if (zeroCorner) {
                                this.clearLine();
                                this.drawline(this._preClickItem.x, this._preClickItem.y, linkItem.x, linkItem.y, this.linkLine1);
                                twoCorners = null;
                            }
                            if (oneCorner) {
                                this.clearLine();
                                if (oneCorner[0] == this._preClickItem.x && oneCorner[1] == linkItem.y) {
                                    this.drawline(this._preClickItem.x, this._preClickItem.y, this._preClickItem.x, linkItem.y, this.linkLine1);
                                    this.drawline(linkItem.x, linkItem.y, this._preClickItem.x, linkItem.y, this.linkLine2);
                                }
                                else if (oneCorner[0] == linkItem.x && oneCorner[1] == this._preClickItem.y) {
                                    this.drawline(this._preClickItem.x, this._preClickItem.y, linkItem.x, this._preClickItem.y, this.linkLine1);
                                    this.drawline(linkItem.x, linkItem.y, linkItem.x, this._preClickItem.y, this.linkLine2);
                                }
                                twoCorners = null;
                            }
                            if (twoCorners) {
                                this.clearLine();
                                this.drawline(this.twoCorners(this._preClickItem.x, this._preClickItem.y, linkItem.x, linkItem.y)[0], this.twoCorners(this._preClickItem.x, this._preClickItem.y, linkItem.x, linkItem.y)[1], this.twoCorners(this._preClickItem.x, this._preClickItem.y, linkItem.x, linkItem.y)[2], this.twoCorners(this._preClickItem.x, this._preClickItem.y, linkItem.x, linkItem.y)[3], this.linkLine1);
                                this.drawline(this.twoCorners(this._preClickItem.x, this._preClickItem.y, linkItem.x, linkItem.y)[2], this.twoCorners(this._preClickItem.x, this._preClickItem.y, linkItem.x, linkItem.y)[3], this.twoCorners(this._preClickItem.x, this._preClickItem.y, linkItem.x, linkItem.y)[4], this.twoCorners(this._preClickItem.x, this._preClickItem.y, linkItem.x, linkItem.y)[5], this.linkLine1);
                                this.drawline(this.twoCorners(this._preClickItem.x, this._preClickItem.y, linkItem.x, linkItem.y)[4], this.twoCorners(this._preClickItem.x, this._preClickItem.y, linkItem.x, linkItem.y)[5], this.twoCorners(this._preClickItem.x, this._preClickItem.y, linkItem.x, linkItem.y)[6], this.twoCorners(this._preClickItem.x, this._preClickItem.y, linkItem.x, linkItem.y)[7], this.linkLine1);
                            }
                            this.removeChild(this._preClickItem);
                            this._preClickItem.isEat = true;
                            this._leftItem -= 1;
                            this.removeChild(linkItem);
                            linkItem.isEat = true;
                            this._leftItem -= 1;
                            this._preClickItem = null;
                            this.chessPos[this._clickX][this._clickY] = 0;
                            this.chessPos[this._preClickX][this._preClickY] = 0;
                            this.layoutLink = false;
                            for (var i = 0; i < this.MAX_ITEM; i++) {
                                var item = this.itemArr[i];
                                {
                                    if (item.isEat == false) {
                                        if (this.checkLink(this.itemArr[i]) == true) {
                                            this.layoutLink = true;
                                            break;
                                        }
                                    }
                                }
                            }
                            if (this.layoutLink == false && this._leftItem != 0) {
                                this.event(GameEvent.RANDOM);
                                Laya.timer.clear(this, this.counter);
                                Laya.timer.clear(this, this.changeValue);
                                this.clearLine();
                                this.randomEnable = true;
                            }
                        }
                        else {
                            this._preClickItem = linkItem;
                            this.lineBox.graphics.drawLines(this._preClickItem.x, this._preClickItem.y, [0, 0, 97, 0, 97, 97, 0, 97, 0, 0, 97, 0], "#00ffff", 5);
                            this.stage.addChild(this.lineBox);
                        }
                    }
                }
            }
            if (this._leftItem <= 0) {
                Laya.timer.clear(this, this.changeValue);
                this.event(GameEvent.WIN);
                this.clearLine();
                this._preClickItem = null;
            }
        }
    };
    Chess.prototype.timeResume = function () {
        Laya.timer.loop(1, this, this.changeValue);
        Laya.timer.loop(1000, this, this.counter);
    };
    Chess.prototype.onRandomBtnClick = function (e) {
        if (this.randomEnable == true) {
            //最多重新生成10次， 防止死循环
            for (var index = 0; index < 10; index++) {
                this.random();
                if (this.checkLayout()) {
                    console.log("有解退出");
                    break;
                }
            }
        }
        this.randomEnable = false;
    };
    Chess.prototype.random = function () {
        this.lineBox.graphics.clear();
        this.clearLine();
        this.itemArr.sort(this.randomSort);
        var i = 0;
        var line;
        var row;
        for (var index = 0; index < this.MAX_ITEM; index++) {
            line = Math.ceil(i % 5) + 1;
            row = Math.floor(i / 5) + 1;
            var element = this.itemArr[index];
            if (!element.isEat) {
                if (i < this.MAX_ITEM) {
                    if (this.chessPos[row][line] == 1) {
                        element.x = 100 * Math.ceil(i % 5) + 100;
                        element.y = 100 * Math.floor(i / 5) + 300;
                        this.addChild(element);
                        i++;
                        continue;
                    }
                    else {
                        i++;
                        index--;
                        continue;
                    }
                }
            }
        }
    };
    // private doRandom(e: Laya.Event):void
    // {
    //     this.randomPos();
    //     this.chessPos[0] = [0,0,0,0,0,0];
    //     for(var i = 1; i < this.chessPos.length -1; i++)
    //     {
    //         this.chessPos[i] = [0,1,1,1,1,0];
    //     }
    //     this.chessPos.splice(this.chessPos.length - 1, 1)
    //     this.chessPos.push([0,0,0,0,0,0]);
    //      for (var index = 0; index < this.MAX_ITEM; index++) 
    //     {
    //         var element = this.itemArr[index];
    //         var line:number = Math.ceil(index % 4) + 1;
    //         var row:number = Math.floor(index / 4) + 1;
    //         if(element.isEat)
    //         {
    //              this.chessPos[row][line] = 0;
    //         }
    //     }
    // }
    Chess.prototype.randomSort = function (a, b) {
        return Math.random() > 0.5 ? -1 : 1;
    };
    return Chess;
}(Laya.Sprite));
//# sourceMappingURL=Chess.js.map