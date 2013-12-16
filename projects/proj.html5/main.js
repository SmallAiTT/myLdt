var cocos2dApp = cc.Application.extend({
    config : document["ccConfig"],
    ctor : function(){
        this._super();
        cc.COCOS2D_DEBUG = this.config["COCOS2D_DEBUG"];
        cc.initDebugSetting();

        var width = document.body.clientWidth, height = document.body.clientHeight;
        console.log(width + "   " + height);
        cc.setup(this.config["tag"], width, height);
        cc.AppController.shareAppController().didFinishLaunchingWithOptions();
    },

    applicationDidFinishLaunching : function(){
        var config = this.config;
        // initialize director
        var director = cc.Director.getInstance();

        var eglView = cc.EGLView.getInstance();
        eglView._adjustSizeToBrowser();
        var width = document.body.clientWidth, height = document.body.clientHeight;
        var resourceSize = cc.size(width, height);
        var designSize = cc.size(width, height);

        var searchPaths = [];

        searchPaths.push(config["resDir"]);
        var fileUtils = cc.FileUtils.getInstance();
        fileUtils.setSearchPaths(searchPaths);

        if(cc.AudioEngine) cc.AudioEngine.getInstance().setResPath(config["audioDir"]);

        director.setContentScaleFactor(resourceSize.width / designSize.width);
        eglView.setDesignResolutionSize(designSize.width, designSize.height, cc.RESOLUTION_POLICY.FIXED_WIDTH);

        // turn on display FPS
        director.setDisplayStats(config['showFPS']);

        // set FPS. the default value is 1.0/60 if you don't call this
        director.setAnimationInterval(1.0 / config['frameRate']);

        cc.winSize = cc.Director.getInstance().getWinSize();

        config.test = js.myldt.HomeBgLyTest_js;//config which js you want to test

        if(!__PUBLISH && config["test"]) cc.test(config["test"]);//
        else{
            //TODO enter point for game
            cc.log("++++++++++++++++entry for game++++++++++++");
            cc.loadGameModule(js.myldt.myApp_js, function(resArr){
                cc.LoaderScene.preload(resArr, function(){
                    cc.Director.getInstance().replaceScene(new MyScene());
                });
            });
        }
        return true;
    }

});

new cocos2dApp();