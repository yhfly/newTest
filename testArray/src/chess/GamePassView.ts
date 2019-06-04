/*
* name;
*/
class GamePassView extends Laya.Sprite
{
    private _skin:ui.test.PassUI;
    constructor()
    {
        super();

        this._skin = new ui.test.PassUI();
        this.addChild(this._skin);
        /**
         * 点击replay时,触发onReplay
         */
        this._skin.play.on(LayaEvent.CLICK,this,this.onReplay);
    }

    private onReplay():void
    {
        /**
         * 事件GameEvent.REPLAY
         */
        this.event(GameEvent.REPLAY);
    }
}