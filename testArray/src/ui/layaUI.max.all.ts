
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class GameViewUI extends View {
		public progressBar:Laya.ProgressBar;
		public randomBtn:Laya.Button;
		public round:Laya.Label;
		public timeLeft:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1500,"height":1000},"child":[{"type":"ProgressBar","props":{"y":28,"x":14,"width":690,"var":"progressBar","value":1,"skin":"comp/progress.png","height":30}},{"type":"Button","props":{"y":202,"x":558,"width":112,"var":"randomBtn","skin":"comp/button.png","labelSize":25,"label":"打乱顺序","height":44}},{"type":"Label","props":{"y":144,"x":262,"width":159,"var":"round","text":"label","styleSkin":"comp/label.png","height":58,"fontSize":50,"color":"#fffdfd","align":"center"}},{"type":"Label","props":{"y":108,"x":529,"width":164,"var":"timeLeft","text":"label","styleSkin":"comp/label.png","height":53,"fontSize":40,"color":"#fbfbfb","align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameViewUI.uiView);

        }

    }
}

module ui {
    export class LoginSkinUI extends View {
		public okBtn:Laya.Button;
		public password:Laya.TextInput;
		public userName:Laya.TextInput;

        public static  uiView:any ={"type":"View","props":{"width":600,"height":400},"child":[{"type":"Image","props":{"y":0,"x":0,"width":599,"skin":"comp/bg.png","height":399,"sizeGrid":"43,20,13,31"}},{"type":"Button","props":{"y":269,"x":273,"var":"okBtn","skin":"comp/button.png","label":"确定"}},{"type":"TextInput","props":{"y":186,"x":255,"var":"password","skin":"comp/textinput.png"},"child":[{"type":"Label","props":{"y":3,"x":-59,"width":40,"text":"密码：","height":19}}]},{"type":"TextInput","props":{"y":119,"x":252,"width":128,"var":"userName","skin":"comp/textinput.png","height":22},"child":[{"type":"Label","props":{"y":3,"x":-57,"width":45,"text":"用户名：","height":18}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.LoginSkinUI.uiView);

        }

    }
}

module ui.test {
    export class AlertUI extends View {
		public okBtn:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1500,"height":1000},"child":[{"type":"Image","props":{"y":152,"x":162,"width":412,"skin":"comp/bg.png","height":531,"sizeGrid":"43,20,13,31"}},{"type":"Button","props":{"y":485,"x":311,"width":118,"var":"okBtn","skin":"comp/button.png","labelSize":25,"label":"确  定","height":41}},{"type":"Label","props":{"y":319,"x":193,"width":363,"text":"无法继续，请点击 “打乱顺序” 键","styleSkin":"comp/label.png","height":40,"fontSize":25}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.test.AlertUI.uiView);

        }

    }
}

module ui.test {
    export class BagUI extends View {
		public chilianjian:Laya.Button;
		public chilianxianglian:Laya.Button;
		public qinggonghujian:Laya.Button;
		public chilianhuwan:Laya.Button;
		public chiliankuzi:Laya.Button;
		public chiliantoukui:Laya.Button;
		public qinggongyifu:Laya.Button;
		public qinggongyaodai:Laya.Button;
		public chilianjiezhi:Laya.Button;
		public chilianxiezi:Laya.Button;
		public juese:Laya.Button;
		public jineng:Laya.Button;
		public zuoqi:Laya.Button;
		public chibang:Laya.Button;
		public shengji:Laya.Button;
		public guanbi:Laya.Button;
		public fanhui:Laya.Button;
		public feisheng:Laya.Button;
		public shouhu:Laya.Button;
		public jingmai:Laya.Button;
		public shenhun:Laya.Button;
		public tianming:Laya.Button;
		public mohua:Laya.Button;
		public fabao:Laya.Button;
		public shenzhuang:Laya.Button;
		public xianqi:Laya.Button;
		public shizhuang:Laya.Button;
		public taozhuangdaren:Laya.Button;
		public fangdajing:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":600,"height":400},"child":[{"type":"Image","props":{"y":-21,"x":106,"width":373,"skin":"comp/bg.png","height":437,"sizeGrid":"43,20,13,31"}},{"type":"Button","props":{"y":59,"x":110,"width":52,"var":"chilianjian","skin":"comp/button.png","label":"赤炼剑","height":28}},{"type":"Button","props":{"y":113,"x":112,"width":52,"var":"chilianxianglian","skin":"comp/button.png","label":"赤炼项链","height":31}},{"type":"Button","props":{"y":174,"x":115,"width":52,"var":"qinggonghujian","skin":"comp/button.png","label":"青工护肩","height":35}},{"type":"Button","props":{"y":232,"x":115,"width":52,"var":"chilianhuwan","skin":"comp/button.png","label":"赤炼护腕","height":36}},{"type":"Button","props":{"y":293,"x":116,"width":52,"var":"chiliankuzi","skin":"comp/button.png","label":"赤炼裤子","height":35}},{"type":"Button","props":{"y":47,"x":419,"width":52,"var":"chiliantoukui","skin":"comp/button.png","label":"赤炼头盔","height":29}},{"type":"Button","props":{"y":108,"x":420,"width":52,"var":"qinggongyifu","skin":"comp/button.png","label":"青工衣服","height":31}},{"type":"Button","props":{"y":167,"x":421,"width":52,"var":"qinggongyaodai","skin":"comp/button.png","label":"青工腰带","height":36}},{"type":"Button","props":{"y":229,"x":420,"width":52,"var":"chilianjiezhi","skin":"comp/button.png","label":"赤炼戒指","height":32}},{"type":"Button","props":{"y":289,"x":422,"width":52,"var":"chilianxiezi","skin":"comp/button.png","label":"赤炼鞋子","height":33}},{"type":"Button","props":{"y":381,"x":157,"width":56,"var":"juese","skin":"comp/button.png","labelSize":20,"label":"角色","height":22}},{"type":"Button","props":{"y":380,"x":220,"width":52,"var":"jineng","skin":"comp/button.png","labelSize":20,"label":"技能","height":25}},{"type":"Button","props":{"y":380,"x":282,"width":53,"var":"zuoqi","skin":"comp/button.png","labelSize":20,"label":"坐骑","height":24}},{"type":"Button","props":{"y":379,"x":342,"width":56,"var":"chibang","skin":"comp/button.png","labelSize":20,"label":"翅膀","height":26}},{"type":"Button","props":{"y":19,"x":414,"width":55,"var":"shengji","skin":"comp/button.png","label":"升级","height":21}},{"type":"Label","props":{"y":359,"x":126,"width":1,"styleSkin":"comp/label.png","pivotY":2,"pivotX":22,"height":1}},{"type":"Label","props":{"y":337,"x":131,"text":"36级","styleSkin":"comp/label.png"}},{"type":"Label","props":{"y":206,"x":436,"text":"10级","styleSkin":"comp/label.png"}},{"type":"Label","props":{"y":143,"x":433,"text":"6级","styleSkin":"comp/label.png"}},{"type":"Label","props":{"y":83,"x":432,"text":"22级","styleSkin":"comp/label.png"}},{"type":"Label","props":{"y":91,"x":123,"text":"20级","styleSkin":"comp/label.png"}},{"type":"Label","props":{"y":150,"x":123,"text":"24级","styleSkin":"comp/label.png"}},{"type":"Label","props":{"y":211,"x":128,"text":"8级","styleSkin":"comp/label.png"}},{"type":"Label","props":{"y":268,"x":434,"text":"34级","styleSkin":"comp/label.png"}},{"type":"Label","props":{"y":272,"x":129,"text":"32级","styleSkin":"comp/label.png"}},{"type":"Label","props":{"y":333,"x":436,"text":"38级","styleSkin":"comp/label.png"}},{"type":"Button","props":{"y":-4,"x":446,"var":"guanbi","skin":"comp/btn_close.png"}},{"type":"Button","props":{"y":371,"x":422,"width":47,"var":"fanhui","skin":"comp/button.png","labelSize":21,"label":"返回","height":32}},{"type":"Button","props":{"y":350,"x":169,"width":40,"var":"feisheng","skin":"comp/button.png","labelSize":18,"label":"飞升","height":27}},{"type":"Button","props":{"y":351,"x":211,"width":37,"var":"shouhu","skin":"comp/button.png","labelSize":18,"label":"守护","height":24}},{"type":"Button","props":{"y":352,"x":252,"width":38,"var":"jingmai","skin":"comp/button.png","labelSize":18,"label":"经脉","height":24}},{"type":"Button","props":{"y":350,"x":297,"width":39,"var":"shenhun","skin":"comp/button.png","labelSize":18,"label":"神魂","height":26}},{"type":"Button","props":{"y":351,"x":341,"width":36,"var":"tianming","skin":"comp/button.png","labelSize":18,"label":"天命","height":23}},{"type":"Button","props":{"y":349,"x":381,"width":38,"var":"mohua","skin":"comp/button.png","labelSize":18,"label":"魔化","height":24}},{"type":"Button","props":{"y":54,"x":351,"width":44,"var":"fabao","skin":"comp/button.png","labelSize":18,"label":"法宝","height":26}},{"type":"Button","props":{"y":54,"x":298,"width":44,"var":"shenzhuang","skin":"comp/button.png","labelSize":18,"label":"神装","height":25}},{"type":"Button","props":{"y":57,"x":243,"width":44,"var":"xianqi","skin":"comp/button.png","labelSize":18,"label":"仙器","height":23}},{"type":"Button","props":{"y":56,"x":186,"width":44,"var":"shizhuang","skin":"comp/button.png","labelSize":18,"label":"时装","height":24}},{"type":"Label","props":{"y":-17,"x":272,"width":46,"text":"角色","styleSkin":"comp/label.png","height":23,"fontSize":20,"font":"Arial","bold":true}},{"type":"Label","props":{"y":28,"x":174,"width":231,"text":"等级：39      经验： 345.6万 / 372万","styleSkin":"comp/label.png","height":20,"fontSize":15}},{"type":"Button","props":{"y":123,"x":354,"width":58,"var":"taozhuangdaren","skin":"comp/button.png","label":"套装达人","height":23}},{"type":"Button","props":{"y":92,"x":353,"width":19,"var":"fangdajing","skin":"comp/button.png","height":20}},{"type":"Label","props":{"y":141,"x":266,"width":71,"text":"大闹新秀","styleSkin":"comp/label.png","height":18,"fontSize":15}},{"type":"Label","props":{"y":93,"x":253,"width":102,"text":"战  409008","styleSkin":"comp/label.png","height":17,"fontSize":18}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.test.BagUI.uiView);

        }

    }
}

module ui.test {
    export class BanghuidatingUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":600,"height":400,"alpha":1},"child":[{"type":"Image","props":{"y":-2,"x":0,"width":260,"skin":"comp/bg.png","height":398,"sizeGrid":"43,20,13,31"}},{"type":"Label","props":{"y":3,"x":93,"width":70,"text":"帮会大厅","styleSkin":"comp/label.png","height":17,"fontSize":15,"align":"center"}},{"type":"Label","props":{"y":39,"x":17,"width":58,"text":"帮会名称：","styleSkin":"comp/label.png","height":15}},{"type":"Label","props":{"y":57,"x":17,"width":58,"text":"帮        主：","styleSkin":"comp/label.png","height":15}},{"type":"Label","props":{"y":74,"x":18,"width":58,"text":"人        数：","styleSkin":"comp/label.png","height":15}},{"type":"Label","props":{"y":90,"x":18,"width":58,"text":"资        金：","styleSkin":"comp/label.png","height":15}},{"type":"Label","props":{"y":107,"x":19,"width":58,"text":"等        级：","styleSkin":"comp/label.png","height":15}},{"type":"Button","props":{"y":130,"x":30,"width":49,"skin":"comp/button.png","labelSize":11,"label":"成员信息","height":18}},{"type":"Button","props":{"y":130,"x":90,"width":44,"skin":"comp/button.png","labelSize":11,"label":"帮会捐献","height":18}},{"type":"Button","props":{"y":130,"x":146,"width":44,"skin":"comp/button.png","labelSize":11,"label":"帮会列表","height":18}},{"type":"Button","props":{"y":130,"x":199,"width":44,"skin":"comp/button.png","labelSize":11,"label":"查看申请","height":18}},{"type":"Button","props":{"y":1,"x":232,"skin":"comp/btn_close.png"}},{"type":"TextInput","props":{"y":39,"x":75,"width":64,"text":"神魔","skin":"comp/textinput.png","height":13,"fontSize":11}},{"type":"TextInput","props":{"y":56,"x":76,"width":64,"text":"宁旭光","skin":"comp/textinput.png","height":13,"fontSize":11}},{"type":"TextInput","props":{"y":73,"x":76,"width":64,"text":"42/45","skin":"comp/textinput.png","height":13,"fontSize":11}},{"type":"TextInput","props":{"y":90,"x":76,"width":64,"text":"8300/10000","skin":"comp/textinput.png","height":13,"fontSize":11}},{"type":"TextInput","props":{"y":106,"x":77,"width":63,"text":"2","skin":"comp/textinput.png","height":13,"fontSize":11}},{"type":"Button","props":{"y":361,"x":14,"width":45,"skin":"comp/button.png","labelSize":11,"label":"帮会大厅","height":24}},{"type":"Button","props":{"y":361,"x":63,"width":44,"skin":"comp/button.png","labelSize":11,"label":"帮会副本","height":24}},{"type":"Button","props":{"y":361,"x":115,"width":44,"skin":"comp/button.png","labelSize":11,"label":"帮会技能","height":24}},{"type":"Button","props":{"y":361,"x":165,"width":46,"skin":"comp/button.png","labelSize":11,"label":"蟠桃会","height":24}},{"type":"Button","props":{"y":361,"x":223,"width":29,"skin":"comp/button.png","label":"返回","height":23}},{"type":"Button","props":{"y":302,"x":16,"width":40,"skin":"comp/button.png","labelSize":9,"label":"帮会守护","height":38}},{"type":"Button","props":{"y":301,"x":63,"width":41,"skin":"comp/button.png","labelSize":9,"label":"帮会商店","height":38}},{"type":"Button","props":{"y":301,"x":111,"width":40,"skin":"comp/button.png","labelSize":9,"label":"帮会地图","height":38}},{"type":"Button","props":{"y":301,"x":158,"width":40,"skin":"comp/button.png","labelSize":9,"label":"帮会Boss","height":38}},{"type":"Button","props":{"y":300,"x":207,"width":39,"skin":"comp/button.png","labelSize":9,"label":"帮会帮战","height":38}},{"type":"Label","props":{"y":166,"x":105,"width":41,"text":"公    告","styleSkin":"comp/label.png","height":17}},{"type":"Button","props":{"y":253,"x":198,"width":41,"skin":"comp/button.png","labelSize":10,"label":"修改公告","height":16}},{"type":"Button","props":{"y":106,"x":195,"width":45,"skin":"comp/button.png","labelSize":10,"label":"帮会记录","height":15}},{"type":"Button","props":{"y":74,"x":148,"width":15,"skin":"comp/button.png","label":"招","height":13}},{"type":"Button","props":{"y":39,"x":147,"width":22,"skin":"comp/button.png","labelSize":10,"label":"修改","height":12}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.test.BanghuidatingUI.uiView);

        }

    }
}

