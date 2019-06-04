/*
* name;
*/
var GameEvent = /** @class */ (function () {
    function GameEvent() {
    }
    GameEvent.LOST = "lost";
    GameEvent.WIN = "win";
    /**
     * 用不同的字符串区分三种不同的事件；将LOST,WIN,REPLAY封装起来；改变此处REPLAY的值便可改变所有的REPLAY值
     */
    GameEvent.REPLAY = "REPLAY";
    GameEvent.RANDOM = "RAMDOM";
    return GameEvent;
}());
//# sourceMappingURL=GameEvent.js.map