/*
* name;
*/
class Item extends Laya.Sprite{
    private _type: number = 0;
    constructor(){
        super();
    }

    public setType(type:number):void
    {
        this._type = type;
        this.loadImage("barbecue/" + type + ".png");
    }

    public get type():number
    {
        return this._type;
    }
}