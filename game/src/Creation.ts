/*
* name;
*/
class Creation{
    constructor()
    {
        this.createItem();
        this.createRandom();
    }
    public createItem():void
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

     public itemPos():void
    {
        Arrays.bbqArr[0].x = 50;
        Arrays.bbqArr[0].y = 50;
        Arrays.bbqArr[1].x = 50;
        Arrays.bbqArr[1].y = 250;
        Arrays.bbqArr[2].x = 50;
        Arrays.bbqArr[2].y = 450;
        Laya.stage.addChild(Arrays.bbqArr[0]);
        Laya.stage.addChild(Arrays.bbqArr[1]);
        Laya.stage.addChild(Arrays.bbqArr[2]);
    }

    public ranPos():void
    {
        Arrays.ranArr[0].x = 300;
        Arrays.ranArr[0].y = 600;
        Arrays.ranArr[1].x = 500
        Arrays.ranArr[1].y = 600;
        Arrays.ranArr[2].x = 700;
        Arrays.ranArr[2].y = 600;
        Laya.stage.addChild(Arrays.ranArr[0]);
        Laya.stage.addChild(Arrays.ranArr[1]);
        Laya.stage.addChild(Arrays.ranArr[2]);
    }  
}