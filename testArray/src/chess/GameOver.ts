/*
* name;
*/
class GameOver extends Laya.Sprite{
    
    private _skin:ui.test.GameoverUI;
    constructor()
    {
        super();
        this._skin = new ui.test.GameoverUI();
        this.addChild(this._skin);
        this._skin.replay.on(LayaEvent.CLICK, this, this.replay);
    }

    private replay():void
    {
        //事件GameEvent.REPLAY
        this.event(GameEvent.REPLAY);
    }
}