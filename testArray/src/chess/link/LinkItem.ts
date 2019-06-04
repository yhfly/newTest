/*
* name;
*/
class LinkItem extends Laya.Sprite
{
    private _type:number = 0;

    public isEat:boolean = false;
    constructor(){
        super();
    } 

    public setType(type:number):void
    {
        this._type = type;
        this.loadImage("lianliankan/"+ type +".png");
    }
    
    public get type():number
    {
        return this._type;
    }

}