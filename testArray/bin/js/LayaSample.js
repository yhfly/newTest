// 程序入口
var Sprite = Laya.Sprite;
var Stage = Laya.Stage;
var Handler = Laya.Handler;
var WebGL = Laya.WebGL;
var Texture = Laya.Texture;
var Browser = Laya.Browser;
var LayaEvent = Laya.Event;
var RadioGroup = Laya.RadioGroup;
var Label = Laya.Label;
var Button = Laya.Button;
var LayaImage = Laya.Image;
var text = Laya.Text;
var Ease = Laya.Ease;
var ProgressBar = Laya.ProgressBar;
var GameMain = /** @class */ (function () {
    function GameMain() {
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
    return GameMain;
}());
setTimeout(function () {
    new GameMain();
}, 500);
//# sourceMappingURL=LayaSample.js.map