module ui.test {
    export class BanghuifubenUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":600,"height":400,"alpha":1},"child":[{"type":"Image","props":{"y":-2,"x":0,"width":260,"skin":"comp/bg.png","height":398,"sizeGrid":"43,20,13,31"}},{"type":"Label","props":{"y":3,"x":93,"width":70,"text":"蟠桃会","styleSkin":"comp/label.png","height":17,"fontSize":15,"align":"center"}},{"type":"Button","props":{"y":1,"x":232,"skin":"comp/btn_close.png"}},{"type":"Button","props":{"y":361,"x":14,"width":45,"skin":"comp/button.png","labelSize":11,"label":"帮会大厅","height":24}},{"type":"Button","props":{"y":361,"x":63,"width":44,"skin":"comp/button.png","labelSize":11,"label":"帮会副本","height":24}},{"type":"Button","props":{"y":361,"x":115,"width":44,"skin":"comp/button.png","labelSize":11,"label":"帮会技能","height":24}},{"type":"Button","props":{"y":361,"x":165,"width":46,"skin":"comp/button.png","labelSize":11,"label":"蟠桃会","height":24}},{"type":"Button","props":{"y":361,"x":223,"width":29,"skin":"comp/button.png","label":"返回","height":23}},{"type":"Button","props":{"y":226,"x":111,"width":53,"skin":"comp/button.png","labelSize":12,"label":"万年桃","height":20}},{"type":"Label","props":{"y":250,"x":34,"width":40,"text":"20000","styleSkin":"comp/label.png","height":18,"fontSize":12}},{"type":"Label","props":{"y":128,"x":157,"width":97,"text":"今日进度 ：43/60","styleSkin":"comp/label.png","height":15,"fontSize":12}},{"type":"Label","props":{"y":169,"x":29,"width":60,"text":"+20帮会资金","styleSkin":"comp/label.png","height":15,"fontSize":11}},{"type":"Label","props":{"y":271,"x":15,"width":210,"text":"2019-4-3 21:31:39  【徐裕梓】  食用了百年桃","styleSkin":"comp/label.png","height":15,"fontSize":10}},{"type":"Button","props":{"y":226,"x":25,"width":53,"skin":"comp/button.png","labelSize":12,"label":"百年桃","height":20}},{"type":"Button","props":{"y":225,"x":196,"width":53,"skin":"comp/button.png","labelSize":12,"label":"千年桃","height":20}},{"type":"Label","props":{"y":251,"x":124,"width":40,"text":"2888","styleSkin":"comp/label.png","height":18,"fontSize":12}},{"type":"Label","props":{"y":249,"x":211,"width":28,"text":"480","styleSkin":"comp/label.png","height":14,"fontSize":12}},{"type":"Label","props":{"y":188,"x":30,"width":45,"text":"+100帮贡","styleSkin":"comp/label.png","height":15,"fontSize":11}},{"type":"Label","props":{"y":207,"x":30,"width":45,"text":"+1蟠桃值","styleSkin":"comp/label.png","height":15,"fontSize":11}},{"type":"Label","props":{"y":169,"x":106,"width":60,"text":"+1000帮会资金","styleSkin":"comp/label.png","height":15,"fontSize":11}},{"type":"Label","props":{"y":188,"x":106,"width":60,"text":"+888帮贡","styleSkin":"comp/label.png","height":15,"fontSize":11}},{"type":"Label","props":{"y":205,"x":108,"width":60,"text":"+5蟠桃值","styleSkin":"comp/label.png","height":15,"fontSize":11}},{"type":"Label","props":{"y":204,"x":185,"width":60,"text":"+3蟠桃值","styleSkin":"comp/label.png","height":15,"fontSize":11}},{"type":"Label","props":{"y":186,"x":184,"width":60,"text":"+500帮贡","styleSkin":"comp/label.png","height":15,"fontSize":11}},{"type":"Label","props":{"y":168,"x":183,"width":60,"text":"+500帮会资金","styleSkin":"comp/label.png","height":15,"fontSize":11}},{"type":"Label","props":{"y":289,"x":14,"width":210,"text":"2019-4-3 21:12:7  【端木轩道】  食用了百年桃","styleSkin":"comp/label.png","height":15,"fontSize":10}},{"type":"Label","props":{"y":306,"x":14,"width":210,"text":"2019-4-3 20:40:6  【项忘影】  食用了百年桃","styleSkin":"comp/label.png","height":15,"fontSize":10}},{"type":"Label","props":{"y":324,"x":16,"width":210,"text":"2019-4-2 20:42:38  【归海博文】  食用了千年桃","styleSkin":"comp/label.png","height":15,"fontSize":10}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.test.BanghuifubenUI.uiView);

        }

    }
}

