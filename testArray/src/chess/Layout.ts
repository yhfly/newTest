/*
* name;
*/
class Layout
{
    constructor(){
        Laya.loader.load("res/atlas/comp.atlas",new Handler(this,this.onLoadComplete),null,Laya.Loader.ATLAS);
    }
  
    private lianliankan:ui.test.LianliankanUI;
    private chess : Chess;
    private _gameoverView:GameOver;
    private _passView:GamePassView;
    private _randomView:GameAlertView;
    private onLoadComplete()
    {
        this.lianliankan = new ui.test.LianliankanUI();
        this.lianliankan.play.on(LayaEvent.CLICK, this, this.clickPlay);
        Laya.stage.addChild(this.lianliankan);
    }

    private clickPlay(e: Event): void
    {
        
        this.initChess();
        if(this.lianliankan.parent)
        {
            Laya.stage.removeChild(this.lianliankan);
        }
        this.chess.start();
        Laya.stage.addChild(this.chess);
    }

    private initChess():void
    {
        this.chess = new Chess();
        this.chess.on(GameEvent.WIN,this, this.onWin);
        this.chess.on(GameEvent.LOST,this, this.lost);
        this.chess.on(GameEvent.RANDOM,this, this.onRandom);
    }               

    private onRandom():void
    {
        if(this._randomView == null)
        {
            this._randomView = new GameAlertView();
        
            this._randomView.on(GameEvent.RANDOM, this, this.doRandom);
        }
        Laya.stage.addChild(this._randomView);
    }                                 

    private doRandom():void
    {
        Laya.stage.removeChild(this._randomView);
        this.chess.timeResume();
    }


    /**
     * 赢啦
     */
    private onWin():void
    {
        if(this._passView == null)
        {
            this._passView = new GamePassView();
            this._passView.on(GameEvent.REPLAY,this,this.onNextRound);
        }
        Laya.stage.removeChild(this.chess);
        Laya.stage.addChild(this._passView);
    }

    /**
     * 输啦
     */
    private lost():void
    {
        this.chess.lineBox.graphics.clear();
        if(this._gameoverView == null)
        {
            this._gameoverView = new GameOver();
            this._gameoverView.on(GameEvent.REPLAY, this,this.onReplay);
        }
        Laya.stage.removeChild(this.chess);
        Laya.stage.addChild(this._gameoverView);
    }

    private onReplay():void
    {
        Laya.stage.removeChild(this._gameoverView);
        this.chess.rePlay();
        Laya.stage.addChild(this.chess);
        
    }
     private onNextRound():void
    {
        Laya.stage.removeChild(this._passView);
        this.chess.nextRound();
        Laya.stage.addChild(this.chess);
    }
}
