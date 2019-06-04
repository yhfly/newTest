/*
* name;
*/
class GameEvent
{

    public static LOST:string = "lost";
    public static WIN:string = "win";
    /**
     * 用不同的字符串区分三种不同的事件；将LOST,WIN,REPLAY封装起来；改变此处REPLAY的值便可改变所有的REPLAY值
     */
    public static REPLAY:string = "REPLAY";
    public static RANDOM:string = "RAMDOM";
    constructor(){

    }
}