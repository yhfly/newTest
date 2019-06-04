/*
* name;
*/
class ConNumToDic{
    private dic :Object = {};
    private obj : number;
    constructor(arr : Array<number>)
    { 
        this.initial(arr);
    }
    
    private initial(arr : Array<number>)
    {
        for( var obj of arr)
        {
            this.dic[obj] = obj;
        }
        console.log(this.dic);
    }
}