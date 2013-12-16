tt.HomeBgLy = cc.Layer.extend({
    _minMvLength : 1,
    _rollLength : 1,
    _maxRollLength : 1,
    _maxRotate : 70,
    _rollRate : 10,
    _startTcPosX : null,
    _currRotate : 0,

    init : function(){
        this._super();
        this._ignoreAnchorPointForPosition = false;
        this.setTouchEnabled(true);

        var size = this.getContentSize();
        this._maxRollLength = size.width;

        var bg = cc.Sprite.create(res.home_bg_png);
        var bgSize = bg.getContentSize();
        bg.setPosition(cc.winSize.width/2, cc.winSize.height/2);

        var sea = cc.Sprite.create(res.home_sea_png);
        sea.setAnchorPoint(cc.p(0, 0));
        var seaSize = sea.getContentSize();
        sea.setScale(0.27 * bgSize.width/seaSize.width);
        sea.setPosition(cc.winSize.width/2 + 0.17 * bgSize.width/2, cc.winSize.height/2 + 0.18 * bgSize.height/2)

        this.addChild(sea);
        this.addChild(bg);
        window.bg = bg;

        return true;
    },

    onTouchesBegan : function(e){
        this._startTcPosX = e[0].getLocation().x;
    },
    onTouchesMoved : function(e, a){
        var pos = e[0].getLocation();
        var currRotate = this._currRotate + 180 * (pos.x - this._startTcPosX)/this._maxRollLength;
        if(this._maxRotate < Math.abs(currRotate)) return;
        this.setRotation(currRotate)
    },
    onTouchesEnded : function(e){
        if(!e[0]) return;
        var pos = e[0].getLocation();
        this._currRotate += 180 * (pos.x - this._startTcPosX)/this._maxRollLength;
        if(this._maxRotate < this._currRotate){
            this._currRotate = this._maxRotate;
        }else if(-1 * this._maxRotate > this._currRotate){
            this._currRotate = this._maxRotate * -1;
        }
        this._startTcPosX = null;
        console.log(this._currRotate);
    }
});

tt.HomeBgLy.create = function(args){
    var obj = new tt.HomeBgLy();
    return obj.init() ? obj : null;
};