module ui.test {
    export class BanghuijinengUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":600,"height":400,"alpha":1},"child":[{"type":"Image","props":{"y":-2,"x":0,"width":260,"skin":"comp/bg.png","height":398,"sizeGrid":"43,20,13,31"}},{"type":"Label","props":{"y":3,"x":93,"width":70,"text":"帮会副本","styleSkin":"comp/label.png","height":17,"fontSize":15,"align":"center"}},{"type":"Button","props":{"y":1,"x":232,"skin":"comp/btn_close.png"}},{"type":"Button","props":{"y":361,"x":14,"width":45,"skin":"comp/button.png","labelSize":11,"label":"帮会大厅","height":24}},{"type":"Button","props":{"y":361,"x":63,"width":44,"skin":"comp/button.png","labelSize":11,"label":"帮会副本","height":24}},{"type":"Button","props":{"y":361,"x":115,"width":44,"skin":"comp/button.png","labelSize":11,"label":"帮会技能","height":24}},{"type":"Button","props":{"y":361,"x":165,"width":46,"skin":"comp/button.png","labelSize":11,"label":"蟠桃会","height":24}},{"type":"Button","props":{"y":361,"x":223,"width":29,"skin":"comp/button.png","label":"返回","height":23}},{"type":"Button","props":{"y":302,"x":16,"width":73,"skin":"comp/button.png","labelSize":12,"label":"快速加入","height":38}},{"type":"Button","props":{"y":304,"x":172,"width":68,"skin":"comp/button.png","labelSize":12,"label":"帮会Boss","height":34}},{"type":"Label","props":{"y":241,"x":95,"width":77,"text":"暂无队伍信息","styleSkin":"comp/label.png","height":17}},{"type":"Label","props":{"y":195,"x":94,"width":69,"text":"2级帮会副本","styleSkin":"comp/label.png","height":17}},{"type":"Label","props":{"y":142,"x":103,"width":51,"text":"几率掉落","styleSkin":"comp/label.png","height":17,"fontSize":12}},{"type":"Label","props":{"y":210,"x":8,"width":240,"text":"协助他人通关副本，可获得协助奖励，每天协助次数（3/3）","styleSkin":"comp/label.png","height":15,"fontSize":9}},{"type":"CheckBox","props":{"y":282,"x":140,"width":114,"skin":"comp/checkbox.png","label":"  5秒自动加入队伍","height":14}},{"type":"Label","props":{"y":306,"x":101,"width":68,"text":"剩余收益次数","styleSkin":"comp/label.png","height":15,"fontSize":10}},{"type":"Label","props":{"y":320,"x":124,"width":31,"text":"5/5","styleSkin":"comp/label.png","height":15,"fontSize":11}},{"type":"Button","props":{"y":170,"x":37,"width":31,"skin":"comp/button.png","labelSize":10,"label":"攻击丹","height":23}},{"type":"Button","props":{"y":169,"x":71,"width":31,"skin":"comp/button.png","labelSize":10,"label":"暴击丹","height":23}},{"type":"Button","props":{"y":169,"x":106,"width":31,"skin":"comp/button.png","labelSize":10,"label":"攻速丹","height":23}},{"type":"Button","props":{"y":169,"x":137,"width":31,"skin":"comp/button.png","labelSize":10,"label":"闪避丹","height":23}},{"type":"Button","props":{"y":170,"x":170,"width":31,"skin":"comp/button.png","labelSize":10,"label":"抗暴丹","height":23}},{"type":"Button","props":{"y":169,"x":204,"width":31,"skin":"comp/button.png","labelSize":10,"label":"生命丹","height":23}},{"type":"Button","props":{"y":48,"x":15,"width":68,"skin":"comp/button.png","label":"首通奖励","height":87}},{"type":"Button","props":{"y":47,"x":97,"width":68,"skin":"comp/button.png","label":"首通奖励","height":87}},{"type":"Button","props":{"y":47,"x":177,"width":67,"skin":"comp/button.png","label":"帮会3级开启","height":87}},{"type":"Label","props":{"y":53,"x":19,"width":58,"text":"1级帮会副本","styleSkin":"comp/label.png","height":15,"fontSize":11}},{"type":"Label","props":{"y":54,"x":102,"width":58,"text":"2级帮会副本","styleSkin":"comp/label.png","height":15,"fontSize":11}},{"type":"Label","props":{"y":54,"x":181,"width":58,"text":"3级帮会副本","styleSkin":"comp/label.png","height":15,"fontSize":11}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.test.BanghuijinengUI.uiView);

        }

    }
}

