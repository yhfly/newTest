/*
* name;
*/
class Creation{
    constructor()
    {
        this.createItem();
        this.createRandom();
    }
    private createItem():void
    {
        for(var i = 0; i < 3; i++)
        {
            if(Arrays.bbqArr[i] == null)
            {
                var item = new Item();
                item.setType(i);    
                Arrays.bbqArr[i] = item;
            }
        }
    }

    public createRandom():void
    {
        for( var i = 0; i < 3; i++)
        {
            var item = new Item();
            var random = Math.floor(Math.random()*3);
            item.setType(random)
            Arrays.ranArr[i] = item;
            Arrays.ranNum.push(random);
        }
    }
}