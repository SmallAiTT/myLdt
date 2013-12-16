tt.HomeBgLyTest = cc.LayerColor.extend({

    init : function(){
        this._super(cc.c4b(189,180,180,255));
        var ly = tt.HomeBgLy.create({});

        this.addChild(ly);
//        ly.setScale(0.5);
//        window.ly = ly;
        console.log(ly.getContentSize());
        ly.setPosition(cc.winSize.width/2, (3/5 * ly.getContentSize().height/2) - cc.winSize.height/2);
//        ly.setPosition(cc.winSize.width/2, cc.winSize.height/2)
        return true;
    }
});

tt.HomeBgLyTest.create = function(args){
    var obj = new tt.HomeBgLyTest();
    return obj.init() ? obj : null;
};