module ui.test {
    export class CalculatorUI extends View {
		public background:Laya.Image;
		public seven:Laya.Button;
		public eight:Laya.Button;
		public five:Laya.Button;
		public three:Laya.Button;
		public one:Laya.Button;
		public six:Laya.Button;
		public nine:Laya.Button;
		public four:Laya.Button;
		public two:Laya.Button;
		public equal:Laya.Button;
		public zero:Laya.Button;
		public decimalPoint:Laya.Button;
		public division:Laya.Button;
		public clear:Laya.Button;
		public multiple:Laya.Button;
		public plus:Laya.Button;
		public minus:Laya.Button;
		public arrow:Laya.Button;
		public result:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":413,"x":135,"width":518,"var":"background","skin":"comp/bg.png","height":458,"sizeGrid":"43,20,13,31"}},{"type":"Button","props":{"y":555,"x":179,"width":71,"var":"seven","skin":"comp/button.png","labelSize":20,"labelFont":"Arial","label":"7","height":65}},{"type":"Button","props":{"y":555,"x":269,"width":71,"var":"eight","skin":"comp/button.png","labelSize":20,"labelFont":"Arial","label":"8","height":65}},{"type":"Button","props":{"y":629,"x":269,"width":71,"var":"five","skin":"comp/button.png","labelSize":20,"labelFont":"Arial","label":"5","height":65}},{"type":"Button","props":{"y":703,"x":360,"width":71,"var":"three","skin":"comp/button.png","labelSize":20,"labelFont":"Arial","label":"3","height":65}},{"type":"Button","props":{"y":703,"x":178,"width":71,"var":"one","skin":"comp/button.png","labelSize":20,"labelFont":"Arial","label":"1","height":65}},{"type":"Button","props":{"y":628,"x":360,"width":71,"var":"six","skin":"comp/button.png","labelSize":20,"labelFont":"Arial","label":"6","height":65}},{"type":"Button","props":{"y":555,"x":359,"width":71,"var":"nine","skin":"comp/button.png","labelSize":20,"labelFont":"Arial","label":"9","height":65}},{"type":"Button","props":{"y":629,"x":178,"width":71,"var":"four","skin":"comp/button.png","labelSize":20,"labelFont":"Arial","label":"4","height":65}},{"type":"Button","props":{"y":703,"x":269,"width":71,"var":"two","skin":"comp/button.png","labelSize":20,"labelFont":"Arial","label":"2","height":65}},{"type":"Button","props":{"y":704,"x":540,"width":71,"var":"equal","skin":"comp/button.png","labelSize":25,"label":"=","height":139}},{"type":"Button","props":{"y":777,"x":177,"width":164,"var":"zero","skin":"comp/button.png","labelSize":20,"label":"0","height":67}},{"type":"Button","props":{"y":778,"x":361,"width":71,"var":"decimalPoint","skin":"comp/button.png","labelSize":20,"labelFont":"Arial","label":".","height":65}},{"type":"Button","props":{"y":555,"x":452,"width":71,"var":"division","skin":"comp/button.png","labelSize":25,"labelFont":"Arial","label":"/","height":65}},{"type":"Button","props":{"y":555,"x":539,"width":71,"var":"clear","skin":"comp/button.png","labelSize":20,"labelFont":"Arial","label":"C","height":65}},{"type":"Button","props":{"y":629,"x":452,"width":71,"var":"multiple","skin":"comp/button.png","labelSize":25,"labelFont":"Arial","label":"*","height":65}},{"type":"Button","props":{"y":778,"x":451,"width":71,"var":"plus","skin":"comp/button.png","labelSize":25,"labelFont":"Arial","label":"+","height":65}},{"type":"Button","props":{"y":704,"x":451,"width":71,"var":"minus","skin":"comp/button.png","labelSize":25,"labelFont":"Arial","label":"-","height":65}},{"type":"Button","props":{"y":628,"x":540,"width":71,"var":"arrow","skin":"comp/button.png","labelSize":25,"labelFont":"Arial","label":"←","height":65}},{"type":"Button","props":{"y":470,"x":178,"width":430,"skin":"comp/button.png","height":75}},{"type":"Label","props":{"y":483,"x":200,"width":388,"var":"result","text":"0","styleSkin":"comp/label.png","height":49,"fontSize":40,"bold":false,"align":"right"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.test.CalculatorUI.uiView);

        }

    }
}

