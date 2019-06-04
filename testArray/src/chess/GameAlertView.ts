/*
* name;
*/
class GameAlertView extends Laya.Sprite{

    private _skin: ui.test.AlertUI;
    constructor(){
        super();
        this._skin = new ui.test.AlertUI();
        this.addChild(this._skin);
        this._skin.okBtn.on(LayaEvent.CLICK, this, this.onOKBtn);
    }

    private onOKBtn(): void
    {
        this.event(GameEvent.RANDOM);
    }
}