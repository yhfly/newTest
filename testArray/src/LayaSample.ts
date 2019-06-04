
// 程序入口
import Sprite = Laya.Sprite;
import Stage = Laya.Stage;
import Handler = Laya.Handler;
import WebGL = Laya.WebGL;
import Texture = Laya.Texture;
import Browser =Laya.Browser;
import LayaEvent = Laya.Event;
import RadioGroup = Laya.RadioGroup;
import Label = Laya.Label;
import Button = Laya.Button;
import LayaImage = Laya.Image;
import text = Laya.Text;
import Ease = Laya.Ease;
import ProgressBar = Laya.ProgressBar;

class GameMain
{  
    constructor()
   {
       Laya.init(720, 1280, WebGL);
       Laya.stage.alignV = Stage.ALIGN_MIDDLE;
       Laya.stage.alignH = Stage.ALIGN_CENTER;

	   Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
	   Laya.stage.bgColor = "#232628";
       var layout = new Layout();
    //    var arr = [1,2,3]
    //    console.log(arr)
    //    arr.length = 1;
    //    console.log(arr)
        // var arr = [];
        // arr.push({ number:2,index: 4, name:"a"});
        // arr.push({  number:5, index: 1, name:"aasd"});
        // arr.push({ number:6,index: 5, name:"sda"});
        // arr.push({  number:1, index: 7, name:"a43sdaf"});
        // arr.push({ number:4, index: 3, name:"fdf34a"});
        // arr.push({  number:3,index: 2, name:"3434a"});
        // arr.push({  number:7,index: 6, name:"edera"});
        // console.log(arr);
        // arr.sort(this.randomSort);
        // console.log(arr);
   }
    // public randomSort(a, b) 
    // {
    //     if(a.index > b.index)
    //     {
    //         return 1;
    //     }else
    //     {
    //         return -1;
    //     }
    //      return Math.random() > 0.5 ? -1 : 1;
    // }
}

setTimeout(function() {
    new GameMain();
    
}, 500);