module ui.test {
    export class ChuangjianbanghuiUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":600,"height":400},"child":[{"type":"Image","props":{"y":7,"x":5,"width":496,"skin":"comp/bg.png","height":394,"sizeGrid":"43,20,13,31"}},{"type":"Label","props":{"y":54,"x":55,"width":72,"text":"帮会名称：","styleSkin":"comp/label.png","height":23,"fontSize":15}},{"type":"TextInput","props":{"y":48,"x":133,"width":128,"text":"帮会名字","skin":"comp/textinput.png","height":29,"fontSize":18,"align":"center"}},{"type":"Label","props":{"y":55,"x":257,"width":151,"text":"（帮会名称最多6个字）","styleSkin":"comp/label.png","height":24,"fontSize":17}},{"type":"Button","props":{"y":9,"x":466,"width":32,"skin":"comp/btn_close.png","height":23}},{"type":"Label","props":{"y":7,"x":203,"text":"创建帮会","styleSkin":"comp/label.png","fontSize":25,"font":"Arial"}},{"type":"Button","props":{"y":278,"x":80,"width":56,"skin":"comp/button.png","label":"8000","height":55}},{"type":"Button","props":{"y":279,"x":154,"width":56,"skin":"comp/button.png","label":"500万","height":55}},{"type":"Button","props":{"y":280,"x":229,"width":56,"skin":"comp/button.png","label":"5000","height":55}},{"type":"Button","props":{"y":279,"x":302,"width":56,"skin":"comp/button.png","label":"10","height":55}},{"type":"Button","props":{"y":278,"x":375,"width":56,"skin":"comp/button.png","label":"50","height":55}},{"type":"Button","props":{"y":347,"x":214,"width":88,"skin":"comp/button.png","labelSize":18,"label":"创  建","height":40}},{"type":"Label","props":{"y":256,"x":36,"width":436,"text":"前五名创建帮会的玩家，额外获得以下奖励（礼包价值8888元宝）","styleSkin":"comp/label.png","height":24,"fontSize":15}},{"type":"Label","props":{"y":341,"x":381,"width":101,"text":"帮会数量 ： 5/5","styleSkin":"comp/label.png","height":21,"fontSize":14}},{"type":"Button","props":{"y":86,"x":70,"width":166,"skin":"comp/button.png","height":153}},{"type":"Label","props":{"y":98,"x":122,"width":60,"text":"1级帮会","styleSkin":"comp/label.png","height":20,"fontSize":15}},{"type":"Label","props":{"y":122,"x":76,"width":131,"text":"帮会成员上限 ： 40人","styleSkin":"comp/label.png","height":20,"fontSize":13}},{"type":"Label","props":{"y":156,"x":77,"width":69,"text":"创建条件 ：","styleSkin":"comp/label.png","height":19,"fontSize":13}},{"type":"Label","props":{"y":174,"x":102,"width":91,"text":"1. 等级达到20级","styleSkin":"comp/label.png","height":17,"fontSize":13}},{"type":"Label","props":{"y":193,"x":103,"width":116,"text":"2. VIP等级达到6级","styleSkin":"comp/label.png","height":17,"fontSize":13}},{"type":"Label","props":{"y":212,"x":103,"width":84,"text":"3. 消耗2000","styleSkin":"comp/label.png","height":18,"fontSize":13}},{"type":"Button","props":{"y":86,"x":278,"width":166,"skin":"comp/button.png","height":153}},{"type":"Label","props":{"y":98,"x":333,"width":60,"text":"2级帮会","styleSkin":"comp/label.png","height":20,"fontSize":15}},{"type":"Label","props":{"y":121,"x":286,"width":131,"text":"帮会成员上限 ： 45人","styleSkin":"comp/label.png","height":20,"fontSize":13}},{"type":"Label","props":{"y":136,"x":286,"width":94,"text":"开启2级副本","styleSkin":"comp/label.png","height":14,"fontSize":13}},{"type":"Label","props":{"y":173,"x":311,"width":91,"text":"1. 等级达到20级","styleSkin":"comp/label.png","height":17,"fontSize":13}},{"type":"Label","props":{"y":155,"x":287,"width":69,"text":"创建条件 ：","styleSkin":"comp/label.png","height":19,"fontSize":13}},{"type":"Label","props":{"y":192,"x":312,"width":116,"text":"2. VIP等级达到9级","styleSkin":"comp/label.png","height":17,"fontSize":13}},{"type":"Label","props":{"y":212,"x":311,"width":84,"text":"3. 消耗2980","styleSkin":"comp/label.png","height":18,"fontSize":13}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.test.ChuangjianbanghuiUI.uiView);

        }

    }
}

