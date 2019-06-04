/*
* name;
*/
class Money{
    protected amount : number;
    protected rate : number;
    protected type :string;
    constructor()
    {
        this.initial();
    }
    protected initial() : void
    {
        this.rate = 1;
        this.type = "rmb";

    }
    public exchange (am:number):void
    {
        this.amount = am;
        var equalAmount = this.amount * this.rate;
        console.log(this.type + " : " + equalAmount)
    }
}