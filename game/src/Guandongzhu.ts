/*
* name;
*/
class Guandongzhu extends Laya.Sprite{
    constructor(){
        super();
        // this.createItem();
        // this.itemPos();
        // this.createRandom();
        // this.ranPos();
        // this.showRegion();
        var region = new Region(); 
        var items = new Creation();
        this.drag();
    }
    // private bbqArr :Array<Item> = []; 
    // private ranArr :Array<Item> = [];
    private resArr : Array<Item> = [];
    private recArr : Array<Item> = [];
    private t0 : number = 5;
    private t1 :number = 5;
    private t2 : number = 5;
    private appear : number = 0;
    // private ranNum : Array<number> = [];
    private resNum : Array<number> = [];
    // private createItem():void
    // {
    //     for(var i = 0; i < 3; i++)
    //     {
    //         if(this.bbqArr[i] == null)
    //         {
    //             var item = new Item();
    //             item.setType(i);    
    //             this.bbqArr[i] = item;
    //         }
    //     }
    // }
    private drag():void
    {
        this.bbqArr[0].on(LayaEvent.MOUSE_DOWN, this, this.onStartDrag);
        this.bbqArr[1].on(LayaEvent.MOUSE_DOWN, this, this.onStartDrag);
        this.bbqArr[2].on(LayaEvent.MOUSE_DOWN, this, this.onStartDrag);
        this.bbqArr[0].on(LayaEvent.MOUSE_UP, this, this.inRectangle);
        this.bbqArr[1].on(LayaEvent.MOUSE_UP, this, this.inRectangle);
        this.bbqArr[2].on(LayaEvent.MOUSE_UP, this, this.inRectangle);
    }
  
    // private showRegion():void
    // {
    //     var dragHeight = 200;
    //     var dragWidth = 200;
    //     Laya.stage.graphics.drawRect(300, 200, dragWidth, dragHeight, null, "#FFFFFF", 2);
    //     Laya.stage.graphics.drawRect(600, 200, dragWidth, dragHeight, null, "#FFFFFF", 2);
    //     Laya.stage.graphics.drawRect(900, 200, dragWidth, dragHeight, null, "#FFFFFF", 2);
    //     Laya.stage.graphics.drawCircle(1100, 600, 100, null, "#FF0000", 5)
    // }

    private onStartDrag(e:Event):void
    {
        var target:Item = e.target as any;
        target.startDrag(null, false, 0);
    }

    // private itemPos():void
    // {
    //     this.bbqArr[0].x = 50;
    //     this.bbqArr[0].y = 50;
    //     this.bbqArr[1].x = 50;
    //     this.bbqArr[1].y = 250;
    //     this.bbqArr[2].x = 50;
    //     this.bbqArr[2].y = 450;
    //     Laya.stage.addChild(this.bbqArr[0]);
    //     Laya.stage.addChild(this.bbqArr[1]);
    //     Laya.stage.addChild(this.bbqArr[2]);
    // }

    // private createRandom():void
    // {
    //     for( var i = 0; i < 3; i++)
    //     {
    //         var item = new Item();
    //         var random = Math.floor(Math.random()*3);
    //         item.setType(random)
    //         this.ranArr[i] = item;
    //         this.ranNum.push(random);
    //     }
    // }

    // private ranPos():void
    // {
    //     this.ranArr[0].x = 300;
    //     this.ranArr[0].y = 600;
    //     this.ranArr[1].x = 500
    //     this.ranArr[1].y = 600;
    //     this.ranArr[2].x = 700;
    //     this.ranArr[2].y = 600;
    //     Laya.stage.addChild(this.ranArr[0]);
    //     Laya.stage.addChild(this.ranArr[1]);
    //     Laya.stage.addChild(this.ranArr[2]);
    // }

    private inRectangle(e:Event):void
    {
        var item:Item = e.target as any;
        // item.stopDrag();
        // item= item;
        // console.log(this.bbqArr[item.type].x)
        // console.log(this.bbqArr[item.type].y)
        this.bbqArr[item.type]= null;
        // this.createItem();
        // this.itemPos();
        this.drag();
        if(item.x > 300 && item.x < 450 && item.y > 200 && item.y < 350 || item.x > 600 && item.x < 750 && item.y > 200 && item.y < 350 || item.x > 900 && item.x < 1050 && item.y > 200 && item.y < 350)
        {
            this.appear += 1;
            if(this.appear % 3 == 1)
            {
                this.counter0(item);
            }
            if(this.appear % 3 == 2)
            {
                this.counter1(item);
            }
            if(this.appear % 3 == 0)
            {
                this.counter2(item);
            }
        }
        else
        {
            Laya.stage.removeChild(item);
        }
    }

    private counter0(item: Item):void
    {
        if(this.t0 == 5)
        {
            Laya.timer.loop(1000, this, this.clock0, [item])
        }
    }

    private counter1(item: Item):void
    {
        if(this.t1 == 5)
        {
            Laya.timer.loop(1000, this, this.clock1, [item])
        }
    }

    private counter2(item: Item):void
    {
        if(this.t2 == 5)
        {
            Laya.timer.loop(1000, this, this.clock2, [item])
        }
    }

    private clock0(item: Item):void
    {
        this.t0--;
        if(this.t0 == 2)
        {
            // console.log(0)
            item.on(LayaEvent.MOUSE_DOWN, this, this.onDragAgainD0, [item]);
            item.on(LayaEvent.MOUSE_UP, this, this.onDragAgainU0, [item]);
        }
        if(this.t0 == 0)
        {
            Laya.stage.removeChild(item);
            this.t0 = 5;
            Laya.timer.clear(this, this.clock0);
        }
    }