module ui.test {
    export class GameoverUI extends View {
		public replay:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1500,"height":1000},"child":[{"type":"Image","props":{"y":171,"x":159,"width":400,"skin":"comp/bg.png","height":497,"sizeGrid":"43,20,13,31"}},{"type":"Label","props":{"y":317,"x":264,"width":202,"text":"闯关失败","styleSkin":"comp/label.png","height":56,"fontSize":50}},{"type":"Button","props":{"y":476,"x":291,"width":141,"var":"replay","skin":"comp/button.png","labelSize":30,"label":"重  玩","height":50}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.test.GameoverUI.uiView);

        }

    }
}

module ui.test {
    export class LianliankanUI extends View {
		public fff:Laya.Image;
		public play:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":602,"height":426},"child":[{"type":"Image","props":{"y":0,"x":0,"width":602,"var":"fff","skin":"comp/bg.png","height":426,"sizeGrid":"43,20,13,31"}},{"type":"Button","props":{"y":272,"x":234,"width":129,"var":"play","skin":"comp/button.png","labelSize":20,"label":"开始游戏","height":39}},{"type":"Label","props":{"y":176,"x":238,"width":123,"text":"连连看","styleSkin":"comp/label.png","height":48,"fontSize":40}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.test.LianliankanUI.uiView);

        }

    }
}

