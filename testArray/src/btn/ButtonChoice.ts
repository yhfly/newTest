/*
* ButtonChoice;
*/
class ButtonChoice extends Laya.Sprite
{

    private spirals:ui.test.SpiralsUI;
    private map : {[index : string] : ISpiral}  ={}; 
    private classMapping : Object = {};

    constructor()
    {
        super();
        Laya.loader.load("res/atlas/comp.atlas",new Handler(this,this.onLoadComplete),null,Laya.Loader.ATLAS);
    }

    private onLoadComplete():void
    {
        this.spirals = new ui.test.SpiralsUI();
        Laya.stage.addChild(this.spirals);
        this.classMapping[this.spirals.cardioidBtn.label] = Cardioid;
        this.classMapping[this.spirals.equiangularSpiralBtn.label] = EquiangularSpiral;
        this.classMapping[this.spirals.fermatSpiralBtn.label] = FermatSpiral;
        this.classMapping[this.spirals.roseSpiralBtn.label] = RoseSpiral;
        this.classMapping[this.spirals.fibonacciSpiralBtn.label] = FibonacciSpiral;
        this.classMapping[this.spirals.archimedeanSpiralBtn.label] = ArchimedeanSpiral;
        this.spirals.cardioidBtn.on(LayaEvent.CLICK, this, this.clickButton);
        this.spirals.equiangularSpiralBtn.on(LayaEvent.CLICK, this, this.clickButton);
        this.spirals.fermatSpiralBtn.on(LayaEvent.CLICK, this, this.clickButton); 
        this.spirals.roseSpiralBtn.on(LayaEvent.CLICK, this, this.clickButton);
        this.spirals.fibonacciSpiralBtn.on(LayaEvent.CLICK, this, this.clickButton); 
        this.spirals.archimedeanSpiralBtn.on(LayaEvent.CLICK, this, this.clickButton);    
    }

    private clickButton(e:Laya.Event): void
    {
        for(var i in this.map)
        {
            this.map[i].stop();
        }
        var sp:ISpiral = this.map[e.target["label"]];
        if(sp == null)
        {
            sp = new this.classMapping[e.target["label"]];
            this.map[e.target["label"]] = (sp as any);
        }
        sp.play();
        Laya.stage.addChild(sp as any);
    }
}