    private clock1(item: Item):void
    {
        this.t1--;
        if(this.t1 == 2)
        {
            // console.log(1)
            item.on(LayaEvent.MOUSE_DOWN, this, this.onDragAgainD1, [item]);
            item.on(LayaEvent.MOUSE_UP, this, this.onDragAgainU1, [item]);
        }
        if(this.t1 == 0)
        {
            Laya.stage.removeChild(item);
            this.t1 = 5;
            Laya.timer.clear(this, this.clock1)
        }
    }

    private clock2(item: Item):void
    {
        this.t2--;
        if(this.t2 == 2)
        {
            // console.log(2)
            item.on(LayaEvent.MOUSE_DOWN, this, this.onDragAgainD2, [item]);
            item.on(LayaEvent.MOUSE_UP, this, this.onDragAgainU2, [item]);
        }
        if(this.t2 == 0)
        {
            Laya.stage.removeChild(item);
            this.t2 = 5;
            Laya.timer.clear(this, this.clock2);
        }
    }

    private onDragAgainD0 (item: Item, e: Event): void 
    {
        Laya.timer.clear(this, this.clock0);
        item.startDrag(null, false, 0)
        // console.log("000")
        console.log(this.t0)
        console.log(this.t1)
        console.log(this.t2+"D0//")
    } 

    private onDragAgainU0 (item: Item, e: Event): void
    {
        if(item.x > 1000 && item.x < 1300 && item.y > 500 && item.y < 800)
        {
            Laya.stage.addChild(item);
            this.resNum.push(item.type);
            this.resArr.push(item);
            console.log(this.t0)
            console.log(this.t1)
            console.log(this.t2+"U0//")
            
            if(this.resArr.length == 3)
            {
                this.check();
            }
            // console.log("00")
        }
        else
        {
            Laya.stage.removeChild(item);
        }
        this.t0 = 5;
    }

    private onDragAgainD1 (item: Item, e:Event): void 
    {
        item.startDrag(null, false, 0)
        Laya.timer.clear(this, this.clock1);
        // console.log("111")
        console.log(this.t0)
        console.log(this.t1)
        console.log(this.t2+"D1//")
    }

    private onDragAgainU1 (item: Item, e:Event): void
    {
        if(item.x > 1100 && item.x < 1200 && item.y > 600 && item.y < 700)
        {
            Laya.stage.addChild(item);
            this.resArr.push(item);
            this.resNum.push(item.type);
            console.log(this.t0)
            console.log(this.t1)
            console.log(this.t2+"U1//")
            if(this.resArr.length == 3)
            {
                this.check();
            }
            // console.log("11")
        }
        else
        {
            Laya.stage.removeChild(item);
        }
        this.t1 = 5;
    }

    private onDragAgainD2 (item: Item, e: Event): void 
    {
        item.startDrag(null, false, 0)
        Laya.timer.clear(this, this.clock2);
        console.log(this.t0)
        console.log(this.t1)
        console.log(this.t2+"D2//")
        // console.log("222")
    }

    private onDragAgainU2 (item: Item, e: Event): void
    {
        if(item.x > 1100 && item.x < 1200 && item.y > 600 && item.y < 700)
        {
            Laya.stage.addChild(item);
            this.resArr.push(item);
            this.resNum.push(item.type);
            console.log(this.t0)
            console.log(this.t1)
            console.log(this.t2+"U2//")
            if(this.resArr.length == 3)
            {
                this.check();
            }
            // console.log("22")
        }
        else
        {
            Laya.stage.removeChild(item);
        }
        this.t2 = 5;
    }

    private check():void
    {
        if(this.ranNum.sort().toString() == this.resNum.sort().toString())
        {
            console.log("速度真快")
        }
        else
        {
            console.log("这不是我想要的")   
        }
        this.nextGroup();
    }

    private nextGroup():void
    {
        this.resNum = [];
        this.ranNum = [];
        this.resArr = [];
        Laya.stage.removeChild(this.resArr[0]);
        Laya.stage.removeChild(this.resArr[1]);
        Laya.stage.removeChild(this.resArr[2]);
        Laya.stage.removeChild(this.ranArr[0]);
        Laya.stage.removeChild(this.ranArr[1]);
        Laya.stage.removeChild(this.ranArr[2]);
        // this.createRandom();
        // this.ranPos();
    } 

    // private counterU(item:Item):void
    // {
    //     Laya.timer.loop(1000, this, this.clockU, [item]);
    // }
    // private counterM(item:Item):void
    // {
    //     Laya.timer.loop(1000, this, this.clockM, [item]);
    // }
    // private counterD(item:Item):void
    // {
    //     Laya.timer.loop(1000, this, this.clockD, [item]);
    // }
    // private clockU(item:Item):void
    // {
    //     this.tU--;
    //     if(this.tU == 2)
    //     {

    //     }
    //     if(this.tU == 0)
    //     {
    //         Laya.stage.removeChild(item);
    //         this.tU = 5
    //     }
    // }
    // private clockM(item:Item):void
    // {
    //     this.tM--;
    //     if(this.tM == 2)
    //     {
            
    //     }
    //     if(this.tM == 0)
    //     {
    //         Laya.stage.removeChild(item);
    //         this.tM = 5;
    //     }
        
    // }
    // private clockD(item: Item):void
    // {
    //     this.tD--;
    //     if(this.tD == 2)
    //     {
            
    //     }
    //     if(this.tD == 0)
    //     {
    //         Laya.stage.removeChild(item);
    //         this.tM = 5;
    //     }
    // }
}