module ui.test {
    export class PantaohuiUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":600,"height":400,"alpha":1},"child":[{"type":"Image","props":{"y":-2,"x":0,"width":260,"skin":"comp/bg.png","height":398,"sizeGrid":"43,20,13,31"}},{"type":"Label","props":{"y":3,"x":93,"width":70,"text":"帮会副本","styleSkin":"comp/label.png","height":17,"fontSize":15,"align":"center"}},{"type":"Button","props":{"y":1,"x":232,"skin":"comp/btn_close.png"}},{"type":"Button","props":{"y":361,"x":14,"width":45,"skin":"comp/button.png","labelSize":11,"label":"帮会大厅","height":24}},{"type":"Button","props":{"y":361,"x":63,"width":44,"skin":"comp/button.png","labelSize":11,"label":"帮会副本","height":24}},{"type":"Button","props":{"y":361,"x":115,"width":44,"skin":"comp/button.png","labelSize":11,"label":"帮会技能","height":24}},{"type":"Button","props":{"y":361,"x":165,"width":46,"skin":"comp/button.png","labelSize":11,"label":"蟠桃会","height":24}},{"type":"Button","props":{"y":361,"x":223,"width":29,"skin":"comp/button.png","label":"返回","height":23}},{"type":"Button","props":{"y":302,"x":16,"width":73,"skin":"comp/button.png","labelSize":12,"label":"快速加入","height":38}},{"type":"Button","props":{"y":304,"x":172,"width":68,"skin":"comp/button.png","labelSize":12,"label":"帮会Boss","height":34}},{"type":"Label","props":{"y":241,"x":95,"width":77,"text":"暂无队伍信息","styleSkin":"comp/label.png","height":17}},{"type":"Label","props":{"y":195,"x":94,"width":69,"text":"2级帮会副本","styleSkin":"comp/label.png","height":17}},{"type":"Label","props":{"y":142,"x":103,"width":51,"text":"几率掉落","styleSkin":"comp/label.png","height":17,"fontSize":12}},{"type":"Label","props":{"y":210,"x":8,"width":240,"text":"协助他人通关副本，可获得协助奖励，每天协助次数（3/3）","styleSkin":"comp/label.png","height":15,"fontSize":9}},{"type":"CheckBox","props":{"y":282,"x":140,"width":114,"skin":"comp/checkbox.png","label":"  5秒自动加入队伍","height":14}},{"type":"Label","props":{"y":306,"x":101,"width":68,"text":"剩余收益次数","styleSkin":"comp/label.png","height":15,"fontSize":10}},{"type":"Label","props":{"y":320,"x":124,"width":31,"text":"5/5","styleSkin":"comp/label.png","height":15,"fontSize":11}},{"type":"Button","props":{"y":170,"x":37,"width":31,"skin":"comp/button.png","labelSize":10,"label":"攻击丹","height":23}},{"type":"Button","props":{"y":169,"x":71,"width":31,"skin":"comp/button.png","labelSize":10,"label":"暴击丹","height":23}},{"type":"Button","props":{"y":169,"x":106,"width":31,"skin":"comp/button.png","labelSize":10,"label":"攻速丹","height":23}},{"type":"Button","props":{"y":169,"x":137,"width":31,"skin":"comp/button.png","labelSize":10,"label":"闪避丹","height":23}},{"type":"Button","props":{"y":170,"x":170,"width":31,"skin":"comp/button.png","labelSize":10,"label":"抗暴丹","height":23}},{"type":"Button","props":{"y":169,"x":204,"width":31,"skin":"comp/button.png","labelSize":10,"label":"生命丹","height":23}},{"type":"Button","props":{"y":48,"x":15,"width":68,"skin":"comp/button.png","label":"首通奖励","height":87}},{"type":"Button","props":{"y":47,"x":97,"width":68,"skin":"comp/button.png","label":"首通奖励","height":87}},{"type":"Button","props":{"y":47,"x":177,"width":67,"skin":"comp/button.png","label":"帮会3级开启","height":87}},{"type":"Label","props":{"y":53,"x":19,"width":58,"text":"1级帮会副本","styleSkin":"comp/label.png","height":15,"fontSize":11}},{"type":"Label","props":{"y":54,"x":102,"width":58,"text":"2级帮会副本","styleSkin":"comp/label.png","height":15,"fontSize":11}},{"type":"Label","props":{"y":54,"x":181,"width":58,"text":"3级帮会副本","styleSkin":"comp/label.png","height":15,"fontSize":11}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.test.PantaohuiUI.uiView);

        }

    }
}

