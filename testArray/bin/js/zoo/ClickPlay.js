/*
* name;
*/
// class Click{
//     constructor(){
//     }
//      private clickPlay(e: Event): void
//     {
//         Laya.stage.removeChild(lianliankan)
//         itemArr = [];
//         var numArr : Array<number> = new Array();
//         var newArr : Array<number> = new Array();
//         for (var i = 0; i < 50; i++)
//         {
//             var random = Math.floor(Math.random()*24)+1;
//             var element = new LinkItem();
//             element.setType(random);
//             this.itemArr.push(element)
//             element = new LinkItem();
//             element.setType(random);
//             this.itemArr.push(element)
//         }
//         this.itemArr.sort(this.randomSort);
//         for (var index = 0; index < 100; index++) 
//         {
//             var element = this.itemArr[index];
//             element.x = 100* Math.ceil(index %10);
//             element.y = 100* Math.floor(index /10);
//             Laya.stage.addChild(element);
//             element.on(LayaEvent.CLICK, this, this.clickItem);
//         }
//     }
//     private clickItem(e: Laya.Event): void
//     {
//         //将点击的棋子转换成LinkItem,并赋值给linkItem
//         var linkItem = e.target as LinkItem;
//         //如果第一次点击棋子
//         if(this._preClickItem == null)
//         {
//             //把linkItem赋值给_preClickItem
//             this._preClickItem = linkItem;
//         }else
//         {
//             //如果不是第一次点击棋子，并且此次点击的棋子与上一次点击的棋子不是同一个棋子
//             if(this._preClickItem != linkItem)
//             {
//                 //如果两个棋子的图案一样
//                 if(this._preClickItem.type == linkItem.type)
//                 { 
//                     //去除上一次点击的棋子
//                     Laya.stage.removeChild(this._preClickItem);
//                     //去除这一次点击的棋子
//                     Laya.stage.removeChild(linkItem);
//                     //将上一次点击的棋子设为空
//                     this._preClickItem = null;
//                 }else
//                 {
//                     //将这一次点击的棋子赋值给_preClickItem
//                     this._preClickItem = linkItem;
//                 }
//             }
//         }
//     }
//    public randomSort(a, b) { return Math.random() > 0.5 ? -1 : 1; }
// }
//# sourceMappingURL=ClickPlay.js.map