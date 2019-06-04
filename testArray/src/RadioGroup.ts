// //程序入口
// // import Stage = Laya.Stage;
// // import RadioGroup = Laya.RadioGroup;
// // import Handler = Laya.Handler;
// // import WebGL = Laya.WebGL;


// class GameMain
// {
//     private SPACING: number = 150;
//     private X_OFFSET: number = 200;
//     private Y_OFFSET: number = 200;

//     private skins = Array<string>;
//     private mingmning: Button = new Button(skin);
//     constructor()
//     {
//         Laya.init(600, 600, WebGL);
//         Laya.stage.alignV = Stage.ALIGN_MIDDLE;
//         Laya.stage.alignH = Stage.ALIGN_CENTER;
//         Laya.stage.scaleMode = Stage.SCALE_SHOWALL;
//         Laya.stage.bgColor = "#232628";

//         this.skins = ["pictures/UI?radioButton(1).png", "pictures/UI?radioButton(2).png", "pictures/UI?radioButton(3).png"]; 
//         Laya.loader.load(this.skins, Handler.create(this, this.initRadioGroups));
        
//     }

//     private initRadioGroups(): void 
//     {
//         for (var i: number = 0, len = this.skins.length; i < len; i++)
//         {
//             var mingmning: Button = this.createButton(this.skins[i]);
//             var x: number = i % this.COLUMNS * this.HORIZONTAL_SPACING + this.xOffset;
//             var y: number = (i / this.COLUMNS | 0) * this.VERTICAL_SPACING + this.yOffset;
//             btn.pos(x, y);
//         }
//     }

//     private createButton(skin:string): Button
//     {
//        this.mingmning = new Button(skin);
//         var honghone = new Button(skin);
//         if(sxss)
//         {
//             lev 
//         }
//         Laya.stage.addChild(btn);
//         return btn;
//     }


// }


// setTimeout(function() {
//     new GameMain();
    
// }, 500);