module ui.test {
    export class PassUI extends View {
		public play:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1500,"height":1000},"child":[{"type":"ProgressBar","props":{"y":187,"x":1495}},{"type":"Image","props":{"y":142,"x":152,"width":412,"skin":"comp/bg.png","height":531,"sizeGrid":"43,20,13,31"}},{"type":"Label","props":{"y":300,"x":263,"width":202,"text":"闯关成功","styleSkin":"comp/label.png","height":62,"fontSize":50}},{"type":"Button","props":{"y":462,"x":289,"width":141,"var":"play","skin":"comp/button.png","labelSize":30,"label":"下一关","height":50}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.test.PassUI.uiView);

        }

    }
}

module ui.test {
    export class SpiralsUI extends View {
		public archimedeanSpiralBtn:Laya.Button;
		public fibonacciSpiralBtn:Laya.Button;
		public cardioidBtn:Laya.Button;
		public roseSpiralBtn:Laya.Button;
		public fermatSpiralBtn:Laya.Button;
		public equiangularSpiralBtn:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":600,"height":400},"child":[{"type":"Button","props":{"y":9,"x":105,"var":"archimedeanSpiralBtn","skin":"comp/button.png","label":"阿基米德螺线"}},{"type":"Button","props":{"y":189,"x":105,"var":"fibonacciSpiralBtn","skin":"comp/button.png","label":"斐波那契螺线"}},{"type":"Button","props":{"y":186,"x":521,"var":"cardioidBtn","skin":"comp/button.png","label":"心形线"}},{"type":"Button","props":{"y":369,"x":519,"width":75,"var":"roseSpiralBtn","skin":"comp/button.png","label":"玫瑰线","height":22}},{"type":"Button","props":{"y":367,"x":103,"var":"fermatSpiralBtn","skin":"comp/button.png","label":"费马螺线"}},{"type":"Button","props":{"y":7,"x":520,"var":"equiangularSpiralBtn","skin":"comp/button.png","label":"等角螺线"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.test.SpiralsUI.uiView);

        }

    }
}
